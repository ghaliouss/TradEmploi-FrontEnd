const URL = 'https://pole-emploi-trad-dev.firebaseapp.com'
const LOGIN = 'tmon0030'
const PWD = 'recette1'

describe('Choice component', () => {
  before(() => {
    cy.clearCookies()
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('.t2').should('have.text', 'Connexion');
    cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
    cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
    cy.get('button').click();
    cy.url().should('include', '/modality');

    cy.contains('Mono support').click();
    cy.contains('CONFIRMER').click();
    cy.url().should('include', '/choice');
  })

  it('jouer avec le menu', () => {
    cy.get(':nth-child(1) > .option > :nth-child(3) > .speaker').click();

    cy.get('.no-clicked > img').click();
    cy.get('.fa').click();
    cy.get('.no-clicked').click();
    cy.get(':nth-child(2) > .option > :nth-child(3) > .speaker').click();
    cy.get('#gdpr-header > .name').click();
    cy.contains('Cet outil de traduction instantanée traite vos données').should('exist')
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-0 > .mat-option-text').click();
    cy.contains('This translation tool processes your data').should('exist')
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
    cy.get('[aria-label="Précédent"]').click();
    cy.get('.slide-top > .mat-icon').click();
    cy.get('.fas').click();

    cy.get(':nth-child(1) > .flag > .fi').click();
    cy.get('#choice-header > .name').click();
    cy.get('.fa').click();

    // choix langue anglaise
    cy.get(':nth-child(2) > .title > .fr').click();
    cy.url().should('include', '/translation');

  });

  it('faire un court échange en anglais', () => {
    cy.url().should('include', '/translation');

    // saisi bonjour par le conseiller
    cy.get('#msg-wrapper-advisor').type('bonjour')
    cy.get('#advisor-wrapper > .container > .actions > .ng-star-inserted').click();

    cy.get('.messageRaw').should('have.text', ' bonjour ');
    cy.get('bdi').should('have.text', 'Hello');

    // saisi good morning par le DE
    cy.get('#msg-wrapper-guest').type('good morning')
    cy.get('[role="DE"] > .container > .actions > .ng-star-inserted').click();

    cy.get('.user > .messageRaw').should('have.text', ' good morning ');
    cy.get('.user > .messageTranslated > bdi').should('have.text', 'Bonjour');

    // clic sur terminer la conversation
    cy.get('.end-btn').click();
    cy.contains('Quelle a été la qualité des traductions ?').should('exist')

    // évaluation étoile
    cy.get(':nth-child(1) > .stars > :nth-child(4) > .mat-icon').click();
    cy.get(':nth-child(2) > .stars > :nth-child(4) > .mat-icon').click();

    cy.get('#question-four-yes').click();
    cy.get('#question-four-no').click();

    cy.get('.question > textarea').type('test cypress mono support');

    // clic sur soumettre
    cy.get('#send-btn').click();
    //cy.contains('Le formulaire d\'évaluation n\'a pas pu être envoyée, il n\'est pas possible de le resaisir. Vous allez être redirigé vers la page d\'accueil.').should('exist')
    cy.url().should('include', '/auth')
    cy.get('.t2').should('have.text', 'Connexion');
    cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
    cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
  });
});
