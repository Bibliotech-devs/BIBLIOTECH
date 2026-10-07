/* ==========================================
   BIBLIOTECH - SOBRE O PROJETO
========================================== */


/* ==========================================
   ROLAGEM SUAVE
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino =
        document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({

            behavior: 'smooth'

        });

    });

});


/* ==========================================
   ANIMAÇÃO DOS CARDS
========================================== */

const elementos =
document.querySelectorAll('.card');

const observador =
new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add('mostrar');

        }

    });

},{
    threshold:0.2
});

elementos.forEach((elemento)=>{

    observador.observe(elemento);

});


/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const botaoTopo =
document.createElement('button');

botaoTopo.innerHTML = '⬆';

botaoTopo.id = 'btn-topo';

document.body.appendChild(botaoTopo);


/* Mostrar botão quando descer */

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 400){

        botaoTopo.classList.add('ativo');

    }

    else{

        botaoTopo.classList.remove('ativo');

    }

});


/* Voltar ao topo */

botaoTopo.addEventListener('click', ()=>{

    window.scrollTo({

        top:0,

        behavior:'smooth'

    });

});


/* ==========================================
   EFEITO DE ENTRADA HERO
========================================== */

window.addEventListener('load', ()=>{

    const hero =
    document.querySelector('.hero');

    hero.classList.add('hero-ativo');

});