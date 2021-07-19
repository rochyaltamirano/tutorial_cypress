describe ("Pruebas en el sitio Women", function(){
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })

    it('Large Tops search', function(){
        //Tildar checkbox
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();

        //Destildar checkbox
        cy.get('#layered_category_4').uncheck();
        cy.get('#layered_id_attribute_group_3').uncheck();
    })

    it("Order by Highest Price", function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    })

    it("Order by In stock", function(){
        cy.get('#selectProductSort').select('In stock');
    })
})