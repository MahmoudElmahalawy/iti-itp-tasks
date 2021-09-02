import { Component } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  // age = 25;
  students: Student[] = [
    new Student(161, 'Ahmed', 22),
    new Student(416, 'Ali', 23),
    new Student(298, 'Mohamed', 21),
    new Student(311, 'Khaled', 25),
  ];
  //showAddBlock
  newStudent: Student = new Student(0, '', 0);
  addFlag = true;
  btnLabel = 'Show Add Form';
  showAddBlock() {
    this.addFlag = !this.addFlag;
    if (this.addFlag == true) {
      this.btnLabel = 'Show Add Form';
    } else {
      this.btnLabel = 'Hide Add Form';
    }
  }
  //ADD NEW STUDENT
  addStudent() {
    this.students.push(
      new Student(this.newStudent.id, this.newStudent.name, this.newStudent.age)
    );
    this.addFlag = !this.addFlag;
    this.btnLabel = 'Show Add Form';
  }

  //DELETE STUDENT
  deleteStudent(index: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      console.log(index);
      this.students.splice(index, 1);
    }
  }

  //EDIT STUDENT
  selectedStudent = new Student(0, '', 25);
  editFlag = true;

  editStudent(id: number) {
    console.log(id);
    this.editFlag = !this.editFlag;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.selectedStudent = this.students[i];
        this.editFlag = false;
        break;
      }
    }
  }
  //saveEdit
  saveEdit() {
    this.editFlag = true;
  }

  //STUDENT DETAILS
  detailStudent = new Student(0, '', 25);
  detailsFlag = true;
  showStudent(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.detailStudent = this.students[i];
        this.detailsFlag = false;
        break;
      }
    }
  }
  hideDetails() {
    this.detailsFlag = true;
  }

  constructor() {}
}
