import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRequestComponent } from './register-request.component';

describe('RegisterRequestComponent', () => {
  let component: RegisterRequestComponent;
  let fixture: ComponentFixture<RegisterRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
