package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src/test/java/feature",
		glue={"stepdefinition"},
		monochrome=true,
		tags={"@happygrouppath,@happypath"},
		plugin={"pretty","html:target/cucumber-reports"}
		)

public class testRunner {

}
