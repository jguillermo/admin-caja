import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRegComponent } from './basic-reg.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BasicRegComponent', () => {
  let component: BasicRegComponent;
  let fixture: ComponentFixture<BasicRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRegComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
