import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  s:boolean=true;
  title:string = 'Demo2';
  flag:boolean=false;
  @ViewChild('t2') xt:ElementRef|undefined;
  myfun2(){ 
      console.log(this.xt?.nativeElement.value);
  }
  myfun(s:string){
    this.title=s;
  }
}
