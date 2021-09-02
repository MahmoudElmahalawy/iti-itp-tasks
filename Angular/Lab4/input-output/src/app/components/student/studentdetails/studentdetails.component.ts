import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  @Input('xyz') dstd:Student=new Student(0,"",30);
  constructor() { }

  ngOnInit(): void {
  }

}
