import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectComponent } from './form-select.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import { SelectOptionService } from '../../../shared/elements/select-option.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormSelectComponent', () => {
  let component: FormSelectComponent;
  let fixture: ComponentFixture<FormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ TagInputModule, BrowserAnimationsModule ],
      providers: [ SelectOptionService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
