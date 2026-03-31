// css selector syntax

//syntax 1: tagname#id
//syntax 2: tagname.classname
//syntax 3: tagname[attribute='attribute-value']
//syntax 4: tagname[attribute*="value"]  //* means contains
//syntax 5: tagname[attribute^="value"]  //^ means starts with
//syntax 6: tagname[attribute$="value"]  //$ means ends with
//syntax 7: tagname[attribute1='value1'][attribute2='value2']  //multiple attribute
//syntax 8: advanced CSS selector with Relationships: ancestor > parent > child, sibling1 + sibling2, sibling1 ~ sibling2

//target --> parent --> ancestor --> ancestor parent's --> ancestor's parent's parent
//target : a[href="services.html"]
//locator: //ul[@class='lefrmenu"] > li > a[href="services.html"]

//grand parent: //ul[@class='lefrmenu"]
//parent:  li
//tagert: a[href="services.html"]

import { test, expect } from '@playwright/test';

test('css selector', async ({ page }) => {
    await page.goto('https://www.google.com/');
    
    //Locate the "Google search" box using syntax 1
    page.locator('input#APjFqb');

    //Locate the "Google search" box using syntax 2
    page.locator('input.gLFyf');

    //Locate the "Google search" box using syntax 3
    page.locator('input[name="q"]');

    //Locate the "Google search" box using syntax 4
    page.locator('a[href*="howsearchworks"]');

    //Locate the "Google search" box using syntax 5
    page.locator('input[aria-label^="Google"]');

    //Locate the "Google search" box using syntax 6
    page.locator('input[aria-label$="search"]');

    //Locate the "Google search" box using syntax 7
    page.locator('input[name="q"][type="text"]');
});