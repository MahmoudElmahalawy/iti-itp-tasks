import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { DepartmentAddComponent } from './components/department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './components/department/department-details/department-details.component';
import { DepartmentEditComponent } from './components/department/department-edit/department-edit.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'student/list', component: StudentListComponent },
  { path: 'student/add', component: StudentAddComponent },
  { path: 'student/details/:id', component: StudentDetailsComponent },
  { path: 'student/edit/:id', component: StudentEditComponent },
  { path: 'department/list', component: DepartmentListComponent },
  { path: 'department/add', component: DepartmentAddComponent },
  { path: 'department/details/:id', component: DepartmentDetailsComponent },
  { path: 'department/edit/:id', component: DepartmentEditComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//home load home component
