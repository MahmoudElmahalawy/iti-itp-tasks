import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private departmentnts: Department[] = [
    new Department(1, 'Dep1'),
    new Department(2, 'Dep2'),
    new Department(3, 'Dep3'),
  ];

  GetAllDepartment() {
    return this.departmentnts;
  }
  GetDepartment(id: number) {
    for (let index = 0; index < this.departmentnts.length; index++) {
      if (this.departmentnts[index].id == id)
        return new Department(
          this.departmentnts[index].id,
          this.departmentnts[index].name
        );
    }

    return new Department(0, '');
  }
  AddDepartment(std: Department) {
    this.departmentnts.push(new Department(std.id, std.name));
  }
  DeleteDepartment(id: number) {
    this.departmentnts.splice(
      this.departmentnts.findIndex((d) => d.id == id),
      1
    );
  }
  EdidDepartment(std: Department) {
    for (let index = 0; index < this.departmentnts.length; index++) {
      if (this.departmentnts[index].id == std.id) {
        this.departmentnts[index].name = std.name;
      }
    }
  }

  constructor() {}
}
