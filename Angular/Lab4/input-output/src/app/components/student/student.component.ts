import { Component, OnInit ,Input} from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {

  age=70;
  //student data : array of student
  students:Student[]=[
    new Student(100,"aly",30),
    new Student(200,"ahmed",15),
    new Student(300,"mahmoud",20),
  ];

  save(std:Student){
    this.students.push(std);
  }
  @Input() opflag=false;

  nstd:Student=new Student(0,"",30);
  @Input() nflag=true;

  btnlbl="show add"
  showAdd(){
    this.nflag=!this.nflag;
    if(this.nflag==true){
      this.btnlbl="show add";
    }else{
      this.btnlbl="hide add";
    }
  }

  //operations on lists : crud
  Add(){
    this.students.push(new Student(this.nstd.id,this.nstd.name,this.nstd.age));
    this.nflag=!this.nflag;
    this.btnlbl="show add";
  }


  DeleteStudent(id:number){
    if(confirm("are you sure?")){
    console.log(id);
    let i=0;
    for (i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id)
        break;
    }
    this.students.splice(i,1);
  }
  }

  
  dstd:Student=new Student(0,"",0);
  dflag=true;
  GetStudentDetails(id:number){
    for (let i = 0; i < this.students.length; i++) {
      if(this.students[i].id==id){
        this.dstd=this.students[i];
        this.dflag=false;
        break;
      }
    }
  }
  hideDetails(){
    this.dflag=true;
  }
  constructor() { 

  }

  

}
