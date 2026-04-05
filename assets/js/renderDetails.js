const renderInfo = obj => {

    const info = document.getElementById("info")

    const contLabels = []
    obj.tags.forEach(label => {
        contLabels.push(`<span>${label}</span>`)
    })

    const contTypes = []
    obj.mealType.forEach(type => {
        contTypes.push(`<span>${type}</span>`)
    })

    info.innerHTML = `
    
        <div class="df columna gap-16 imagen">
            <img src="${obj.image}" alt="" class="w100 objCover">
            <div class="df spaceb">
                <p>${obj.cuisine}</p>
                <ul class="df wrap w80">${contLabels.join("")}</ul>
            </div>
        </div>

        <div class="df columna gap-16">
            <h2>${obj.name}</h2>
            <ul>${contTypes.join("")}</ul>
        </div>

        <div class="df spacee">
            <div class="df gap-16">
                <iconify-icon icon="hugeicons:star"></iconify-icon>
                <p>Rating: ${obj.rating}</p>
            </div>
            <div class="df gap-16">
                <iconify-icon icon="hugeicons:message-01"></iconify-icon>
                <p>Reviews: ${obj.reviewCount}</p>
            </div>
        </div>

    `

}

const renderTecnico = obj => {
    const tecnico = document.getElementById("tecnico")
    tecnico.innerHTML = `

        <ul class="sinItem">

            <li class="df columna centerX centerY gap-16"><iconify-icon icon="hugeicons:clock-01" class="basic-icon"></iconify-icon>Prep time: ${obj.prepTimeMinutes} mins</li>

            <li class="df columna centerX centerY gap-16"><iconify-icon icon="hugeicons:timer-02" class="basic-icon"></iconify-icon>Cook time: ${obj.cookTimeMinutes} mins</li>

            <li class="df columna centerX centerY gap-16"><iconify-icon icon="hugeicons:user-group-02" class="basic-icon"></iconify-icon>Servings: ${obj.servings}</li>

            <li class="df columna centerX centerY gap-16"><iconify-icon icon="hugeicons:pyramid-structure-01" class="basic-icon"></iconify-icon>Difficulty: ${obj.difficulty}</li>

        </ul>
    `
}

const renderIngredientes = obj => {
    const ingredientes = document.getElementById("ingredientes")

    let list = []
    obj.ingredients.forEach(ing =>{
        list.push(`<li>${ing}</li>`)
    })

    ingredientes.innerHTML = `
        <h4>Ingredients</h4>
        <ul class="sinItem df columna gap-16">${list.join("")}</ul>
    `
}

const renderInstrucciones = obj => {
    const instrucciones = document.getElementById("pasos")

    let steps = []
    let i = 1
    obj.instructions.forEach(step =>{
        steps.push(`<li><strong>${i}) </strong>${step}</li>`)
        i++
    })

    instrucciones.innerHTML = `

        <h4>Instructions</h4>
        <ul class="sinItem df columna gap-16">${steps.join("")}</ul>

    `
}

export const rendering = recipe => {
    renderInfo(recipe)
    renderTecnico(recipe)
    renderIngredientes(recipe)
    renderInstrucciones(recipe)
}