import { Component, Input } from '@angular/core';
import { MealdbService } from 'src/app/services/mealdb.service';
import { Ingredient, IngredientRes } from 'src/app/interfaces/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent {

  @Input() ingredientFormControl!:any;
  ingredients:Ingredient[] = [];

  constructor(private srv:MealdbService){}

  ngOnInit(){
    this.getIngredients()
  }


  getIngredients(){
    this.srv.ingredients().subscribe({
      next:(response:IngredientRes)=>{
        this.ingredients = response.meals;
      }
    })
  }
}
