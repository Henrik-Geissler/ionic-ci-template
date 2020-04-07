Feature: Page Feature

  In order to explore the Ionic UI Components
  As a user
  I want to be able access the Ionic UI Component Documentation

  Background:
    Given the page "page/Inbox" is opened
    When  I click the element "ion-menu-button"
    And   I wait for 1.0 seconds

  Scenario: The Website should match the Screenshot
    Then  I expect the screenshot of "inbox" matches the web page

  Scenario Outline: Visit other Pages via the Menu
    When  I click the element <element>
    Then  I expect the page url contains <page>

    Examples:
      | element                              | page             |
      | "ion-item[href=\"/page/Inbox\"]"     | "page/Inbox"     |
      | "ion-item[href=\"/page/Outbox\"]"    | "page/Outbox"    |
      | "ion-item[href=\"/page/Favorites\"]" | "page/Favorites" |
      | "ion-item[href=\"/page/Trash\"]"     | "page/Trash"     |
      | "ion-item[href=\"/page/Spam\"]"      | "page/Spam"      |

  Scenario Outline: Visit the Ionic UI Components Documentation
    When  I click the element <element>
    And   I wait for 1.0 seconds
    And   I click the element "div.container>p>a[target=_self]"
    Then  I expect the page url is "https://ionicframework.com/docs/components"

    Examples:
      | element                              |
      | "ion-item[href=\"/page/Inbox\"]"     |
      | "ion-item[href=\"/page/Outbox\"]"    |
      | "ion-item[href=\"/page/Favorites\"]" |
      | "ion-item[href=\"/page/Trash\"]"     |
      | "ion-item[href=\"/page/Spam\"]"      |
