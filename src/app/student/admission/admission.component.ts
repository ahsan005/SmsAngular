import { ListService } from './../../services/list.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {

  private newStudent: Student = new Student();
  constructor(private fb:FormBuilder,private service:ListService) { }

  ngOnInit(): void {

  }

  studentForm = this.fb.group(
    {
      StudentName:[""],
      StudentAge:[""],
      StudentLastName:[""],
      StudentBloodGroup:[""],
      StudentFatherCNIC:[""],
      StudentMobileNumber:[""],
      StudentAddress:[""],
    }
  )
  onSubmit(){
    this.newStudent = new Student(this.studentForm.value)
    this.service.createStudent(this.newStudent).subscribe((result)=>{
      console.log("result",result);
    })
    console.log(this.studentForm,this.newStudent)
  }

}
