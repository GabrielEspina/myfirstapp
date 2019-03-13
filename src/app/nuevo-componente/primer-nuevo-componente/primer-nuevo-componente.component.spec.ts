import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerNuevoComponenteComponent } from './primer-nuevo-componente.component';

describe('PrimerNuevoComponenteComponent', () => {
  let component: PrimerNuevoComponenteComponent;
  let fixture: ComponentFixture<PrimerNuevoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerNuevoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerNuevoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
