import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }
}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}
