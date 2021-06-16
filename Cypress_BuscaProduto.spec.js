/// <reference types="cypress"/>

describe('LojaVirtual', () => {
    it('BuscaProduto', () => {
        cy.visit('http://automationpractice.com/index.php') //Página inicial

        cy.get('.sf-menu > :nth-child(1) > [title="Women"]').focus() //Abre o menu "Women"
        cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(1) > a').click() //Seleciona a categoria "T-shirts"

        cy.url().should('include', '?id_category=5&controller=category') //Verifica se está na página das "T-shirts"
        cy.get('.right-block > h5 > .product-name').click() //Clica no único produto da página

        cy.url().should('include', '?id_product=1&controller=product') //Verifica se está na página do produto selecionado
        cy.get('#group_1').select('M') //Altera tamanho para "M"
        cy.get('#color_14').click() //Altera cor para "blue"

        cy.get('.exclusive > span').click() //Adiciona o produto ao carrinho de compras
        cy.get('.button-medium > span').click() //Vai para o carrinho

        cy.url().should('include','?controller=order') //Verifica se está na página do carrinho
        cy.get('.cart_description > .product-name > a').should('have.text', 'Faded Short Sleeve T-shirts')
        //Verifica se o produto do carrinho é "Faded Short Sleeve T-shirts"
        
        cy.get('.cart_description > :nth-child(3) > a').should('contain', 'Color : Blue')
        //Verifica se a cor do produto do carrinho é "Blue"
        
        .and('contain', 'Size : M') //Verifica se o tamanho do produto do carrinho é "M"
        cy.get('#total_product').should('have.text', '$16.51') //Verifica se o preço do produto do carrinho é "$16.51"
    });
});