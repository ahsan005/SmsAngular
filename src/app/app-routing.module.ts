import { ComponentFixture } from '@angular/core/testing';

import { DashboardComponent } from './student/dashboard/dashboard.component';

import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
      import("./student/student.module").then((m) => m.StudentModule),
      canActivate:[AuthGuard]
  },
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'register',
        component:  RegisterComponent
      }
    ]
  },
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "**", redirectTo: "auth" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
