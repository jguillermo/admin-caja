import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Model1Component} from './model1.component';

const routes: Routes = [
  {
    path: '',
    component: Model1Component,
    data: {
      title: 'Default',
      icon: 'ti-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Model1RoutingModule { }
