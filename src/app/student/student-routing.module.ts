import { StudentlistComponent } from './studentlist/studentlist.component';
import { AdmissionComponent } from './admission/admission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path:'admission',
        component: AdmissionComponent
      },
      {
        path:'list',
        component: StudentlistComponent
      },
      // {
      //   path: 'courses',
      //   loadChildren: () => import('./courses/courses.module')
      //     .then(m => m.CoursesModule),
      // },
      // {
      //   path: 'admission',
      //   loadChildren: () => import('./admission/admission.module')
      //     .then(m => m.AdmissionModule),
      // },
      {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'
      },
      // COmponenet not found section
      // {
      //   path: '**',
      //   component: ,
      // },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
