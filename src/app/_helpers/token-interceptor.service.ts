import { Inject, Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AccountService } from '../services/account.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector,private accountService:AccountService) { }
// Intercept Every REquest Going throught the HTTP client Module
  // intercept(req:any , next:any){
  //   let accountService=this.injector.get(AccountService)
  //   let tokenizedReq = req.clone({
  //     setHeaders:{
  //       Authorization: `Bearer ${accountService.getToken()}`
  //     }
  //   })
  //   return next.handle(tokenizedReq)
  // }
  intercept(req:any,next:any){
    if(this.accountService.isLoggedIn()){
      let tokenizedReq = req.clone({
            setHeaders:{
              Authorization: 'Bearer '+ this.accountService.getToken()
            }
          })
          return next.handle(tokenizedReq)

    }
    else{
      return next.handle(req);
    }
  }
}
