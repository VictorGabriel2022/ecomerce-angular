import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoproductoComponent } from './catalogoproducto.component';

describe('CatalogoproductoComponent', () => {
  let component: CatalogoproductoComponent;
  let fixture: ComponentFixture<CatalogoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoproductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
