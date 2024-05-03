import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscomprasComponent } from './miscompras.component';

describe('MiscomprasComponent', () => {
  let component: MiscomprasComponent;
  let fixture: ComponentFixture<MiscomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscomprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
