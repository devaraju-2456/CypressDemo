/// <reference types ="cypress" />
import loginPage from "../../pages/admin/login.po";

describe.only("Verify Login functionality", () => {
  beforeEach("loginUrl", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("Verify the logo", () => {
    cy.get(loginPage.logoImg()).should("be.visible");
  });

  it("Verify login with valid credentials", () => {
    switch (Cypress.browser.name) {
      case "chrome":
        {
          console.log("im running in chrome");
          cy.viewport("macbook-16");
          cy.login("Admin", "admin123");
          cy.get(loginPage.dashbord()).should("be.visible");
        }
        break;
      case "edge":
        {
          console.log("im running in edge");
          cy.viewport("macbook-16");
          cy.login("Admin", "admin123");
          var items = {
            item1: "Admin",
            item2: "PIM",
            item3: "Leave",
            item4: "Time",
            item5: "Recruitment",
            item6: "My Info",
            item7: "Performance",
            item8: "Dashboard",
            item9: "Directory",
            item10: "Maintenance",
            item11: "Claim",
            item12: "Buzz",
          };
          for (let item in items) {
            cy.contains(items[item]).should("be.visible");
          }
        }
        break;
      case "electron":
        {
          console.log("im running in chrome");
          cy.viewport("samsung-s10");
          cy.login("Admin", "admin123");
          cy.contains(loginPage.timeAtWork()).should("be.visible");
        }
        break;
      default: {
        console.log("im default");
      }
    }
  });

  it("Verify login with validUsername InvalidPassword", () => {
    loginPage.login("Admin", "admin1jg");
    cy.get(loginPage.errorMessage()).should("be.visible");
  });

  it("Verify login with invalidUsername validPassword", () => {
    loginPage.login("ajhjadd", "admin123");
    cy.get(loginPage.errorMessage()).should("be.visible");
  });

  it("Verify login with invalidUsername invalidPassword", () => {
    loginPage.login("Rajdhf", "fSHFUHW");
    cy.get(loginPage.errorMessage()).should("be.visible");
  });
});
