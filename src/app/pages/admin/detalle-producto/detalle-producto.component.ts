import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  producto: any = {};

  constructor(
    private dialogRef: MatDialogRef<DetalleProductoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private productoService: ProductoService
  ) {
    this.producto = { ...data };
  }

  actualizarProducto(): void {
    this.productoService.actualizarProducto(this.producto.idproducto, this.producto).subscribe(
      (response) => {
        // Lógica después de actualizar el producto exitosamente
        console.log('Producto actualizado:', response);
        this.dialogRef.close('actualizado');
        Swal.fire('Producto editado','El producto ha sido editado con éxito','success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoría','error')
      }
    );
  }
 
  
}



