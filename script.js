const foodInput = () => {
	const foodSearch = document.getElementById('search').value;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodSearch}`)
		.then(response => response.json())
		.then(data => showFood(data.meals));
	document.getElementById('search').value = '';
};

const showFood = foods => {
	const container = document.getElementById('food');
	foods.forEach(elements => {
		const foodContainer = document.createElement('div');

		const foodContainerDiv = `
			<div onclick = "showIngredients('${elements.strMeal}')">
				<img  class="image" src="${elements.strMealThumb}" alt="Food Image">
				<p class="food-name">${elements.strMeal}</p>
			</div>`;

		foodContainer.innerHTML = foodContainerDiv;
		container.appendChild(foodContainer);
	});
};

const showIngredients = foodName => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
		.then(response => response.json())
		.then(data => mealIngredientDetails(data.meals[0]));
};
const mealIngredientDetails = meals => {
	console.log(meals);
	const ingredientDiv = document.getElementById('ingredientDiv');
	ingredientDiv.innerHTML = `
		<div class="ingredient-div">
			<img class="ingredient" src = "${meals.strMealThumb}">
        <h3>${meals.strMeal}</h3>
        <h4>Ingredients</h4>
		  <p>${meals.strIngredient1}</p>
        <p>${meals.strIngredient2}</p>
        <p>${meals.strIngredient3}</p>
        <p>${meals.strIngredient4}</p>
        <p>${meals.strIngredient5}</p>
        <p>${meals.strIngredient6}</p>
        <p>${meals.strIngredient7}</p>
        <p>${meals.strIngredient8}</p>
        <p>${meals.strIngredient9}</p>
        <p>${meals.strIngredient10}</p>
		</div>
    `;
};
