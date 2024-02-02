import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeDataService, User } from '../homeShared/home-data.service';
import { Branch } from '../homeShared/branchlist';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private dataService: HomeDataService, private route: ActivatedRoute, private ls: LoginService) {
    this.viewArray1 = route.snapshot.data['value']
  }
  
  viewArray1: Branch[] = [];
  EditArray: Branch[] = [];
  // userarray:User={EmpName: '', Id: '', CompanyName: '', BranchName: ''};
  id: number = 0;
  index: number = 0;
  userData:object={};
  view: boolean = true;
  data: string | null = '';
  dataRole: any
  // isPermission:any
  AuthDelete: boolean = false;

  ngOnInit() {
    this.data = localStorage.getItem('keyPass')
    if (this.data) {


      this.dataRole = JSON.parse(this.data)
    }
    this.view = true;

    // this.dataService.fav.subscribe(
    //   (data: User) => {
    //     this.subtraction(data);
    //   }
    // )
    
 
   
  }

  deleteOpp(val: Branch) {

    this.index = this.viewArray1.findIndex(ele => {
      return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
    })
    if (this.AuthDelete) {
      this.view = false;
      this.viewArray1.splice(this.index, 1)
    }
    else {
      this.viewArray1.splice(this.index, 1)
    }


  }
  edit(val: Branch) {
    this.id = this.dataService.branchDetail.findIndex((ele) => {
      return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
    })
    this.EditArray.push(val);
    if (this.EditArray.length > 1) {
      this.EditArray.shift();
    }
    this.view = true;
    this.AuthDelete = true;

  }
  formBranchEditData(BranchId: string, BranchName: string) {
    this.dataService.editFunBranch(this.id, BranchName, BranchId);
    this.view = !this.view;
    this.EditArray = [];
    this.AuthDelete = false;
  }

  favOpp(data:Branch){
    this.dataService.userDetail.filter((item:User)=>{
    if(item.Id===data.BranchId){
      this.dataService.receive(item)
      // console.log(item)
      
    }
        
        
    

    })


  }

}
