//RENDERIZACIÓN

//CATEGORÍAS
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

export const renderCategories = (array, fullArray) => {

    const allRecipes = document.getElementById("allRecipes")
    allRecipes.addEventListener('click', ()=>{
        contRecetas.innerHTML = ""
        renderRecetas(fullArray)
    })
    
    for(let i=0; i<array.length; i++){

        let categoryCard = document.createElement("div")
        categoryCard.classList.add("card-category", "df", "columna", "centerY")
        
        categoryCard.innerHTML = `
            <img src="${array[i].image}" alt="">
            <h3 class=${colorCategories[i]}>${array[i].name}</h3>

        `

        categoryCard.addEventListener('click', ()=>{
            contRecetas.innerHTML = ""
            renderRecetas(fullArray, array[i].name)
        })

        contCategorias.appendChild(categoryCard)
    }
} 

//RECETAS
const contRecetas = document.getElementById("contRecetas")

export const renderRecetas = (array, filter = null) => {

    console.log(array);

    let arrayRender = []

    if(filter){
        arrayRender = array.filter(recipe => recipe.cuisine === filter)
    } else {
        arrayRender = array
    }

    arrayRender.forEach(receta => {

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
            <a href="detail.html?id=${receta.id}" class="button-style button-verde">
                Detalles 
                <iconify-icon icon="hugeicons:arrow-right-02" class="basic-icon"></iconify-icon>
            </a>

        `
        contRecetas.appendChild(cardReceta)
    });

}

//IMÁGENES CIERRE
const gridImages = document.getElementById("gridImages")

export const renderCierre = array => {

    for(let i=0; i<3; i++){

        let imagen = document.createElement("img")
        imagen.classList.add("w100", "h100", "objCover")
        
        if (i===1){
            imagen.classList.add("larga")
        }

        imagen.setAttribute("src", `${array[i].image}`)
        gridImages.appendChild(imagen)

    }

}

//ICONOS FOOTER
const contIcons = document.getElementById("contIcons")

const iconsFooter = [
    {
        icon: "hugeicons:internet",
        link: "https://portfolio-villalba.vercel.app/"
    },
    {
        icon: "hugeicons:github",
        link: "https://github.com/vickyvillalba22"
    },
    {
        icon: "hugeicons:linkedin-01",
        link: "https://www.linkedin.com/in/vvillalba/"
    },
]

export const renderFooter = array => {

    iconsFooter.forEach((icon, index)=>{
        let icono = document.createElement("a")
        icono.setAttribute("href", `${iconsFooter[index].link}`)
        icono.innerHTML = `
             <iconify-icon icon="${iconsFooter[index].icon}" class="basic-icon"></iconify-icon>
        `
        contIcons.appendChild(icono)
    })

}
