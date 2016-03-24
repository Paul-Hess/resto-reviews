import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';
import { ReviewListComponent } from './review-list.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { CreateReviewComponent } from './create-review.component';

@Component({
  selector: 'restaurant',
  directives: [ReviewListComponent, EditRestaurantComponent, CreateReviewComponent],
  inputs: ['currentResto'],
  outputs: ['deleteResto'],
  template: `

  <h1 (click)="changeSelection('info')">{{currentResto.name}} <span (click)="removeResto(currentResto)">X</span></h1>
      <div class="restaurant-item" *ngIf="infoSelected">

         <p> <span>Address:</span> {{ currentResto.address }} </p>
         <p> <span>Cuisine:</span> {{currentResto.cuisine}} </p>
         <p> <span>Average Price:</span> {{currentResto.pricePoint}} </p>
         <p> <span>Overall Rating:</span> {{currentResto.avgRating.toFixed(2) }}</p>
         <p> <span>Average Wait Time:</span> {{currentResto.avgWait.toFixed(1) }}</p>

         <button (click)="changeSelection()">Edit Record</button>
         <edit-resto *ngIf="editSelected" [currentResto]="currentResto"></edit-resto>

         <button (click)="changeSelection('saiusa')">Show Reviews</button>
         <h2 *ngIf="reviewsSelected">Reviews</h2>
         <review-list *ngIf="reviewsSelected" [currentResto]="currentResto"></review-list>
      </div>
  `
})

export class RestaurantComponent {
  currentResto: Restaurant;
  infoSelected: boolean = false;
  editSelected: boolean = false;
  reviewsSelected: boolean = false;
  deleteResto: EventEmitter<Restaurant>;
  constructor() {
    this.deleteResto = new EventEmitter();
    }
  changeSelection(category?: string) {
    category? (category === 'info'? this.infoSelected = !this.infoSelected : this.reviewsSelected = !this.reviewsSelected): this.editSelected = !this.editSelected;
    if(!this.infoSelected){
      this.editSelected = false;
      this.reviewsSelected = false;
    }
  }

  change(field: boolean){
    field = !field
  }

  removeResto(resto: Restaurant) {
    this.deleteResto.emit(resto);
  }
}
