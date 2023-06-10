import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryRes } from '../interfaces/category';
import { AreaRes } from '../interfaces/area';
import { IngredientRes } from '../interfaces/ingredient';
import { MealRes } from '../interfaces/meal';
@Injectable({
  providedIn: 'root'
})
export class MealdbService {

  endpoint:String = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http:HttpClient) { }

  categories(){
    const url = `${this.endpoint}/list.php?c=list`;
    return this.http.get<CategoryRes>(url);
  }

  areas(){
    const url = `${this.endpoint}/list.php?a=list`;
    return this.http.get<AreaRes>(url);
  }

  ingredients(){
    const url = `${this.endpoint}/list.php?i=list`;
    return this.http.get<IngredientRes>(url);
  }

  random(){
    const url = `${this.endpoint}/random.php`;
    return this.http.get<MealRes>(url);
  }

  searchByName(search:string){
    const url = `${this.endpoint}/search.php?s=${search}`;
    return this.http.get<MealRes>(url);
  }

  filterByCategory(category:string){
    const url = `${this.endpoint}/filter.php?c=${category}`;
    return this.http.get<MealRes>(url);
  }

  filterByArea(area:string){
    const url = `${this.endpoint}/filter.php?a=${area}`;
    return this.http.get<MealRes>(url);
  }

  filterByIngredient(ingredient:string){
    const url = `${this.endpoint}/filter.php?i=${ingredient}`;
    return this.http.get<MealRes>(url);
  }

  mealById(id:any){
    const url = `${this.endpoint}/lookup.php?i=${id}`;
    return this.http.get<MealRes>(url);
  }

}
