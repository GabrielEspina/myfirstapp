import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDinamicoComponent } from './chart-dinamico.component';

describe('ChartDinamicoComponent', () => {
  let component: ChartDinamicoComponent;
  let fixture: ComponentFixture<ChartDinamicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDinamicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
