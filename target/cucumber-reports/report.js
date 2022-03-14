$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/demo.feature");
formatter.feature({
  "name": "Uniform Website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@happypath"
    }
  ]
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on the login botton",
  "keyword": "And "
});
formatter.step({
  "name": "Hover on the customer logo",
  "keyword": "And "
});
formatter.step({
  "name": "click on customers",
  "keyword": "And "
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.step({
  "name": "fill the details on \"\u003cfirstname\u003e\", \"\u003clastname\u003e\", \"\u003cemail\u003e\", \"\u003ctelephone\u003e\", \"\u003cpassword1\u003e\" and \"\u003cconfirm\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.step({
  "name": "new customer is added",
  "keyword": "When "
});
formatter.step({
  "name": "close the window",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "firstname",
        "",
        "lastname",
        "",
        "email",
        "",
        "telephone",
        "",
        "password1",
        "",
        "confirm"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Admin@123",
        "",
        "abc",
        "",
        "loc",
        "",
        "abc@gmail.com",
        "",
        "7854557854",
        "",
        "abc12345",
        "",
        "abc12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@happypath"
    }
  ]
});
formatter.step({
  "name": "Enter \"Admin\" and \"Admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login botton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_the_login_botton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hover on the customer logo",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.hover_on_the_customer_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_customers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the details on \"abc\", \"loc\", \"abc@gmail.com\", \"7854557854\", \"abc12345\" and \"abc12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.fill_the_details_on_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new customer is added",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.new_customer_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.close_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@happygrouppath"
    }
  ]
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Click on the login botton",
  "keyword": "And "
});
formatter.step({
  "name": "Hover on the customer logo",
  "keyword": "And "
});
formatter.step({
  "name": "Click on the customer group",
  "keyword": "And "
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.step({
  "name": "write new customer group name \"\u003ccusgname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.step({
  "name": "close the window",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "cusgname"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Admin@123",
        "",
        "spongbob"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.user_is_on_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add new customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@happygrouppath"
    }
  ]
});
formatter.step({
  "name": "Enter \"Admin\" and \"Admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login botton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_the_login_botton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hover on the customer logo",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.hover_on_the_customer_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the customer group",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_the_customer_group()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "write new customer group name \"spongbob\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.write_new_customer_group_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.click_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the window",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.close_the_window()"
});
formatter.result({
  "status": "passed"
});
});