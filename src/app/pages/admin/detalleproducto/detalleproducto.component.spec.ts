import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleproductoComponent } from './detalleproducto.component';

describe('DetalleproductoComponent', () => {
  let component: DetalleproductoComponent;
  let fixture: ComponentFixture<DetalleproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
