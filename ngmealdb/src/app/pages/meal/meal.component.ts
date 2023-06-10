import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { get } from 'lodash';
import {Meal, MealRes } from 'src/app/interfaces/meal';
import { MealdbService } from 'src/app/services/mealdb.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  id:any = '';
  meal!:Meal;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private srv:MealdbService){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:any) =>{
      this.id = get(params, 'id', null);
      this.getMeal();
    })
  }

  getMeal(){
    this.srv.mealById(this.id).subscribe((res:MealRes) =>{
      this.meal = res.meals[0];
    })
  }
}
