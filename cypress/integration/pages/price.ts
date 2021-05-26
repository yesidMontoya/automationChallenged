/// <reference types="Cypress" />
const LOCATORS = {
    PAGE: 'https://www.saucedemo.com/',
    SORT: '[data-test=product_sort_container]',
    I_LIST: '.inventory_list>.inventory_item',
    PRICE: '.inventory_item_description>.pricebar >.inventory_item_price',
    
}
class Price{
    static sort(){
        cy.get(LOCATORS.SORT).select('lohi');
    }
}
export default Price;