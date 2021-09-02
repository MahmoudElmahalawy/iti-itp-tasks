export class Student {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  checkIdFun(newId: number) {
    if (newId > 0) {
      this.id = newId;
    }
  }
}
