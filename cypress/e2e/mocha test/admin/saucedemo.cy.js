/// <reference types ="Cypress" />

context("login functionality for saucedemo", () => {
  before("", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.get('div[class="login_logo"]').should("be.visible");
  });

  beforeEach("login url", () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });

  afterEach("", () => {
    cy.log("After Each");
  });

  after("", () => {
    cy.log("Afrer");
  });

  it("verify the logo", () => {
    cy.get('img[class="bot_column"]').should("be.visible");
  });

  it.skip("standard_user", () => {
    cy.get('input[name="user-name"]').type("standard_user");
    cy.get('input[name="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.get('div[class="product_label"]').should("be.visible");
  });

  specify("locked_out_user", () => {
    cy.get('input[name="user-name"]').type("locked_out_user");
    cy.get('input[name="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.get('h3[data-test="error"]').should("be.visible");
  });

  it("problem_user", () => {
    cy.get('input[name="user-name"]').type("problem_user");
    cy.get('input[name="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.get('div[class="product_label"]').should("be.visible");
  });

  it("performance_glitch_user", () => {
    cy.get('input[name="user-name"]').type("performance_glitch_user");
    cy.get('input[name="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.get('div[class="product_label"]').should("be.visible");
  });

  it("standard_user", () => {
    cy.get('input[name="user-name"]').type("standard_user");
    cy.get('input[name="password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.get('div[class="product_label"]').should("be.visible");

    it("standard_user", () => {
      cy.get('input[name="user-name"]').type("standard_user");
      cy.get('input[name="password"]').type("secret_sauce");
      cy.get('input[type="submit"]').click();
      cy.get('div[class="product_label"]').should("be.visible");
      cy.get('button[class="btn_primary btn_inventory"]').eq(0).click();
    });
  });
});
