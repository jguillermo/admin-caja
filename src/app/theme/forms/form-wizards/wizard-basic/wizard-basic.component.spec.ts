import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardBasicComponent } from './wizard-basic.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardBasicComponent', () => {
  let component: WizardBasicComponent;
  let fixture: ComponentFixture<WizardBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardBasicComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
