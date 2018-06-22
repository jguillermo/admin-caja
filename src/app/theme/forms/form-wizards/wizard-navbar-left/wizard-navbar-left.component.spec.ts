import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNavbarLeftComponent } from './wizard-navbar-left.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardNavbarLeftComponent', () => {
  let component: WizardNavbarLeftComponent;
  let fixture: ComponentFixture<WizardNavbarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardNavbarLeftComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavbarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
