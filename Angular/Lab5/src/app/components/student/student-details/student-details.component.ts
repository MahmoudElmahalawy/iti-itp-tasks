import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  dstd:Student|undefined=new Student(0,"",10);
  constructor(public studentSer:StudentService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    //
    this.dstd=this.studentSer.GetStudent(this.ar.snapshot.params['id']);
  }

}
