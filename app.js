
/* =========================================================
   BIBLIOTECH — DADOS DOS LIVROS
   Camada estática de apresentação
========================================================= */

const books = [

    {
        id: 'cosmos',
        title: 'Cosmos',
        author: 'Carl Sagan',
        genre: 'Ciência',
        color: '#244c72',
        year: '1980',
        publisher: 'Random House',
        pages: '365',
        language: 'Português',
        isbn: '9788535909071',
        rating: '4,8',
        age: 'Livre',

          /* CAPA DO LIVRO */
    cover: 'img/logo.png',

        /* PDF DO LIVRO */
        pdf: 'livros/cosmos.pdf',

        description:
            'Uma viagem envolvente pela origem do universo e pelo lugar da humanidade entre as estrelas.',

        synopsis:
            'Em Cosmos, Carl Sagan apresenta conceitos de astronomia, ciência e história de forma acessível e fascinante. O autor conduz o leitor por uma jornada que passa pela origem do universo, pela formação das estrelas, pela evolução da vida e pela busca humana por conhecimento.'
    },

    {
        id: 'capitaes',
        title: 'Capitães da Areia',
        author: 'Jorge Amado',
        genre: 'Literatura',
        color: '#8b5435',
        year: '1937',
        publisher: 'Companhia das Letras',
        pages: '288',
        language: 'Português',
        isbn: '9788535911693',
        rating: '4,7',
        age: '14 anos',

        /* PDF DO LIVRO */
        pdf: 'livros/capitaes-da-areia.pdf',

        description:
            'O retrato sensível de jovens que vivem nas ruas de Salvador e sonham com um futuro diferente.',

        synopsis:
            'A obra acompanha um grupo de meninos que vive nas ruas de Salvador. Conhecidos como Capitães da Areia, eles enfrentam dificuldades, preconceitos e abandono, enquanto constroem entre si laços de amizade, proteção e companheirismo.'
    },

    {
        id: 'algoritmos',
        title: 'Algoritmos para Viver',
        author: 'Brian Christian',
        genre: 'Tecnologia',
        color: '#39694f',
        year: '2016',
        publisher: 'Companhia das Letras',
        pages: '368',
        language: 'Português',
        isbn: '9788535927809',
        rating: '4,6',
        age: 'Livre',

        /* PDF DO LIVRO */
        pdf: 'livros/algoritmos-para-viver.pdf',

        description:
            'Ideias da computação que ajudam a tomar decisões melhores no cotidiano.',

        synopsis:
            'Brian Christian mostra como conceitos usados na computação podem ajudar em situações do dia a dia. O livro explora temas como organização, tomada de decisões, busca por informações e administração do tempo.'
    },

    {
        id: 'brasil',
        title: 'Brasil: Uma Biografia',
        author: 'Lilia Schwarcz',
        genre: 'História',
        color: '#7b3846',
        year: '2015',
        publisher: 'Companhia das Letras',
        pages: '792',
        language: 'Português',
        isbn: '9788535925669',
        rating: '4,8',
        age: '14 anos',

        /* PDF DO LIVRO */
        pdf: 'livros/brasil-uma-biografia.pdf',

        description:
            'Uma leitura ampla e acessível sobre a formação histórica do Brasil.',

        synopsis:
            'Lilia Schwarcz e Heloisa Starling apresentam uma visão ampla da história brasileira, abordando acontecimentos políticos, sociais e culturais que ajudaram a construir o país ao longo dos séculos.'
    },

    {
        id: 'pequeno',
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Literatura',
        color: '#6b5794',
        year: '1943',
        publisher: 'Agir',
        pages: '96',
        language: 'Português',
        isbn: '9788522031443',
        rating: '4,9',
        age: 'Livre',

        /* PDF DO LIVRO */
        pdf: 'livros/pequeno-principe.pdf',

        description:
            'Uma fábula delicada sobre amizade, cuidado e aquilo que é essencial.',

        synopsis:
            'A história acompanha um pequeno príncipe que viaja por diferentes planetas e encontra personagens que fazem o leitor refletir sobre amizade, amor, responsabilidade e sobre aquilo que realmente importa na vida.'
    },

    {
        id: 'sapiens',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        genre: 'História',
        color: '#ad7b36',
        year: '2011',
        publisher: 'Companhia das Letras',
        pages: '464',
        language: 'Português',
        isbn: '9788535922486',
        rating: '4,8',
        age: '16 anos',

        /* PDF DO LIVRO */
        pdf: 'livros/sapiens.pdf',

        description:
            'A trajetória da nossa espécie, das primeiras comunidades ao mundo atual.',

        synopsis:
            'Sapiens apresenta uma visão geral da história da humanidade, passando pelas primeiras sociedades, pela Revolução Agrícola, pelo desenvolvimento das grandes civilizações e pelas transformações que levaram ao mundo moderno.'
    },

    
    {
        id: '',
        title: '',
        author: 'Paul Roland',
        genre: 'Historia',
        color: '#244c72',
        year: '1980',
        publisher: 'Random House',
        pages: '365',
        language: 'Português',
        isbn: '9788535909071',
        rating: '4,8',
        age: 'Livre',

        /* PDF DO LIVRO */
        pdf: 'livros/cosmos.pdf',

        description:
            'Uma viagem envolvente pela origem do universo e pelo lugar da humanidade entre as estrelas.',

        synopsis:
            'Em Cosmos, Carl Sagan apresenta conceitos de astronomia, ciência e história de forma acessível e fascinante. O autor conduz o leitor por uma jornada que passa pela origem do universo, pela formação das estrelas, pela evolução da vida e pela busca humana por conhecimento.'
    },

];


