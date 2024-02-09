import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { HomeDataService } from './homeShared/home-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  @Input() search: any

  constructor(private router: Router, private homedataser: HomeDataService) { 
  
  }
  showLoader: boolean = false;
  isFilter: boolean = false;


  logOut() {

    localStorage.removeItem('token');
    sessionStorage.removeItem('role')
  }
  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoader = true;
      }

      if (routerEvent instanceof NavigationEnd
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError
      ) {
        this.showLoader = false;
      }
    })
  }

  filterfun() {
    this.isFilter = !this.isFilter;
  }

  ngDoCheck(){
    console.log("hello",this.search)
    this.homedataser.filterSub.next(this.search)

  }

}

