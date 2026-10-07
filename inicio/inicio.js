const titulo = document.querySelector(".hero h1");

const texto = "Bem-vindo à Bibliotech";

titulo.textContent = "";

let i = 0;

function escrever(){

    if(i < texto.length){

        titulo.textContent += texto.charAt(i);

        i++;

        setTimeout(escrever, 70);

    }

}

escrever();