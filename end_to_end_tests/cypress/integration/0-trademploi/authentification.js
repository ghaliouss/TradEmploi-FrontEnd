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
        cy.get('#logout-header').click()
        cy.get('.logout-btn').click()
        cy.url().should('include', '/start');
        cy.url().should('include', '/auth')

    })

    it('user try to connect with nothing values', () => {
        cy.url().should('include', '/auth')
        cy.contains('SE CONNECTER').should('be.disabled')
        cy.url().should('include', '/auth')
    })

    it('messages d alerte lors de la saisie', () => {
        cy.url().should('include', '/auth')

        cy.get('#email').click();
        cy.get('#password').click();
        cy.get('#mat-error-5').should('have.text', 'L\'adresse email est requise.');

        cy.get('#email').click();
        cy.get('#mat-error-6').should('have.text', 'Le mot de passe est requis.');

        cy.get('#email').clear();
        cy.get('#email').type('test');
        cy.get('#mat-error-7').should('have.text', 'Vous devez entrer une adresse email valide.');
        cy.get('#email').clear();
        cy.get('#email').type('agent@pe.fr');

        cy.get('#password').click();
        cy.get('#password').type('test');

        cy.get('#mat-error-10').should('have.text', 'Le mot de passe doit faire au moins 6 caractères.');
        cy.get('#password').clear();
        cy.get('#password').type('test123456');

    })

    it('user connection KO : mauvais login', () => {
        cy.url().should('include', '/auth')
        cy.get('#email').clear();
        cy.get('#email').type('login_error@pe.fr')

        cy.get('#password').clear();
        cy.get('#password').type(PWD)
        cy.contains('SE CONNECTER').click()
        cy.url().should('include', '/auth')
        cy.contains('La base de donnée est indisponible momentanément. Merci de réessayer plus tard').should("exist")
    })

    it('user connection KO : mauvais mot de passe', () => {
        cy.url().should('include', '/auth')
        cy.get('#email').clear();
        cy.get('#email').type(LOGIN)

        cy.get('#password').clear();
        cy.get('#password').type('password error')
        cy.contains('SE CONNECTER').click()
        cy.url().should('include', '/auth')
        cy.contains('Le mot de passe est invalide, veuillez vérifier l\'adresse web et le mot de passe').should("exist")
    })
})
