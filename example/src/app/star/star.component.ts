import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input('isFavorite') isSeleted: boolean;
  @Output('change') click = new EventEmitter();
  
  constructor() { }

  onClick() {
    this.isSeleted = !this.isSeleted;
    this.click.emit({ newObject : this.isSeleted });
  }
}

export interface FavoriteChangedEventArgs {
  newObject1: boolean;
  newObject2: string;
}