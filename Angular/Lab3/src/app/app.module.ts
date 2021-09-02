import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from './components/department/department.component';

@NgModule({
  declarations: [AppComponent, StudentComponent, DepartmentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
