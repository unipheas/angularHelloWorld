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
    this.service.getAll()
      .subscribe( posts => this.posts = posts );
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.json().id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          const index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            console.log('This post has already been deleted');
          } else {
            throw error;
          }
        });
  }
}
