import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpedidosComponent } from './listarpedidos.component';

describe('ListarpedidosComponent', () => {
  let component: ListarpedidosComponent;
  let fixture: ComponentFixture<ListarpedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
