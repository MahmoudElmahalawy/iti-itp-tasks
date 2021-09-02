import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  dstd: Department | undefined = new Department(0, '');
  constructor(
    public departmentSer: DepartmentService,
    public ar: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //
    this.dstd = this.departmentSer.GetDepartment(this.ar.snapshot.params['id']);
  }
}
