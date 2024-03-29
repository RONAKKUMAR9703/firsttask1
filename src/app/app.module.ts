import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './home/employee/employee.component';
import { CompanyComponent } from './home/company/company.component';
import { BranchComponent } from './home/branch/branch.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavouriteComponent } from './home/favourite/favourite.component';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    SignUpComponent,
    PageNotFoundComponent,
    FavouriteComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
