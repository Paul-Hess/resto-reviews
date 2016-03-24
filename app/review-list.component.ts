import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { ReviewComponent } from './review.component';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  directives: [ReviewComponent],
  inputs: ['reviewList'],
  template: `
    <review class="review-item" *ngFor="#review of reviewList" [currentReview]="review"></review>
  `
})

export class ReviewListComponent {
reviewList: Review[];
}
