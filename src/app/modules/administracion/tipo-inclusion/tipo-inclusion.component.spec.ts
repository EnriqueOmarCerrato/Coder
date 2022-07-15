import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInclusionComponent } from './tipo-inclusion.component';

describe('TipoInclusionComponent', () => {
  let component: TipoInclusionComponent;
  let fixture: ComponentFixture<TipoInclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoInclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
