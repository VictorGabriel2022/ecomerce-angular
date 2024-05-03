import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';

import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';

import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { ListaProductosComponent } from './pages/admin/lista-productos/lista-productos.component';
import { ListaEmpleadosComponent } from './pages/admin/lista-empleados/lista-empleados.component';
import { CatalogoproductoComponent } from './pages/admin/catalogoproducto/catalogoproducto.component';
import { DetalleproductoComponent } from './pages/admin/detalleproducto/detalleproducto.component';
import { RdashboardComponent } from './pages/recepcionista/rdashboard/rdashboard.component';
import { RecepcionistaGuard } from './services/recepcionista.guard';
import { ListaClienteComponent } from './pages/admin/lista-cliente/lista-cliente.component';
import { CartComponent } from './pages/cart/cart.component';
import { RestablecerContraComponent } from './pages/restablecer-contra/restablecer-contra.component';
import { WelcomeRComponent } from './pages/recepcionista/welcome/welcome.component';
import { SolicitarcitaComponent } from './pages/solicitarcita/solicitarcita.component';
import { ListarpedidosComponent } from './pages/recepcionista/listarpedidos/listarpedidos.component';
import { ListarcitasComponent } from './pages/recepcionista/listarcitas/listarcitas.component';
import { ListarproductoComponent } from './pages/recepcionista/listarproducto/listarproducto.component';
import { RegistrarpedidoComponent } from './pages/recepcionista/registrarpedido/registrarpedido.component';
import { MiscitasComponent } from './pages/user/miscitas/miscitas.component';
import { MiscomprasComponent } from './pages/user/miscompras/miscompras.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'restablecer',
    component :  RestablecerContraComponent,
    pathMatch : 'full'
  },
  {
    path: 'catalogo/detalleproducto/:id',
    component: DetalleproductoComponent,
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: CatalogoproductoComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'miscitas',
    component: MiscitasComponent,
    pathMatch: 'full'
  },
  {
    path: 'carrito',
    component: CartComponent,
    pathMatch: 'full'
  },
  {
    path:'solicitarcita',
    component:SolicitarcitaComponent
  },

  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
 
      {
        path:'clientes',
        component:ListaClienteComponent
      },
    
      {
        path:'usuarios',
        component:ListaEmpleadosComponent
      },
 
      {
        path:'productos',
        component:ListaProductosComponent
      },

      {
        path:'add-examen',
        component:AddExamenComponent
      },
      {
        path:'examen/:examenId',
        component:ActualizarExamenComponent
      },

      {
        path:'add-pregunta/:examenId/:titulo',
        component : AddPreguntaComponent
      },
      {
        path:'pregunta/:preguntaId',
        component:ActualizarPreguntaComponent
      }
    ]
  },
  {
    path:'recepcionista',
    component:RdashboardComponent,
    canActivate:[RecepcionistaGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'pedidos',
        component:ListarpedidosComponent
      },
      {
        path : '',
        component : WelcomeRComponent
      },
      {
        path : 'listadecitas',
        component : ListarcitasComponent
      },
      {
        path : 'consultarproducto',
        component : ListarproductoComponent
      },
      {
        path : 'registrarpedido',
        component : RegistrarpedidoComponent
      },
    ]
  },
  {
    path:'user',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children : [
      {
        path:'profile',
        component:ProfileComponent
      },  
      {
        path:'pedidos',
        component:ListarpedidosComponent
      }, 
      {
        path: 'miscitas',
        component: MiscitasComponent,
        pathMatch: 'full'
      }, 
      {
        path: 'miscompras',
        component: MiscomprasComponent,
        pathMatch: 'full'
      }, 
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
