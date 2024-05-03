import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CitaService } from 'src/app/services/cita.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-solicitarcita',
  templateUrl: './solicitarcita.component.html',
  styleUrls: ['./solicitarcita.component.css']
})
export class SolicitarcitaComponent implements OnInit {
  public cita = {
    asunto: '',
    fechaSolicitud: new Date(),
    cliente: {
      clienteid: ''
    },
    optometrista: {
      optometristaid: 1
    }
  };

  constructor(
    private citasService: CitaService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtener el ID del cliente actual
    const clienteId = this.loginService.getUser()?.cliente.clienteid;
    if (clienteId) {
      this.cita.cliente.clienteid = clienteId;
    }
  }

  solicitarCita() {
    if (!this.loginService.isLoggedIn()) {
      Swal.fire('Acceso denegado', 'Debes iniciar sesión para solicitar una cita', 'warning').then(() => {
        this.router.navigate(['/login']);
      });
    } else {
      this.citasService.Registrarcita(this.cita).subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Éxito', 'La cita se ha solicitado correctamente', 'success').then(() => {
            // Redirigir a otra página
          });
        },
        (error) => {
          console.log(error);
          Swal.fire('Error', 'Ocurrió un error al solicitar la cita', 'error');
        }
      );
    }
  }
}
