import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { BranchComponent } from './home/branch/branch.component';
import { CompanyComponent } from './home/company/company.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { CanActivate } from './shared/canActivate.guard';
import { CanDeactivate } from './home/homeShared/CanDeactivate.guard';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent,canActivate:[CanDeactivate]},
  {path:'home', component:HomeComponent ,canActivate:[CanActivate],children:[
    {path:'employee', component:EmployeeComponent},
    {path:'company', component:CompanyComponent},
    {path:'branch', component:BranchComponent},
  ]},
  {path:'signUp' ,component:SignUpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
