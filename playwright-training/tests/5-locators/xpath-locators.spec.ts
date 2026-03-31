// Xpath ==> xpath is all about XML path.

// absolute xpath ==>  /html/body/div[1]/div[1]/a[2]/img --> it starts with single slash (/) and it is the complete path of the element from the root element to the target element. It is not recommended to use absolute xpath because if there is any change in the structure of the webpage then the xpath will break.
// relative xpath ==> //tagname[@attribute='value'] --> it starts with double slash (//) and it is the path of the element from any element in the webpage to the target element. It is recommended to use relative xpath because it is more flexible and less likely to break if there is any change in the structure of the webpage.  

/*****************LEVEL 1: BASIC XPATH********************************/
//Syntax 1: //tagname[@attribute='attribute value']]
//Syntax 2: //tagname[text()='text value']

/*****************LEVEL 2: ADVANCED XPATH , contains , starts-with********************************/
//Syntax 3: //tagname[contains(@attribute,'partial-attribute value')]
//Syntax 4: //tagname[contains(text(),'partial-text value')]

//Syntax 5 : //tagname[starts-with(@attribute,'attribute value')]
//Syntax 6 : //tagname[starts-with(text(),'text value')]

/*****************LEVEL 3: Combine multiple attributes and text values together by using the and operator********************************/

//Syntax 7 : //tagname[@attribute1='attribute value' and @attribute2='attribute value']
//Syntax 8 : //tagname[@attribute='attribute value' and text()='text value']


/*****************LEVEL 4: Advanced level with relationships********************************/

//Syntax 9 : //reference-element-xpath/relationship::target-element-xpath
//reference-element-xpath ==> it is the xpath of the reference element which is used to locate the target element. It can be any element in the webpage.
//relationship ==> it is the relationship between the reference element and the target element. It can be parent, child, sibling, ancestor, descendant, following, preceding, etc.
//target-element-xpath ==> it is the xpath of the target element which we want to locate. It can be any element in the webpage. 

//child
//parent
//ancestor
//following-sibling
//preceding-sibling
//following
//preceding
// /(child)
// //(within the entire family)

// target --> sibling --> parent --> ancestor --> ancestor parent's

//ancestor: //ul[@class="leftmenu"
//parent: //li
//target: //a[text()='Services']

//ul[@class="leftmenu"]//a[text()='Services']
//ul[@class="leftmenu"]/li[@class='Solutions']/following-sibling::li[2]
//li[@class='Solutions']/following-sibling::li[2]
//li[@class='Solutions']/following-sibling::li[2]/child::a[text()='Services']
//ul[@class="leftmenu"]/li/a[text()='Services']
//ul[@class="leftmenu"]/child::li/child::a[text()='Services']



import { test, expect } from '@playwright/test';

test('xpath selector', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=3FC4E458A560171BFBB5998363783C57');
    //Syntax 1: //tagname[@attribute='attribute value']
    page.locator("//img[@alt='ParaBank']");

    //Syntax 2: //tagname[text()='text value']
    page.locator("//a[text()='Register']");

    //Syntax 3: //tagname[contains(@attribute,'partial-attribute value')]
    page.locator("//a[contains(@href,'register.htm')]");

    //Syntax 4: //tagname[contains(text(),'partial-text value')]
    page.locator("//a[contains(text(),'Regis')]");

    //Syntax 5 : //tagname[starts-with(@attribute,'attribute value')]
    page.locator("//a[starts-with(@href,'register.htm')]");

    //Syntax 6 : //tagname[starts-with(text(),'text value')]
    page.locator("//a[starts-with(text(),'Regis')]");

    //Syntax 7 : //tagname[@attribute1='attribute value' and @attribute2='attribute value']
    page.locator("//a[@href='register.htm' and text()='Register']");

    //Syntax 8 : //tagname[@attribute='attribute value' and text()='text value']
    page.locator("//a[@href='register.htm' and text()='Register']");

    //Syntax 9: locate the "severics" hyperlink using syntax 9.
    page.locator("//ul[@class='leftmenu']//a[text()='Services']");

    
});