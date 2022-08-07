import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosvendidosComponent } from './productosvendidos.component';

describe('ProductosvendidosComponent', () => {
  let component: ProductosvendidosComponent;
  let fixture: ComponentFixture<ProductosvendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosvendidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosvendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
