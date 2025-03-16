const template = {

    recipe: function(recipe, rating, tags) {
        // build card
        const recipeTemplate = `
        <div class="recipe-card">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}"/>
            <div class="recipe-content">
                <div class="recipe-tags">
                    <ul class="recipe_tags">
                        ${tags}
                    </ul>
                </div>
                <h1 class="recipe-title">${recipe.name}</h1>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating}">
                    ${rating}
                </span>
                <p class="description">${recipe.description}</p>
            </div>
        </div>
        `;
        return recipeTemplate;
    },

    tags: function(tags) {
        console.log("Tags: ", tags);
        let generatedTags = "";
        tags.forEach(function(item) {
            generatedTags += `<li class="recipe-tag">${item}</li>`;
        });
        return generatedTags;
    },

    rating: function(rating) {
        let ratingTemplate = "";
        ratingTemplate += '<span class="rating" role="img" aria-label="Rating">';
    
        let counter = 1;
        for (; counter <= 5; counter++) { // Run the loop 5 times for 5 stars
            if (counter <= rating) {
                ratingTemplate += '<span aria-hidden="true" class="icon-star">⭐</span>'; // Filled star
            } else {
                ratingTemplate += '<span aria-hidden="true" class="icon-star-empty">☆</span>'; // Empty star
            }
        }
    
        ratingTemplate += '</span>';
        console.log(ratingTemplate)
    
        return ratingTemplate;
    }
     
};

export default template;
