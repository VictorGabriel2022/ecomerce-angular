import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcitaComponent } from './editarcita.component';

describe('EditarcitaComponent', () => {
  let component: EditarcitaComponent;
  let fixture: ComponentFixture<EditarcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
