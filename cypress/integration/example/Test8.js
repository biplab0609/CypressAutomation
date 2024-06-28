/// <reference types="Cypress" />
 
describe('Handle Child Window', function() 
{
 
it('Handle Child Window',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
cy.get('#opentab').then(function(e1){

    const url = e1.prop('href')
    cy.visit(url)

    cy.origin(url,()=>{
        cy.get("div.sub-menu-bar a[href*='about'").click()
    })
     
})

}) 
 
 
})
 