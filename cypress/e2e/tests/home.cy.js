import homePage from "/pages/homePage"
import passengercarsPage from "/pages/passengercarsPage";
//import 'cypress-xpath';


describe('Task 2: Automation Testingt', function() { 
  it('Validate A Class models price are between £15,000 and £60,000', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })
      homePage.visit()

       //Clicking on Widget Menu Item
      homePage.clickOnAgreeToAll();
      homePage.clickOnHatchback();
      homePage.hoverOurModels();
      homePage.clickAclassModel();
      homePage.clickBuildYourCar();
      homePage.selectDieselOption();
      homePage.getPrices();

      //Takes a screnshots of the results
      //passengercarsPage.clickAclassModel().screenshot();
       })
      
      })