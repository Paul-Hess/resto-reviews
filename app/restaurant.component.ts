import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';
import { ReviewListComponent } from './review-list.component';
import { EditRestaurantComponent } from './edit-restaurant.component';

@Component({
  selector: 'restaurant',
  directives: [ReviewListComponent, EditRestaurantComponent],
  inputs: ['currentResto'],
  template: `
  <h1 (click)="changeSelection(info)">{{currentResto.name}}</h1>
      <div class="restaurant-item" *ngIf="infoSelected">
         <p> <span>Address:</span> {{ currentResto.address }} </p>
         <p> <span>Average rating:</span> {{ currentResto.rating}} </p>
         <p> <span>Cuisine:</span> {{currentResto.cuisine}} </p>
         <p> <span>Average Price:</span> {{currentResto.pricePoint}} </p>
         <p> <span>Overall Rating:</span> {{currentResto.avgRating}} </p>
         <p> <span>Average Wait Time:</span> {{currentResto.avgWait}} </p>
        <button (click)="changeSelection(reviews)">Show Reviews</button>
        <button (click)="changeSelection()">Edit Record</button>
      </div>
      <edit-resto *ngIf="editSelected" [currentResto]="currentResto"></edit-resto>
      <review-list *ngIf="reviewsSelected" [reviewList]="currentResto.reviews"></review-list>
  `
})

export class RestaurantComponent {
  info: string = 'info';
  reviews: string = 'reviews';
  currentResto: Restaurant;
  infoSelected: boolean = false;
  editSelected: boolean = false;
  reviewsSelected: boolean = false;
  changeSelection(category?: string) {
    category? (category === 'info'? this.infoSelected = !this.infoSelected : this.reviewsSelected = !this.reviewsSelected): this.editSelected = !this.editSelected;
  }
}
