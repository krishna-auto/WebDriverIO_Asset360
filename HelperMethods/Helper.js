let helpermethods = function(){
    
    //click on an element
    this.clickElement = function(element){
        $(element).waitForDisplayed({timeout: 6000 })
        $(element).click();
    }
    //verify element is present or not present
    this.verifyElement  = function(element,expectedstatus){
        verifyElementDisplayed(element,expectedstatus);
    }
    //verify element after performing some action
    this.verifyElementafterAction  = function(element,expectedstatus){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        var actualstatus  = element.isPresent();
        expect(expectedstatus).toBe(actualstatus);
    })
    }
    //upload a file
    this.uploadfile = function(element,path){
        var path = require('path');
        absolutePath = path.resolve(__dirname, fileToUpload);
        element.sendKeys(absolutePath);
    }
    //enter text value into input
    this.EnterValue = function(element,value){
        browser.wait(until.visibilityOf(element,5000)).then(function(){
        element.sendKeys(value);
        });
    }
    //verify flyoutcontainner
    this.verifyFlyoutcontainer = function(){
        var actualstatus  = $("//div[contains(@class,'flyout-container')]").isDisplayed();
        expect(true).toBe(actualstatus);
    }
    //verify toggled enabled or disabled
    this.verifyToggleEnabled = function(element,actualstatus) {
        expect($(element).getAttribute('aria-checked')).toBe(actualstatus);
    }
    //verify dropdown values from the UI
    this.verifydropdownValues = function(list){
        list.forEach(function(value) {
            console.log(value);
            verifyElementDisplayed("//span[@class='mat-option-text' and contains(text(),'"+value+"')]",true);
        },this);     
    }
    //verify selected dropdown values
    this.verifyselectedDDvalue = function(label,value){
        console.log(label);
        console.log(value);
        verifyElementDisplayed("//label[contains(text(),'"+label+"')]/parent::div//div[@class='mat-select-value']//span[text()='"+value+"']",true)
    }
    //verify dropdown icon for corresponding label
    this.verifydropdownIcon = function(label){
        verifyElementDisplayed("//label[contains(text(),'"+label+"')]/parent::div/div//div[@class='mat-select-arrow-wrapper']",true);
    }
    
    function verifyElementDisplayed(element,expectedstatus){
        console.log(element);
        var actualstatus  = $(element).isDisplayed();
        console.log(actualstatus);
        expect(expectedstatus).toBe(actualstatus);
    }
};
module.exports = new helpermethods();