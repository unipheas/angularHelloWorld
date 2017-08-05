import { AuthorsService } from './authors.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  authorsNumber: number;

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
    this.authorsNumber = authorService.getAuthors().length;
  }

  ngOnInit() {

  }

}
