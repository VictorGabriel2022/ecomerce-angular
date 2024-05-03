import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent implements OnInit {
  producto: MatTableDataSource<any>;
  displayedColumns: string[] = ['idproducto', 'nombre', 'descripcion', 'precio', 'cantidad', 'imagen', 'acciones'];
  filtroNombre: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productoservice: ProductoService, private cartService: CartService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoservice.listarProducto().subscribe(
      (data: any) => {
        this.producto = new MatTableDataSource<any>(data);
        this.producto.paginator = this.paginator;
        console.log(this.producto);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los productos', 'error');
      }
    );
  }

  addToCart(producto: any): void {
    this.cartService.addToCart(producto);
    Swal.fire('Producto agregado', 'El producto ha sido agregado al carrito', 'success');
  }

  aplicarFiltro(): void {
    this.producto.filter = this.filtroNombre.trim().toLowerCase();
  }
}

