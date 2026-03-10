import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { AdminPage } from './admin-page/admin-page';
import { adminControllerGuard } from './guards/admin-controller-guard';
import { StudentDetails } from './student-details/student-details';
import { Failure } from './failure/failure';
import { studentDetailGuard } from './guards/student-detail-guard';
import { Welcome } from './welcome/welcome';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'login', component: Login },
  {
    path: 'admin-page',
    component: AdminPage,
    canActivate: [adminControllerGuard],
    data: ['Admin'],
  },
  {
    path: 'student-details',
    component: StudentDetails,
    canActivate: [studentDetailGuard],
    data: ['Staff', 'Admin'],
  },
  { path: 'failure', component: Failure },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
