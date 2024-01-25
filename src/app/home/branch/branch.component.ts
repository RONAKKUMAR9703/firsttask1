import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';
import { Branch } from '../homeShared/branchlist';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  constructor(private dataService :HomeDataService){}

  viewArray1:Branch[]=this.dataService.viewBranchData();
  EditArray:Branch[]=[];
  id:number=0;
  index:number=0;
  view:boolean=true;
  data:any;
  dataRole:any

  ngOnInit() {
    this.data=localStorage.getItem('keyPass')

    this.dataRole=JSON.parse(this.data)
  
    this.view=true;
  }
  


  deleteOpp(val:Branch){
  
    this.index= this.viewArray1.findIndex(ele=>{
      return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
    })
    this.viewArray1.splice(this.index,1)

  }
  edit(val:Branch){
    this.id = this.dataService.branchDetail.findIndex((ele)=>{
      return ele.BranchId === val.BranchId && ele.BranchName === val.BranchName
      })
      this.EditArray.push(val);
      this.view=true;
    
    
  }
  formBranchEditData(BranchId:string,BranchName:string){
    this.dataService.editFunBranch(this.id,BranchName,BranchId);
    this.view=!this.view;
    this.EditArray=[]
  }

}
