//RENDERIZACIÓN

const contCategorias = document.getElementById("contCategorias")

export const renderCategories = array => {

    const colorCategories = [
      "italia",
      "asia",
      "america",
      "mexico",
      "mediterraneo",
      "pakistani",
      "japon",
      "marruecos",
      "korea",
      "grecia"
    ];
    
    for(let i=0; i<array.length; i++){

        let categoryCard = document.createElement("div")
        categoryCard.classList.add("card-category", "df", "columna", "centerY")
        
        categoryCard.innerHTML = `
            <img src="${array[i].image}" alt="">
            <h3 class=${colorCategories[i]}>${array[i].name}</h3>

        `
        console.log(categoryCard)
        contCategorias.appendChild(categoryCard)
    }
} 