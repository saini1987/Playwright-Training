// Webelement : element displayed within the UI (exp: button, text box, link, etc)
//Locators : locator is a default playwright method to identify the location of a WebElement. (Bases on HTML tags and additional attributes)

// There are multiple locator strategies available in Playwright to locate the webelement.
//1. getByRole
//2. getByLabel
//3. getByPlaceholder 
//4. getByText
//5. getByAltText
//6. getByTitle
//7. getByTestId
//8. locator(xpath and css)

//1.getByRole : This locator method is going to help us to locate the element based on the role or nature of the element.
//syntax : page.getByRole(role, options)
//Exp: page.getByRole('link', { name: 'Gmail' })
/*
role = 'textbox for text box
role = 'button' for button
role = 'link' for link
role = 'combobox' for dropdown
role = 'checkbox' for checkbox
role = 'radio' for radio button
role = 'heading' for heading
role = 'list' for list
role = 'listitem' for list item
role = 'img' for image
role = 'menu' for menu
role = 'switch' for toggle button
*/

//2.getByLabel : you need to identify the label of the element, and you need to use it as alocator.
//syntax : page.getByLabel('label-text-value');
//Exp Html: <label for="username">Username</label>
//Exp : page.getByLabel('Username')

//3.getByPlaceholder : placeholder attribute value of the element.
//syntax : page.getByPlaceholder('placeholder-text-value');
//Exp Html: <input type="text" placeholder="Enter your username">
//Exp : page.getByPlaceholder('Enter your username')

//4.getByText : text content of the element.
//Exp Html: <button>Submit</button>
//Exp : page.getByText('Submit')

//5.getByAltText : alt attribute value of the element.
//syntax : page.getByAltText('alt-text-value');
//Exp Html: <img src="logo.png" alt="Company Logo">
//Exp : page.getByAltText('Company Logo')   

//6.getByTitle : title attribute value of the element.
//syntax : page.getByTitle('title-text-value');
//Exp Html: <a href="#" title="Home">Home</a>
//Exp : page.getByTitle('Home')

//7.getByTestId : data-testid attribute value of the element.
//syntax : page.getByTestId('test-id-value');
//Exp Html: <div data-testid="user-profile">User Profile</div>
//Exp : page.getByTestId('user-profile')    

//8.Locator(): locator method will be used to locate the element based on xpath and css selector.
//syntax : page.locator('xpath or css selector');
//Exp Html: <input type="text" id="username">
//Exp : page.locator('#username')  //css selector
//Exp : page.locator('//input[@id="username"]') //xpath
