import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router,Event } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router :Router){}
  showLoader:boolean=false
  logOut(){

    localStorage.removeItem('token');
    sessionStorage.removeItem('role')
  }
  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart){
        this.showLoader = true;
      }

      if(routerEvent instanceof NavigationEnd 
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError
        )
      {
        this.showLoader = false;
      }
    })
  }
  }

