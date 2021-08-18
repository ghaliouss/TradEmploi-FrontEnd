// npx cypress open

const URL = 'https://pole-emploi-trad-dev.firebaseapp.com/start'
const LOGIN = 'test@pe.fr'
const PWD = 'trademploi2021'

describe('Auth component', () => {
  it('se connecter et chosir le mode multi', () => {
    cy.clearCookies()
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('#email').type(LOGIN)
    cy.get('#password').type(PWD)
    cy.contains('SE CONNECTER').click()
    cy.contains('Authentification réussie').should("exist")
    cy.url().should('include', '/modality')
    cy.get(':nth-child(2) > .checkbox > .circle').click();
    cy.get('.confirmBtn').click();
  });

  it('tester le menu RGPD', () => {

    cy.get('#gdpr-header > .name').click();
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-0 > .mat-option-text').click();
    cy.get('.mat-select-value-text > .ng-tns-c156-6').click();
    cy.get('#mat-option-1 > .mat-option-text').click();
    cy.get('.options').click();
  });

  it('tester le menu explications', () => {
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

    // clic sur inviter
    cy.get('.share-btn').click();

    // clic sur partie grisé pour revenir sur le chat
    cy.get('.cdk-overlay-backdrop').click({force: true},{ multiple: true });
  });

  it('faire l evaluation', () => {

    cy.get('.end-btn').click();
    cy.get(':nth-child(1) > .stars > :nth-child(1) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(2) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(3) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(4) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(5) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(5) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(4) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(3) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(2) > .mat-icon').click();
    cy.get(':nth-child(1) > .stars > :nth-child(1) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(1) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(2) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(3) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(4) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(5) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(4) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(3) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(2) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(1) > .mat-icon').click();
    cy.get('.mat-dialog-content').click();
    cy.get('#question-four-yes').check();
    cy.get('[for="question-four-no"]').click();
    cy.get('#question-four-no').check();
    cy.get(':nth-child(4) > .ng-untouched').click();
    cy.get('#mat-dialog-3 > .ng-star-inserted').click();
    cy.get('.question > textarea').type('test cypress multi support');
    cy.get('#send-btn').click();
    cy.url().should('include', '/auth');
  })


})
