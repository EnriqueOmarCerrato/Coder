import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelAcademicoComponent } from './nivel-academico.component';

describe('NivelAcademicoComponent', () => {
  let component: NivelAcademicoComponent;
  let fixture: ComponentFixture<NivelAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
