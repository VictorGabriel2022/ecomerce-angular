import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.component.html',
  styleUrls: ['./miscompras.component.css']
})
export class MiscomprasComponent implements OnInit {
  public pedidos: any[] = [];
  constructor(private pedidoService: PedidosService, private loginService: LoginService) { }

  ngOnInit(): void {
    const clienteId = this.loginService.getUser()?.cliente.clienteid;
    if (clienteId) {
      this.pedidoService.getPedidoByClienteId(clienteId).subscribe(
        (data: any[]) => {
          this.pedidos = data;
        },
        (error) => {
          console.log(error);
          // Mostrar mensaje de error
        }
      );
    }
  }

}
