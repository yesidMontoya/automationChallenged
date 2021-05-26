/// <reference types="Cypress" />
const LOCATORS = {
    PRODUCT1: '[data-test=add-to-cart-sauce-labs-backpack]',
    PRODUCT2: '[data-test=add-to-cart-sauce-labs-bike-light]',
    PRODUCT3: '[data-test=add-to-cart-sauce-labs-bolt-t-shirt]',
    SH_CART: '.shopping_cart_link',
    CART_LIST1: '.cart_list > :nth-child(3)',
    CART_LIST2: '.cart_list > :nth-child(4)',
    CART_LIST3: '.cart_list > :nth-child(5)',
    CHECKOUT: '[data-test=checkout]',
    NAME: '[data-test=firstName]',
    LNAME: '[data-test=lastName]',
    CODE: '[data-test=postalCode]',
    CONTINUE: '[data-test=continue]',
    CART_LIST: '.cart_list',
    SUMMARY: '.summary_info',
    FINISH: '[data-test=finish]',
    ORDER:'.complete-header'    
}
class addAndBuy{
    static add() {
        cy.get(LOCATORS.PRODUCT1).click();
        cy.get(LOCATORS.PRODUCT2).click();
        cy.get(LOCATORS.PRODUCT3).click();  
    }
    static shCart(){
        cy.get(LOCATORS.SH_CART).click();
    }
    static verifyProd() {
        cy.get(LOCATORS.CART_LIST1).should('be.visible');
        cy.get(LOCATORS.CART_LIST2).should('be.visible');
        cy.get(LOCATORS.CART_LIST3).should('be.visible');
        cy.get(LOCATORS.CHECKOUT).click();
    }
    static fillOut() {
        cy.get(LOCATORS.NAME).type('Yesid');
        cy.get(LOCATORS.LNAME).type('Montoya');
        cy.get(LOCATORS.CODE).type('55555');
        cy.get(LOCATORS.NAME).type('Yesid');
        cy.get(LOCATORS.CONTINUE).click();
    }
    static finish() {
        cy.get(LOCATORS.CART_LIST).should('be.visible');
        cy.get(LOCATORS.SUMMARY).should('be.visible');
        cy.get(LOCATORS.FINISH).click();
        cy.get(LOCATORS.ORDER).should('be.visible');
    }

}
export default addAndBuy;