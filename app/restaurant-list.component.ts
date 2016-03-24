import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { CreateRestaurantComponent } from './create-restaurant.component';
import { Review } from './review.model';
import { CuisinePipe} from './cuisine.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['rList'],
  pipes: [CuisinePipe],
  directives: [RestaurantComponent, CreateRestaurantComponent],
  template: `
    <form class="search-form">
      <label for="search">search by cuisine</label>
      <input id="search" placeholder="modernist scandinavian " #findCuisine>
      <button (click)="setFilter(findCuisine.value)">search</button>
    </form>
    <div class="restaurant-list" >
    <restaurant  *ngFor="#resto of rList | cuisine:filter" [currentResto]="resto" (deleteResto)="destroyResto($event)" >
    </restaurant>
    <add-restaurant (newResto)="addRestaurant($event)"></add-restaurant>
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
  destroyResto(resto: Restaurant) {
    this.rList.splice(this.rList.indexOf(resto), 1);
  }
}
