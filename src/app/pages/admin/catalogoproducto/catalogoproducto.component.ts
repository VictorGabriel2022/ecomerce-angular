import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalogoproducto',
  templateUrl: './catalogoproducto.component.html',
  styleUrls: ['./catalogoproducto.component.css']
})
export class CatalogoproductoComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private productoservice: ProductoService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(): void {
    this.productoservice.listarProducto().subscribe(
      (data: any) => {
        this.productos = data;
        console.log(this.productos);
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
}
