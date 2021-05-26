/// <reference types="Cypress" />
const LOCATORS = {
    PAGE: 'https://www.saucedemo.com/',
    USER_NAME: '[data-test=username]',
    USER_PASS: '[data-test=password]',
    LOGIN_BUTTON: '[data-test=login-button]',   
    MSJ_ERROR: '[data-test=error]',
    CLASS_ERROR: '.error-message-container'
}
class NotLogin{
    static visit(){
        cy.visit(LOCATORS.PAGE);
    }
    static fillOutCredentials(){
        cy.get(LOCATORS.USER_NAME).type('standard_user');
        cy.get(LOCATORS.USER_PASS).type('fail');
    }
    static loginButton(){
        cy.get(LOCATORS.LOGIN_BUTTON).click();
    }
    static notLogged(){
        cy.get( LOCATORS.CLASS_ERROR ).should('be.visible');
        cy.get( LOCATORS.MSJ_ERROR ).should('be.visible');
    }
}
export default NotLogin;