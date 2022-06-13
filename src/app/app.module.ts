import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeDashComponent } from './home-dash/home-dash.component';
import { LoginComponent } from './login/login.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PublicacionComponent,
    DashboardComponent,
    HomeDashComponent,
    LoginComponent,
    CrearPublicacionComponent
  ],
  imports: [
    BrowserModule,
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
