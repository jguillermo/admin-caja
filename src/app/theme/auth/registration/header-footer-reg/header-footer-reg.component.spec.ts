import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterRegComponent } from './header-footer-reg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HeaderFooterRegComponent', () => {
  let component: HeaderFooterRegComponent;
  let fixture: ComponentFixture<HeaderFooterRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFooterRegComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
