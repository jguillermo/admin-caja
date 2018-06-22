import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNavbarLgIconComponent } from './wizard-navbar-lg-icon.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardNavbarLgIconComponent', () => {
  let component: WizardNavbarLgIconComponent;
  let fixture: ComponentFixture<WizardNavbarLgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardNavbarLgIconComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavbarLgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
