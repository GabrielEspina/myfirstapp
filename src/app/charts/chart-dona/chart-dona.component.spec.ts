import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDonaComponent } from './chart-dona.component';

describe('ChartDonaComponent', () => {
  let component: ChartDonaComponent;
  let fixture: ComponentFixture<ChartDonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
