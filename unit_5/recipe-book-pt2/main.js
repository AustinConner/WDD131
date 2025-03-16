import recipes from './recipes.mjs';
import template from './templates.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    console.log(randomNum);
    return list[randomNum];
}

// to test
const randomRecipe = getRandomListEntry(recipes);

console.log(randomRecipe);

// Generate tags and rating using the template functions
const tags = template.tags(randomRecipe.tags);
const recipeRating = template.rating(randomRecipe.rating);

// Select the main element to display the recipe card
const recipeCard = document.querySelector("main");
recipeCard.innerHTML = template.recipe(randomRecipe, recipeRating, tags);

// search
document.getElementById("search").addEventListener("click", function (event) {
    event.preventDefault();
    
    let searchQuery = document.getElementById("searchbar-input");
    searchQuery = (searchQuery.value).toLowerCase();
    console.log(searchQuery);
    
    // Get the filtered recipes and pass them renderRecipies.
    const filteredRecipes = filterRecipes(searchQuery);
    renderRecipes(filteredRecipes);
});

function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            (recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query)));
    });
    
    // sort alphabetically
    const sorted = filtered.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
    return sorted;
}

// put searched recipes on page
function renderRecipes(filteredRecipes) {
    const recipeCardContainer = document.querySelector("main");  // Assuming 'main' is where the recipes are rendered
    recipeCardContainer.innerHTML = "";  // Clear previous results

    filteredRecipes.forEach((recipe) => {
        const tags = template.tags(recipe.tags);
        const recipeRating = template.rating(recipe.rating);
        const recipeTemplate = template.recipe(recipe, recipeRating, tags);
        recipeCardContainer.innerHTML += recipeTemplate;  // Append the rendered recipe to the page
    });
}
