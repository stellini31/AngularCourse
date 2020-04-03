import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favourites/favourites.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: '...',
    isLiked: true,
    likesCount: 10
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("changed ", eventArgs);
  }
}
