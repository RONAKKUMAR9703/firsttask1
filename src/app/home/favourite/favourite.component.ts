import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeDataService, User } from '../homeShared/home-data.service';
import { Branch } from '../homeShared/branchlist';
import { BehaviorSubject, map, of } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

 
  userarray:User[]=[];
  // arr:User[]=this.dataser.userarray;
  flag:boolean=false;
  // fav:any
  constructor(private dataser:HomeDataService){}


  
  ngOnInit() {


     this.dataser.fav.pipe(
      map(
        n=>{
          if(n.Id=="2")
      {
        alert("value is 2 ")
        return n;
      }
      return n; 
    }
      
      )                                                                     
     )
     
     
     .subscribe((item:User)=>{
      this.userarray.push(item);
      
    
      
    })

  }


    
  
}


