import jobdata from "../../fixtures/jobdata.json";
import addJobPage from "../../pages/admin/addjobs.po";
describe("template spec", () => {
  var jobdata1 = {
    jobtitle: "Test Engineer",
    jobdescrption: "Cypress Test Engineer required",
  };

  it("Add Jobs", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login("Admin", "admin123");
    cy.get(addJobPage.adminMenu()).eq("0").click();
    cy.contains(addJobPage.jobDropdown()).click();
    cy.contains(addJobPage.jobTitle()).click();
    cy.get(addJobPage.addButton()).click();
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get(addJobPage.jobTitleInput()).eq("1").type(jobdata1.jobtitle + " " + r);
    cy.get(addJobPage.jobDecriptionInput()).type(jobdata1.jobdescrption);
    cy.contains(addJobPage.saveButton()).click();
    cy.contains(addJobPage.successMesagee()).should("be.visible");
  });
});
