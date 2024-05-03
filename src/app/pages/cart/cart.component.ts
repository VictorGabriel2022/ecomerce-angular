import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private loginService: LoginService) {}

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
    this.cartItems.forEach(item => {
      item.cantidadproducto = 1; // Establecer valor inicial en "1"
    });
  }

  addToCart(producto: any) {
    this.cartService.addToCart(producto);
   
  }


  removeFromCart(item: any) {
    console.log('Removing item:', item);
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.cartItems;
    console.log('Updated cartItems:', this.cartItems);
  }

  calculateTotalPrice() {
    return this.cartService.calculateTotalPrice();
  }

  generarPedido() {
    const userId = this.loginService.getUser()?.cliente.clienteid;
       console.log(userId)
    if (this.cartItems.length === 0) {
      Swal.fire('Carrito vacío', 'No se puede generar un pedido sin productos en el carrito', 'warning');
      return;
    }
    const pedido = {
      total: this.calculateTotalPrice(),
      cliente: {
        clienteid: userId
      }
      
    };
console.log(pedido)
    this.cartService.registrarPedido(pedido).subscribe(
      (response) => {
        const id = response.id;
        const codigo = response.codigo;

        for (const item of this.cartItems) {
          const detallePedido = {
            cantidad: item.cantidadproducto,
            total: item.precio * item.cantidadproducto,
            producto: {
              idproducto: item.idproducto
            },
            pedido: {
              id: id
            }
          };

          this.cartService.registrarDetallePedido(detallePedido).subscribe(
            (detalleResponse) => {
              // Restar la cantidad del detallePedido de la cantidad del producto y actualizar el producto
              this.actualizarCantidadProducto(detallePedido.producto.idproducto, detallePedido.cantidad);
            },
            (detalleError) => {
              // Manejo de errores al guardar el detalle del pedido
            }
          );
        }
 // Limpiar el carrito
 this.cartService.clearCart();
 this.cartItems = [];
        Swal.fire('Pedido agregado', `Pedido realizado con éxito. Código de pedido: <b>${codigo}</b>`, 'success');
      },
      (error) => {
        Swal.fire('Pedido fallido', 'Debe iniciar sesión para realizar un pedido', 'error');
      }
    );
  }

  actualizarCantidadProducto(idproducto: number, cantidadDetalle: number) {
    this.cartService.getProductById(idproducto).subscribe(
      (producto) => {
        const cantidadActual = producto.cantidad;
        const nuevaCantidad = cantidadActual - cantidadDetalle;
  
        if (nuevaCantidad < 0) {
          // Mostrar mensaje de error
          Swal.fire('Error', 'La cantidad del detalle excede la cantidad actual del producto', 'error');
          return;
        }
  
        this.cartService.updateProductCantidad(idproducto, nuevaCantidad).subscribe(
          (response) => {
            // Lógica adicional después de actualizar la cantidad del producto
          },
          (error) => {
            // Manejo de errores al actualizar la cantidad del producto
          }
        );
      },
      (error) => {
        // Manejo de errores al obtener el producto
      }
    );
  }
 
}
