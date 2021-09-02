import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
 
})
export class StudentAddComponent implements OnInit {

  nstd:Student=new Student(0,"",30);
  constructor(public studentSer:StudentService,public router:Router) { }
  Save(){
    
    this.studentSer.AddStudent(this.nstd);
    //navigation by code student list
    this.router.navigateByUrl("/student/list");

  }

  ngOnInit(): void {
  }

}
