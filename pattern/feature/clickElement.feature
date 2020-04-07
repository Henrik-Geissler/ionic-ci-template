Feature: clickElement
  In order write BDD tests
  As a developer
  I want to click on elements on the page

  Scenario: Click button with javascript event handlers
    When  I open the url "http://localhost:3000/clickElement.html"
    And   I click the element ".javascript"
    Then  I expect the element ".inc" contains text "1"

  Scenario: Click link that updates page hash
    When  I click the link "a.hash"
    Then  I expect the page url is "http://localhost:3000/clickElement.html#somehash"

  Scenario: Click link that causes navigation
    When  I click the link "a.nav" and wait for the element "#cssClass"
    Then  I expect the page url is "http://localhost:3000/checkAttribute.html"

  Scenario: Click form submit button
    When  I open the url "http://localhost:3000/clickElement.html"
    And   I click the button "[type='submit']" and wait for the element ".wizard"
    Then  I expect the page url is "http://localhost:3000/checkContainsText.html?listenhere=meow"
