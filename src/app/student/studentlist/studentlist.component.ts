import { StudentModule } from './../student.module';
import { Student } from './../../models/student';
import { EditstudentComponent } from './../popup/editstudent/editstudent.component';
import { Router } from '@angular/router';
import { ListService } from './../../services/list.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
list:any;
idToDelete:any;
  constructor(private stdList:ListService,private modalService:NgbModal) {
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
  this.stdList.DeleteStudent(id).subscribe(res=>{
    alert("Successfully Deleted!")
    this.stdList.filter("Register click");
  });
  }
}
@Input() public student:Student

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

}
