import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }
  public listarPedidos() {
    return this.http.get(`${baseUrl}/pedido/listar`);
  }
  public getPedidoByClienteId(pedidoId: number) {
    return this.http.get(`${baseUrl}/pedido/cliente/${pedidoId}`);
  }
}
