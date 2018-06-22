import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPickerComponent } from './form-picker.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormPickerComponent', () => {
  let component: FormPickerComponent;
  let fixture: ComponentFixture<FormPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPickerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ SharedModule, ColorPickerModule, BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
