import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { Review } from './review.model';

@Component({
  selector: 'restaurant-list',
  inputs: ['rList'],
  directives: [RestaurantComponent],
  template: `
      <div class="restaurant-list" >
      <restaurant *ngFor="#resto of rList" [currentResto]="resto" >
      </restaurant>
      </div>
  `
})

export class RestaurantListComponent {
  rList: Restaurant[];
  addRestaurant(restaurant: Restaurant) {
    this.rList.push(restaurant);
  }
}
