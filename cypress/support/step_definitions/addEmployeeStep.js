import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import addEmployeePage from "../../pages/PIM/addemployee.po";

When("click on PIM", () => {
  cy.get(addEmployeePage.pimMenu()).click();
});

When("click on add employee submenu", () => {
  cy.contains(addEmployeePage.addEmployee()).click();
});

When("enter employee firstname {string}", (firstname) => {
  cy.get(addEmployeePage.firstNameInput()).type(firstname);
});

When("enter employee lastname {string}", (lastname) => {
  cy.get(addEmployeePage.lastNameInput()).type(lastname);
});

When("click the save button", () => {
  cy.get(addEmployeePage.submitBtn()).click();
});

Then("sucess message should be visible", () => {
  cy.contains("Successfully Saved").should("be.visible");
});

Then("mandotory fields error message should be visible", () => {
  cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').first().should("be.visible");
  cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').last().should("be.visible");
});
