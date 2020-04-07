Feature: checkTitle
  In order write BDD tests
  As a developer
  I want check the page's title

  Scenario: Check title
    When  I open the url "http://localhost:3000/checkTitle.html"
    Then  I expect that the title is "checkTitle - Test"
