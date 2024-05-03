import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }
  public listarCita() {
    return this.http.get(`${baseUrl}/cita/listar`);
  }
  public Registrarcliente(cita: any) : Observable<any>{
    return this.http.post(`${baseUrl}/cliente/registrar`, cita);
  }
  public Registrarcita(cliente: any) : Observable<any>{
    return this.http.post(`${baseUrl}/cita/registrar`, cliente);
  }
  public editarCita(citaid: number, cita: any) {
    return this.http.put(`${baseUrl}/cita/editar/${citaid}`, cita);
  }
  public listarOptometrista() :Observable<any>{
    return this.http.get(`${baseUrl}/optometrista/listar`);
  }
  public getCitasByClienteId(clienteId: number) {
    return this.http.get(`${baseUrl}/cita/cliente/${clienteId}`);
  }
 
}
