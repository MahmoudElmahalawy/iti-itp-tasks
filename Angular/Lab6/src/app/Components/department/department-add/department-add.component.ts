import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent implements OnInit {
  nstd: Department = new Department(0, '');
  constructor(public departmentSer: DepartmentService, public router: Router) {}
  Save() {
    this.departmentSer.AddDepartment(this.nstd);
    //navigation by code department list
    this.router.navigateByUrl('/department/list');
  }

  ngOnInit(): void {}
}
