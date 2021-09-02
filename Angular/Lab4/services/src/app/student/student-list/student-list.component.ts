import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[]=[];
  constructor(public studentSer:StudentService) { 

  }
  load(){
    this.students=this.studentSer.GetAllStudents();
  }
  delete(id:number){
    //confirm
    this.studentSer.DeleteStudent(id);
  }

  ngOnInit(): void {
  }

}
