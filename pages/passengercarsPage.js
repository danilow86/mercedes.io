
class passengerCarPage{
    elements ={

        filterByDiesel : () => cy.get('.ng-valid ng-star-inserted wb-checkbox hydrated ng-dirty ng-touched'),

    }

    clickDieselOption(){
        this.elements.filterByDiesel().click()
    }
}


module.exports = new passengerCarPage();