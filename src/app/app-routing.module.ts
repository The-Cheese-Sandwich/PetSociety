import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { PublicacionesGeneralComponent } from './publicaciones-general/publicaciones-general.component';
import { MisPublicacionesComponent } from './mis-publicaciones/mis-publicaciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full',
  },
  {
    path: 'dash',
    component: DashboardComponent,
    children: [
      {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', 
        component: HomeDashComponent,
        children: [
          {
            path: '', 
            redirectTo: 'publicaciones',
            pathMatch: 'full'
          },
          {
            path: "publicaciones",
            component: PublicacionesGeneralComponent            
          },
          {
            path: "mis-publicaciones",
            component: MisPublicacionesComponent            
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
