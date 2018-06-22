import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWizardsComponent } from './form-wizards.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormWizardsComponent', () => {
  let component: FormWizardsComponent;
  let fixture: ComponentFixture<FormWizardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWizardsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
