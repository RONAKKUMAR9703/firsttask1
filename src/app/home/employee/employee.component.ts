import { Component, DoCheck, OnInit } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';

import { Employee } from '../homeShared/employeeList';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';
import { UserLoginData } from 'src/app/shared/userlogindata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,DoCheck {

  constructor(private dataservice: HomeDataService, private route: ActivatedRoute, private ls: LoginService) {
    this.viewArray = route.snapshot.data['value']
  }
  subscription :  Subscription | undefined;
  viewArray: Employee[] = [];
  EditArray: Employee[] = [];
  filterArr:any[]=[];
  isFilterArray:boolean=false;
  id: number = 0;
  index: number = 0;
  data: string | null = '';
  view: boolean = true;
  datarole: any;
  search=''
  // isPermission:any;
  AuthDelete: boolean = false;


  ngOnInit() {
    this.data = localStorage.getItem('keyPass')
    if (this.data) {
      this.datarole = JSON.parse(this.data)
    }
    this.view=true;

  }


  deleteOpp(val: Employee) {

    this.index = this.viewArray.findIndex((ele) => {
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
    })
    if (this.AuthDelete) {
      this.view = false;
      this.viewArray.splice(this.index, 1)
    }
    else {
      this.viewArray.splice(this.index, 1)
    }
  }

  edit(val: Employee) {
    this.id = this.dataservice.empDetail.findIndex((ele) => {
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
    })
    this.EditArray.push(val);
    console.log(this.EditArray);
    if (this.EditArray.length > 1) {
      this.EditArray.shift();
    }

    this.view = true;
    this.AuthDelete = true;

  }

  formEmployeeEditData(EmpId: string, EmpName: string) {
    this.dataservice.editFunEmp(this.id, EmpId, EmpName);
    this.view = !this.view;
    this.EditArray = [];
    this.AuthDelete = false;
  }

 
    
 
  ngDoCheck() {
    // if () {
      if (this.filterArr.length > 0) {
        this.isFilterArray = true;
      }
      this.dataservice.filterSub.subscribe(i=>{
        console.log(i);
        if(i!==undefined){
        this.search=i
        }
        console.log("search",this.search);
       
      })
 
      this.filterArr=this.viewArray.filter(e=>{
        console.log("",e.EmpName.includes(this.search));
       
        return e.EmpName.toLowerCase().includes(this.search)
      })
  }
 
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
 
  }

