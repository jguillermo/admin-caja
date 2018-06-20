import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Dashboard',
    status: false
  },
  children: [
    {
      path: 'default',
      loadChildren: './model1/model1.module#Model1Module'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
