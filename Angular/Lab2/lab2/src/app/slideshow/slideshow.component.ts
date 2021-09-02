import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit {
  playStopText: string = 'Play';
  imgSrc: string = '../../assets/images/1.png';
  intervalId: any = 0;

  i: number = 1;

  changeImgSrc() {
    if (this.i > 3) {
      this.i = 1;
    }
    this.imgSrc = `../../assets/images/${this.i}.png`;
    this.i++;
  }

  playSlideshow() {
    console.log('Slideshow played');
    this.intervalId = setInterval(this.changeImgSrc.bind(this), 1000);
  }

  stopSlideshow() {
    clearInterval(this.intervalId);
  }

  constructor() {}

  ngOnInit(): void {}
}
