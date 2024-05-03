import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarpedidos',
  templateUrl: './listarpedidos.component.html',
  styleUrls: ['./listarpedidos.component.css']
})
export class ListarpedidosComponent implements OnInit {
  pedido: any[] = [];
  constructor(private pedidoservice:PedidosService) { }

  ngOnInit(): void {
    this.listarPedido();
  }
  listarPedido(): void {
    this.pedidoservice.listarPedidos().subscribe(
      (data: any) => {
        this.pedido = data;
        console.log(this.pedido);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los productos', 'error');
      }
    );
  }
}
