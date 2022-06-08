import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeDashComponent } from './home-dash/home-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
