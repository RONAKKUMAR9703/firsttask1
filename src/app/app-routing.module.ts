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
import { PermissionGuard } from './permission.guard';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent,canActivate:[CanDeactivate]},
  {path:'home', component:HomeComponent ,canActivate:[CanActivate],children:[
    {path:'employee', component:EmployeeComponent, data:{permission:["superAdmin","Admin","baseUser"]},canActivate:[PermissionGuard]},
    {path:'company', component:CompanyComponent,data:{permission:["superAdmin","Admin"]},canActivate:[PermissionGuard]},
    {path:'branch', component:BranchComponent,data:{permission:["superAdmin"]},canActivate:[PermissionGuard]},
  ]},
  {path:'signUp' ,component:SignUpComponent},
  {path:'login/signUp' ,redirectTo:'signUp',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
