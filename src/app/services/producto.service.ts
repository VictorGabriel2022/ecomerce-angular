import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public listarProducto() {
    return this.http.get(`${baseUrl}/producto/listar`);
  }
  public agregarProducto(producto: any) : Observable<any>{
    return this.http.post(`${baseUrl}/producto/registrar`, producto);
  }
  public actualizarProducto(idproducto: number, producto: any) {
    return this.http.put(`${baseUrl}/producto/editar/${idproducto}`, producto);
  }
  public eliminarProducto(id: number) {
    return this.http.delete(`${baseUrl}/producto/borrar/${id}`);
  }
  public buscarProducto(id: number) {
    return this.http.get(`${baseUrl}/producto/buscar/${id}`);
  }
}
