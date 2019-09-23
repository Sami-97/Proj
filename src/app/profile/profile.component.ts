import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Post} from '../useful/Post.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 private selectedFile: any;
 private  listFiles = [];
// private  pathImg ;
  constructor() { }

  ngOnInit() {
    // this.pathImg = '" \assets\img\"';
   }
  onFileSelected(event) {
    console.log('event', event);
    this.selectedFile = event.target.files[0];
    this.listFiles.push(this.selectedFile);
    console.log('thiss.selectedFile', this.listFiles);  }
  onUpload() {
    const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
