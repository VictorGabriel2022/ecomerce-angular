import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  users:any = []

  constructor(
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
    // Obtener los usuarios utilizando el servicio UserService
    this.userservice.listarUsuarios().subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar las categorías','error');
      }
    );
  }
}
