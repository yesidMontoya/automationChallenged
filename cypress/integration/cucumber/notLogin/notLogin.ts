/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import NotLogin from "../../pages/notLogin"

Given('Get the main page', () => {
  NotLogin.visit();
});

When('Fill out invalid credentials', () => {
  NotLogin.fillOutCredentials();
});

When('Click on login in Button', () => {
  NotLogin.loginButton();
});

Then('Validate  error', () => {
  NotLogin.notLogged();
});
