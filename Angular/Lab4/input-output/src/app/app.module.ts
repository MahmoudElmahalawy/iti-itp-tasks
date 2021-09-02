import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { DepartmentComponent } from './components/department/department.component';
import { StudentdetailsComponent } from './components/student/studentdetails/studentdetails.component';
import { StudentaddComponent } from './components/student/studentadd/studentadd.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,
    StudentdetailsComponent,
    StudentaddComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
