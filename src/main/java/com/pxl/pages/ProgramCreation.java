package com.pxl.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.pxl.util.TestBase;

public class ProgramCreation extends TestBase {
	
	
	@FindBy(xpath="//img[@class='CreateProgrammeBtn']")
	WebElement createProg;
	
	
	public ProgramCreation()
	{
		PageFactory.initElements(driver, this);
	}
	
	//Action
	public void ClickOnProgram()
	{
		createProg.click();
		return;
	}
	

}
