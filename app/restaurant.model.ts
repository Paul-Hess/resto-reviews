import { Review } from './review.model';

export class Restaurant {
  rating: number = 0;
  reviews: Review[] = [];
  constructor(public name: string, public cuisine: string, public address: string, public pricePoint: string) {
    var review: Review = new Review('hi', 1, 'hi');
    this.addReview(review);
  }

  addReview(review: Review) {
    this.reviews.push(review);
  }

  updateRating(review: Review) {
    this.rating += review.rating;
  }


}
