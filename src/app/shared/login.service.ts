import { Injectable } from '@angular/core';
import { UserLoginData } from './userlogindata';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor() { }
  // isUserLogedIn:boolean=false;


authentication()
{
  return localStorage.getItem('token')
}
 
data:UserLoginData[]=[
    {UserName:"ronak@123",pass:"12345",role:"superAdmin"},
    {UserName:"urvish@123",pass:"12345",role:"Admin"},
    {UserName:"shubham@123",pass:"12345",role:"baseUser"},
    {UserName:"rushi@123",pass:"12345",role:"baseUser"},
    {UserName:"jay@123",pass:"12345",role:"baseUser"}
  ]
}
