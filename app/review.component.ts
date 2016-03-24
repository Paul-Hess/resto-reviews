import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { Review } from './review.model';

@Component({
  selector: 'review',
  inputs: ['currentReview'],
  template: `
  <div>
  {{currentReview.name}}
  {{currentReview.rating}}
  {{currentReview.text}}
  </div>
  `
})

export class ReviewComponent {
  currentReview: Review;
}
