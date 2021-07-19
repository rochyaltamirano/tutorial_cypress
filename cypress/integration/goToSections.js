describe ("Go to different section", function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    //Selecciona el primer elemento
    it("Go to Women section", function(){
        cy.get('[class=sf-with-ul]').first().click();
    })

    //Selecciona el elemento pasado por parámetro en 'eq'
    it ("Go to Dress section", function(){
        cy.get('[class=sf-with-ul]').eq(3).click();
    })
})