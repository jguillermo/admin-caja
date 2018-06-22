import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterLoginComponent } from './header-footer-login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderFooterLoginComponent', () => {
  let component: HeaderFooterLoginComponent;
  let fixture: ComponentFixture<HeaderFooterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFooterLoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
