import { Component, Input } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';
import { isEmpty } from 'lodash';
@Component({
  selector: 'app-meal-ingredients',
  templateUrl: './meal-ingredients.component.html',
  styleUrls: ['./meal-ingredients.component.scss']
})
export class MealIngredientsComponent {

  @Input() meal!:any;

  ingredients:any[] = [];
  ngOnInit(){
    for(let i = 1; i < 22; i++){
      const temp = {
        name: this.meal['strIngredient'+i],
        measure: this.meal['strMeasure'+i],
      }
      if(!isEmpty(temp.name)){
        this.ingredients.push(temp);
      }
    }
    console.log(this.ingredients)
  }

  getIngredientImage(ingredient:any){
    return `https://www.themealdb.com/images/ingredients/${ingredient.name}.png`
    }
}
