// ==========================================
// Mensagem de boas-vindas
// ==========================================

window.addEventListener("load", () => {

    console.log("Bem-vindo à Bibliotech!");

});

// ==========================================
// Destacar página atual no menu
// ==========================================

const links = document.querySelectorAll(".menu-lista a");

links.forEach(link => {

    if(link.href === window.location.href){

        link.classList.add("ativo");

    }

});

// ==========================================
// Animação ao clicar nos cards
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(1.03)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 200);

    });

});

// ==========================================
// Saudação conforme horário
// ==========================================

const hora = new Date().getHours();

let saudacao = "";

if(hora < 12){

    saudacao = "Bom dia!";

}else if(hora < 18){

    saudacao = "Boa tarde!";

}else{

    saudacao = "Boa noite!";

}

console.log(`${saudacao} Seja bem-vindo à Bibliotech.`);

// ==========================================
// Efeito de revelação ao rolar a página
// ==========================================

const elementos = document.querySelectorAll(".card");

const revelar = () => {

    elementos.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};

window.addEventListener("scroll", revelar);

revelar();