/* =========================================================
   FAVORITOS
========================================================= */

const getFavorites = () =>
    JSON.parse(
        localStorage.getItem('bibliotech-favorites') || '[]'
    );


const setFavorites = value =>
    localStorage.setItem(
        'bibliotech-favorites',
        JSON.stringify(value)
    );


function toggleFavorite(id) {

    const current = getFavorites();

    const updated = current.includes(id)
        ? current.filter(item => item !== id)
        : [...current, id];

    setFavorites(updated);

    renderBooks();
    renderDetail();
}


/* =========================================================
   CARD DA LISTAGEM
========================================================= */

function card(book) {

    const saved =
        getFavorites().includes(book.id);

    return `
        <article class="book-card">

            <button
                class="favorite ${saved ? 'saved' : ''}"
                data-favorite="${book.id}"
                aria-label="${saved ? 'Remover dos' : 'Adicionar aos'} favoritos"
                aria-pressed="${saved}"
                type="button"
            >
                ${saved ? '♥' : '♡'}
            </button>


            <a
                class="book-card-link"
                href="card2.html?id=${encodeURIComponent(book.id)}"
            >

                <div
                    class="book-cover"
                    style="--cover:${book.color}"
                >
                    ${book.title}
                </div>

                <h2>${book.title}</h2>

                <p>${book.author}</p>

                <span class="tag">
                    ${book.genre}
                </span>

            </a>

        </article>
    `;
}


/* =========================================================
   RENDERIZAÇÃO DO ACERVO
========================================================= */

function renderBooks() {

    const grid =
        document.querySelector('#book-grid');

    if (!grid) return;


    const term =
        (
            document.querySelector('#book-search')?.value ||
            ''
        ).toLowerCase();


    const genre =
        document.querySelector('#genre-filter')?.value ||
        '';


    let shown = books
        .filter(book =>
            !genre || book.genre === genre
        )
        .filter(book =>
            `${book.title} ${book.author}`
                .toLowerCase()
                .includes(term)
        );


    if (
        location.pathname.endsWith(
            'favoritos.html'
        )
    ) {

        shown = shown.filter(book =>
            getFavorites().includes(book.id)
        );

    }


    grid.innerHTML = shown.length
        ? shown.map(card).join('')
        : `
            <p class="empty">
                Nenhum livro encontrado.
                Tente uma nova busca.
            </p>
        `;
}


/* =========================================================
   PÁGINA DE DETALHES DO LIVRO
========================================================= */

