import { EditstudentComponent } from './popup/editstudent/editstudent.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AdmissionComponent } from './admission/admission.component';
import { NbButton, NbButtonModule } from '@nebular/theme';
import { StudentlistComponent } from './studentlist/studentlist.component';



@NgModule({
  declarations: [
    StudentComponent,
    AdmissionComponent,
    StudentlistComponent,
    EditstudentComponent

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    RouterModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    HttpClientModule


  ]
})
export class StudentModule { }
