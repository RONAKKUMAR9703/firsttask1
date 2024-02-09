import { Component, ViewChild } from '@angular/core';
import { HomeDataService, User } from '../homeShared/home-data.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../homeShared/employeeList';
import { Company } from '../homeShared/companylist';
import { Branch } from '../homeShared/branchlist';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor( private HomeSer :HomeDataService ,private  route :Router){}

  @ViewChild('formData') signupForm ?:NgForm  



  empObj:Employee={ EmpName: "", EmpId: "" };
  branchObj:Branch={ BranchName: "", BranchId: "" };
  comObj:Company={ CompanyName: "", CompanyId: "" };



  addEmployee(data:User){

    if(this.signupForm?.valid){

    this.empObj.EmpId=data.Id;
    this.branchObj.BranchId=data.Id;
    this.comObj.CompanyId=data.Id;
    this.branchObj.BranchName=data.BranchName;
    this.empObj.EmpName=data.EmpName;
    this.comObj.CompanyName=data.CompanyName;

    this.HomeSer.userDetail.push(data);
    this.HomeSer.empDetail.push(this.empObj)
    this.HomeSer.branchDetail.push(this.branchObj)

    this.HomeSer.companyDetail.push(this.comObj)

    console.log(this.empObj);
    console.log(this.HomeSer.empDetail);
    
    
   this.signupForm?.reset()
   this.route.navigate(["/home"])
    }


    else{
      alert("Please Enter All Valid Information ")
    }
  }

  resetFun(){
    this.signupForm?.reset()
  }
  
}
