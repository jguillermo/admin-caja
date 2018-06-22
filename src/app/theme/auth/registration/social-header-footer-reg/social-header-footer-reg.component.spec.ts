import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHeaderFooterRegComponent } from './social-header-footer-reg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SocialHeaderFooterRegComponent', () => {
  let component: SocialHeaderFooterRegComponent;
  let fixture: ComponentFixture<SocialHeaderFooterRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialHeaderFooterRegComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHeaderFooterRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
