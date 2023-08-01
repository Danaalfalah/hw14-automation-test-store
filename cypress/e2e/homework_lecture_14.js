/// <reference types="Cypress"/>
describe('homework14 for cy.log', () => {
    it('test1', () => {
        cy.visit("https://automationteststore.com/")

        //for click on shipping 
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/content&content_id=4']").contains("Shipping").click().then(function(element){
            cy.get('.heading4').should('have.text',"Shipping")
            cy.log(element.text()+"  has been clicked")
            cy.get('.logo > img').click()
        })

        //for click on contact us 
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").contains("Contact Us").click().then(function(element){
            cy.get('.maintext').should('have.text'," Contact Us")
            cy.log(element.text()+"  has been clicked")
            cy.get('.logo > img').click()
        })

        //for click on map 
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/sitemap']").contains("Site Map").click().then(function(element){
            cy.get('.maintext').should('have.text'," Site Map")
            cy.log(element.text()+"  has been clicked")
            cy.get('.logo > img').click()
        })
    });
    
});