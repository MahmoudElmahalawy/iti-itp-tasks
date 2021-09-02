import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
})
export class TextboxComponent implements OnInit {
  inputText = '';
  formModelInputText = '';

  bindText(e: any) {
    this.inputText = e.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
