import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'review',
  inputs: ['currentReview'],
  template: `
    <p> <span>Submitted by:</span> {{currentReview.userName}} </p>
    <p> <span>Rating:</span> {{currentReview.rating}} </p>
    <p> <span>Wait time:</span> {{currentReview.wait}} </p>
  `
})

export class ReviewComponent {
  currentReview: Review;
}
