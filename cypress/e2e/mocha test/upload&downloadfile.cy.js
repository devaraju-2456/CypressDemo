//import "./commands";
/// <reference types ="Cypress" />

describe("uploadfile", () => {

  it("uploadfile-selectfile", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile("F:/Deva/cypress/fixtures/nature.jpg");
    cy.get("#file-submit").click();
  });

  it("uploadfile-attachFile", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("nature.jpg");
    cy.get("#file-submit").click();
  });

  it.only('downloadFile', () => {
    cy.downloadFile("https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", "cypress/downloads", "nature.jpg")
    cy.readFile('cypress/downloads/nature.jpg').should("exist")
  })

});
