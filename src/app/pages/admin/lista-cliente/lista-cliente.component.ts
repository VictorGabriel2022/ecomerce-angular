import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';
import { RegistrarClienteComponent } from '../registrar-cliente/registrar-cliente.component';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  cliente: any[] = [];

  constructor(
    private clienteservice: ClienteService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarClientes();
  }
  actualizarCliente(producto: any): void {
    const dialogRef = this.dialog.open(ActualizarClienteComponent, {
      width: '300px',
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      // Realizar acciones después de cerrar el diálogo
      if (result === 'actualizado') {
        this.listarClientes();
      }
    });
  }
  listarClientes(): void {
    this.clienteservice.listarCliente().subscribe(
      (data: any) => {
        this.cliente = data;
        console.log(this.cliente);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los clientes', 'error');
      }
    );
  }
  registrarCliente(): void {
    const dialogRef = this.dialog.open(RegistrarClienteComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Realizar acciones después de cerrar el diálogo
      if (result === 'actualizado') {
        this.listarClientes();
      }
    });
  }
  eliminarCliente(cliente: any): void {
    Swal.fire({
      title: 'Confirmar eliminación',
      text: '¿Estás seguro de que quieres eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteservice.eliminarCliente(cliente.clienteid).pipe(
          switchMap(() => this.clienteservice.listarCliente())
        ).subscribe(
          (data: any) => {
            this.cliente = data;
            Swal.fire('Éxito', 'El cliente se eliminó correctamente', 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error', 'Error al eliminar el cliente', 'error');
          }
        );
      }
    });
  }
}

