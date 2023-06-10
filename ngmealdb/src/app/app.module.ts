import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MealComponent } from './pages/meal/meal.component';
import { SearchComponent } from './pages/home/components/search/search.component';
import { CategoriesComponent } from './pages/home/components/categories/categories.component';
import { AreaComponent } from './pages/home/components/area/area.component';
import { IngredientsComponent } from './pages/home/components/ingredients/ingredients.component';
import { MealsComponent } from './pages/home/components/meals/meals.component';
import { MealMealComponent } from './pages/meal/meal-meal/meal-meal.component';
import { MealIngredientsComponent } from './pages/meal/meal-ingredients/meal-ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealComponent,
    SearchComponent,
    CategoriesComponent,
    AreaComponent,
    IngredientsComponent,
    MealsComponent,
    MealMealComponent,
    MealIngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
