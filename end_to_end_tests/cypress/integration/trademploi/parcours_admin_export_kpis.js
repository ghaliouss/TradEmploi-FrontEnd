const URL = 'https://pole-emploi-trad-dev.firebaseapp.com'
const LOGIN = 'tmon0020'
const PWD = 'recette1'

describe('Auth component', () => {
  it('se connecter avec les habilitations admin', () => {
    cy.clearCookies()
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('.t2').should('have.text', 'Connexion');
    cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
    cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
    cy.get('button').click();
    cy.url().should('include', '/modality');

    //cy.get('.mat-button-wrapper').click();

    cy.get('#settings-header > .name').should('be.visible');
    cy.get('#settings-header > .name').should('have.text', 'PARAMÈTRES');
    cy.get('#settings-header > .name').click();

    cy.get(':nth-child(1) > h4').should('have.text', 'Résultat de l\'enquête');
    cy.get(':nth-child(2) > h4').should('have.text', 'Statistiques des conversations');

    cy.get('#export-eval > .export-item-text > .export-description').should('have.text', 'Télécharger');
    cy.get('#export-kpi > .export-item-text > .export-description').should('have.text', 'Télécharger');

    cy.get('#export-eval > .export-item-text > .export-description').click();
    cy.readFile("cypress/downloads/PE_Outil_Traduction_Evaluation_2021818..csv").should("exist");
    //cy.wait(1000)
    cy.get('#export-kpi > .export-item-text > .export-description').click();
    cy.readFile("cypress/downloads/PE_Outil_Traduction_Evaluation_2021818..csv").should("exist");

  });
})
