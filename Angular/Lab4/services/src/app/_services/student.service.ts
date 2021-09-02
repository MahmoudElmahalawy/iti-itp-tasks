import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'aly', 30),
    new Student(2, 'mohamed', 10),
    new Student(3, 'sara', 20),
  ];
  GetAllStudents() {
    return this.students;
  }
  AddStudent(std: Student) {
    this.students.push(new Student(std.id, std.name, std.age));
  }
  GetStudent(id: number): Student | null {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) return this.students[i];
    }
    return null;
  }
  DeleteStudent(id: number) {
    let studentIndex = this.students.findIndex((student) => student.id == id);
    this.students.splice(studentIndex, 1);
    //
  }
  EditStudent(std: Student) {
    //
  }
  constructor() {}
}
