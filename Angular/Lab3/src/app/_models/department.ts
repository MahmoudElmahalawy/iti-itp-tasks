export class Department {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  checkIdFun(newId: number) {
    if (newId > 0) {
      this.id = newId;
    }
  }
}
