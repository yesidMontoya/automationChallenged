/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from "../../pages/login"
import Price from "../../pages/price"

Given('log in', () => {
  Login.done();
});

Then('user use filter', () => {
  Price.sort();
});

