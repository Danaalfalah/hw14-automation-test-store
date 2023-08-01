///<reference types="Cypress"/>
describe('automation test store ', () => {
    it('first test', () => {
        
        cy.visit("https://automationteststore.com/")

        //using selector hub i get the selector same inside it 
        cy.get("img[src='//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg']").click()
        //or using th ranorex seloccity its same result
        // cy.get('img[src="//automationteststore.com/image/thumbnails/18/6f/demo_product03_jpg-100094-250x250.jpg"]').click()

        //
    });
    
});