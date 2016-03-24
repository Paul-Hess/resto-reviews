import { Component } from 'angular2/core';
import { Restaurant} from './restaurant.model';
import {Review } from './review.model';


@Component({
  selector: 'edit-resto',
  inputs: ['currentResto'],
  template: `
    <form class="editor">
      <label>Name</label>
      <input type="text" [(ngModel)]="currentResto.name">
      <label>Cuisine</label>
      <input type="text" [(ngModel)]="currentResto.cuisine">
      <label>Address</label>
      <input type="text" [(ngModel)]="currentResto.address">
      <label>Price</label>
      <input type="text" [(ngModel)]="currentResto.pricePoint">
    </form>
  `
})
 export class EditRestaurantComponent {
   currentResto: Restaurant;
 }
