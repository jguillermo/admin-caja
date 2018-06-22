import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNavbarRightComponent } from './wizard-navbar-right.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardNavbarRightComponent', () => {
  let component: WizardNavbarRightComponent;
  let fixture: ComponentFixture<WizardNavbarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardNavbarRightComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavbarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
