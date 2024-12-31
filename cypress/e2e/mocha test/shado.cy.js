/// <reference types = "Cypress" />

describe('shado DOM', () => {

    it('working with shado dom', () => {
        cy.visit('http://watir.com/examples/shadow_dom.html')
       // cy.get('input[type="text"]').type("raju")
       cy.get('#shadow_host').shadow().find('input[type="text"]').type("raju")
    })

    it.only('example2', () => {
        cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
        cy.get('.smart-ui-component').shadow().find('.smart-menu-item-label-container').first().click()
    })
})