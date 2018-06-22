import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardCustomComponent } from './wizard-custom.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardCustomComponent', () => {
  let component: WizardCustomComponent;
  let fixture: ComponentFixture<WizardCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardCustomComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
