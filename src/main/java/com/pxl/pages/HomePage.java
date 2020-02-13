package com.pxl.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.pxl.util.TestBase;

public class HomePage extends TestBase {

	@FindBy(xpath = "//a[contains(text(),'Logout')]")
	WebElement Logout;
	
	@FindBy(xpath="//a[contains(text(),'Production')]")
	WebElement production;

	// Initialize the page Object
	public HomePage() {
		PageFactory.initElements(driver, this);
	}

	// Action
	public String validateHomePageTitle() {
		return driver.getTitle();
	}

	public void ClickOnProduction()
	{
		production.click();
		return;
	}
	
	public boolean Logout() {
		return Logout.isDisplayed();
	}

}
