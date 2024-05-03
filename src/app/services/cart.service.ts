import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  cartItems: any[] = [];
  
  private cartItemCountSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSubject.asObservable();
  public listarDetallePedido() {
    return this.http.get(`${baseUrl}/detallepedido/listar`);
  }
  public registrarPedido(pedido: any): Observable<any> {
    return this.http.post(`${baseUrl}/pedido/registrar`, pedido);
  }
  public registrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${baseUrl}/cliente/registrar`, cliente);
  }
  
  public registrarDetallePedido(detalleppedido: any) : Observable<any>{
    return this.http.post(`${baseUrl}/detallepedido/registrar`, detalleppedido);
  }
  public getProductById(id: number): Observable<any> {
    return this.http.get(`${baseUrl}/producto/buscar/${id}`);
  }
  
  public updateProductCantidad(id: number, cantidad: number): Observable<any> {
    const payload = { cantidad: cantidad };
    return this.http.put(`${baseUrl}/producto/editarcantidad/${id}`, payload);
  }
  addToCart(producto: any) {
    console.log('Producto a agregar:', producto);
    const existingItem = this.cartItems.find(item => item.idproducto === producto.idproducto);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...producto, quantity: 1 };
      this.cartItems.push(newItem);
    }

    this.updateCartItemCount();
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.idproducto === item.idproducto);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }

    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    const itemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.cartItemCountSubject.next(itemCount);
  }

  getCartItemCount() {
    return this.cartItems.length;
  }

  calculateTotalPrice() {
    let total = 0;

    for (const item of this.cartItems) {
      total += (item.precio * item.cantidadproducto) * item.quantity;
    }

    return total;
  }
  clearCart() {
    this.cartItems = [];
    this.updateCartItemCount();
    console.log('Cart cleared:', this.cartItems);
  }
}

