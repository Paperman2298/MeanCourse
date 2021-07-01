import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    // Show spinner
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        // Hide spinner
        this.isLoading = false;
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  onDelete = (postId: string) => {
    this.postsService.deletePost(postId);
  }

}
