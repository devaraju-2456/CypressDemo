import addEmployeePage from "../pages/PIM/addemployee.po";
describe("delete the employee", () => {
  beforeEach(() => {
    cy.session("login session", () => {
      cy.login("Admin", "admin123");
    });
  });

  it("delete employee", () => {
    cy.visit("/web/index.php/pim/viewEmployeeList");
    cy.get("body").then((body) => {
      if (body.find('i[class="oxd-icon bi-trash"]').length > 0) {
        cy.get('i[class="oxd-icon bi-trash"]').first().click();
        cy.contains(" Yes, Delete ").click();
        cy.contains("Successfully Deleted").should("be.visible");
      } else {
        cy.visit(
          "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
        );
        cy.get(addEmployeePage.firstNameInput()).type("raju");
        cy.get(addEmployeePage.lastNameInput()).type("guru");
        cy.get(addEmployeePage.submitBtn()).click();
        cy.contains(addEmployeePage.successMesagee()).should("be.visible");
        cy.visit("/web/index.php/pim/viewEmployeeList");
        cy.get('i[class="oxd-icon bi-trash"]').first().click();
        cy.contains(" Yes, Delete ").click();
        cy.contains("Successfully Deleted").should("be.visible");
      }
    });
  });
});
