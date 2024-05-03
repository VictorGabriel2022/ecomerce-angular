import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarClienteComponent } from './actualizar-cliente.component';

describe('ActualizarClienteComponent', () => {
  let component: ActualizarClienteComponent;
  let fixture: ComponentFixture<ActualizarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
