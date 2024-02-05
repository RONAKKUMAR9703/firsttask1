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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Resolver, Resolver2, Resolver3 } from './resolver.guard';
import { FavouriteComponent } from './home/favourite/favourite.component';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [CanDeactivate] },
  {
    path: 'home', component: HomeComponent, canActivate: [CanActivate], children: [
      { path: 'employee', component: EmployeeComponent, data: { permission: ["superAdmin", "Admin", "baseUser"] }, canActivate: [PermissionGuard], resolve: { value: Resolver } },
      { path: 'company', component: CompanyComponent, data: { permission: ["superAdmin", "Admin"] }, canActivate: [PermissionGuard], resolve: { value: Resolver2 } },
      { path: 'branch', component: BranchComponent, data: { permission: ["superAdmin"] }, canActivate: [PermissionGuard], resolve: { value: Resolver3 } },
    ]
  },
  { path: 'signUp', component: SignUpComponent, canActivate: [CanDeactivate] },
  { path: 'login/signUp', redirectTo: 'signUp', pathMatch: 'full' },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
