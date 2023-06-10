import { Component, Input } from '@angular/core';
import { Meal } from '../../../interfaces/meal';
@Component({
  selector: 'app-meal-meal',
  templateUrl: './meal-meal.component.html',
  styleUrls: ['./meal-meal.component.scss']
})
export class MealMealComponent {

  @Input() meal!:Meal;
}
