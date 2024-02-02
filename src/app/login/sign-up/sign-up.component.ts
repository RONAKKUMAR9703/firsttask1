import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';
import { SignUpData } from './signUpdata';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private logicService: LoginService, private route: Router) { }
  check: boolean = false;
  sameId: boolean = true;

  registerUser(val: SignUpData) {




    this.logicService.data.filter(item => {
      if ((val.UserName == item.UserName)) {
        this.sameId = false;
      }
    })

    if (val.pass == val.cfpass && this.sameId) {
      this.logicService.data.push(val);
      this.route.navigate(["/"])
    }
    else {
      alert('something went wrong')
    }
  }

}

