import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component ({
  selector: 'my-app',
  template: `
    <div class="container">

    </div>
  `
})

export class AppComponent {
  restaurants: Restaurant[];
  constructor(){
    this.restaurants.push(
      new Restaurant('Name0', 'cuisine0', 'address0', '$'),
      new Restaurant('Name1', 'cuisine0', 'address1', '$$'),
      new Restaurant('Name2', 'cuisine1', 'address2', '$'),
      new Restaurant('Name3', 'cuisine3', 'address3', '$$'),
      new Restaurant('Name4', 'cuisine4', 'address4', '$$$'),
      new Restaurant('Name5', 'cuisine4', 'address5', '$'),
      new Restaurant('Name6', 'cuisine2', 'address6', '$$$')
    )
  }
}
