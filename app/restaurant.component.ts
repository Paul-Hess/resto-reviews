import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';
import { ReviewListComponent } from './review-list.component';

@Component({
  selector: 'restaurant',
  directives: [ReviewListComponent],
  inputs: ['currentResto'],
  template: `
      <h1 (click)="changeSelection(info)">{{currentResto.name}}</h1>
      <div *ngIf="infoSelected">
        {{ currentResto.address }}
        {{ currentResto.rating}}
        {{currentResto.cuisine}}
        {{currentResto.pricePoint}}
        <button (click)="changeSelection()">Show Reviews</button>
      </div>
      <review-list *ngIf="reviewsSelected" [reviewList]="currentResto.reviews"></review-list>
  `
})

export class RestaurantComponent {
  info: string = 'info';
  currentResto: Restaurant;
  infoSelected: boolean = false;
  reviewsSelected: boolean = false;
  changeSelection(category?: string) {
    category === 'info'? this.infoSelected = !this.infoSelected : this.reviewsSelected = !this.reviewsSelected;
  }
}
