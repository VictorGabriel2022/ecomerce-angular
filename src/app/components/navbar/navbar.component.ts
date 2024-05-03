import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount = 0;
  isLoggedIn = false;
  user: any = null;
  rol: any = null;

  constructor(public login: LoginService, private cartService: CartService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn(); 
    this.user = this.login.getUser();
   
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn(); 
        this.user = this.login.getUser();
        this.rol = this.login.getUserRole();
        console.log(this.user);
      }
    );

    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

  public logout() {
    this.login.logout();
    window.location.reload();
  }
  getProfileLink(): string {
  if (this.rol=== 'RECEPCIONISTA') {
    return '/recepcionista';
  } else if (this.rol === 'NORMAL') {
    return '/user';
  } else if (this.rol === 'ADMIN') {
    return '/admin';
  } else if (this.rol === 'ALMACEN') {
    return '/almacen';
  } else if (this.rol === 'OPTOMETRISTA') {
    return '/optometrista';
  } else {
    return '/';
  }
}
}
