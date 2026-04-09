//INICIALIZACIÓN

import { urlRecipes, fetchData, getDetails, makeArrayCategories } from "./data.js";

import { renderCategories, renderRecetas, renderCierre, renderFooter } from "./renders.js";

const init = async () => {

    try {

        const data = await fetchData (urlRecipes)
        const recipes = data.recipes
        
        const categories = makeArrayCategories(recipes)
        renderCategories(categories, recipes)
        
        renderRecetas(recipes)

        renderCierre(recipes)

        renderFooter()

        getDetails(1)

    } catch (error) {
        
        console.error ("error en init: ", error)

    }
}

init()

//HEADER
const header = document.querySelector("header")

window.addEventListener('scroll', ()=>{    
    const scrollY = window.scrollY
    if(scrollY>100){
        header.classList.add("header-fixed")
    } else {
        header.classList.remove("header-fixed")
    }
})
