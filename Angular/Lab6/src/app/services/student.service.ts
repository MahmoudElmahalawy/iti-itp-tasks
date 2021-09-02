import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentnts: Student[] = [
    new Student(1, "Abdelraheem", 30),
    new Student(2, "Ali", 10),
    new Student(3, "Mai", 15),
  ];

  GetAllStudent() {
    return this.studentnts;
  }
  GetStudent(id: number) {
    for (let i = 0; i < this.studentnts.length; i++) {
      if (this.studentnts[i].id == id)
        return new Student(this.studentnts[i].id, this.studentnts[i].name, this.studentnts[i].age)
    }

    return new Student(0, "", 30);
  }
  AddStudent(std: Student) {
    this.studentnts.push(new Student(std.id, std.name, std.age));
  }
  DeleteStudent(id: number) {
    // let i =0 ;
    // for ( i = 0; i < this.studentnts.length; i++) {
    //   if (this.studentnts[i].id == id)
    //   {
    //   break;
    //   }
    // }
    this.studentnts.splice(id, 1);
  }
  EdidStudent(std: Student) {
    for (let i = 0; i < this.studentnts.length; i++) {
      if (this.studentnts[i].id == std.id) {
        this.studentnts[i].name = std.name;
        this.studentnts[i].age = std.age;
      }
    }
  }
  constructor() { }
}
