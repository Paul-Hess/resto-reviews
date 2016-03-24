import {Component, EventEmitter} from 'angular2/core';
import {Review} from './review.model';
import {Restaurant} from './restaurant.model';


@Component({
  selector: 'add-restaurant',
  outputs: ['newResto'],
  template: `
  <h1 (click)="changeSelection()">Add New Restaurant</h1>
    <form *ngIf="selected" class="add-resto">
      <label>Name</label>
      <input type="text" #name value="New Restaurant" placholder="New Restaurant">
      <label>Cuisine</label>
      <input type="text"  #cuisine value="Cuisine" placholder="Cuisine">
      <label>Address</label>
      <input type="text"  #address value="Address" placholder="Address">
      <label>Price</label>
      <input type="text"  #price value="$" placholder="$">
      <button (click)="createResto(name.value, cuisine.value, address.value, price.value)">Add</button>
    </form>
  `
})

export class CreateRestaurantComponent {
  selected: boolean = false;
  newResto: EventEmitter<Restaurant> = new EventEmitter();
  createResto(name: string, cuisine: string, address: string, price: string) {
    this.newResto.emit(new Restaurant(name, cuisine, address, price));
  }
  changeSelection(){
    this.selected = !this.selected;
  }
}
