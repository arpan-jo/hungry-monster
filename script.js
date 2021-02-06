fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
	.then(response => response.json())
	// .then(data => console.log(data.meals));
	.then(data => showFood(data.meals));

const showFood = foods => {
	foods.forEach(elements => {
		// console.log(elements);
		const container = document.getElementById('food');
		const foodContainer = document.createElement('div');
		const foodName = document.createElement('div');
		foodName.className = 'image-container';
		foodName.innerHTML = `<img id="images" class="image" src="${elements.strMealThumb}" alt="Food Image">
		<p class="food-name">${elements.strMeal}</p>
		<div id="ingredients">
			<p>Ingredients</p>
			<ul>
				<li>${elements.strIngredient1}</li>
				<li>${elements.strIngredient2}</li>
				<li>${elements.strIngredient3}</li>
				<li>${elements.strIngredient4}</li>
				<li>${elements.strIngredient5}</li>
				<li>${elements.strIngredient6}</li>
			</ul>
		</div>
	`;
		// document.getElementById('ingredients').style.display = 'none';
		foodContainer.appendChild(foodName);
		container.appendChild(foodContainer);
	});
};

document.getElementById('images').addEventListener('click', function () {
	document.getElementsByTagName('ul').style.display = 'none';

	console.log('yes');
});
