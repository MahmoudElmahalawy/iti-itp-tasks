import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //1- define event over child component
@Output() flagChanged:EventEmitter<boolean>=new EventEmitter<boolean>();
flag:boolean=true;
changeFlag(){
  this.flag=!this.flag;
  //2- fire new event flagchanged
  this.flagChanged.emit(this.flag);
}
 @Input() xyz=500;
  constructor() { }

  ngOnInit(): void {
  }

}
