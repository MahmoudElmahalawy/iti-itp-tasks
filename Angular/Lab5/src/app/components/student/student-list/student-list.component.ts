import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  constructor(public studentSer: StudentService) {}
  Load() {
    this.students = this.studentSer.GetAllStudent();
  }
  Delete(id: number) {
    this.studentSer.DeleteStudent(id);
  }
  ngOnInit(): void {
    this.students = this.studentSer.GetAllStudent();
  }
}
