const URL = 'https://pole-emploi-trad-dev.firebaseapp.com'
const LOGIN = 'tmon0030'
const PWD = 'recette1'

describe('Auth component', () => {
  it('se connecter et chosir le mode multi', () => {
    cy.clearCookies()
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('.t2').should('have.text', 'Connexion');
    cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
    cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
    cy.get('button').click();
    cy.url().should('include', '/modality');
    cy.get(':nth-child(2) > .checkbox > .circle').click();
    cy.get('.confirmBtn').click();
  });

  it('tester le menu RGPD', () => {
    cy.get('#gdpr-header > .name').click();
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-0 > .mat-option-text').click();
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

    // verifier si page d'invitation s'affiche et si elle contient le bon texte
    cy.get('#mat-dialog-title-0').should('have.text', 'Inviter des interlocuteurs');

    cy.get('.mat-dialog-content > :nth-child(1) > .title').should('have.text', '1 - Partager cette conversation');
    cy.get(':nth-child(1) > .content > .advise').should('have.text', 'soit par ce QR code à scanner ou ce lien à donner');
    cy.get('.copy-btn').should('have.text', 'COPIER');

    cy.get(':nth-child(2) > .title').should('have.text', '2 - Accepter les demandes de participation');
    cy.get(':nth-child(2) > .content > .advise').should('have.text', 'les personnes doivent obtenir votre autorisation');

    cy.get('.close-button').should('be.visible');
    cy.get('.close-button').should('have.class', 'close-button');

    cy.get('.copy-btn').should('be.visible');
    cy.get('.close-button').should('be.visible');
    // action click
    cy.get('.copy-btn').click();
    cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.text', 'Lien copié avec succès');
    cy.get('.mat-button-wrapper').should('be.visible');

    // test bouton fermeture
    cy.get('.share-btn').click();
    cy.get('#mat-dialog-title-1').should('have.text', 'Inviter des interlocuteurs');

    cy.get('.mat-dialog-content > :nth-child(1) > .title').should('have.text', '1 - Partager cette conversation');
    cy.get(':nth-child(1) > .content > .advise').should('have.text', 'soit par ce QR code à scanner ou ce lien à donner');
    cy.get('.copy-btn').should('have.text', 'COPIER');

    cy.get(':nth-child(2) > .title').should('have.text', '2 - Accepter les demandes de participation');
    cy.get(':nth-child(2) > .content > .advise').should('have.text', 'les personnes doivent obtenir votre autorisation');

    cy.get('.close-button').should('be.visible');
    cy.get('.close-button').should('have.class', 'close-button');

    cy.get('.copy-btn').should('be.visible');
    cy.get('.close-button').should('be.visible');
    cy.get('.close-button').click();

    // se déconnecter
    cy.get('#logout-header > .name').click();
    cy.get('#mat-dialog-title-2').should('have.text', 'Déconnexion');
    cy.get('.question').click();
    cy.get('.question').should('have.text', 'Voulez-vous vous déconnecter?');
    cy.get('.logout-btn').should('have.text', 'SE DÉCONNECTER');
    cy.get('.logout-btn').click();
    cy.url().should('include', '/auth')
    cy.get('.t2').should('have.text', 'Connexion');
    cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
    cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');

  });


})
