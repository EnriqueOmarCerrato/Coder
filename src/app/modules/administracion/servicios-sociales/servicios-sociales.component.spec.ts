import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosSocialesComponent } from './servicios-sociales.component';

describe('ServiciosSocialesComponent', () => {
  let component: ServiciosSocialesComponent;
  let fixture: ComponentFixture<ServiciosSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
