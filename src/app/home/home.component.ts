import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logOut(){

    localStorage.removeItem('token');
    sessionStorage.removeItem('role')
  }
}
