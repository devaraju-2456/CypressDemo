/// <reference types ="Cypress" />

describe("writeAndReadfile", () => {
  it("writeFile", () => {
    cy.writeFile("cypress/fixtures/module1/test.txt", "raju" + "\n");
    var stname = "kumar";
    cy.writeFile("cypress/fixtures/module1/test.txt", stname, { flag: "a+" });
    cy.writeFile(
      "cypress/fixtures/module1/test.txt",
      { firstNmane: "Raju", lastName: "G" },
      { flag: "a+" }
    );
  });

  it("Cypress Test Case - extracting text and saving ina file ", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      'p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]'
    ).then((txt) => {
      var textvalue = txt.text();
      cy.writeFile("cypress/fixtures/module1/example.txt", textvalue);
    });
  });

  it("Cypress Test Case - Validation of Data both Text file and Json", () => {
    cy.readFile("cypress/fixtures/module1/test.txt").should("contain", "raju");
    cy.readFile("cypress/fixtures/jobdata.json")
      .its("username")
      .should("eq", "Admin");
  });

  it("get data from dom", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('p[class="oxd-text oxd-text--p orangehrm-copyright"]')
      .first()
      .then((txt) => {
        var version1 = txt.text();
        Cypress.env("version", version1);
        cy.log(Cypress.env("version"));
      });
  });

  it("get user name and password from dom", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('p[class="oxd-text oxd-text--p"]')
      .first()
      .then((txt) => {
        var usertext = txt.text();

        cy.writeFile("cypress/fixtures/module1/creds.txt", usertext + "\n");
        cy.log(usertext);
      });
    cy.get('p[class="oxd-text oxd-text--p"]')
      .last()
      .then((txt) => {
        var paswordtext = txt.text();

        cy.writeFile("cypress/fixtures/module1/creds.txt", paswordtext, {
          flag: "a+",
        });
      });
  });

/*   it.only("flipkart", () => {
    cy.visit("https://www.flipkart.com/");

    cy.get('span[class="_1XjE3T"]').eq(0).then((txt) => {

        var txt1 = new txt.text();

        cy.writeFile("cypress/fixtures/module1/flipkart.txt", txt1+"\n");
      });
    cy.get('span[class="_1XjE3T"]').eq(1).then((txt) => {

        var txt2 = new txt.text();

        cy.writeFile("cypress/fixtures/module1/flipkart.txt", txt2,{flag: 'a+'});
      });
  }); */

  it("flipkart", ()=>{

    cy.visit("https://www.flipkart.com/")

    cy.get('span[class="_1XjE3T"]').eq(0).then((txt)=>{


        var txt0 = txt.text()

        cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt0+"\n" )
    })

    
    cy.get('span[class="_1XjE3T"]').eq(1).then((txt)=>{


        var txt1 = txt.text()

        cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt1,{flag: 'a+'})
    })

    cy.get('span[class="_1XjE3T"]').eq(2).then((txt)=>{


      var txt2 = txt.text()

      cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt2,{flag: 'a+'} )
  })

  cy.get('span[class="_1XjE3T"]').eq(3).then((txt)=>{


    var txt3 = txt.text()

    cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt3,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(4).then((txt)=>{


  var txt4 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt4,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(5).then((txt)=>{


  var txt5 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt5,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(6).then((txt)=>{


  var txt6 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt6,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(7).then((txt)=>{


  var txt7 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt7,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(8).then((txt)=>{


  var txt8 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt8,{flag: 'a+'} )
})

cy.get('span[class="_1XjE3T"]').eq(9).then((txt)=>{


  var txt9 = txt.text()

  cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', txt9,{flag: 'a+'} )
})
})

it.only("flipkart", () => {
  cy.visit("https://www.flipkart.com/");
  let menuItems = [];
  cy.get('span[class="_1XjE3T"]').each((item) => {
    cy.wrap(item).invoke('text').then((text) => {
      const cleanedText = text.trim();
      if (cleanedText) {
        menuItems.push(cleanedText);
      } else {
        cy.log("Empty or invalid text at this index");
      }
    });
  }).then(() => {
    cy.writeFile('cypress/fixtures/module1/flipkartmenu.txt', menuItems.join("\n"));
  });
});


});
