import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeDashComponent
  },
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
