/// <reference types ="cypress" />

describe("Api Autometion testing demo", () => {
  it("GET request api testing", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((Response) => {
      expect(Response.status).to.equal(200);
      expect(Response.body).to.have.property("page", 2);
      expect(Response.body.data[0]).to.have.property("id", 7);
      cy.writeFile("cypress/fixtures/apiresponce.txt", Response);
      expect(Response.body.data[2].email).to.equal("tobias.funke@reqres.in");
    });
  });

  it("GET request api testing - Orange HRM", () => {
    cy.request({
      metthod: "GET",
      url: "/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      headers: {
        cookie: Cypress.env('cookivalue'),
        referer:
          "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
      },
    }).then((Response) => {
      expect(Response.status).to.equal(200);
      var firstEmployeeNm = Response.body.data[0].empNumber;
      cy.log(firstEmployeeNm);
      expect(Response.body.data[0].empNumber).to.equal(128);
    });
  });

  it.only("POST request api testing - Orange HRM", () => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      headers: {
        cookie: Cypress.env('cookivalue'),
        referer: "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
      },
      body: {
        firstName: "varhunk",
        middleName: "",
        lastName: "pp",
        empPicture: null,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
  
});
