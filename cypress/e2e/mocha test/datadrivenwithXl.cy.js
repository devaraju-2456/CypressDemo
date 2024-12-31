/// <reference types = "Cypress" />
import data from "../fixtures/ExceltoJson/user_data.json"
import login from "../pages/admin/login.po"

describe('Automation - Working With Data driven testing json', function () {

    data.forEach((data) =>{
  
          
          it(`Cypress Test Case - for ${data.username}`, function () {
              cy.login(data.username, data.password)
              cy.get(login.errorMessage()).should("be.visible")
  
            })
  
      })
      
  })

