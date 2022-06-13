import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeDashComponent } from './home-dash/home-dash.component';
import { LoginComponent } from './login/login.component';
import { PublicacionesGeneralComponent } from './publicaciones-general/publicaciones-general.component';
import { GuardadosComponent } from './guardados/guardados.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent,
    DashboardComponent,
    HomeDashComponent,
    LoginComponent,
    PublicacionesGeneralComponent,
    GuardadosComponent,
    MisPublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
