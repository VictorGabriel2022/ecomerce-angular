import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {
  cliente = {
    nombre: '',
    direccion: '',
    correo: '',
    dni: '',
    telefono: ''
  };
  constructor(
    private dialogRef: MatDialogRef<RegistrarClienteComponent>,
    private productoService: ClienteService
  ) { }

  formSubmit(): void {
    this.registrarCliente();
  }
  registrarCliente(): void {
    this.productoService.agregarCliente(this.cliente).subscribe(
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
