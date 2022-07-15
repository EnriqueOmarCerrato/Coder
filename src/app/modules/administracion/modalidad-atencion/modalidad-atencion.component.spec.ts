import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadAtencionComponent } from './modalidad-atencion.component';

describe('ModalidadAtencionComponent', () => {
  let component: ModalidadAtencionComponent;
  let fixture: ComponentFixture<ModalidadAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadAtencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
