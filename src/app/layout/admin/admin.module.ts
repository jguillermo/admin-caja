import {NgModule} from '@angular/core';

import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AdminComponent} from './admin.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ]
})
export class AdminModule {
}
