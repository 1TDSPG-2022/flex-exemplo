const listaDeDivs = document.querySelectorAll("div")

//Iterando e trocando a cor de todos os elementos automáticamente.
for (const elemento of listaDeDivs) {
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    //Utilizando concatenação para apresentar o conteúdo!
    //elemento.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")"    
    //utilizando interpolação
    elemento.style.backgroundColor = `rgb( ${r} , ${g} , ${b} )`    
}