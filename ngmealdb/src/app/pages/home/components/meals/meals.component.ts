import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {

  @Input() meals:Meal[] = [];

  ngOnChanges(){
    this.meals.forEach((meal:Meal) => {
      meal.strMealThumbPreview = meal.strMealThumb+'/preview'
    })
  }
}
