import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentDetails } from './student-details/student-details';
import { Login } from './login/login';
import { AdminPage } from './admin-page/admin-page';
import { UserService } from './services/user-service';
import { RoleService } from './services/role-service';
import { Failure } from './failure/failure';
import { FormsModule } from '@angular/forms';
import { Welcome } from './welcome/welcome';

@NgModule({
  declarations: [App, StudentDetails, Login, AdminPage, Failure, Welcome],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UserService, RoleService],
  bootstrap: [App],
})
export class AppModule {}
