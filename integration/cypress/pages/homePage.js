
class homePage{
    elements ={

        hatchBackLink : () => cy.get('#hatchback-portaledId'),
        acceptCookies : () => cy.contains('Agree to all'),
        models: () => cy.get('dh-io-vmos_9BIGf'),
        aClassLink : () => cy.get('.wb-grid-row dh-io-vmos_3Z8XX'),
        buildYourCarLink : () => cy.get('.wb-grid-row dh-io-vmos_3Z8XX')

    }

    clickAcceptCookies(){
        this.elements.acceptCookies().click()
    }

    clickOnHatchback(){
        this.elements.hatchBackLink().click()
    }

    clickAclassModel(){
        //action to hover state
        cy.get(aClassLink).trigger('mouseover')
        this.elements.aClassLink().click()
    }

    clickBuildYourCar()
    {
        this.elements.buildYourCarLink().click()
    }
}


module.exports = new homePage();