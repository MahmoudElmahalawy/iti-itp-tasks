import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {

  @Output() studentAdded:EventEmitter<Student>=new EventEmitter<Student>();
  std=new Student(0,"",30);
  Add(){
    this.studentAdded.emit(new Student(this.std.id,this.std.name,this.std.age));
    //when i want to send data to studnet component
  }
  constructor() { }

  ngOnInit(): void {
  }

}
