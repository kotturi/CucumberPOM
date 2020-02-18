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
  "duration": 25110332800,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d80.0.3987.106)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027005820\u0027, ip: \u002710.128.80.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d79.0.3945.36 (3582db32b33893869b8c1339e8f4d9ed1816f143-refs/branch-heads/3945@{#614}), userDataDir\u003dC:\\Users\\KotturJ\\AppData\\Local\\Temp\\scoped_dir17028_860552873}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:53173}, acceptInsecureCerts\u003dfalse, browserVersion\u003d80.0.3987.106, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 7fbc20d814d2e16f8ef7b801f6930d73\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.pxl.util.TestBase.initialization(TestBase.java:49)\r\n\tat com.qa.StepDefinations.HomePageSteps.user_opens_Browser(HomePageSteps.java:26)\r\n\tat ✽.Given user opens Browser(login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_Login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.user_login_into_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.create_new_program()"
});
formatter.result({
  "status": "skipped"
});
});