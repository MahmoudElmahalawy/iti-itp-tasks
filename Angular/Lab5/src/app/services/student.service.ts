import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentnts: Student[] = [
    new Student(1, 'aly', 30),
    new Student(2, 'mohamed', 10),
    new Student(3, 'sara', 15),
  ];

  GetAllStudent() {
    return this.studentnts;
  }
  GetStudent(id: number) {
    for (let index = 0; index < this.studentnts.length; index++) {
      if (this.studentnts[index].id == id)
        return new Student(
          this.studentnts[index].id,
          this.studentnts[index].name,
          this.studentnts[index].age
        );
    }

    return new Student(0, '', 30);
  }
  AddStudent(std: Student) {
    this.studentnts.push(new Student(std.id, std.name, std.age));
  }
  DeleteStudent(id: number) {
    this.studentnts.splice(
      this.studentnts.findIndex((s) => s.id == id),
      1
    );
  }
  EdidStudent(std: Student) {
    for (let index = 0; index < this.studentnts.length; index++) {
      if (this.studentnts[index].id == std.id) {
        this.studentnts[index].name = std.name;
        this.studentnts[index].age = std.age;
      }
    }
  }

  constructor() {}
}
