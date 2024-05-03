import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdashboardComponent } from './rdashboard.component';

describe('RdashboardComponent', () => {
  let component: RdashboardComponent;
  let fixture: ComponentFixture<RdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
