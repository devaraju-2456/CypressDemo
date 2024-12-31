/// <reference types ="cypress" />

describe("Spying on GET request", () => {
  it("should spy on get request and validate its request", () => {
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC").as("getEmployees");
    cy.login("Admin", "admin123")
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    cy.wait('@getEmployees').then((interception) => {
        expect(interception.response.statusCode).to.equal(200)
    })
  });
});
