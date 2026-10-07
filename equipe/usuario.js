/* ==================================
   CONFIGURAÇÕES INICIAIS
================================== */

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {

    // Recupera o tema salvo
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "claro") {
        document.body.classList.remove("modo-escuro");
        document.body.classList.add("modo-claro");
    } else {
        document.body.classList.remove("modo-claro");
        document.body.classList.add("modo-escuro");
    }

});

/* ==================================
   ALTERAÇÃO DE TEMA
================================== */

function alternarTema() {

    const body = document.body;

    if (body.classList.contains("modo-escuro")) {

        body.classList.remove("modo-escuro");
        body.classList.add("modo-claro");

        localStorage.setItem("tema", "claro");

    } else {

        body.classList.remove("modo-claro");
        body.classList.add("modo-escuro");

        localStorage.setItem("tema", "escuro");
    }
}

/* ==================================
   MODAL DE PERFIL
================================== */

function abrirPerfil(nome, idade, descricao, foto) {

    const modal = document.getElementById("modal");

    document.getElementById("modal-nome").textContent = nome;

    document.getElementById("modal-idade").textContent =
        "Idade: " + idade;

    document.getElementById("modal-foto").src = foto;

    // Limpa antes de começar a digitar
    const campoDescricao =
        document.getElementById("modal-sobre");

    campoDescricao.textContent = "";

    // Exibe o modal
    modal.classList.add("ativo");

    // Inicia animação de digitação
    efeitoDigitar(campoDescricao, descricao);
}

/* ==================================
   FECHAR MODAL
================================== */

function fecharPerfil() {

    document
        .getElementById("modal")
        .classList
        .remove("ativo");
}

/* ==================================
   FECHAR CLICANDO FORA
================================== */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.classList.remove("ativo");

    }

});

/* ==================================
   EFEITO DE DIGITAÇÃO
================================== */

let intervaloDigitacao;

function efeitoDigitar(elemento, texto) {

    clearInterval(intervaloDigitacao);

    elemento.textContent = "";

    let indice = 0;

    intervaloDigitacao = setInterval(() => {

        if (indice < texto.length) {

            elemento.textContent += texto.charAt(indice);

            indice++;

        } else {

            clearInterval(intervaloDigitacao);

        }

    }, 20);

}

/* ==================================
   ANIMAÇÃO DOS CARDS AO ENTRAR
================================== */

const observer = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("mostrar");

            }

        });

    },

    {
        threshold: 0.2
    }

);

document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".card-usuario");

    cards.forEach((card) => {

        observer.observe(card);

    });

});

/* ==================================
   PLAYER DE PLAYLIST (OPCIONAL)
================================== */

function abrirPlaylist() {

    const url =
        "https://www.youtube.com/watch?v=S-dRotOi01Q&list=PLREj4u4hLfczrZOgmsOBflN905T7r6cOs";

    window.open(url, "_blank");

}

/* ==================================
   EFEITO SUAVE NO SCROLL
================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino =
            document.querySelector(
                this.getAttribute("href")
            );

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});