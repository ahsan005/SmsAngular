import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private newUser: User = new User();

  constructor(private fb:FormBuilder,private accountService:AccountService) { }

  ngOnInit(): void {
  }
onSubmit(){
  this.newUser = new User(this.userForm.value)
  this.accountService.AddUser(this.newUser).subscribe((result)=>{
    console.log("result",result);
  })
  console.log(this.userForm,this.newUser);
}
userForm=this.fb.group({
  FirstName:[""],
  LastName:[""],
  UserName:[""],
  Password:[""],
})

}
