//INICIALIZACIÓN

import { urlRecipes, fetchData, makeArrayCategories } from "./data.js";

import { renderCategories } from "./renders.js";

const init = async () => {
    try {

        const data = await fetchData (urlRecipes)
        const recipes = data.recipes
        console.log(recipes);
        
        const categories = makeArrayCategories(recipes)
        renderCategories(categories)

    } catch (error) {
        
    }
}

init()
