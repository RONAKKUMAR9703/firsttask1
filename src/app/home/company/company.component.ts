import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../homeShared/home-data.service';
import { Company } from '../homeShared/companylist';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/shared/login.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  constructor(private dataService: HomeDataService, private route: ActivatedRoute, private ls: LoginService) {
    this.viewArray2 = route.snapshot.data['value']
  }

  viewArray2: Company[] = [];
  EditArray: Company[] = [];
  id: number = 0;
  index: number = 0;
  data: string | null = '';
  dataRole: any;
  view: boolean = true;
  // isPermission:any;
  AuthDelete: boolean = false;


  ngOnInit() {

    this.data = localStorage.getItem('keyPass')
    if (this.data) {
      this.dataRole = JSON.parse(this.data)
    }
    this.view = true;

  }



  deleteOpp(val: Company) {

    this.index = this.viewArray2.findIndex((ele) => {
      return ele.CompanyId === val.CompanyId && ele.CompanyName === val.CompanyName
    })
    if (this.AuthDelete) {
      this.view = false;
      this.viewArray2.splice(this.index, 1)
    }
    else {
      this.viewArray2.splice(this.index, 1)
    }
  }

  edit(val: Company) {
    this.id = this.dataService.companyDetail.findIndex((ele) => {
      return ele.CompanyId === val.CompanyId && ele.CompanyName === val.CompanyName
    })
    this.EditArray.push(val);
    if (this.EditArray.length > 1) {
      this.EditArray.shift();
    }
    this.view = true;
    this.AuthDelete = true

  }

  formCompanyEditData(CompanyId: string, CompanyName: string) {
    this.dataService.editFunCom(this.id, CompanyId, CompanyName);
    this.view = !this.view;
    this.EditArray = [];
    this.AuthDelete = false
  }

}
