// lancer cypress dans un terminal : npx cypress open
// via VPN, il faut tester plusieurs fois d'enregistrer le script après avoir lancer cypress
// au premier lancement, il faut saisir soit meme le login et mot de passe, puis relancer
const URL = 'https://pole-emploi-trad-dev.firebaseapp.com'
const LOGIN = 'tmon0030'
const PWD = 'recette1'

describe('Auth component', () => {
    it('user connection OK', () => {
        cy.clearCookies()
        cy.visit(URL)
        cy.url().should('include', '/auth')
        cy.get('.t2').should('have.text', 'Connexion');
        cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
        cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
        cy.get('button').click();
        cy.url().should('include', '/modality')
        cy.get('app-modality.ng-star-inserted').click();
        cy.get('.confirmBtn').should('have.text', 'CONFIRMER');
        cy.get('.t2').should('have.text', 'Modalité de conversation');
        cy.get('#logout-header > .name').click();
        cy.get('#mat-dialog-title-0').should('have.text', 'Déconnexion');
        cy.get('.question').click();
        cy.get('.question').should('have.text', 'Voulez-vous vous déconnecter?');
        cy.get('.logout-btn').should('have.text', 'SE DÉCONNECTER');
        cy.get('.logout-btn').click();
        cy.url().should('include', '/auth')
        cy.get('.t2').should('have.text', 'Connexion');
        cy.get('.t3').should('have.text', 'Accédez au service de traduction instantanée');
        cy.get('button').should('have.text', 'Se connecter avec Pôle Emploi');
    })
})
