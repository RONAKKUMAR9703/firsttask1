import { Component, OnInit } from '@angular/core';
import { HomeDataService, User } from '../homeShared/home-data.service';

import {  map } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  userArray: User[] = [];
  flag: boolean = false;

  constructor(private dataSer: HomeDataService) { }

  ngOnInit() {
    this.dataSer.fav.pipe(
      map(
        n => {
          if (n.Id == "2") {
            alert("value is 2 ")
            return n;
          }
          return n;
        }

      )
    )
      .subscribe((item: User) => {
        this.userArray.push(item);
      })
  }
}


