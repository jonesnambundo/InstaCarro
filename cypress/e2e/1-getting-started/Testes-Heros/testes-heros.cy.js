/// <reference types="cypress" />

describe('Verifica se o site está funcionando', () => {
  beforeEach(() => {
    cy.visit('https://insta-carro-self.vercel.app/')
  })

  it('Deve carregar a página inicial com sucesso', () => {
    cy.url().should('include', 'insta-carro-self.vercel.app')
    cy.get('body').should('be.visible')
  })

  describe('Funcionalidades da página inicial', () => {
    it('Deve exibir a frase "EXPLORE O UNIVERSO E CRIE SUA EQUIPE"', () => {
      cy.contains('EXPLORE O UNIVERSO E CRIE SUA EQUIPE').should('be.visible')
    })

    it('Deve existir um campo de busca para heróis', () => {
      cy.get('input[placeholder="Procure por heróis"]').should('exist')
    })

    it('Deve renderizar exatamente 8 heróis na página', () => {
      cy.get('[data-testid="hero-card"]').should('have.length', 8)
    })

    it('Deve navegar para a página de favoritos ao clicar no botão de favoritos', () => {
      cy.get('span').contains('Somente favoritos').click()
      cy.url().should('include', '/favorites')
      cy.contains('h1', 'Seus Heróis Favoritos').should('exist')
    })
  })
})
