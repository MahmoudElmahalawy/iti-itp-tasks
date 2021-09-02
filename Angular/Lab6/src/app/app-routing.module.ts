import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentAddComponent } from './Components/student/student-add/student-add.component';
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { StudentEditComponent } from './Components/student/student-edit/student-edit.component';
import { StudentListComponent } from './Components/student/student-list/student-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './Components/department/department-details/department-details.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contactus", component: ContactComponent },
  { path: "aboutus", component: AboutComponent },
  { path: "student/list", component: StudentListComponent },
  { path: "student/add", component: StudentAddComponent },
  { path: "student/details/:id", component: StudentDetailsComponent },
  { path: "student/edit/:id", component: StudentEditComponent },
  { path: "department/list", component: DepartmentListComponent },
  { path: "department/add", component: DepartmentAddComponent },
  { path: "department/details/:id", component: DepartmentDetailsComponent },
  { path: "department/edit/:id", component: DepartmentEditComponent },

  { path: "", redirectTo: "home", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
