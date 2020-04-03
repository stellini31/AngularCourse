import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
      this.likesCount += (this.isActive) ? -1: 1;
      this.isActive = !this.isActive;
  }

}