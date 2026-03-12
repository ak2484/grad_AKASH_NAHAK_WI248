import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { AdminPage } from './components/admin-page/admin-page';
import { roleControllerGuard } from './guards/role-controller-guard';
import { StudentDetails } from './components/student-details/student-details';
import { Failure } from './components/failure/failure';
import { Welcome } from './components/welcome/welcome';
import { SchoolStudents } from './components/school-students/school-students';
import { ResultStudents } from './components/result-students/result-students';
import { Strength } from './components/strength/strength';
import { StudentByRegNo } from './components/student-by-reg-no/student-by-reg-no';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'login', component: Login },
  {
    path: 'admin-page',
    component: AdminPage,
    canActivate: [roleControllerGuard],
    data: { roles: ['Admin'] },
  },
  {
    path: 'student-details',
    component: StudentDetails,
    canActivate: [roleControllerGuard],
    data: { roles: ['Staff'] },
  },
  {
    path: 'student-by-regNo',
    component: StudentByRegNo,
    canActivate: [roleControllerGuard],
    data: { roles: ['Staff', 'Admin'] },
  },
  { path: 'failure', component: Failure },
  {
    path: 'school-students',
    component: SchoolStudents,
    canActivate: [roleControllerGuard],
    data: { roles: ['Staff', 'Admin'] },
  },
  {
    path: 'result-students',
    component: ResultStudents,
    canActivate: [roleControllerGuard],
    data: { roles: ['Staff', 'Admin'] },
  },
  {
    path: 'strength',
    component: Strength,
    canActivate: [roleControllerGuard],
    data: { roles: ['Staff', 'Admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
