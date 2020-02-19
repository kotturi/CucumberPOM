package com.pxl.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.pxl.util.TestBase;

public class LoginPage extends TestBase{
	
		/*@FindBy(xpath = "//a[contains(text(),'Client Login')]")
		WebElement ClientLogin;*/
	
		@FindBy(id="UserName")
	    WebElement username;
	    
	    @FindBy(name="Password") 
	    WebElement password;
	    
	    @FindBy(name="Submit")
	    WebElement submit;
	    
	    //Initialize the page Object
		public LoginPage()
		{
			PageFactory.initElements(driver, this);
		}
		
		//Action
		public String validateLoginPageTitle()
		{
			return driver.getTitle();
		}
		
		public HomePage login(String un, String pwd)
		{
			System.out.println("1: " +un);
			username.sendKeys(un);
			System.out.println("2: " +un);
			password.sendKeys(pwd);
			submit.click();
			return new HomePage();
		}
}
