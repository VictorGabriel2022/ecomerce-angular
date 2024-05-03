import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.component.html',
  styleUrls: ['./registrarproducto.component.css']
})
export class RegistrarproductoComponent {
  producto = {
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    imagen: ''
  };

  constructor(
    private dialogRef: MatDialogRef<RegistrarproductoComponent>,
    private productoService: ProductoService
  ) {}

  formSubmit(): void {
    // Aquí puedes agregar lógica adicional antes de llamar al método registrarProducto()
    this.registrarProducto();
  }

  registrarProducto(): void {
    this.productoService.agregarProducto(this.producto).subscribe(
      () => {
        console.log('Producto registrado exitosamente');
        this.dialogRef.close('actualizado');
        Swal.fire('Producto registrado', 'El producto se registró exitosamente', 'success');
      },
      error => {
        console.log('Error al registrar el producto:', error);
        Swal.fire('Error al registrar', 'Error al registrar el producto', 'error');
      }
    );
  }
}

