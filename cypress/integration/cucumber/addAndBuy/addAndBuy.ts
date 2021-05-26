/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from "../../pages/login"
import addAndBuy from "../../pages/addAndBuy"


Given('log in', () => {
  Login.done();
});

When('user add products', () => {
  addAndBuy.add();
  addAndBuy.shCart();
  addAndBuy.verifyProd();
});

When('fill the information', () => {
  addAndBuy.fillOut();
});

Then('user get confirmation page', () => {
  addAndBuy.finish();
});
