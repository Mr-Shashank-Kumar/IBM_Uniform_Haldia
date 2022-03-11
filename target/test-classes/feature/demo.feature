Feature: Uniform Website

  Background: 
    Given User is on the application
    

  @happypath
  Scenario Outline: add new customers
  	Then Enter "<username>" and "<password>"
    And Click on the login botton
    And Hover on the customer logo
    And click on customers
    And click on add new button
    And fill the details on "<firstname>", "<lastname>", "<email>", "<telephone>", "<password1>" and "<confirm>"
    And Click on save
    When new customer is added
    Then close the window

    Examples: 
      | username |  | password  |  | firstname |  | lastname |  | email         |  | telephone  |  | password1 |  | confirm  |
      | Admin    |  | Admin@123 |  | abc       |  | loc      |  | abc@gmail.com |  | 7854557854 |  | abc12345  |  | abc12345 |

  @happygrouppath
  Scenario Outline: add new customers
  	Then Enter "<username>" and "<password>"
    And Click on the login botton
    And Hover on the customer logo
    And Click on the customer group
    And click on add new button
    And write new customer group name "<cusgname>"
    And Click on save
    And close the window

    Examples: 
      | username |  | password  |  | cusgname |
      | Admin    |  | Admin@123 |  | spongbob |
