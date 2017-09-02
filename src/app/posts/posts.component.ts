import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response.json();
        },
        error => {
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.service.createPosts(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            console.log(error);
          }
        });
  }

  updatePost(post) {
    this.service.updatePosts(post)
      .subscribe(
        response => {
          console.log(response.json());
        },
        error => {
          console.log(error);
        });
  }

  deletePost(post) {
    this.service.deletePosts(231)
      .subscribe(
        response => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          console.log(response);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            console.log('This post has already been deleted');
          } else {
            console.log(error);
          }
        });
  }
}
