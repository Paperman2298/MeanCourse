import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost = () => {
    alert('Post added');
  }

}
