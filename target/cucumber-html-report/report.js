$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "RTSM-CP4 Application Test",
  "description": "",
  "id": "rtsm-cp4-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the Home Page Test",
  "description": "",
  "id": "rtsm-cp4-application-test;validate-the-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is on Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user login into app",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "create new program",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_Browser()"
});
formatter.result({
  "duration": 7431137900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Login_page()"
});
formatter.result({
  "duration": 56208200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_login_into_app()"
});
formatter.result({
  "duration": 4692388600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_the_home_page()"
});
formatter.result({
  "duration": 2954529600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.create_new_program()"
});
formatter.result({
  "duration": 1960399900,
  "status": "passed"
});
});