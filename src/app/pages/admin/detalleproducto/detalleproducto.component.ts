import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private cartService:CartService,
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productoService.buscarProducto(productId).subscribe(
      (response: any) => {
        this.producto = response; // Asignar los datos del producto recibido
        console.log(this.producto); // Verificar los datos en la consola
      },
      (error: any) => {
        console.error(error); // Manejar el error si ocurre
      }   
    );
  }
  addToCart(producto: any): void {
    this.cartService.addToCart(producto);
    Swal.fire('Producto agregado', 'El producto ha sido agregado al carrito', 'success');
  }
}


