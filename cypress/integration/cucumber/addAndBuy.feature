@addAndBuy
Feature: Add products to de cart and buy
    
    Scenario: price
        Given log in
        When user add products
        And fill the information
        Then user get confirmation page