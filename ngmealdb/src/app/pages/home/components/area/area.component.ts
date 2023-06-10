import { Component, Input } from '@angular/core';
import { MealdbService } from 'src/app/services/mealdb.service';
import { Area, AreaRes } from 'src/app/interfaces/area';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {

  @Input() areaFormControl!:any;
  areas:Area[] = [];

  constructor(private srv:MealdbService){}

  ngOnInit(){
    this.getAreas()
  }


  getAreas(){
    this.srv.areas().subscribe({
      next:(response:AreaRes)=>{
        this.areas = response.meals;
      }
    })
  }
}
