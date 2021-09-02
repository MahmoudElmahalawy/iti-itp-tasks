import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import {ChartModule} from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RatingModule} from 'primeng/rating';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CustomFormsModule } from 'ng2-validation'
import { StudentAddComponent } from './Components/student/student-add/student-add.component';
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { StudentEditComponent } from './Components/student/student-edit/student-edit.component';
import { StudentListComponent } from './Components/student/student-list/student-list.component';
import { DepartmentListComponent } from './Components/department/department-list/department-list.component';
import { DepartmentAddComponent } from './Components/department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './Components/department/department-details/department-details.component';
import { DepartmentEditComponent } from './Components/department/department-edit/department-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    ChartModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
