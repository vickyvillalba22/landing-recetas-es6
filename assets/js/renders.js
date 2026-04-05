//RENDERIZACIÓN

const contCategorias = document.getElementById("contCategorias")

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

export const renderCategories = array => {
    
    for(let i=0; i<array.length; i++){

        let categoryCard = document.createElement("div")
        categoryCard.classList.add("card-category", "df", "columna", "centerY")
        
        categoryCard.innerHTML = `
            <img src="${array[i].image}" alt="">
            <h3 class=${colorCategories[i]}>${array[i].name}</h3>

        `

        contCategorias.appendChild(categoryCard)
    }
} 

const contRecetas = document.getElementById("contRecetas")

export const renderRecetas = array => {

    console.log(array);

    array.forEach(receta => {

        let cardReceta = document.createElement("div")
        cardReceta.classList.add("card-receta", "vh60", "w20", "df", "columna", "spaceb")

        const contLabels = []
        receta.tags.forEach(label => {
            contLabels.push(`<span>${label}</span>`)
        })
        
        cardReceta.innerHTML = `
        
            <img src="${receta.image}" alt="${receta.name}" class="objCover w100 h50">
            <p>${receta.cuisine}</p>
            <h3>${receta.name}</h3>
            <ul class="df wrap">${contLabels.join("")}</ul>
            <a href="" class="button-style button-verde">
                Detalles 
                <iconify-icon icon="hugeicons:arrow-right-02" class="basic-icon"></iconify-icon>
            </a>

        `
        contRecetas.appendChild(cardReceta)
    });

}