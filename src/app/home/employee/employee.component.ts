import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';

import { Employee } from '../homeShared/employeeList';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dataservice :HomeDataService,private route:ActivatedRoute,private ls:LoginService){
    this.viewArray=route.snapshot.data['value']
  }

  viewArray:Employee[]=[];
  EditArray:Employee[]=[];
  id:number=0;
  index:number =0;
  data:any;
  view:boolean=true;
  datarole:any;
  isPermission:any;
  AuthDelete:boolean=false;


  ngOnInit() {
    this.data=localStorage.getItem('keyPass')

    this.datarole=JSON.parse(this.data)
    
    // this.view=true;
    
  }


  delete(val:Employee){
    
    this.index=this.viewArray.findIndex((ele)=>{
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
      })
      if(this.AuthDelete){
        this.view=false;
    this.viewArray.splice(this.index,1)
      }
      else{
        this.viewArray.splice(this.index,1)
      }
  }

  edit(val:Employee){
    this.id = this.dataservice.empDetail.findIndex((ele)=>{
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
      })
      this.EditArray.push(val);
      console.log(this.EditArray);
      if(this.EditArray.length>1){
        this.EditArray.shift();
      }
      
      this.view=true;
      this.AuthDelete=true;
    
  }

  formEmployeeEditData(EmpId:string,EmpName:string){
    this.dataservice.editFunEmp(this.id,EmpId,EmpName);
    this.view=!this.view;
    this.EditArray=[];
    this.AuthDelete=false;
  }
}
