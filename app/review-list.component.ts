import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { ReviewComponent } from './review.component';
import { CreateReviewComponent } from './create-review.component';
import { Review } from './review.model';

@Component({
  selector: 'review-list',
  directives: [ReviewComponent, CreateReviewComponent],
  inputs: ['currentResto'],
  template: `

    <review class="review-item" *ngFor="#review of currentResto.reviews" [currentReview]="review"></review>
    <add-review class="review-form" (newReview)="addReview($event)"></add-review>
  `
})

export class ReviewListComponent {
currentResto: Restaurant;
addReview(review: Review){
  this.currentResto.reviews.push(review);
  this.currentResto.calcWait();
  this.currentResto.calcRating();

}
}
