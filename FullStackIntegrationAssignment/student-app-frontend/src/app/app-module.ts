import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentDetails } from './components/student-details/student-details';
import { Login } from './components/login/login';
import { AdminPage } from './components/admin-page/admin-page';
import { UserService } from './services/user-service';
import { RoleService } from './services/role-service';
import { Failure } from './components/failure/failure';
import { FormsModule } from '@angular/forms';
import { Welcome } from './components/welcome/welcome';
import { StudentList } from './components/student-list/student-list';
import { SchoolStudents } from './components/school-students/school-students';
import { ResultStudents } from './components/result-students/result-students';
import { Strength } from './components/strength/strength';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { StudentByRegNo } from './components/student-by-reg-no/student-by-reg-no';

@NgModule({
  declarations: [
    App,
    StudentDetails,
    Login,
    AdminPage,
    Failure,
    Welcome,
    StudentList,
    SchoolStudents,
    ResultStudents,
    Strength,
    StudentByRegNo,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, RoleService],
  bootstrap: [App],
})
export class AppModule {}
