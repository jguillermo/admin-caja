import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRegComponent } from './social-reg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SocialRegComponent', () => {
  let component: SocialRegComponent;
  let fixture: ComponentFixture<SocialRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialRegComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
