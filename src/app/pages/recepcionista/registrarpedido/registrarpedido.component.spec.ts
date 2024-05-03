import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpedidoComponent } from './registrarpedido.component';

describe('RegistrarpedidoComponent', () => {
  let component: RegistrarpedidoComponent;
  let fixture: ComponentFixture<RegistrarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
