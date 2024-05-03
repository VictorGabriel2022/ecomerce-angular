import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarcitaComponent } from './solicitarcita.component';

describe('SolicitarcitaComponent', () => {
  let component: SolicitarcitaComponent;
  let fixture: ComponentFixture<SolicitarcitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarcitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
