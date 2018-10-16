import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTraceComponent } from './request-trace.component';

describe('RequestTraceComponent', () => {
  let component: RequestTraceComponent;
  let fixture: ComponentFixture<RequestTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
