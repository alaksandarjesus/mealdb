import { Component, Input } from '@angular/core';
import { MealdbService } from 'src/app/services/mealdb.service';
import { Category, CategoryRes } from 'src/app/interfaces/category';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  @Input() categoryFormControl!:any;
  categories:Category[] = [];

  constructor(private srv:MealdbService){}

  ngOnInit(){
    this.getCategories()
  }


  getCategories(){
    this.srv.categories().subscribe({
      next:(response:CategoryRes)=>{
        this.categories = response.meals;
      }
    })
  }
}
