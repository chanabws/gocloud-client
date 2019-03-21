import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProgrammeComponent } from './form-programme.component';

describe('FormProgrammeComponent', () => {
  let component: FormProgrammeComponent;
  let fixture: ComponentFixture<FormProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
