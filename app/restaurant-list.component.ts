import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { Review } from './review.model';
import { CuisinePipe} from './cuisine.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['rList'],
  pipes: [CuisinePipe],
  directives: [RestaurantComponent],
  template: `
    <form class="form">
    <input #findCuisine>
    <button (click)="setFilter(findCuisine.value)">search</button>
    </form>
    <div class="restaurant-list" >
    <restaurant *ngFor="#resto of rList | cuisine:filter" [currentResto]="resto" >
    </restaurant>
    </div>
  `
})

export class RestaurantListComponent {
  rList: Restaurant[];
  filter: string = '';
  addRestaurant(restaurant: Restaurant) {
    this.rList.push(restaurant);
  }
  setFilter(query: string){
    this.filter = query;
  }
}
