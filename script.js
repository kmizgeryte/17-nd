// Pavyzdys: https://www.loom.com/share/eec28f07fe704eb59bac83bde09be616
// Nereikia naudoti klasių, nes nereikia kurti iš išsaugoti objektų tik string masyve
// Atsisiųsti ir užsikrauti starter
// Pridėjimas naujų elementų
// Ištrynimas naudojant parentNode
// Išsaugojimas localstorage
// Ištrynimas iš localstorage
// Papildomai stilius

const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
const list = document.querySelector("ul")
let listArray = []

const populate = (item) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = 
    `
    <span>${item}</span>
    <?xml version='1.0' encoding='utf-8'?>
    <!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
    <g fill="#231F20">
          <path d="m450.9,73.5h-118.4v-52.1c0-5.8-4.7-10.4-10.4-10.4h-132.2c-5.8,0-10.4,4.7-10.4,10.4v52.1h-118.4c-5.8,0-10.4,4.7-10.4,10.4v64.9c0,5.8 4.7,10.4 10.4,10.4h24.6v264.7c0,42.5 34.6,77.1 77.1,77.1h186.4c42.5,0 77.1-34.6 77.1-77.1v-264.6h24.6c5.8,0 10.4-4.7 10.4-10.4v-65c-5.68434e-14-5.7-4.7-10.4-10.4-10.4zm-250.5-41.6h111.3v41.7h-111.3v-41.7zm205,392c0,31-25.2,56.2-56.2,56.2h-186.4c-31,0-56.2-25.2-56.2-56.2v-264.6h298.8v264.6zm35-285.5h-368.8v-44h368.9v44z"/>
          <path d="m164.1,427c5.8,0 10.4-4.7 10.4-10.4v-193.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v193.7c0,5.7 4.7,10.4 10.4,10.4z"/>
          <path d="M256,427c5.8,0,10.4-4.7,10.4-10.4V222.9c0-5.8-4.7-10.4-10.4-10.4s-10.4,4.7-10.4,10.4v193.7    C245.6,422.3,250.2,427,256,427z"/>
          <path d="m347.9,427c5.8,0 10.4-4.7 10.4-10.4v-193.7c0-5.8-4.7-10.4-10.4-10.4-5.8,0-10.4,4.7-10.4,10.4v193.7c-0.1,5.7 4.6,10.4 10.4,10.4z"/>
    </g>
    </svg>
    `
    list.append(newLi)

    // Remove element
    const svg = newLi.querySelector("svg")
    svg.addEventListener("click", () => {
        const parentNode = svg.parentNode
        const index = listArray.indexOf(parentNode.innerText)
        
        // Trinimaas iš DOM
        parentNode.remove()

        // Trinimas iš localStorage
        listArray.splice(index, 1)
        localStorage.setItem("listArray", listArray)
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Pridėjimas į DOM
    populate(input.value)

    // Išsaugoti į localstorage
    listArray.push(input.value)
    localStorage.setItem("listArray", listArray)

    // Išvalo input
    input.value = ""
})

// Tikrina ir ištraukia iš localstorage
let getItem = localStorage.getItem("listArray")
if(getItem){
    // Prideda į listArray
    listArray = getItem.split(",")
    
    // Užkrauna per DOM
    listArray.forEach(item => {
        populate(item)
    })
}
