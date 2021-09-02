import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  constructor(public departmentSer: DepartmentService) {}
  Load() {
    this.departments = this.departmentSer.GetAllDepartment();
  }
  Delete(id: number) {
    this.departmentSer.DeleteDepartment(id);
  }
  ngOnInit(): void {
    this.departments = this.departmentSer.GetAllDepartment();
  }
}
