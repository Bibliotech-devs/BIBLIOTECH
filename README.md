# BiblioTech — versão estática

Este projeto funciona abrindo `index.html` diretamente no navegador. Não requer XAMPP, Apache, PHP, MySQL ou qualquer servidor local.

## Arquivos principais

- `index.html`: ponto de entrada.
- `site.css`: interface compartilhada e responsiva de todas as páginas.
- `app.js`: catálogo de demonstração, busca, filtros, favoritos e preferências locais.

Os favoritos e as configurações visuais são armazenados no `localStorage` do navegador. O catálogo em `app.js` é uma camada de exemplo: quando existir um backend, substitua o array `books` pelas chamadas da API, preservando a interface atual.
