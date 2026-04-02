import { test, expect } from '@playwright/test';

test('Automate Web Form', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)   
    await page.goto("https://demoqa.com/automation-practice-form")
    console.log("Application is launched successfully")

    //2. Wait for Page-load
    const pageHeader = await page.locator("h1.text-center");
    expect(pageHeader).toBeVisible();
    console.log("Page is loaded successfully")

    //3. Enter First name and Last name     
    const firstname = await page.locator("#firstName");
    await firstname.fill("Deepak");
    const lastname = await page.locator("#lastName");
    await lastname.fill("Saini");
    console.log("First name and Last name are entered successfully")

    //4. Enter Email  
    const email = page.locator("#userEmail");
    await email.fill("saini1987deepak@gmail.com")
    console.log("Email is entered successfully")

    //5. Select Gender (Male)    
    await selectGender(page, "Male");
    console.log("Gender is selected successfully")

    //6. Enter mobile number
    const mobileNumber = page.locator("#userNumber");
    await mobileNumber.fill("9876543210");
    console.log("Mobile number is entered successfully")

    //7.Select DOB (1-Feb-1991) 
    await selectDOB(page, "1", "February", "1991");
    console.log("DOB is selected successfully")

    //8.Search and Select Computer Science  and English
    let subjects: string[] = ["Computer Science", "English"];
    await selectSubjects(page, subjects);
    console.log("Subjects are selected successfully");

    //9.Select Hobbies as Sports and Reading  
    let hobbies: string[] = ["Reading", "Sports"]
    await selectHobbies(page, hobbies);
    console.log("Hobbies are selected successfully")

    //10.Upload photo 
    const uploadFile = page.locator("input#uploadPicture");
    const filePath = "files/headers.png";
    await uploadFile.setInputFiles(filePath);
    console.log("Photo is uploaded successfully")

    //11.Submit Details 
    const submitBtn = page.locator("#submit");
    await submitBtn.click();
    console.log("Form is submitted successfully")

    //12. take screenshot of the filled form details
    await page.screenshot({ path: "screenshots/filled-form.png", fullPage: true });
    console.log("Screenshot of filled form is taken successfully")

});

// Common method to select the gender from radio button
async function selectGender(page: any, option: string) {
    const gender = await page.locator(`//label[text()="${option}"]`);
    await gender.click();
}

// Common method to select the DOB from date picker
async function selectDOB(page: any, date: string, month: string, year: string) {

    //launch the calender
    const calender = page.locator("input#dateOfBirthInput");
    await calender.click();

    // select the month
    const monthDrp = page.locator("select.react-datepicker__month-select");
    await monthDrp.selectOption({ label: month });

    // select the year
    const yearDrp = page.locator("select.react-datepicker__year-select");
    await yearDrp.selectOption({ label: year });

    // select the date
    const dateEle = page.locator(`//div[text()="${date}" and contains(@aria-label,"${month}")]`);
    await dateEle.click();

}

// Common method to select the subject from auto-suggest dropdown

async function selectSubjects(page: any, subjects: string[]) {

    //locate the subject input field and click on it
    const subjectInput = page.locator("div[class*='subjects-auto-complete__input-container']")
    await subjectInput.click();

    //enter each subject and select from the suggestions
    for (let subject of subjects) {
        const subjectInput = page.locator("input#subjectsInput");
        await subjectInput.fill(subject);

        //press enter button
        await subjectInput.press("Enter");
    }

}

// Common method to select the hobbies from checkbox
async function selectHobbies(page: any, hobbies: string[]) {

    for (let hobby of hobbies) {
        const hobbyEle = await page.locator(`//label[text()="${hobby}"]`);

        //select hobby if it is not selected already
        if (!await hobbyEle.isChecked()) {
            await hobbyEle.click();
        }
    }

}