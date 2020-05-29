var helper = require('../HelperMethods/Helper');
let loginpage = function(){
    
    let userName = "//input[@name='username']";
    let password = "//input[@id='password']"
    let loginButton = "//input[@type='submit']"

    this.launchbrowser = function(){
        
        browser.url('https://cloud.dev.altusplatform.com/');
        //browser.maximizeWindow();
        $(userName).waitForDisplayed({ timeout: 15000 });
    }
    this.enterUsername  = function(){
        $(userName).setValue('santosh+admina2180919031844@argusexpresstest.com');
    }
    this.enterPassword = function(){
        $(password).setValue('Acquire123$');
    }

    this.clickLogin = function() {
        helper.clickElement(loginButton);
        $("//i[contains(@class,'settings')]").waitForDisplayed({ timeout: 20000 });
    }
}

module.exports = new loginpage();