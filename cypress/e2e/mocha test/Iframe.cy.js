/// <reference types ="Cypress" />

describe("working with Iframe", () => {
  it("select redibuton", () => {
    cy.visit("https://jqueryui.com/checkboxradio/");
    //cy.get('input[id="radio-1"]').click()
    cy.get('iframe[class="demo-frame"]').then((frame) => {
        var radio = frame.contents().find('#radio-1')
        cy.wrap(radio).click({force: true})
    })
  });
});
