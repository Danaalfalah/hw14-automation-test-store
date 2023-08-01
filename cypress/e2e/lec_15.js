/// <reference types="Cypress"/>

describe('the example in lesson 15', () => {

    it('print the price for each item  without dollar sign ', () => {
        cy.visit("https://automationteststore.com/")

        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        
        cy.get(".fixed_wrapper .prdocutname").each((element,index,list)=>{

            if(element.text().includes("Pantene")){
                //is deprecated not use now
                // element.click()
                //this line is use now  
                cy.wrap(element).click()
            }
        })


    });
    it.only('print the price for each item  without dollar sign', () => {

        cy.visit("https://automationteststore.com/")
        //to bring the item itself so i can take the price out of it 
        //and get it nickname using as items  
        
        cy.get('.thumbnail').as("Items")
        //find all items have class one price
        cy.get('@Items').find('.oneprice').invoke('text').as('itemPrice')

        cy.get('@itemPrice').then((pricetext)=>{
            let myListOfPrices = pricetext.split("$")
            let total=0
            for(let i=0 ; i < myListOfPrices.length ;i++) {
                cy.log(myListOfPrices[i])
                //to convert the string to number 
                total+=Number(myListOfPrices[i])
            }
            cy.log("total = "+total)
        })
        
        // //and each one i wont print the price 
        // cy.get('@Items').find('.oneprice').each((element,index,list)=>{
        //     cy.log("the "+element.text()+" is located at the index # "+index)
        // })


        
    });


    it('print the price for each item  with dollar sign', () => {

        cy.visit("https://automationteststore.com/")
        //to bring the item itself so i can take the price out of it 
        //and get it nickname using as items  
        //
        cy.get('.thumbnail').as("Items")
        //find all items have class one price  and each one i wont print the price 
        cy.get('@Items').find('.oneprice').each((element,index,list)=>{
            cy.log("the "+element.text()+" is located at the index # "+index)
        })


        
    });


    
});