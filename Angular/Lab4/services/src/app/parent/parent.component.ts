import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  //4-event handeler
  showdata(x:boolean){
    console.log(x);
  }
  age=900;
  ngOnInit(): void {
  }

}
