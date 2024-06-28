/// <reference types='Cypress'/> 
describe('Handle Mouse Hover', function(){
    it('Mouse hover', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')


    })
})