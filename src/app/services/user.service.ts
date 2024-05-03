import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


    constructor(private httpClient: HttpClient) { }

    public listarUsuarios(): Observable<any> {
      return this.httpClient.get(`${baserUrl}/usuarios/listar`);
    }
    public añadirUsuario(user:any): Observable<any>{
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }
    public añadircliente(cliente:any): Observable<any>{
      return this.httpClient.post(`${baserUrl}/cliente/registrar`,cliente);
    }
  
  }


