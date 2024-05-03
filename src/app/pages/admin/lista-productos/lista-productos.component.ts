import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';
import { ProductoService } from 'src/app/services/producto.service';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { RegistrarproductoComponent } from '../registrarproducto/registrarproducto.component';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  producto: any[] = [];

  constructor(
    private productoservice: ProductoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarProductos();
 
  }

  listarProductos(): void {
    this.productoservice.listarProducto().subscribe(
      (data: any) => {
        this.producto = data;
        console.log(this.producto);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los productos', 'error');
      }
    );
  }

  actualizarProducto(producto: any): void {
    const dialogRef = this.dialog.open(DetalleProductoComponent, {
      width: '300px',
      data: producto
    });

    dialogRef.afterClosed().subscribe(result => {
      // Realizar acciones después de cerrar el diálogo
      if (result === 'actualizado') {
        this.listarProductos();
      }
    });
  }

  registrarProducto(): void {
    const dialogRef = this.dialog.open(RegistrarproductoComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Realizar acciones después de cerrar el diálogo
      if (result === 'actualizado') {
        this.listarProductos();
      }
    });
  }

  eliminarProducto(producto: any): void {
    Swal.fire({
      title: 'Confirmar eliminación',
      text: '¿Estás seguro de que quieres eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoservice.eliminarProducto(producto.idproducto).pipe(
          switchMap(() => this.productoservice.listarProducto())
        ).subscribe(
          (data: any) => {
            this.producto = data;
            Swal.fire('Éxito', 'El producto se eliminó correctamente', 'success');
          },
          (error) => {
            console.log(error);
            Swal.fire('Error', 'Error al eliminar el producto', 'error');
          }
        );
      }
    });
  }
  
}
