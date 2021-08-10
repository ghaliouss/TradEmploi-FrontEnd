// npx cypress open

const URL = 'https://pole-emploi-trad-dev.firebaseapp.com'
const LOGIN = 'test@pe.fr'
const PWD = 'trademploi2021'

describe('Auth component', () => {
  beforeEach(() => {

  })

  it('user connection OK', () => {
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('#email').type(LOGIN)
    cy.get('#password').type(PWD)
    cy.contains('SE CONNECTER').click()
    cy.contains('Authentification réussie').should("exist")
    cy.url().should('include', '/modality')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > .checkbox > .circle').click();
    cy.get('.confirmBtn').click();
    cy.get('#gdpr-header > .name').click();
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-0 > .mat-option-text').click();
    cy.get('.mat-select-value-text > .ng-tns-c156-6').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get('.options').click();
    cy.get('#help-header > .name').click();
    cy.get('[aria-label="Suivant"]').click();
    cy.get('[aria-label="Suivant"]').click();
    cy.get('[aria-label="Suivant"]').click();
    cy.get('[aria-label="Suivant"]').click();
    cy.get('[aria-label="Précédent"]').click();
    cy.get('[aria-label="Précédent"]').click();
    cy.get('[aria-label="Précédent"]').click();
    cy.get('[aria-label="Précédent"]').click();
    cy.get('.slide-top > .mat-icon').click();
    cy.get('.share-btn').click();

  })


})
