// get foods from search input
const foodInput = () => {
  const foodSearch = document.getElementById("searchFood").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodSearch}`)
    .then(response => response.json())
    .then(data => showFood(data.meals));
  document.getElementById("searchFood").value = "";
};

// show foods after click search
const showFood = foods => {
  const container = document.getElementById("food");
  foods.forEach(elements => {
    const foodContainer = document.createElement("div");

    const foodContainerDiv = `
			<div onclick = "showIngredients('${elements.strMeal}')">
				<img  class="image" src="${elements.strMealThumb}" alt="Food Image">
				<p class="food-name">${elements.strMeal}</p>
			</div>`;
    foodContainer.innerHTML = foodContainerDiv;
    container.appendChild(foodContainer);
  });
};

// show ingredients after click specific food item
const showIngredients = foodName => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(response => response.json())
    .then(data => mealIngredientDetails(data.meals[0]));
};
const mealIngredientDetails = meals => {
  console.log(meals);
  const ingredientDiv = document.getElementById("ingredientDiv");
  ingredientDiv.innerHTML = `
		<div class="ingredient-show">
			<div class="ingredient-div">
				<p class="food-name">${meals.strMeal}</p>
				<img class="ingredientImage" src = "${meals.strMealThumb}">	
			</div>
			<div>
				<ol>
					<li>${meals.strIngredient1}</li>
					<li>${meals.strIngredient2}</li>
					<li>${meals.strIngredient3}</li>
					<li>${meals.strIngredient4}</li>
					<li>${meals.strIngredient5}</li>
					<li>${meals.strIngredient6}</li>
					<li>${meals.strIngredient7}</li>
					<li>${meals.strIngredient8}</li>
					<li>${meals.strIngredient9}</li>
					<li>${meals.strIngredient10}</li>
				</ol>	
			</div>
		</div>
    `;
};
