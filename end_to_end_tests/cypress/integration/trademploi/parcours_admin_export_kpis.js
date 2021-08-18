// npx cypress open

const URL = 'https://pole-emploi-trad-dev.firebaseapp.com/start'
const LOGIN = 'test_admin@pe.fr'
const PWD = 'trademploi2021'

describe('Auth component', () => {
  it('se connecter avec les habilitations admin', () => {
    cy.clearCookies()
    cy.visit(URL)
    cy.url().should('include', '/auth')
    cy.get('#email').type(LOGIN)
    cy.get('#password').type(PWD)
    cy.contains('SE CONNECTER').click()
    cy.contains('Authentification réussie').should("exist")
    cy.url().should('include', '/modality')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-button-wrapper').click();

    cy.get('#settings-header > .name').should('be.visible');
    cy.get('#settings-header > .name').should('have.text', 'PARAMÈTRES');
    cy.get('#settings-header > .name').click();

    cy.get(':nth-child(1) > h4').should('have.text', 'Résultat de l\'enquête');
    cy.get(':nth-child(2) > h4').should('have.text', 'Statistiques des conversations');

    cy.get('#export-eval > .export-item-text > .export-description').should('have.text', 'Télécharger');
    cy.get('#export-kpi > .export-item-text > .export-description').should('have.text', 'Télécharger');

    cy.get('#export-eval > .export-item-text > .export-description').click();

    cy.readFile("cypress/downloads/PE_Outil_Traduction_Evaluation_2021818..csv").should("exist");

  });
})
