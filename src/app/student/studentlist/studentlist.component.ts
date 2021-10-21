import { HttpErrorResponse } from '@angular/common/http';
import { AccountService } from './../../services/account.service';
import { AdmissionComponent } from './../admission/admission.component';
import { StudentModule } from './../student.module';
import { Student } from './../../models/student';
import { EditstudentComponent } from './../popup/editstudent/editstudent.component';
import { Router } from '@angular/router';
import { ListService } from './../../services/list.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
list:any;
idToDelete:any;
  constructor(private stdList:ListService,private modalService:NgbModal,private accountService:AccountService,private toastrService: NbToastrService) {
    this.stdList.listen().subscribe((m:any)=>{
      console.log(m);
      this.refreshStdList();
    })
   }

  ngOnInit(): void {
   this.refreshStdList();
  }
  deleteBtn(id:number){

   console.log(id);
   if(confirm('Are you sure ?')){
  this.stdList.DeleteStudent(id).subscribe((res)=>{
    alert("Successfully Deleted!")
    this.stdList.filter("Register click");
  },
  (error)=>{
    this.showToast('top-right','warning',error.status,error.error.Message);
    console.log(error.error.Message)
  });
  }
}
LogOutBtn(){
  this.accountService.logout();

}
@Input() public student:Student
AddBtn(){
  const ref = this.modalService.open(AdmissionComponent,{size:'xl'});

}
editBtn(item:Student){
 const ref = this.modalService.open(EditstudentComponent,{size:'xl'});
 this.student = item
  ref.componentInstance.studentModel = this.student;

  ref.result.then((yes)=>{
    console.log("ok Click")
  },
  (cancel)=>{
    console.log("cancel CLick")
  })
}
refreshStdList(){
  this.stdList.getList().subscribe((result)=>{
    console.warn("result",result);
    this.list=result;
  })
}

showToast(position:any, status:any,ErrorTitle?:string,ErrorDesc?:any) {

  this.toastrService.show(
    ErrorDesc,
    ErrorTitle,
    { position, status });
}

}
