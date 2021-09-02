import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  ustd:Student=new Student(0,"",0);
  constructor(public r:Router, public ar:ActivatedRoute,public studentSer:StudentService) { }

  ngOnInit(): void {
    this.ustd=this.studentSer.GetStudent(this.ar.snapshot.params['id']);
  }
  Update(){
    this.studentSer.EdidStudent(this.ustd);
    this.r.navigateByUrl("/student/list");

  }

}
