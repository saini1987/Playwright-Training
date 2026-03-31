import { test, expect } from '@playwright/test';

test('xpath selector', async ({ page }) => {

    //Launch the application
    await page.goto('https://www.google.com/');

    // verify Application is launched successfully by using title.
    await expect(page).toHaveTitle('Google');

    //locate the element
    let element = page.locator("a[alt='images']");

    /*==========================================
    Common Web Element Validations
    ===========================================*/

    // check the element is visisble
    expect(element).toBeVisible();

    // check the element is enabled
    expect(element).toBeEnabled();

    // check the element is checked(if it is checkbox or radio button)
    expect(element).toBeChecked();

    //check element is hidden
    expect(element).toBeHidden();

    /*==========================================
        Button Web Element Validations
    ===========================================*/

    //Locate the button element
    let button = page.locator("button#login");

    // verify the label of the button
    let actualButtonText = await button.textContent(); // If the label is added as a text value
    let actualButtonValue = await button.getAttribute('value'); // If the label is added as a value attribute
    expect(actualButtonText).toBe('Login');
    expect(actualButtonValue).toBe('Login');

    // direct assertion without storing the value in a variable
    await expect(button).toHaveText('Login'); // If the label is added as a text value
    await expect(button).toHaveAttribute('value', 'Login'); // If the label is added as a value attribute

    // click on the button
    await button.click();

    // double click on the button
    await button.dblclick();

    // right click on the button
    await button.click({ button: 'right' });

    // hover on the button
    await button.hover();

    // drag and drop the button
    let source = page.locator('#source');
    let target = page.locator('#target');
    await source.dragTo(target);

    // scroll till the button is displayed
    await button.scrollIntoViewIfNeeded();

    // force click on the button
    await button.click({ force: true });


    /*==========================================
        Textbox Web Element Validations
    ===========================================*/

    //locate the textbox element
    let textbox = page.locator("input#username");

    // clear the existing value from the textbox
    await textbox.clear();

    // verify the placeholder value of the textbox
    let placeholderValue = await textbox.getAttribute('placeholder');
    expect(placeholderValue).toBe('Enter your username');

    //enter/type the value into the textbox
    await textbox.fill('testuser');

    //Press keys like enter, tab, etc
    await textbox.press('Enter');

    //verify the value entered in the textbox
    await expect(textbox).toHaveValue('testuser');


    /*==========================================
        Dropdown Web Element Validations
    ===========================================*/

    //locate the dropdown element
    let dropdown = page.locator("select#country");

    // select an option from the dropdown
    await dropdown.selectOption('India'); // select by visible text
    await dropdown.selectOption({ label: 'India' });// select by visible text
    await dropdown.selectOption({ value: 'IN' }); // select by value attribute
    await dropdown.selectOption({ index: 0 }); // select by index   

    //verify if the dropdown is multi-select
    let isMultiSelect = await dropdown.getAttribute('multiple') !== null;
    expect(isMultiSelect).toBe(true);

    //select an option from the multi-select dropdown
    await dropdown.selectOption({ label: 'India' });// select by visible text
    await dropdown.selectOption({ value: 'IN' }); // select by value attribute
    await dropdown.selectOption({ index: 0 }); // select by index   

    //deselect an option from the multi-select dropdown
    await dropdown.selectOption({ label: 'India' });// select by visible text
    await dropdown.selectOption({ value: 'IN' }); // deselect by value attribute
    await dropdown.selectOption({ index: 0 }); // deselect by index  

    // verify the selected option in the dropdown
    let selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('option1'); // assuming 'option1' is the value of the selected option

    //verify the number of options in the dropdown
    let optionsCount = await dropdown.locator('option').count();
    expect(optionsCount).toBe(5); // assuming there are 5 options in the dropdown

    // verify the options available in the dropdown
    let options = await dropdown.locator('option').allTextContents();
    expect(options).toEqual(['option1', 'option2', 'option3', 'option4', 'option5']); // assuming these are the options in the dropdown


    /*==========================================
        Checkbox Web Element Validations
    ===========================================*/

    //locate the checkbox element
    let checkbox = page.locator("input#subscribe");

    //check the checkbox if it is not already checked
    if (!(await checkbox.isChecked())) {
        await checkbox.check();
    }


    /*==========================================
        Radio Web Element Validations
    ===========================================*/

    //locate the radio button element
    let radioButton = page.locator("input[name='gender'][value='male']");

    //select the radio button
    await radioButton.check();


    /*==========================================
       Image Web Element Validations
   ===========================================*/

    //locate the image element
    let image = page.locator("img#logo");

    //verify the image is visible
    expect(image).toBeVisible();

    // verify the image source to identify whether it is valid or not
    let imageSource = await image.getAttribute('src');
    expect(imageSource).toBe('expected-image-source'); // assuming this is the expected image source

    // verify the image size
    const imageSize = await image.boundingBox();
    const width = imageSize?.width;
    const height = imageSize?.height;
    expect(width).toBeGreaterThan(100);
    expect(height).toBeGreaterThan(50);

    //verify the image position
    const imagePosition = await image.boundingBox();
    const x = imagePosition?.x;
    const y = imagePosition?.y;
    expect(x).toBeGreaterThanOrEqual(10);
    expect(y).toBeGreaterThanOrEqual(10);


    /*==========================================
        hyperlink Web Element Validations
    ===========================================*/

    //locate the hyperlink element
    let hyperlink = page.locator("a#homeLink");

    //verify the hyperlink.(method 1)
    await expect(hyperlink).toHaveAttribute('href', 'expected-link.html'); // assuming this is the expected URL

    //verify the hyperlink by click on link  and verify url.(method 2)
    await hyperlink.click();
    expect(page).toHaveURL('expected-link.html'); // assuming this is the expected URL

    /*==========================================
         text/label Web Element Validations
     ===========================================*/

    //locate the text/label element 
    let label = page.locator("label[for='username']");

    //verify the text/label content
    let labelText = await label.textContent();// If the label text is added as a text value
    expect(labelText).toBe('Username'); // assuming 'Username' is the expected label text

    let labelValue = await label.getAttribute('value'); // If the label text is added as a value attribute
    expect(labelValue).toBe('Username'); // assuming 'Username' is the expected label value


    /*==========================================
        upload Web Element Validations
    ===========================================*/

    //locate the file upload element
    let fileUpload = page.locator("input[type='file']");

    //upload a file
    await fileUpload.setInputFiles('path/to/file'); // replace with the actual file path

});
