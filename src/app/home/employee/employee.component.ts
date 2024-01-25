import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';

import { Employee } from '../homeShared/employeeList';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private dataservice :HomeDataService){}

  viewArray:Employee[]=this.dataservice.viewEmployeeData();
  EditArray:Employee[]=[];
  id:number=0;
  index:number =0;
  data:any;
  view:boolean=true;
  datarole:any;


  ngOnInit() {
    this.data=localStorage.getItem('keyPass')

    this.datarole=JSON.parse(this.data)
    
    this.view=true;
  }


  delete(val:Employee){
    
    this.index=this.viewArray.findIndex((ele)=>{
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
      })
    this.viewArray.splice(this.index,1)

  }

  edit(val:Employee){
    this.id = this.dataservice.empDetail.findIndex((ele)=>{
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
      })
      this.EditArray.push(val);
      this.view=true;
    
  }

  formEmployeeEditData(EmpId:string,EmpName:string){
    this.dataservice.editFunEmp(this.id,EmpId,EmpName);
    this.view=!this.view;
    this.EditArray=[];
  }
}
