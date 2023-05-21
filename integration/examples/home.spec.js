// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Task 2: Automation Testing', function() {
    it('Validate A Class models price are between £15,000 and £60,000', function() {
    //Visit the Mercedes Benz Website
    cy.visit("https://www.mercedes-benz.co.uk");

     // Clicking on Widget Menu Item
     cy.get('.hatchbackid').click();
})
})