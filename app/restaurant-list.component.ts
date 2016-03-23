import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'restaurant-list',
  inputs: ['rList'],
  template: `
      <div class="restaurant-list" >

      </div>
  `
})

export class RestaurantListComponent {
  rList: Restaurant[];

  addRestaurant(restaurant: Restaurant) {
    this.rList.push(restaurant);
  }
}
