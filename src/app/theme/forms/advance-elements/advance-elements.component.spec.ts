import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceElementsComponent } from './advance-elements.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdvanceElementsComponent', () => {
  let component: AdvanceElementsComponent;
  let fixture: ComponentFixture<AdvanceElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceElementsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
