import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
  ustd: Department = new Department(0, '');
  constructor(
    public r: Router,
    public ar: ActivatedRoute,
    public departmentSer: DepartmentService
  ) {}

  ngOnInit(): void {
    this.ustd = this.departmentSer.GetDepartment(this.ar.snapshot.params['id']);
  }
  Update() {
    this.departmentSer.EdidDepartment(this.ustd);
    this.r.navigateByUrl('/department/list');
  }
}
