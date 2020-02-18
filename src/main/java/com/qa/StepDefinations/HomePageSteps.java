package com.qa.StepDefinations;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.pxl.pages.HomePage;
import com.pxl.pages.LoginPage;
import com.pxl.pages.ProgramCreation;
import com.pxl.util.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageSteps extends TestBase{
	//Object
LoginPage loginpage;
HomePage homepage;

ProgramCreation newprogram;

@Given("^user opens Browser$")
public void user_opens_Browser() throws Throwable {
	TestBase.initialization();
}

@Then("^user is on Login page$")
public void user_is_on_Login_page() throws Throwable {
	loginpage = new LoginPage();
	String title=loginpage.validateLoginPageTitle();
	//Assert.assertEquals("Parexel IRT Login", title);
	
}	

@Then("^user login into app$")
public void user_login_into_app() throws Throwable {
	homepage= loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
	Thread.sleep(3000);
}

@Then("^validate the home page$")
public void validate_the_home_page() throws Throwable {
	String title=homepage.validateHomePageTitle();
	//Assert.assertEquals("Parexel - Welcome to your Dashboard", title);
	if(homepage.Logout())
	{
		System.out.println("User successfully Login to the app");
	}
	driver.manage().timeouts().implicitlyWait(2000, TimeUnit.SECONDS);
	homepage.ClickOnProduction();
	
}

@Then("^create new program$")
public void create_new_program()
{
	newprogram=new ProgramCreation();
	newprogram.ClickOnProgram();
	driver.close();
}
}
