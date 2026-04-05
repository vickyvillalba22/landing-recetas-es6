import { getDetails } from "./data.js";
import { rendering } from "./renderDetails.js";

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

console.log(id);

const recipe = async (id)=>{
    try {
        const recipe = await getDetails(id)
        console.log(recipe);
        rendering(recipe)
        
    } catch (error) {
        console.error ("error en la ejecucion de datos de la receta: ", error)
    }
}

recipe(id)

