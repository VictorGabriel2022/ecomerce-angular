import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  public listarCliente() {
    return this.http.get(`${baseUrl}/cliente/listar`);
  }
  public agregarCliente(cliente: any) : Observable<any>{
    return this.http.post(`${baseUrl}/cliente/registrar`, cliente);
  }
  public actualizarCliente(idcliente: number, cliente: any) {
    return this.http.put(`${baseUrl}/cliente/editar/${idcliente}`, cliente);
  }
  public eliminarCliente(id: number) {
    return this.http.delete(`${baseUrl}/cliente/borrar/${id}`);
  }
  public buscarCliente(id: number) {
    return this.http.get(`${baseUrl}/cliente/buscar/${id}`);
  }
}
