import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';
import { EditarcitaComponent } from '../editarcita/editarcita.component';

@Component({
  selector: 'app-listarcitas',
  templateUrl: './listarcitas.component.html',
  styleUrls: ['./listarcitas.component.css']
})
export class ListarcitasComponent implements OnInit {
  cita: any[] = [];
  constructor(private citaService:CitaService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarCita();
  }
  
  listarCita(): void {
    this.citaService.listarCita().subscribe(
      (data: any) => {
        this.cita = data;
        console.log(this.cita);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar las cita', 'error');
      }
    );
  }
  actualizarCita(cita: any): void {
    const dialogRef = this.dialog.open(EditarcitaComponent, {
      width: '250px',
      height:'400px',
      data: cita
    });

    dialogRef.afterClosed().subscribe(result => {
      // Realizar acciones después de cerrar el diálogo
      if (result === 'actualizado') {
        this.listarCita();
      }
    });
  }

}
