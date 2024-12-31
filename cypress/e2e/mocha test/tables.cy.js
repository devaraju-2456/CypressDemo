/// <reference types ="Cypress" />

describe("tables", () => {
  it("table1", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1>tbody>tr").should("have.length", 4);
    cy.get("#table1>tbody>tr:nth-child(1)>td").should("have.length", 6);
    cy.get("#table1>thead>tr:nth-child(1)>th").should("have.length", 6);

    cy.get("#table1>tbody>tr:nth-child(2)>td:nth-child(2)").then((text) => {
      var textvalue = text.text();
      expect(textvalue).to.equal("Frank");
    });

    //verify dom data 1way

    cy.get("#table1 >tbody>tr:nth-child(2) >td:nth-child(3)").then((text) => {
      var textvalue = text.text();
      expect(textvalue).to.equal("fbach@yahoo.com");
    });

    // 2nd way
    cy.get("#table1 >tbody>tr:nth-child(2) >td:nth-child(2)").should(
      "have.text",
      "Frank"
    );

    cy.contains("Frank")
      .parent()
      .within(() => {
        cy.get("td").eq(5).find('a[href="#delete"]').click();
        cy.get("td").eq(3).should("have.text", "$51.00");
      });

    cy.contains("Frank").parent().parent().within(() => {
        cy.get("tr:nth-child(3)>td").eq(2).should("have.text", "jdoe@hotmail.com");
      });

// find the how many rows

   cy.get('#table1>tbody>tr').each((rows) => {
    cy.wrap(rows).within((celldata) => {
        cy.log(celldata.text())
    })
   })
  });
});
