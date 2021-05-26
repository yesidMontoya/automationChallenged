/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from "../../pages/login"
import Logout from "../../pages/logout"

Given('Login', () => {
  Login.done();
});

Then('Logout', () => {
  Logout.logout();
  Logout.verifyLogout();
});
