import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { WelcomeRComponent as RWelcome} from './pages/recepcionista/welcome/welcome.component';

import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';

import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';
import { ActualizarPreguntaComponent } from './pages/admin/actualizar-pregunta/actualizar-pregunta.component';
import { SidebarComponent as UserSidebar} from './pages/user/sidebar/sidebar.component';


import { SidebarComponent as RSidebar} from './pages/recepcionista/sidebar/sidebar.component';
import { ListaProductosComponent } from './pages/admin/lista-productos/lista-productos.component';
import {MatTableModule} from '@angular/material/table';
import { ListaEmpleadosComponent } from './pages/admin/lista-empleados/lista-empleados.component';
import { DetalleProductoComponent } from './pages/admin/detalle-producto/detalle-producto.component'
import {MatDialogModule} from '@angular/material/dialog';
import { RegistrarproductoComponent } from './pages/admin/registrarproducto/registrarproducto.component';
import { CatalogoproductoComponent } from './pages/admin/catalogoproducto/catalogoproducto.component';
import { DetalleproductoComponent } from './pages/admin/detalleproducto/detalleproducto.component';
import { MatMenuModule } from '@angular/material/menu';
import { RdashboardComponent } from './pages/recepcionista/rdashboard/rdashboard.component';
import { ListaClienteComponent } from './pages/admin/lista-cliente/lista-cliente.component';
import { ActualizarClienteComponent } from './pages/admin/actualizar-cliente/actualizar-cliente.component';
import { RegistrarClienteComponent } from './pages/admin/registrar-cliente/registrar-cliente.component';
import { CartComponent } from './pages/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { RestablecerContraComponent } from './pages/restablecer-contra/restablecer-contra.component';
import { SolicitarcitaComponent } from './pages/solicitarcita/solicitarcita.component';
import { ListarpedidosComponent } from './pages/recepcionista/listarpedidos/listarpedidos.component';
import { ListarcitasComponent } from './pages/recepcionista/listarcitas/listarcitas.component';
import { EditarcitaComponent } from './pages/recepcionista/editarcita/editarcita.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ListarproductoComponent } from './pages/recepcionista/listarproducto/listarproducto.component';
import { RegistrarpedidoComponent } from './pages/recepcionista/registrarpedido/registrarpedido.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MiscitasComponent } from './pages/user/miscitas/miscitas.component';
import { MiscomprasComponent } from './pages/user/miscompras/miscompras.component';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    AddExamenComponent,
    ActualizarExamenComponent,
    AddPreguntaComponent,
    ActualizarPreguntaComponent,
    UserSidebar,
    RSidebar,
    ListaProductosComponent,
    ListaEmpleadosComponent,
    DetalleProductoComponent,
    RegistrarproductoComponent,
    CatalogoproductoComponent,
    DetalleproductoComponent,
    RdashboardComponent,
    ListaClienteComponent,
    ActualizarClienteComponent,
    RegistrarClienteComponent,
    CartComponent,
    RestablecerContraComponent,
    RWelcome,
    SolicitarcitaComponent,
    ListarpedidosComponent,
    ListarcitasComponent,
    EditarcitaComponent,
    ListarproductoComponent,
    RegistrarpedidoComponent,
    MiscitasComponent,
    MiscomprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSidenavModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
