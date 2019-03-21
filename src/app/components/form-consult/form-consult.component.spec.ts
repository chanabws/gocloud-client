import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultComponent } from './form-consult.component';

describe('FormConsultComponent', () => {
  let component: FormConsultComponent;
  let fixture: ComponentFixture<FormConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
