import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:any;
  constructor() { 
    this.data = {
      datasets: [{
          data: [
              5,
              9,
              7,
              3,
             
          ],
          backgroundColor: [
              "#FF6384",
              "#4BC0C0",
              "#FFCE56",
              "#E7E9ED",
              
          ],
          label: 'My dataset'
      }],
      labels: [
          "Data 1",
          "Data 2",
          "Data 3",
          "Data 4",
          
      ]
  }
}
  

  ngOnInit(): void {
  }

}
