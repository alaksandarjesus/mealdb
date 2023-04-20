const meal$ = document.querySelector(".meal");
(function () {
  // self invoking function, that will executes on its own when script is loaded

  const id = getParameterByName("id"); // function called from shared.js
  if (!id) {
    // no query is found display error message and return
    renderNoMealIdFound();
    return false;
  }
  fetchMeal(id);
})();

function renderNoMealIdFound() {
  const div$ = document.createElement("div");
  div$.innerText = "No meal id found";
  meal$.appendChild(div$);
}
function renderNoMealIdFound() {
  const div$ = document.createElement("div");
  div$.innerText = "No meal id found";
  meal$.appendChild(div$);
}

function fetchMeal(id) {
  // const url = mealdbapi+'/lookup.php?i='+id; // option 1
   const url = `${mealdbapi}/lookup.php?i=${id}`; // option 2
//   const url = "/assets/meal.json";

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      if (!res.meals || !res.meals.length) {
        renderNoMealIdFound();
        return false;
      }
      renderMeal(res.meals[0]);
    })
    .catch((err) => {
      renderNoMealIdFound();
      return false;
    });
}

function renderMeal(meal) {
  const mealInfo$ = `<div class="row">
    <div class="col md-25">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="col md-75">
        <table class="table">
            <tr>
                <th>Meal</th>
                <td>${meal.strMeal}</td>
            </tr>
            <tr>
                <th>Instructions</th>
                <td>${meal.strInstructions}</td>
            </tr>
            <tr>
            <th>Ingredients</th>
            <td>${getIngredients(meal)}</td>
        </tr>
        </table>
    </div>
</div>`;
  meal$.innerHTML = mealInfo$;
}

function getIngredients(meal) {
  let list$ = "";
  for (let i = 1; i <= 100; i++) {
    if (meal["strIngredient" + i]) {
      list$ += `<div><span>${meal["strIngredient" + i]}</span>`;
      if (meal["strMeasure" + i]) {
        list$ += ` - <span>${meal["strMeasure" + i]}</span>`;
      }
      list$ += `</div>`;
    }
  }
  return list$;
}
