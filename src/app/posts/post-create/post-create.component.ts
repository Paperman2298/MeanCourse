import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  newPost = 'Prueba';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost = () => {
    this.newPost = 'The user\'s post';
  }

}
