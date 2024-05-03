import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductoComponent } from './listarproducto.component';

describe('ListarproductoComponent', () => {
  let component: ListarproductoComponent;
  let fixture: ComponentFixture<ListarproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
