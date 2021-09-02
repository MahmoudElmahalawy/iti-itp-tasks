import { Component } from '@angular/core';
import { Department } from '../../_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  // age = 25;
  departments: Department[] = [
    new Department(61, 'DEP1'),
    new Department(16, 'DEP2'),
    new Department(98, 'DEP3'),
    new Department(11, 'DEP4'),
  ];
  //showAddBlock
  newDepartment: Department = new Department(0, '');
  addFlag = true;
  btnLabel = 'Show Add Form';
  showAddBlock() {
    this.addFlag = !this.addFlag;
    if (this.addFlag == true) {
      this.btnLabel = 'Show Add Form';
    } else {
      this.btnLabel = 'Hide Add Form';
    }
  }
  //ADD NEW Department
  addDepartment() {
    this.departments.push(
      new Department(this.newDepartment.id, this.newDepartment.name)
    );
    this.addFlag = !this.addFlag;
    this.btnLabel = 'Show Add Form';
  }

  //DELETE Department
  deleteDepartment(index: number) {
    if (confirm('Are you sure you want to delete this Department?')) {
      console.log(index);
      this.departments.splice(index, 1);
    }
  }

  //EDIT Department
  selectedDepartment = new Department(0, '');
  editFlag = true;

  editDepartment(id: number) {
    console.log(id);
    this.editFlag = !this.editFlag;
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) {
        this.selectedDepartment = this.departments[i];
        this.editFlag = false;
        break;
      }
    }
  }
  //saveEdit
  saveEdit() {
    this.editFlag = true;
  }

  //Department DETAILS
  detailDepartment = new Department(0, '');
  detailsFlag = true;
  showDepartment(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) {
        this.detailDepartment = this.departments[i];
        this.detailsFlag = false;
        break;
      }
    }
  }
  hideDetails() {
    this.detailsFlag = true;
  }

  constructor() {}
}
