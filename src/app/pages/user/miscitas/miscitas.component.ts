import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-miscitas',
  templateUrl: './miscitas.component.html',
  styleUrls: ['./miscitas.component.css']
})
export class MiscitasComponent implements OnInit {

  public citas: any[] = [];

  constructor(private citasService: CitaService, private loginService: LoginService) { }

  ngOnInit(): void {
    const clienteId = this.loginService.getUser()?.cliente.clienteid;
    if (clienteId) {
      this.citasService.getCitasByClienteId(clienteId).subscribe(
        (data: any[]) => {
          this.citas = data;
        },
        (error) => {
          console.log(error);
          // Mostrar mensaje de error
        }
      );
    }
  }

}
