import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Model1RoutingModule} from './model1-routing.module';
import {Model1Component} from './model1.component';

@NgModule({
  imports: [
    CommonModule,
    Model1RoutingModule
  ],
  declarations: [Model1Component],
  bootstrap: [Model1Component]
})
export class Model1Module {
}
