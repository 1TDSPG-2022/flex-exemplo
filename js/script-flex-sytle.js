
//Criando uma randomização para trocar dinâmicamente 
//o background-color dos elemento class

//Utilizando a classe Math.round para adquirir valores aleatórios entre 0 e 1
//Como o Math não arredonda o retorno e ele sempre fica uma dizima, Ex: 0.92392739, vamos
// utilizar o Math.round para arredondar para cima ou para baixo o numero e colocar em uma variável!

//Criando as variáveis que vão armazenar os valores randômicos

//Recuperando a lista de elementos
const listaDeDivs = document.querySelectorAll("div")

//Iterando e trocando a cor de todos os elementos automáticamente.
for (const elemento of listaDeDivs) {
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    //Utilizando concatenação para apresentar o conteúdo!
    //elemento.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")"   
     
    //Utilizando interpolação
    elemento.style.backgroundColor = `rgb( ${r} , ${g} , ${b} )`    

}
