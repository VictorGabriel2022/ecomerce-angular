import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CitaService } from 'src/app/services/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarcita',
  templateUrl: './editarcita.component.html',
  styleUrls: ['./editarcita.component.css']
})
export class EditarcitaComponent {
  cita: any = { optometrista:{optometristaid: null }};
  optometristas: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<EditarcitaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private citaService: CitaService
  ) {
    this.cita = { ...data, optometristaid: data.optometrista.optometristaid };
    this.obtenerOptometristas();
  }

  obtenerOptometristas(): void {
    this.citaService.listarOptometrista().subscribe(
      (response) => {
        this.optometristas = response;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al obtener la lista de optometristas', 'error');
      }
    );
  }

  actualizarCita(): void {
    this.citaService.editarCita(this.cita.citaid, this.cita).subscribe(
      (response) => {
        console.log('Cita editada:', response);
        this.dialogRef.close('actualizado');
        Swal.fire('Cita editada', 'La cita ha sido editada con éxito', 'success');
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al guardar la cita', 'error');
      }
    );
  }
}
