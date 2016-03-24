import { Pipe, PipeTransform} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: 'cuisine',
  pure: false
})

export class CuisinePipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var desiredCuisine = args[0];


    return input.filter((restaurant) => {
      return restaurant.cuisine.toLowerCase().indexOf(desiredCuisine) !== -1;
    });
  }
}
