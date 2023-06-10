import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounce, debounceTime, forkJoin } from 'rxjs';
import { values, isEmpty, map, filter } from 'lodash';
import { MealdbService } from 'src/app/services/mealdb.service';
import { Meal,MealRes } from 'src/app/interfaces/meal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  randomMealCount:number = 10;
  form = this.fb.group({
    search:[''],
    category: [''],
    area: [''],
    ingredient:['']
  })
  meals:Meal[] = [];
  fetchingMessage = '';
  constructor(private fb:FormBuilder, private srv:MealdbService){

  }

  ngOnInit(){
    this.getMeals();
    this.form.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((res) =>{
      this.getMeals();
    })
  }

  getMeals(){
    const formValues = this.form.value;
    const noValues = isEmpty(values(formValues).filter(v => v));
    this.meals = [];
    if(noValues){
      this.getRandomMeal();
      return;
    }
    this.fetchingMessage = 'Fetching meals by selection';
    this.getMealsByName();
  }
  getMealsByName(){
    const search:any = this.form.get('search')?.value;
    if(isEmpty(search)){
      this.filterByCategory();
      return;
    }
    this.srv.searchByName(search).subscribe({
      next: (res:MealRes)=>{
        this.meals = res.meals;
        this.filterByCategory();
      }
    })
  }


  getRandomMeal(){
    this.fetchingMessage = 'Fetching Random Meals';
    let calls:any[] = [];
    for(let i = 1; i <= this.randomMealCount; i++){
      calls.push(this.srv.random())
    }
    forkJoin(calls).subscribe({
      next: (responses:any[])=>{
        this.fetchingMessage = '';
        this.meals = map(responses, (response:any)=> response.meals[0]);
      }
    })
  }

  filterByCategory(){
    const category:any = this.form.get('category')?.value;
    if(isEmpty(category)){
      this.filterByArea();
      return;
    }
    this.srv.filterByCategory(category).subscribe({
      next: async (res:MealRes)=>{
        const ids = map(res.meals, (meal:Meal)=> meal.idMeal)
        if(isEmpty(this.meals)){
          const meals= await this.getMealByIds(ids);
          meals.subscribe((results:any)=>{
            this.meals = results.map((result:any) => result.meals[0]);
            this.filterByArea();
            return;
          })
        }
        this.meals = filter(this.meals, (meal:Meal) => {
          return ids.indexOf(meal.idMeal) != -1;
        })
        this.filterByArea();
      }
    })
  }

  filterByArea(){
    const area:any = this.form.get('area')?.value;
    if(isEmpty(area)){
      this.filterByIngredient();
      return;
    }
    this.srv.filterByArea(area).subscribe({
      next: async (res:MealRes)=>{
        const ids = map(res.meals, (meal:Meal)=> meal.idMeal)
        if(isEmpty(this.meals)){
          const meals= await this.getMealByIds(ids);
          meals.subscribe((results:any)=>{
            this.meals = results.map((result:any) => result.meals[0]);
            this.filterByIngredient();
            return;
          })
        }
        const mealIds = this.meals.map((meal:any) => meal.idMeal);
        this.meals = filter(this.meals, (meal:Meal) => {
          return ids.indexOf(meal.idMeal) != -1;
        })
        this.filterByIngredient();
      }
    })
  }

  filterByIngredient(){
    const ingredient:any = this.form.get('ingredient')?.value;
    if(isEmpty(ingredient)){
      this.fetchingMessage = '';
      return;
    }
    this.srv.filterByIngredient(ingredient).subscribe({
      next: async (res:MealRes)=>{
        const ids = map(res.meals, (meal:Meal)=> meal.idMeal)
        if(isEmpty(this.meals)){
          const meals= await this.getMealByIds(ids);
          meals.subscribe((results:any)=>{
            this.meals = results.map((result:any) => result.meals[0]);
            return;
          })
        }
        const mealIds = this.meals.map((meal:any) => meal.idMeal);
        this.meals = filter(this.meals, (meal:Meal) => {
          return ids.indexOf(meal.idMeal) != -1;
        })
      }
    })
    this.fetchingMessage = '';
  }

  getMealByIds(ids:any[]){
    let calls = [];
    for(let i = 0; i < ids.length; i++){
      calls.push(this.srv.mealById(ids[i]))
    }
    return forkJoin(calls);
  }

}
