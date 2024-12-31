import addEmployeePage from "../../pages/PIM/addemployee.po";

describe("template spec", () => {
  var detials = ["raju", "kumar", "mahesh", "mohan", "ranga"];
  detials.forEach((element) => {
    it(`addemployee - ${element}`, () => {
      cy.login("Admin", "admin123");
      cy.get(addEmployeePage.pimMenu()).click();
      cy.contains(addEmployeePage.addEmployee()).click();
      cy.get(addEmployeePage.firstNameInput()).type(element);
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.get(addEmployeePage.lastNameInput()).type(r);
      cy.get(addEmployeePage.submitBtn()).click();
      cy.contains(addEmployeePage.successMesagee()).should("be.visible");
    });
  });
});
