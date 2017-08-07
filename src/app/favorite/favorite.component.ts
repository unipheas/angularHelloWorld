import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit( {newValue: this.isFavorite} );
  }
}

export interface FavoriteChangedEventArgs { newValue: boolean; }
