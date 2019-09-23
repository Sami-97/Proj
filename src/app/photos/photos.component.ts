import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
private pathImage: any;
  constructor() { }

  ngOnInit() {
    this.pathImage = '/src/assets/img/sample1.jpg';
  }

}
