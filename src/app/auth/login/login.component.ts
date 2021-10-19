import { User } from './../../models/user';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private loginUser: User = new User();
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}
  loginForm = this.fb.group({
    UserName: ['',Validators.required],
    Password: ['',Validators.required],
  });
  onSubmit() {
    this.loginUser = new User(this.loginForm.value);
    this.accountService.Login(this.loginUser)

    console.log(this.loginForm, this.loginForm);
  }
}