function renderDetail() {

    const target =
        document.querySelector('#book-detail');

    if (!target) return;


    const params =
        new URLSearchParams(location.search);


    const id =
        params.get('id') ||
        books[0].id;


    const book =
        books.find(item => item.id === id) ||
        books[0];


    const saved =
        getFavorites().includes(book.id);


    target.innerHTML = `

        <div class="book-detail-main">

            <div
                class="detail-cover"
                style="--cover:${book.color}"
                aria-label="Capa de ${book.title}"
            >
                <span>${book.title}</span>
            </div>


            <div class="detail-content">

                <span class="detail-genre">
                    ${book.genre}
                </span>


                <h1>
                    ${book.title}
                </h1>


                <p class="detail-author">
                    por <strong>${book.author}</strong>
                </p>


                <div class="detail-rating">

                    <span class="stars">
                        ★★★★★
                    </span>

                    <strong>
                        ${book.rating}
                    </strong>

                    <span>
                        / 5
                    </span>

                </div>


                <p class="detail-description">
                    ${book.description}
                </p>


                <div class="detail-actions">

                    <!-- BOTÃO DE LEITURA -->

                    <a
                        class="button button-primary read-book-button"
                        href="${book.pdf}"
                        target="_blank"
                        rel="noopener"
                        aria-label="Ler ${book.title}"
                    >
                        <span aria-hidden="true">
                            ▶
                        </span>

                        Ler livro
                    </a>


                    <!-- FAVORITO -->

                    <button
                        class="button favorite-detail ${saved ? 'saved' : ''}"
                        data-favorite="${book.id}"
                        type="button"
                        aria-pressed="${saved}"
                    >
                        ${
                            saved
                                ? '♥ Salvo nos favoritos'
                                : '♡ Adicionar aos favoritos'
                        }
                    </button>


                    <!-- VOLTAR -->

                    <a
                        href="livros.html"
                        class="button button-secondary"
                    >
                        ← Voltar ao acervo
                    </a>

                </div>

            </div>

        </div>


        <div class="book-info">

            <div class="section-heading">

                <span>
                    INFORMAÇÕES
                </span>

                <h2>
                    Ficha do livro
                </h2>

            </div>


            <div class="info-grid">

                <div class="info-item">
                    <span>Autor</span>
                    <strong>${book.author}</strong>
                </div>

                <div class="info-item">
                    <span>Gênero</span>
                    <strong>${book.genre}</strong>
                </div>

                <div class="info-item">
                    <span>Ano de publicação</span>
                    <strong>${book.year}</strong>
                </div>

                <div class="info-item">
                    <span>Editora</span>
                    <strong>${book.publisher}</strong>
                </div>

                <div class="info-item">
                    <span>Número de páginas</span>
                    <strong>${book.pages}</strong>
                </div>

                <div class="info-item">
                    <span>Idioma</span>
                    <strong>${book.language}</strong>
                </div>

                <div class="info-item">
                    <span>ISBN</span>
                    <strong>${book.isbn}</strong>
                </div>

                <div class="info-item">
                    <span>Classificação</span>
                    <strong>${book.age}</strong>
                </div>

            </div>

        </div>


        <div class="book-synopsis">

            <div class="section-heading">

                <span>
                    SOBRE A OBRA
                </span>

                <h2>
                    Sinopse
                </h2>

            </div>

            <p>
                ${book.synopsis}
            </p>

        </div>

    `;
}


/* =========================================================
   FORMULÁRIOS
========================================================= */

function setupForms() {

    document
        .querySelectorAll(
            'form[data-static-form]'
        )
        .forEach(form => {

            form.addEventListener(
                'submit',
                event => {

                    event.preventDefault();


                    const note =
                        form.querySelector(
                            '.notice'
                        ) ||
                        Object.assign(
                            document.createElement('p'),
                            {
                                className: 'notice'
                            }
                        );


                    note.textContent =
                        form.dataset.message ||
                        'Dados salvos neste navegador.';


                    form.prepend(note);


                    if (
                        form.dataset.reset === 'true'
                    ) {

                        form.reset();

                    }

                }
            );

        });
}


/* =========================================================
   PREFERÊNCIAS GLOBAIS
   As configurações funcionam em TODAS as páginas.
========================================================= */

