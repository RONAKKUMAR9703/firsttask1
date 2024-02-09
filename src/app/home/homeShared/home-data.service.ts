import { Injectable } from '@angular/core';

import { Employee } from './employeeList';
import { Company } from './companylist';
import { Branch } from './branchlist';
import { BehaviorSubject, Observable, Subject } from 'rxjs';



export class User {
  Id: string = ""
  EmpName: string = ""
  CompanyName: string = ""
  BranchName: string = ""
}
@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  userarray: User[] = [];

  constructor() { }

  userDetail: User[] = [
    { Id: "1", EmpName: "ronak", CompanyName: "BTL", BranchName: "Developer" },
    { Id: "2", EmpName: "urvish", CompanyName: "Google", BranchName: "Sr.Developer" },
    { Id: "3", EmpName: "manthan", CompanyName: "Microsoft", BranchName: "HR" },
    { Id: "4", EmpName: "dharmik", CompanyName: "Oracle", BranchName: "Manager" },
    { Id: "5", EmpName: "arjun", CompanyName: "Apple", BranchName: "QA tester" }
  ]

  empDetail: Employee[] = [
    { EmpName: "ronak", EmpId: "1" },
    { EmpName: "urvish", EmpId: "2" },
    { EmpName: "manthan", EmpId: "3" },
    { EmpName: "dharmik", EmpId: "4" },
    { EmpName: "arjun", EmpId: "5" }

  ];

  companyDetail: Company[] = [
    { CompanyName: "BTL", CompanyId: "1" },
    { CompanyName: "Google", CompanyId: "2" },
    { CompanyName: "Microsoft", CompanyId: "3" },
    { CompanyName: "Oracle", CompanyId: "4" },
    { CompanyName: "Apple", CompanyId: "5" }
  ];

  branchDetail: Branch[] = [
    { BranchName: "Developer", BranchId: "1" },
    { BranchName: "Sr.Developer", BranchId: "2" },
    { BranchName: "HR", BranchId: "3" },
    { BranchName: "Manager", BranchId: "4" },
    { BranchName: "QA tester", BranchId: "5" }
  ]


  getallemployee() {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.empDetail);
      }, 1000)
    })
  }

  getallcompany() {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.companyDetail);
      }, 1000)
    })
  }

  getallbranch() {
    return new Observable((sub) => {
      setTimeout(() => {
        sub.next(this.branchDetail);
      }, 1000)
    })
  }

  viewAllData() {
    return this.userDetail;
  }
  viewBranchData() {
    return this.branchDetail;
  }
  viewEmployeeData() {
    return this.empDetail;
  }
  viewCompanyData() {
    return this.companyDetail;
  }

  editFunEmp(refid: number, EmpId: string, EmpName: string) {
    this.empDetail.splice(refid, 1)
    this.empDetail.splice(refid, 0, { EmpName: EmpName, EmpId: EmpId })
    // this.userDetail[]
  }

  editFunBranch(refid: number, BranchName: string, BranchId: string) {
    this.branchDetail.splice(refid, 1)
    this.branchDetail.splice(refid, 0, { BranchName: BranchName, BranchId: BranchId })
    // this.userDetail[]
  }

  editFunCom(refid: number, CompanyId: string, CompanyName: string) {
    this.companyDetail.splice(refid, 1)
    this.companyDetail.splice(refid, 0, { CompanyName: CompanyName, CompanyId: CompanyId })
    // this.userDetail[]
  }


  fav = new BehaviorSubject<User>({ EmpName: "", Id: "", CompanyName: "", BranchName: "" });

  receive(data: User) {

    this.fav.next(data);
  }


  authentication() {
    return localStorage.getItem('token')
  }


  filterSub =new Subject<string>()
}

