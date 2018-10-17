import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'Mohamed Sahad KP',
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed : ", eventArgs);  
  }
}
