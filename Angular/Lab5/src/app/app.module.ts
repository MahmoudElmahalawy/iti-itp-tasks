import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentAddComponent } from './components/student/student-add/student-add.component';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { StudentEditComponent } from './components/student/student-edit/student-edit.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './components/department/department-add/department-add.component';
import { DepartmentEditComponent } from './components/department/department-edit/department-edit.component';
import { DepartmentDetailsComponent } from './components/department/department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentEditComponent,
    DepartmentDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
