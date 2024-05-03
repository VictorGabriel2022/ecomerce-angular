import { Component, Inject } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent  {
  cliente: any = {};
  constructor(
    private dialogRef: MatDialogRef<ActualizarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private clienteService: ClienteService
  ) {
    this.cliente = { ...data };
  }

  actualizarCliente(): void {
    this.clienteService.actualizarCliente(this.cliente.clienteid, this.cliente).subscribe(
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
