import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles';

describe ('Search test cases', function(){

    before (function(){
        cy.log("Ejecutando precondiciones a las pruebas");
    })

    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach(function(){
        cy.log ("Poner datos en su estado original");
    })

    it ('Search dresses', function(){
        indexPage.search('dress');
        cy.logSpectFormat('Searching for dresses');
        articlesPage.verifyArticle('"dress"');
    })

    it ('Search hats', function(){
        indexPage.search('hat');
        articlesPage.verifyArticle('"hat"');
    })
})