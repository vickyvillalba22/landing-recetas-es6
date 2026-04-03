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

export const makeArrayCategories = (recipes)=>{

    const arrayCategories = []

    recipes.forEach(recipe => {
        if(!arrayCategories.includes(recipe.cuisine)){
            arrayCategories.push(recipe.cuisine)
        }
    });

    console.log(arrayCategories);
    return arrayCategories
} 

