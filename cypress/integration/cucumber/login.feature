@login
Feature: Login with a valid user
    
    Scenario: Login
        Given Get the main page
        When Fill out valid credentials
        And Click on login in Button
        Then Validate  page after login in