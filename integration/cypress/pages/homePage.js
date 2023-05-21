
class homePage{
    elements ={

        hatchBackLink : () => cy.get('#hatchback-portaledId'),
        acceptCookies : () => cy.contains('Agree to all'),
        models: () => cy.contains ('dh-io-vmos_9BIGf')

    }



    clickAcceptCookies(){
        this.elements.acceptCookies().click()
    }

    clickOnHatchback(){
        this.elements.hatchBackLink().click()
    }
}


module.exports = new homePage();