const noQuery$ = document.querySelector('.no-query');
const noMeals$ = document.querySelector('.no-meals');
const meals$ = document.querySelector('.meals');
(function(){ // self invoking function, that will executes on its own when script is loaded

    const q = getParameterByName('q'); // function called from shared.js
    if(!q){ // no query is found display error message and return 
        noQuery$.style.display ='block';
        return false;
    }
    fetchMealList(q);

})();

function fetchMealList(q){
     // const url = mealdbapi+'/search.php?q='+q; // option 1
    //  const url = `${mealdbapi}/search.php?s=${q}`; // option 2
    const url = '/assets/list-cheese.json';

     fetch(url)
     .then(res => res.json())
     .then(res => {
         if(!res.meals){
             noMeals$.style.display = 'block';
             return false;
         }
         renderMealCard(res.meals);
     })
     .catch(err => {
         console.log(err)
         
         noMeals$.style.display = 'block';
         return false;
     })
}

function renderMealCard(meals){
    const card$ = meals.map((meal) => {
        return `<div class="col md-33 lg-25">
        <div class="card">
        <div class="meal-thumb" style="background-image:url('${meal.strMealThumb}')"></div>
<a href="meal.html?id=${meal.idMeal}" class="menu-link"><h4>${meal.strMeal}</h4></a>

        </div>
    </div>

</div>`
    })
    const menucards$ = card$.join('');
    mealsRow$ = meals$.querySelector('.row');
    mealsRow$.innerHTML = menucards$;
    meals$.style.display = 'block';
}