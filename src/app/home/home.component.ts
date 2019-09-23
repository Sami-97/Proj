import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from '../useful/Post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedFile = null;

  private Post: any;
  posts: Post[] = [];
  @ViewChild('texteInput') textInputRef: ElementRef;

  private Comment: any;
  comments: Comment[] = [];
  @ViewChild('commentInput') commentInputRef: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.selectedFile.push(this.selectedFile);
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
  }
  onPostText() {
    this.Post = this.textInputRef.nativeElement.value;
    this.posts.push(this.Post);

  }
  onPostComment() {

    this.Comment = this.commentInputRef.nativeElement.value;
    this.comments.push(this.Comment);


  }
}





