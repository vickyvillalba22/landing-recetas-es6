//RENDERIZACIÓN

const contCategorias = document.getElementById("contCategorias")

export const renderCategories = array => {
    
    for(let i=0; i<array.length; i++){

        let categoryCard = document.createElement("div")
        categoryCard.classList.add("card-category")
        
        categoryCard.innerHTML = `
            <img src="" alt="">
            <h3>${array[i]}</h3>

        `
        console.log(categoryCard)
        contCategorias.appendChild(categoryCard)
    }
} 