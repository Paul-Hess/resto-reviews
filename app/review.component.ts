import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'review',
  inputs: ['currentReview'],
  template: `
    <p> User: {{currentReview.userName}} </p>
    <p> Rating: {{currentReview.rating}} </p>
    <p> Review: {{currentReview.text}} </p>
    <p> Wait time: {{currentReview.wait}} </p>
  `
})

export class ReviewComponent {
  currentReview: Review;
}
