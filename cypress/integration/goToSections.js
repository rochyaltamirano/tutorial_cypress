describe ("Go to different section", function(){
    it("Go to Women section", function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('[class=sf-with-ul]').first().click();
    })

})