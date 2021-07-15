const { clear } = require("console");

describe ('Formas de encontrar un mismo elemento', function(){
    it ('buscar en el buscador', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('hola'); //busqueda por clase
        cy.get('#search_query_top').type('como te va'); //busqueda por id
        cy.get('[name="search_query"]').type('me va muy bien') //busqueda por cualquier otra propiedad, en este caso por name
        cy.get('[placeholder="Search"]').clear(); //borra lo qe está escrito en el elemento
        cy.get('[placeholder="Search"]').type('chau') //acá busca por place holder
    })
})