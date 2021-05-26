@notLogin
Feature: Login with a invalid user
    
    Scenario: Login
        Given Get the main page
        When Fill out invalid credentials
        And Click on login in Button
        Then Validate  error