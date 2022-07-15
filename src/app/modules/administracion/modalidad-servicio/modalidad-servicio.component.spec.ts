import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadServicioComponent } from './modalidad-servicio.component';

describe('ModalidadServicioComponent', () => {
  let component: ModalidadServicioComponent;
  let fixture: ComponentFixture<ModalidadServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
