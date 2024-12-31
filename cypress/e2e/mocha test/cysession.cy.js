describe("validate orange hrm functionality", () => {
  beforeEach(() => {
    cy.session("login session", () => {
      cy.login("Admin", "admin123");
    });
  });

  it("add employee", () => {
    cy.visit("/web/index.php/dashboard/index");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.contains("Add Employee").click();
    cy.get('input[name="firstName"]').type("raju");
    cy.get('input[name="lastName"]').type("kumar");
  });

  it("clime submit", () => {
    cy.visit("/web/index.php/dashboard/index");
    cy.get('a[href="/web/index.php/claim/viewClaimModule"]').click();
    cy.contains("Submit Claim").click();
  });

  it("Validate employment status ", function () {
    cy.visit("/web/index.php/admin/saveEmploymentStatus");
    cy.wait(3000);
    cy.get('input[class="oxd-input oxd-input--active"]')
      .eq(1)
      .type("Full time");

    cy.get('button[type="submit"]').click();
  });

  it("Validate Employee report ", function () {
    cy.visit("/web/index.php/time/displayProjectReportCriteria");
  });

  it("Attendance Total Summary Report", function () {
    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria");
    cy.wait(3000);
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
  });

  it("Add vacancy", function () {
    cy.visit("web/index.php/recruitment/addJobVacancy");
    cy.wait(3000);
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")
  });
});
