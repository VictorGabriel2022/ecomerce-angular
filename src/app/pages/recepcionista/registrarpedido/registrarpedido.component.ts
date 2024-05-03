import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-registrarpedido',
  templateUrl: './registrarpedido.component.html',
  styleUrls: ['./registrarpedido.component.css']
})
export class RegistrarpedidoComponent implements OnInit {
  cartItems: any[] = [];
  cliente: any = {};
  clienteGuardado
  constructor(private cartService: CartService,private clienteService: ClienteService) { }

  ngOnInit(): void {

    this.cartItems = this.cartService.cartItems;
    this.cartItems.forEach(item => {
      item.cantidadproducto = 1; // Establecer valor inicial en "1"
    });
  }
  registrarCliente() {
    // Llama al método registrarCliente() del servicio
    this.clienteService.agregarCliente(this.cliente).subscribe(
      (data) => {
        // Obtén el último cliente registrado
        const clientes = Object.values(data);
        const ultimoCliente = clientes.pop();
        
        // Almacena los datos del último cliente registrado en la variable clienteGuardado
        this.clienteGuardado = ultimoCliente;
        
     
    
        Swal.fire('Cliente Registrado');
        console.log("Cliente registrado:", this.clienteGuardado);
      },
      (error) => {
        // Maneja el error, muestra un mensaje de error, etc.
        console.error(error);
      }
    );
  }
  

  
  addToCart(producto: any) {
    this.cartService.addToCart(producto);
   
  }
  generarBoleta() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
    const tableRows = [
      [
        { text: 'Producto', style: 'tableHeader' },
        { text: 'Cantidad', style: 'tableHeader' },
        { text: 'Precio Unitario', style: 'tableHeader' },
        { text: 'Subtotal', style: 'tableHeader' }
      ],
      ...this.cartItems.map(item => [
        item.nombre,
        item.cantidadproducto.toString(),
        `S/.${item.precio.toFixed(2)}`,
        `S/.${(item.precio * item.cantidadproducto).toFixed(2)}`
      ])
    ];
  
    const clienteNombre = this.cliente.nombre || 'N/A';
    const clienteCorreo = this.cliente.correo || 'N/A';
    const clienteDireccion = this.cliente.direccion || 'N/A';
  
    const content = [
      { text: 'BOLETA DE COMPRA', style: 'header' },
      { text: 'EL BAZAR DEL OPTOMETRISTA', style: 'header' },
      
      { text: '\n' },
      { text: 'DETALLES DE LA COMPRA', style: 'subheader' },
 
      {
        text: 'Cliente:',
        bold: true,
        margin: [0, 0, 0, 5]
      },
      `Nombre: ${clienteNombre}`,
      `Correo: ${clienteCorreo}`,
      `Dirección: ${clienteDireccion}`,
      { text: '\n' },
      {
        table: {
          widths: ['*', 'auto', 'auto', 'auto'],
          body: tableRows
        }
      },
      { text: '--------------------------------------------', style: 'separator' },
      { text: '\n' },
      { text: 'TOTAL:', bold: true },
      `S/.${this.calculateTotalPrice().toFixed(2)}`
    ];
  
    const documentDefinition = {
      content: content,
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        separator: {
          fontSize: 12,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: 'black'
        }
      }
    };
  
    pdfMake.createPdf(documentDefinition).open();
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
    if (this.cartItems.length === 0) {
      Swal.fire('Carrito vacío', 'No se puede generar un pedido sin productos en el carrito', 'warning');
      return;
    }
  
    // Obtener el ID del último cliente registrado
    const clienteId = this.clienteGuardado.clienteid; // Asegúrate de que el clienteGuardado tenga la propiedad clienteid con el ID del cliente
  
   
  
    const pedido = {
      total: this.calculateTotalPrice(),
      cliente: {
        clienteid: clienteId
      }
    };
  
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
  
     
        Swal.fire('Pedido agregado', `Pedido realizado con éxito. Código de pedido: <b>${codigo}</b>`, 'success');
      },
      (error) => {
        Swal.fire('Pedido fallido', 'Ha ocurrido un error al procesar el pedido', 'error');
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