function setupPreferences() {

    const body =
        document.body;

    const root =
        document.documentElement;


    /* =====================================================
       FUNÇÃO AUXILIAR
    ===================================================== */

    function applyPreference(
        storageKey,
        className,
        enabled
    ) {

        localStorage.setItem(
            storageKey,
            enabled ? 'true' : 'false'
        );

        body.classList.toggle(
            className,
            enabled
        );

    }


    /* =====================================================
       MODO ESCURO
    ===================================================== */

    const darkMode =
        localStorage.getItem(
            'bibliotech-dark'
        ) === 'true';


    body.classList.toggle(
        'dark',
        darkMode
    );


    const darkInput =
        document.querySelector(
            '#dark-mode'
        );


    if (darkInput) {

        darkInput.checked =
            darkMode;


        darkInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-dark',
                    'dark',
                    darkInput.checked
                );

            }
        );

    }


    /* =====================================================
       TAMANHO DA FONTE
    ===================================================== */

    const fontInput =
        document.querySelector(
            '#font-size'
        );


    const fontValue =
        document.querySelector(
            '#font-size-value'
        );


    const savedFont =
        localStorage.getItem(
            'bibliotech-font'
        ) || '100';


    root.style.fontSize =
        `${savedFont}%`;


    if (fontInput) {

        fontInput.value =
            savedFont;


        if (fontValue) {

            fontValue.textContent =
                `${savedFont}%`;

        }


        fontInput.addEventListener(
            'input',
            () => {

                const value =
                    fontInput.value;


                localStorage.setItem(
                    'bibliotech-font',
                    value
                );


                root.style.fontSize =
                    `${value}%`;


                if (fontValue) {

                    fontValue.textContent =
                        `${value}%`;

                }

            }
        );

    }


    /* =====================================================
       ALTO CONTRASTE
    ===================================================== */

    const highContrast =
        localStorage.getItem(
            'bibliotech-contrast'
        ) === 'true';


    body.classList.toggle(
        'high-contrast',
        highContrast
    );


    const contrastInput =
        document.querySelector(
            '#high-contrast'
        );


    if (contrastInput) {

        contrastInput.checked =
            highContrast;


        contrastInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-contrast',
                    'high-contrast',
                    contrastInput.checked
                );

            }
        );

    }


    /* =====================================================
       REDUZIR ANIMAÇÕES
    ===================================================== */

    const reduceMotion =
        localStorage.getItem(
            'bibliotech-motion'
        ) === 'true';


    body.classList.toggle(
        'reduce-motion',
        reduceMotion
    );


    const motionInput =
        document.querySelector(
            '#reduce-motion'
        );


    if (motionInput) {

        motionInput.checked =
            reduceMotion;


        motionInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-motion',
                    'reduce-motion',
                    motionInput.checked
                );

            }
        );

    }


    /* =====================================================
       DESTACAR LINKS
    ===================================================== */

    const highlightLinks =
        localStorage.getItem(
            'bibliotech-links'
        ) === 'true';


    body.classList.toggle(
        'highlight-links',
        highlightLinks
    );


    const linksInput =
        document.querySelector(
            '#highlight-links'
        );


    if (linksInput) {

        linksInput.checked =
            highlightLinks;


        linksInput.addEventListener(
            'change',
            () => {

                applyPreference(
                    'bibliotech-links',
                    'highlight-links',
                    linksInput.checked
                );

            }
        );

    }


    /* =====================================================
       RESTAURAR CONFIGURAÇÕES
    ===================================================== */

    const resetButton =
        document.querySelector(
            '#reset-settings'
        );


    const notice =
        document.querySelector(
            '#settings-notice'
        );


    if (resetButton) {

        resetButton.addEventListener(
            'click',
            () => {

                localStorage.removeItem(
                    'bibliotech-dark'
                );

                localStorage.removeItem(
                    'bibliotech-font'
                );

                localStorage.removeItem(
                    'bibliotech-contrast'
                );

                localStorage.removeItem(
                    'bibliotech-motion'
                );

                localStorage.removeItem(
                    'bibliotech-links'
                );


                body.classList.remove(
                    'dark',
                    'high-contrast',
                    'reduce-motion',
                    'highlight-links'
                );


                root.style.fontSize =
                    '100%';


                if (darkInput) {
                    darkInput.checked = false;
                }


                if (fontInput) {
                    fontInput.value = '100';
                }


                if (fontValue) {
                    fontValue.textContent = '100%';
                }


                if (contrastInput) {
                    contrastInput.checked = false;
                }


                if (motionInput) {
                    motionInput.checked = false;
                }


                if (linksInput) {
                    linksInput.checked = false;
                }


                if (notice) {

                    notice.textContent =
                        'Configurações restauradas com sucesso.';


                    setTimeout(
                        () => {
                            notice.textContent = '';
                        },
                        3000
                    );

                }

            }
        );

    }

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function setupNavigation() {

    document
        .querySelectorAll('.primary-nav')
        .forEach(nav => {

            if (
                nav.querySelector(
                    '[href="configura.html"]'
                )
            ) {
                return;
            }


            const link =
                document.createElement('a');


            link.href =
                'configura.html';


            link.textContent =
                'Configurações';


            if (
                location.pathname.endsWith(
                    'configura.html'
                )
            ) {

                link.className =
                    'active';

            }


            nav.append(link);

        });

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        setupPreferences();

        setupNavigation();

        renderBooks();

        renderDetail();

        setupForms();


        /* =================================================
           FAVORITOS
        ================================================= */

        document.addEventListener(
            'click',
            event => {

                const button =
                    event.target.closest(
                        '[data-favorite]'
                    );


                if (!button) return;


                event.preventDefault();


                toggleFavorite(
                    button.dataset.favorite
                );

            }
        );


        /* =================================================
           PESQUISA
        ================================================= */

        document
            .querySelector(
                '#book-search'
            )
            ?.addEventListener(
                'input',
                renderBooks
            );


        /* =================================================
           FILTRO POR GÊNERO
        ================================================= */

        document
            .querySelector(
                '#genre-filter'
            )
            ?.addEventListener(
                'change',
                renderBooks
            );

    }
);

