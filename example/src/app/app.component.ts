import { Component } from '@angular/core';

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

  onFavoriteChange() {
    console.log("Favorite changed");  
  }
}
