# Projeto Heróis da Marvel
## Visão Geral

Aplicação web que permite explorar heróis da Marvel, marcar favoritos e visualizar detalhes dos personagens. Utiliza a API da Marvel para obter dados e é construída com React, TypeScript e `styled-components`.

## Funcionalidades
- Pesquisa de heróis por nome.
- Exibição de detalhes do herói com quadrinhos relacionados.
- Gerenciamento de favoritos com persistência.
- Paginação de heróis.
- Testes E2E com Cypress.
- Responsividade.

## HomePage

Exibir uma lista de heróis da Marvel com imagem, nome e descrição. Permitir a busca por heróis e a filtragem por favoritos. Implementar a paginação para exibir heróis em páginas.

## CharacterProfilePage

Exibir detalhes do herói selecionado, incluindo imagem, nome e descrição. Mostrar uma lista dos 5 quadrinhos do herói com imagem, título, data de lançamento, número de páginas e uma breve descrição.

## Favoritos
Exibir uma lista de heróis que foram favoritados pelo usuário. Os favoritos persistem mesmo apos recarregar a pagina.

## Decisões Tecnicas
FavoritesContext: para gerenciar a navegação entre páginas de heróis.
Renderizar botões para a página anterior, próxima e páginas individuais.
Uso do Context API para gerenciar o estado dos favoritos em FavoritesContext.
Gerenciar a lista de heróis favoritos usando o contexto React. Permitir adicionar e remover heróis dos favoritos. Persistir os favoritos no localStorage.

## Tecnologias Utilizadas

- React com TypeScript
- Styled Components
- Axios
- Cypress
- React Router
- Context API
- ESLint foca na qualidade e estilo do código, detectando problemas e aplicando regras de linting.
- Prettier foca na formatação, ajustando o estilo do código de forma consistente.
- Deploy na Vercel para visualizar o funcioanmento e efectuar os testes E2E.

Link Vercei :

## Tstes E2E

Para Consultar os testes :
npm cypress open

Explicação do Teste:
cy.get('span').contains('Somente favoritos').click(): Seleciona o botão de favoritos (baseado no texto "Somente favoritos") e simula um clique nele.

cy.url().should('include', '/favorites'): Após o clique, verifica se a URL foi alterada para /favorites, indicando que a navegação foi bem-sucedida.

cy.contains('h1', 'Seus Heróis Favoritos').should('exist'): Verifica se a página de favoritos foi carregada corretamente. Esse exemplo assume que a página de favoritos contém um título h1 com o texto "Seus Heróis Favoritos". Substitua isso com um seletor ou texto relevante presente na sua página de favoritos.

Obs: Vários outros testes podem ser feitos apenas uma exibição.

## Instalação

1. Faça um Fork e clone o Repositorio:
git clone https://github.com/jonesnambundo/InstaCarro.git

instale as dependencias : npm i

2. Inicie o projecto:
## npm start

## Interface da WebPage


### Video Demo

