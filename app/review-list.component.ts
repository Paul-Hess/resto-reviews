import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { ReviewComponent } from './review.component';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  directives: [ReviewComponent],
  inputs: ['reviewList'],
  template: `
  <div *ngFor="#review of reviewList">
    <review [currentReview]="review"></review>
  </div>
  `
})

export class ReviewListComponent {
reviewList: Review[];
}
