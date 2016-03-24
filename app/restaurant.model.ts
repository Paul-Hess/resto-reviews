import { Review } from './review.model';

export class Restaurant {
  reviews: Review[] = [];
  avgRating: number = 0;
  avgWait: number = 0;
  constructor(public name: string, public cuisine: string, public address: string, public pricePoint: string) {
    var rNumber: number = Math.floor(Math.random() * 10);
    for(var i = 0; i< rNumber; i++){
      this.addReview(new Review('user', i, 'text', i));
    }
    this.calcRating();
    this.calcWait();
  }

  addReview(review: Review) {
    this.reviews.push(review);
  }

  calcRating(){
    var total = 0;
    for(var review of this.reviews){
      total += review.rating;
    }
    this.avgRating = total/this.reviews.length;
  }

  calcWait() {
    var total = 0;
    for(var review of this.reviews) {
      total += review.wait;
    }
    this.avgWait = total/this.reviews.length;
  }


}
