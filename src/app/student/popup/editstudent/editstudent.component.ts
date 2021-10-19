import { ListService } from './../../../services/list.service';
import { AccountService } from './../../../services/account.service';
import { Student } from './../../../models/student';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss'],
})
export class EditstudentComponent implements OnInit {

  constructor(private fb: FormBuilder, public modal: NgbActiveModal,private listService:ListService) {}

  // Declarations
  public studentModel: Student;
  studentEditForm:FormGroup;
  private editedStudent: Student = new Student();
  // Declarations

  ngOnInit(): void {
    console.log(this.studentModel);
    this.setForm()
  }

  onSubmit() {
    this.editedStudent = new Student(this.studentEditForm.value)
    this.listService.UpdateStudent(this.editedStudent).subscribe((result)=>{
      console.log("result",result);
      this.modal.close()
      this.listService.filter("Register click")
    })
    console.log(this.studentEditForm,this.editedStudent)
  }

  public setForm() {
    this.studentEditForm = this.fb.group({
      ID: [this.studentModel.ID],
      StudentName: [this.studentModel.StudentName],
      StudentAge: [this.studentModel.StudentAge],
      StudentLastName: [this.studentModel.StudentLastName],
      StudentBloodGroup: [this.studentModel.StudentBloodGroup],
      StudentFatherCNIC: [this.studentModel.StudentFatherCNIC],
      StudentMobileNumber: [this.studentModel.StudentMobileNumber],
      StudentAddress: [this.studentModel.StudentAddress],
    });
  }
}
