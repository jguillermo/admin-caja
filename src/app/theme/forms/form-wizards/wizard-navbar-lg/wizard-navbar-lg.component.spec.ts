import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNavbarLgComponent } from './wizard-navbar-lg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WizardNavbarLgComponent', () => {
  let component: WizardNavbarLgComponent;
  let fixture: ComponentFixture<WizardNavbarLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardNavbarLgComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNavbarLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
