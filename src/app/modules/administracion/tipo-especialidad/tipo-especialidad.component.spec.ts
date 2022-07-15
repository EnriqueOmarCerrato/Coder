import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEspecialidadComponent } from './tipo-especialidad.component';

describe('TipoEspecialidadComponent', () => {
  let component: TipoEspecialidadComponent;
  let fixture: ComponentFixture<TipoEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoEspecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
