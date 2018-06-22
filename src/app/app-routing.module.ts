import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {ErrorComponent} from './layout/error/error.component';


// const appRoutingModule: Routes = [
//   {path: 'login', component: LoginComponent},
//   {path: '**', component: NotFoundComponent}
// ];


// export const APP_ROUTES = RouterModule.forRoot(appRoutingModule, {useHash: true});


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      },
      {path: '**', component: ErrorComponent}
    ]
  },
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       loadChildren: './theme/auth/auth.module#AuthModule'
  //     }
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
