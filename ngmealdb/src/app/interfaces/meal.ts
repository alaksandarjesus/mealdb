export interface Meal {
    idMeal: String,
    strMeal: String,
    strMealThumb:String,
    strMealThumbPreview?:String,
    strCategory:String,
    strArea:String;
    strInstructions:String;
}


export interface MealRes{

    meals: Meal[]
}