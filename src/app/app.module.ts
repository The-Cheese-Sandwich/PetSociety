import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeDashComponent } from './home-dash/home-dash.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { PublicacionesGeneralComponent } from './publicaciones-general/publicaciones-general.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';
import { PublicacionUsuarioComponent } from './publicacion-usuario/publicacion-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent,
    DashboardComponent,
    HomeDashComponent,
    LoginComponent,
    CrearPublicacionComponent,
    PublicacionesGeneralComponent,
    MisPublicacionesComponent,
    PublicacionUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
