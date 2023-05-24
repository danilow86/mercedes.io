const { click } = require("wd/lib/commands")

class homePage{
    elements ={
        //cookieNotice : () => cy.get('.cookie-notice'),
        agreeLink : () => cy.contains('agree'),
        hatchBackLink : () => cy.get('#hatchback-portaledId'),
        models: () => cy.get('dh-io-vmos_9BIGf'),
        aClassLink : () => cy.get('.wb-grid-row dh-io-vmos_3Z8XX'),
        buildYourCarLink : () => cy.get('.wb-grid-row dh-io-vmos_3Z8XX')

    }

    constructor() {
        this.url = "https://www.mercedes-benz.co.uk"
      }
     
    visit(){
        cy.visit(this.url)
    }
    
      clickOnAgreeToAll() {
        // Wait for the button to appear
        cy.wait(5000);

        // Wait for the cookie consent banner to be visible
        cy.contains('agree').click({ force: true });
    
    }

    hoverOurModels(){
        // Hover over "Our Models" dropdown
        cy.get('.nav-submenu-trigger-label').contains('Our Models').trigger('mouseover');
    }

    clickOnHatchback(){
         // Click on "Hatchbacks"
        cy.contains('Hatchbacks').click();
    
        // Click on "Hatchbacks"
        cy.contains('Hatchbacks').click();

    }

    clickAclassModel(){
        // Mouse over the "A Class" model
        cy.get('.col2-10 a[href="/cars/a-class/hatchback"]').trigger('mouseover');
    }

    clickBuildYourCar()
    {
        // Click on "Build your car"
        cy.contains('Build your car').click();
    }

    selectDieselOption(){
        // Select "Diesel" fuel type
        cy.get('input[value="Diesel"]').click();
    }

 
    // Get the prices and save the highest and lowest values in a text file
    getPrices(){
        // Take a screenshot of the results
        cy.get('.sales-price').then(($prices) => {
            const prices = $prices.map((_, el) => Number(el.innerText.replace('£', ''))).toArray();
            const highestPrice = Math.max(...prices);
            const lowestPrice = Math.min(...prices);
            const result = `Highest Price: £${highestPrice}\nLowest Price: £${lowestPrice}`;
      
            cy.writeFile('prices.txt', result);
          });
    }

}


module.exports = new homePage();