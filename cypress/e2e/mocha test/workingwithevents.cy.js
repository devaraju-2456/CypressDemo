/// <reference types ="Cypress" />

describe("events", () => {
  it("Hidden element", () => {
    cy.visit("https://www.flipkart.com/");
    cy.get('a[href="/communication-preferences/push?t=all"]').click({
      force: true,
    });
  });

  it("click event", () => {
    cy.visit(
      "https://www.flipkart.com/?s_kwcid=AL!739!3!582822043580!b!!g!!flipkart&gclsrc=aw.ds&&semcmpid=sem_8024046704_brand_exe_buyers_goog&gad_source=1&gclid=CjwKCAiAmfq6BhAsEiwAX1jsZ_pbU-XWXQMbmpo24B8sRpX3Cs9QK7ebnBiqaP_UbUa48_E8z7MVORoCDQgQAvD_BwE"
    );
    cy.get('img[alt="Dropdown with more help links"]').click({ force: true });
  });
  it("check box", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type("Admin", { delay: 0 });
    cy.get('input[name="password"]').type("admin123{enter}");
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    /*     cy.get('input[type="checkbox"]').check({ force: true });
    cy.wait(3000);
    cy.get('input[type="checkbox"]').uncheck({ force: true }); */
    cy.get('input[type="checkbox"]').check(["0", "3", "5"], { force: true });
  });

  it("redio button", () => {
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );
    /*     cy.get('input[value="m"]').should("be.checked")
    cy.get('input[value="f"]').should("not.be.checked") */
    cy.get('input[value="f"]').check();
    cy.get('input[value="f"]').should("be.checked");
    cy.get('input[value="m"]').should("not.be.checked");
  });

  it("drop down", () => {
    cy.visit(
      "https://register.rediff.com/register/register.php?FormName=user_details"
    );
    cy.get('select[name^="DOB_Month"]').select("06");
  });

  it.only("tabs", () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.visit("https://www.cypress.io/");
    cy.get('a[href="https://on.cypress.io/installing-cypress"]')
      .first().invoke("removeAttr", "target")
      .click({ force: true });
     cy.url().should("eq", "https://docs.cypress.io/app/get-started/install-cypress")
  });

  it('combobax', () => {
    cy.visit('')
    cy.get("#doc_search_input").type("DataMaps")
    cy
  })
 
});
