import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminModule} from './layout/admin/admin.module';
import {AuthComponent} from './layout/auth/auth.component';
import {ErrorComponent} from './layout/error/error.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminComponent} from './layout/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
