/// <reference types="Cypress" />
const LOCATORS = {
    PAGE: 'https://www.saucedemo.com/',
    USER_NAME: '[data-test=username]',
    USER_PASS: '[data-test=password]',
    LOGIN_BUTTON: '[data-test=login-button]',
    APP_LOGO: '.app_logo'
    
}
class Login{
    static visit(){
        cy.visit(LOCATORS.PAGE);
    }
    static fillOutCredentials(){
        cy.get(LOCATORS.USER_NAME).type('standard_user');
        cy.get(LOCATORS.USER_PASS).type('secret_sauce');
    }
    static loginButton(){
        cy.get(LOCATORS.LOGIN_BUTTON).click();
    }
    static logged(){
        cy.url().should('include', '/inventory');
        cy.get(LOCATORS.APP_LOGO).should('be.visible');
    }
    static done(){
        Login.visit();
        Login.fillOutCredentials();
        Login.loginButton();
        Login.logged();
    }
}
export default Login;