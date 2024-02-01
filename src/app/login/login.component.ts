import { Router } from '@angular/router';
import { UserLoginData } from '../shared/userlogindata';
import { Component } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private logService : LoginService){}

  
  
  validateUser(val:UserLoginData)
  {
    this.logService.data.filter((item)=>{
      if(item.UserName=== val.UserName && item.pass === val.pass)
      {

        if(item.role==undefined){
          item.role="baseUser";
        }
        const tokkey="Authkey"
        localStorage.setItem('keyPass',JSON.stringify(item));
        sessionStorage.setItem('role',JSON.stringify(item.role))
        localStorage.setItem('token',JSON.stringify(tokkey));
        this.router.navigate(['home']);
        // this.logService.isUserLogedIn=true;
      }
    })
    
   

    }
}
