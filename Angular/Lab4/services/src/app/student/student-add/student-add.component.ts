import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(public studentSer:StudentService) { 
  }
  nstd:Student=new Student(0,"",0);
  save(){
    this.studentSer.AddStudent(this.nstd);
  }

  ngOnInit(): void {
  }

}
