import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

enum SignupStage {
  ClienteInfo,
  UsuarioInfo
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public SignupStage = SignupStage;
  public currentStage: SignupStage = SignupStage.ClienteInfo;
  public clienteInfo = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };
  public usuarioInfo = {
    username: '',
    password: '',
    cliente: {
      clienteid: 0
    }
  };
  public clienteId: number;

  constructor(private userService: UserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.currentStage === SignupStage.ClienteInfo) {
      this.currentStage = SignupStage.UsuarioInfo;
      return;
    }

    if (this.currentStage === SignupStage.UsuarioInfo) {
      const clienteData = {
        nombre: this.clienteInfo.nombre,
        apellido: this.clienteInfo.apellido,
        email: this.clienteInfo.email,
        telefono: this.clienteInfo.telefono
      };

      this.userService.añadircliente(clienteData).subscribe(
        (clienteResponse: any) => {
          const ultimoCliente = clienteResponse[clienteResponse.length - 1];
          this.clienteId = ultimoCliente.clienteid;
          this.usuarioInfo.cliente.clienteid = this.clienteId;
      
          // Ahora puedes registrar el usuario usando this.usuarioInfo
      
          this.userService.añadirUsuario(this.usuarioInfo).subscribe(
            (userResponse: any) => {
              console.log(userResponse);
              Swal.fire('Registro exitoso', 'Usuario registrado con éxito en el sistema', 'success');
            },
            (error) => {
              console.log(error);
              this.snack.open('Ha ocurrido un error en el sistema!!', 'Aceptar', {
                duration: 3000
              });
            }
          );
        },
        (error) => {
          console.log(error);
          this.snack.open('Ha ocurrido un error en el sistema!!', 'Aceptar', {
            duration: 3000
          });
        }
      );
  }

  }}