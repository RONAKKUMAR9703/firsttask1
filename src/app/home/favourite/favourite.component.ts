import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeDataService, User } from '../homeShared/home-data.service';
import { Branch } from '../homeShared/branchlist';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

 
  // userarray2:User={EmpName: '', Id: '', CompanyName: '', BranchName: ''};
  arr:User[]=this.dataser.userarray;
  flag:boolean=false;
  constructor(private dataser:HomeDataService){}

  ngOnInit() {
    
  
    this.dataser.fav.subscribe((item:User)=>{
      
        this.dataser.receiveData(item)
      console.log(this.arr)
    })
}


}
