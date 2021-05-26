/// <reference types="Cypress" />

const LOCATORS = {
    HM: '#react-burger-menu-btn',
    LOGOUT_BTN: '#logout_sidebar_link',
    LOGIN_BUTTON: '[data-test=login-button]',
}

class Logout {
    static logout(){
        cy.get( LOCATORS.HM ).click();
        cy.get( LOCATORS.LOGOUT_BTN ).click();
    }

    static verifyLogout(){
        cy.url().should('include', '');
        cy.get( LOCATORS.LOGIN_BUTTON ).should('be.visible');
    }
}
export default Logout;