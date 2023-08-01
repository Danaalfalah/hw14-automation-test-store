///<reference types="Cypress"/>
describe('automation test store ', () => {
    it('first test', () => {
        
        cy.visit("https://automationteststore.com/")

        //using selector hub i get the selector same inside it  
        //this line click on Contact us 
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
        
        //in contact us
        //fill first name
        cy.get("#ContactUsFrm_first_name").type("Dana")
        //fill email
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        //fill Enquiry
        cy.get('#ContactUsFrm_enquiry').type("test text.................................")

        //click on submit
        cy.get('button[title="Submit"]').click()

  


    });
    
    //when use it.only just this it will be test 
    it.only('second test', () => {
        
        cy.visit("https://automationteststore.com/")

        //using selector hub i get the selector same inside it  
        //this line click on Contact us 
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
        
        //in contact us
        //fill first name
        cy.get("#ContactUsFrm_first_name").type("Dana")
        //fill email
        cy.get('#ContactUsFrm_email').type("test@gmail.com")
        //fill Enquiry
        cy.get('#ContactUsFrm_enquiry').type("test text.................................")

        //click on submit
        cy.get('button[title="Submit"]').click()

        //to check its done using assertion 
        cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!")

        //to check the webpage have propirty(title) and eq (contact us)
        cy.document().should('have.a.property',"title").and('eq',"Contact Us")

        //to check the title include us
        cy.title().should('include',"Us")
    });
    
});