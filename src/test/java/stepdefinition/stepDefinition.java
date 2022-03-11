package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinition {

	WebDriver driver;
	
@Given("User is on the application")
public void user_is_on_the_application() {
	System.setProperty("webdriver.chrome.driver",".\\lib\\chromedriver.exe");
	driver =new ChromeDriver();
	driver.get("http://uniformm1.upskills.in/admin");
}

@Then("Enter {string} and {string}")
public void enter_and(String username, String password) {
   driver.findElement(By.name("username")).sendKeys(username);
   driver.findElement(By.name("password")).sendKeys(password);
}

@Then("Click on the login botton")
public void click_on_the_login_botton() {
    driver.findElement(By.xpath("//button[@type='submit']")).click();
}

@Then("Hover on the customer logo")
public void hover_on_the_customer_logo() {
   WebElement ele=driver.findElement(By.xpath("//li[@id='customer']/a"));
   Actions action = new Actions(driver);

 action.moveToElement(ele).perform();
}

@Then("click on customers")
public void click_on_customers() {
    driver.findElement(By.linkText("Customers")).click();
}

@Then("click on add new button")
public void click_on_add_new_button() {
   driver.findElement(By.xpath("//div[@id='content']/div/div/div/a")).click();
}

@Then("fill the details on {string}, {string}, {string}, {string}, {string} and {string}")
public void fill_the_details_on_and(String firstname, String lastname, String email, String telephone, String password, String confirm) throws InterruptedException {
   driver.findElement(By.name("firstname")).sendKeys(firstname);
   driver.findElement(By.name("lastname")).sendKeys(lastname);
   driver.findElement(By.name("email")).sendKeys(email);
   driver.findElement(By.name("telephone")).sendKeys(telephone);
   driver.findElement(By.name("password")).sendKeys(password);
   driver.findElement(By.name("confirm")).sendKeys(confirm);
   Thread.sleep(3000);
   
}

@Then("Click on save")
public void click_on_save() {
   driver.findElement(By.xpath("//button[@data-toggle='tooltip']")).click();
}

@When("new customer is added")
public void new_customer_is_added() {
	System.out.println("Customer added");
}

@Then("close the window")
public void close_the_window() {
  driver.quit();
}


@Then("Click on the customer group")
public void click_on_the_customer_group() {
	  driver.findElement(By.linkText("Customer Groups")).click();
}

@Then("write new customer group name {string}")
public void write_new_customer_group_name(String string) {
   driver.findElement(By.xpath("//input[@name='customer_group_description[1][name]']"));
}




}
