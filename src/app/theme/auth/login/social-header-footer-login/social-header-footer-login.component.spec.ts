import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHeaderFooterLoginComponent } from './social-header-footer-login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SocialHeaderFooterLoginComponent', () => {
  let component: SocialHeaderFooterLoginComponent;
  let fixture: ComponentFixture<SocialHeaderFooterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialHeaderFooterLoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHeaderFooterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
