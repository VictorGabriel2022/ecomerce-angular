import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscitasComponent } from './miscitas.component';

describe('MiscitasComponent', () => {
  let component: MiscitasComponent;
  let fixture: ComponentFixture<MiscitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
