

//CAPTURAR BOTÃO E COLOCAR EM UMA CONSTANTE
const botaoSubmit = document.getElementById("btnEnviar")

//ATRELAR UM EVENTO AO BOTÃO CAPTURADO
botaoSubmit.addEventListener("click", validaCampo) 

function validaCampo(){
    
    //VALIDANDO OS CAMPOS/INPUTS
    // 1 - RECUPERO ELES ATRAVÉS DE QUERYSELECTOR
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    for(let x = 0; x < campos.length ; x++){
        if(campos[x].value == ''){
            alert('O CAMPO ' + campos[x].name + ' não foi preenchido!')
            return 
        }
    }
}

/*
botaoSubmit.addEventListener("click", function(){

    //VALIDANDO OS CAMPOS/INPUTS
    // 1 - RECUPERO ELES ATRAVÉS DE QUERYSELECTOR
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    for(let x = 0; x < campos.length ; x++){
        if(campos[x].value == ''){
            alert('O CAMPO ' + campos[x].name + ' não foi preenchido!')
            return 
        }
    }

}) */