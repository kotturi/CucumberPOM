package com.qa.Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/KotturJ/eclipse-workspace/CucumberPOM/src/main/java/com/qa/features", //the path of the feature files
		glue={"com.qa.StepDefinations"}, //the path of the step definition files
		//Testng report
		/*format= {
				"pretty",
				"html:target/cucumber-reports/cucumber-html-report",
				"json:target/cucumber-reports/TestReport.json",
				"junit:target/cucumber-reports/cucumber.xml",
				//"return: target/cucumber-reports/return.txt"
*/		//		"return:target/cucumber-reports/return.txt"
//		format= {"pretty",
//				"html:test-output", 
//				"json:json_output/cucumber.json", 
//				"junit:junit_xml/cucumber.xml",
		//		}, //to generate different types of reporting
	//	plugin="json:target/cucumber-reports/TestReport.json",
				plugin = {"pretty", 
						  "html:target/cucumber-html-report",
   					       "json:target/cucumber.json", 
   					       "junit:target/cucumber.xml"},
		monochrome = true, //display the console output in a proper readable format
		strict = true, //it will check if any step is not defined in step definition file
		dryRun = false //to check the mapping is proper between feature file and step def file
		)
public class TestRunner {
	private TestNGCucumberRunner testNGCucumberRunner;
	 
    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }
 
    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }
 
    @DataProvider
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }
 
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
    }

}
