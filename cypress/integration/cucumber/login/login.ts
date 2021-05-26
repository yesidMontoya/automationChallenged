/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import Login from "../../pages/login"

Given('Get the main page', () => {
  Login.visit();
});

When('Fill out valid credentials', () => {
  Login.fillOutCredentials();
});

And('Click on login in Button', () => {
  Login.loginButton();
});

Then('Validate  page after login in', () => {
  Login.logged();
});
