import homePage from "../pages/homePage"


describe('Task 2: Automation Testingt', function() { 
  it('Validate A Class models price are between £15,000 and £60,000', function() {
       cy.visit('https://www.mercedes-benz.co.uk') 

       //Clicking on Widget Menu Item
      homePage.clickOnHatchback();
      homePage.clickOnHatchback();
      //cy.contains('Submit').should('be.visible')   

       })
      
      })