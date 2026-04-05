//PROCESAMIENTO DE DATOS

export const urlRecipes = "https://dummyjson.com/recipes?limit=20&skip=0"

export const fetchData = async (url) => {

  try {

    const response = await fetch(url)

    if(!response.ok){
      console.error("error en el fetch de recetas", response.status)
    }

    const data = await response.json()
    
    return data

  } catch (error) {

    console.error("fetch error", error)
    
  }
}

export const getDetails = async (id) => {

  try {

    const data = await fetchData (urlRecipes)
    const recipes = data.recipes
    
    const recipe = recipes.find(receta => receta.id == id)
    console.log(recipe);
    
    return recipe

  } catch (error) {
    
    console.error ("error obteniendo detalles de la receta", error)

  }
  
}

export const makeArrayCategories = (recipes) => {

    const arrayCategories = []

    recipes.forEach((recipe, index) => {

        const yaEsta = arrayCategories.some(cat=>cat.name===recipe.cuisine)

        if(!yaEsta){
            arrayCategories.push({
              name: recipe.cuisine,
              image: recipe.image,
              color: ""
            })
        }
        
    });

    return arrayCategories
} 
