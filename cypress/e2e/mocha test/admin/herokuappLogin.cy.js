import herologin from "../../fixtures/herokuappLogin.json";

describe("Herokuapp login functionality", () => {
  it("verify the logo", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.contains("Login Page").should("be.visible");
  });

  it("verify the login functionality with valid credentials", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    //cy.wait(20000)
    cy.get('input[name="username"]').type(Cypress.env("username"));
    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get('button[type="submit"]').click();
    cy.get('div[class="flash success"]').should("be.visible");
    cy.get('i[ class="icon-2x icon-signout"]').click();
    cy.get('div[class="flash success"]').should("be.visible");
  });

  it("verify the login functionality with validUsername and invalidPassword", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get('input[name="username"]').type(herologin.username);
    cy.get('input[name="password"]').type(herologin.invalidusername);
    cy.get('button[type="submit"]').click();
    cy.get('div[class="flash error"]').should("be.visible");
  });

  it("verify the login functionality with invalidUsername and validPassword", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get('input[name="username"]').type("wursIWEU");
    cy.get('input[name="password"]').type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get('div[class="flash error"]').should("be.visible");
  });
  
});
