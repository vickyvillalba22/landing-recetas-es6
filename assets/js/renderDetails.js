export const renderInfo = obj => {

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
    
        <img src="${obj.image}" alt="" class="w100 objCover">
        <div class="df spaceb">
            <p>${obj.cuisine}</p>
            <ul>${contLabels.join("")}</ul>
        </div>
        <h2>${obj.name}</h2>
        <span>${contTypes.join("")}</span>

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

export const rendering = recipe => {
    renderInfo(recipe)
}