/// <reference types = "cypress" />
import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/admin/login.po";

Given("launch the url", () => {
  cy.visit("/web/index.php/auth/login");
});

When(
  "user enter username {string} and password {string}",
  (username, password) => {
    cy.get(loginPage.usernameInput()).type(username);
    cy.get(loginPage.psswordInput()).type(password);
  }
);

When("click the login button", () => {
  cy.get(loginPage.submitBtn()).click();
});

Then("user should be navigated to dashbord page", () => {
  cy.get(loginPage.dashbord()).should("be.visible");
});

Then("user should get login error", () => {
  cy.get(loginPage.errorMessage()).should("be.visible");
});
