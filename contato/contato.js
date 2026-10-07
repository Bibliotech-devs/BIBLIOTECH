/* =====================================================
   1. SELEÇÃO DOS ELEMENTOS HTML
===================================================== */

// Captura o formulário pelo ID
const formulario = document.getElementById("formContato");

// Captura o campo de mensagem
const campoMensagem = document.getElementById("mensagem");

// =====================================================
// 2. CRIAÇÃO DO CONTADOR DE CARACTERES
// =====================================================

// Cria um elemento HTML dinamicamente
const contador = document.createElement("p");

// Define o texto inicial
contador.textContent = "0 caracteres";

// Adiciona uma classe para estilização futura
contador.classList.add("contador-caracteres");

// Insere o contador logo abaixo da textarea
campoMensagem.after(contador);

/* =====================================================
   3. ATUALIZAÇÃO DO CONTADOR
===================================================== */

campoMensagem.addEventListener("input", () => {

    let quantidade = campoMensagem.value.length;

    contador.textContent = `${quantidade} caracteres`;

});

/* =====================================================
   4. VALIDAÇÃO E ENVIO DO FORMULÁRIO
===================================================== */

formulario.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const assunto = document.getElementById("assunto").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    /* ===============================================
       VALIDAÇÃO DOS CAMPOS
    =============================================== */

    if(nome === ""){

        alert("Por favor, informe seu nome.");

        return;
    }

    if(email === ""){

        alert("Por favor, informe seu email.");

        return;
    }

    if(!validarEmail(email)){

        alert("Digite um email válido.");

        return;
    }

    if(mensagem.length < 10){

        alert("A mensagem deve possuir pelo menos 10 caracteres.");

        return;
    }

    /* ===============================================
       SIMULAÇÃO DE ENVIO
    =============================================== */

    mostrarLoading();

    setTimeout(() => {

        esconderLoading();

        alert(
            "Mensagem enviada com sucesso!\n\n" +
            "Obrigado por entrar em contato com a Bibliotech."
        );

        // Limpa os campos
        formulario.reset();

        contador.textContent = "0 caracteres";

    }, 2000);

});

/* =====================================================
   5. VALIDADOR DE EMAIL
===================================================== */

function validarEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/* =====================================================
   6. TELA DE CARREGAMENTO
===================================================== */

function mostrarLoading(){

    // Cria o fundo escuro
    const loading = document.createElement("div");

    loading.id = "loading";

    loading.innerHTML = `

        <div class="loading-box">

            <div class="spinner"></div>

            <p>Enviando mensagem...</p>

        </div>

    `;

    document.body.appendChild(loading);

}

function esconderLoading(){

    const loading = document.getElementById("loading");

    if(loading){

        loading.remove();

    }

}

/* =====================================================
   7. ANIMAÇÃO DE ENTRADA DOS CARDS
===================================================== */

const cards = document.querySelectorAll(
    ".info-card"
);

const observador = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add(
                "animar"
            );

        }

    });

},

{
    threshold: 0.2
}

);

cards.forEach((card) => {

    observador.observe(card);

});

/* =====================================================
   8. EFEITO DE APARECER SUAVEMENTE
===================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* =====================================================
   9. MENSAGEM DE BOAS-VINDAS
===================================================== */

console.log(
`
===================================
 BIBLIOTECH
 Sistema carregado com sucesso
===================================
`
);