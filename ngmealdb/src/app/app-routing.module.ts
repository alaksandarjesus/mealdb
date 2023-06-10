import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MealComponent } from './pages/meal/meal.component';
const routes: Routes = [
  {
    path: '', component:HomeComponent,
  },{
    path: 'meal/:id', component:MealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
