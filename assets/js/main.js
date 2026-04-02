import { categories } from "./data.js";

const contCategorias = document.getElementById("contCategorias")

const renderCategories = array => {
    
    for(let category of array){

        let categoryCard = document.createElement("div")
        categoryCard.classList.add("card-category")
        
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>

        `
        console.log(categoryCard)
        contCategorias.appendChild(categoryCard)
    }
} 

renderCategories(categories)