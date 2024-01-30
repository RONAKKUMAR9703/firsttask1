import { Injectable } from '@angular/core';

import { Employee } from './employeeList';
import { Company } from './companylist';
import { Branch } from './branchlist';


@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor() { }

  // userDetail:HomeItem[]=[
  //   {EmpName: "ronak", EmpId: "1", CompanyName: "BTL", CompanyId: "1", BranchName: "Developer", BranchId: "1"},
  //   {EmpName: "urvish", EmpId: "2", CompanyName: "Google", CompanyId: "2", BranchName: "Sr.Developer", BranchId: "2"},
  //   {EmpName: "manthan", EmpId: "3", CompanyName: "Microsoft", CompanyId: "3", BranchName: "HR", BranchId: "3"},
  //   {EmpName: "dharmik", EmpId: "4", CompanyName: "Oracle", CompanyId: "4", BranchName: "Manager", BranchId: "4"},
  //   {EmpName: "arjun", EmpId: "5", CompanyName: "Apple", CompanyId: "5", BranchName: "QA tester", BranchId: "5"},
  // ]

  empDetail:Employee[]=[
    {EmpName: "ronak", EmpId: "1"},
    {EmpName: "urvish", EmpId: "2"},
    {EmpName: "manthan", EmpId: "3"},
    {EmpName: "dharmik", EmpId: "4"},
    {EmpName: "arjun", EmpId: "5"}

  ];

  companyDetail:Company[]=[
    {CompanyName: "BTL", CompanyId: "1"},
    {CompanyName: "Google", CompanyId: "2"},
    {CompanyName: "Microsoft", CompanyId: "3"},
    {CompanyName: "Oracle", CompanyId: "4"},
    {CompanyName: "Apple", CompanyId: "5"}
  ];

  branchDetail:Branch[]=[
    {BranchName: "Developer", BranchId: "1"},
    {BranchName: "Sr.Developer", BranchId: "2"},
    {BranchName: "HR", BranchId: "3"},
    {BranchName: "Manager", BranchId: "4"},
    {BranchName: "QA tester", BranchId: "5" }
  ]


  viewBranchData()
  {
    return this.branchDetail;
  }
  viewEmployeeData()
  {
    return this.empDetail;
  }
  viewCompanyData()
  {
    return this.companyDetail;
  }

  editFunEmp(refid:number,EmpId:string,EmpName:string){
    this.empDetail.splice(refid,1)
    this.empDetail.splice(refid,0,{EmpName: EmpName, EmpId: EmpId})
    // this.userDetail[]
  }

  editFunBranch(refid:number,BranchName:string,BranchId:string){
    this.branchDetail.splice(refid,1)
    this.branchDetail.splice(refid,0,{BranchName: BranchName, BranchId: BranchId})
    // this.userDetail[]
  }

  editFunCom(refid:number,CompanyId:string,CompanyName:string){
    this.companyDetail.splice(refid,1)
    this.companyDetail.splice(refid,0,{CompanyName: CompanyName, CompanyId: CompanyId})
    // this.userDetail[]
  }
  authentication()
{
  return localStorage.getItem('token')
}
}

