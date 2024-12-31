/* /// <reference types ="Cypress" />

describe("drag and drop", () => {
  it("drag", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");

    //1st approch
     cy.get('#menu-fried-chicken').drag('#plate-items')
        cy.get('#menu-hamburger').drag('#plate-items')

    //2nd approch

    const dataTransfer = new DataTransfer();

    cy.get("#menu-fried-chicken").trigger("dragstart", { dataTransfer });

    cy.get("#plate-items").trigger("drop", { dataTransfer });

    cy.get("#menu-hamburger").trigger("dragstart", { dataTransfer });

    cy.get("#plate-items").trigger("drop", { dataTransfer });

  });
  
  it.only("scrolling", () => {
    cy.visit('https://www.cypress.io/')
    cy.get('a[href="https://on.cypress.io"]').scrollIntoView()
}) 

}); */
