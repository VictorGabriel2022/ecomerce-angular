import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcitasComponent } from './listarcitas.component';

describe('ListarcitasComponent', () => {
  let component: ListarcitasComponent;
  let fixture: ComponentFixture<ListarcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
