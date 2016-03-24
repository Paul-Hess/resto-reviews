import {Component, EventEmitter} from 'angular2/core';
import {Review} from './review.model';
import {Restaurant} from './restaurant.model';


@Component({
  selector: 'add-review',
  outputs: ['newReview'],
  template: `
    <form>
      <label>Your Name:
        <input type="text" #userName value="Anonymous" placholder="Anonymous">
      </label>
      <label>Your Rating:
        <input type="range" min="1" max="5" #rating>
      </label>
      <label>Wait Time:
        <input type="number" #wait value="5" placholder="5">
      </label>
      <button (click)="createReview(userName.value, rating.value, wait.value)">Submit Review</button>
    </form>
  `
})

export class CreateReviewComponent {
  newReview: EventEmitter<Review> = new EventEmitter();
  createReview(name: string, rating: string, wait: string) {
    let ratingNum = parseInt(rating);
    let waitNum = parseInt(wait)
    this.newReview.emit(new Review(name, ratingNum, waitNum));
  }

}
