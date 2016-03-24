import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';
import { Review } from './review.model';

@Component ({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <h1> Yelp Schmelp </h1>
    <div class="container">
      <restaurant-list [rList]="restaurants"></restaurant-list>
    </div>
  `
})

export class AppComponent {
  restaurants: Restaurant[] = [];
  constructor(){
    this.restaurants.push(
      new Restaurant('Restaurant0', 'cuisine0', 'address0', '$'),
      new Restaurant('Restaurant1', 'cuisine0', 'address1', '$$'),
      new Restaurant('Restaurant2', 'cuisine1', 'address2', '$'),
      new Restaurant('Restaurant3', 'cuisine3', 'address3', '$$'),
      new Restaurant('Restaurant4', 'cuisine4', 'address4', '$$$'),
      new Restaurant('Restaurant5', 'cuisine4', 'address5', '$'),
      new Restaurant('Restaurant6', 'cuisine2', 'address6', '$$$')
    )
  }
}
