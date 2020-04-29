$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/org/uk/wcht/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "\r\nAs a User I want to Login to WCHT Website",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 31101357700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on the Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Verify User can navigate to Login Page",
  "description": "",
  "id": "login-feature;verify-user-can-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the Account link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on the Login Link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the Login Register Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 493983600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheAccountLink()"
});
formatter.result({
  "duration": 12441098000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 290171500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iCanSeeTheLoginRegisterPage()"
});
formatter.result({
  "duration": 286207300,
  "status": "passed"
});
formatter.after({
  "duration": 1626299600,
  "status": "passed"
});
formatter.before({
  "duration": 25238378900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on the Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User in Not Able to Login With Invalid credentials",
  "description": "",
  "id": "login-feature;verify-user-in-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "System to display Login Error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12643248400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cusername\u003e",
      "offset": 18
    },
    {
      "val": "\u003cpassword\u003e",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 747493300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginSubmitButton()"
});
formatter.result({
  "duration": 183447700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemToDisplayLoginErrorMessage()"
});
formatter.result({
  "duration": 357958400,
  "status": "passed"
});
formatter.after({
  "duration": 1557507700,
  "status": "passed"
});
formatter.uri("src/test/java/org/uk/wcht/resources/featurefile/navigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation feature",
  "description": "\r\nAs a user I want to navigate to pages on WCHT.ORG.UK",
  "id": "navigation-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26289095800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Able to See Ways to Your Home Page",
  "description": "",
  "id": "navigation-feature;verify-user-able-to-see-ways-to-your-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Your Home Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Pay Your Rent Link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am able to see Your Home Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 68400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnYourHomeLink()"
});
formatter.result({
  "duration": 4054249000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnPayYourRentLink()"
});
formatter.result({
  "duration": 1299495300,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iAmAbleToSeeYourHomeText()"
});
formatter.result({
  "duration": 1238477500,
  "status": "passed"
});
formatter.after({
  "duration": 1996784200,
  "status": "passed"
});
formatter.before({
  "duration": 31873198400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Able to See Ways to Exchange Your Home Text",
  "description": "",
  "id": "navigation-feature;verify-user-able-to-see-ways-to-exchange-your-home-text",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Find A Home Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Exchange Your Home Link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am able to see Exchange Your Home Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnFindAHomeLink()"
});
formatter.result({
  "duration": 2418308000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnExchangeYourHomeLink()"
});
formatter.result({
  "duration": 8441783800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iAmAbleToSeeExchangeYourHomeText()"
});
formatter.result({
  "duration": 276061600,
  "status": "passed"
});
formatter.after({
  "duration": 2107797400,
  "status": "passed"
});
});