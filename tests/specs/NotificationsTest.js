
describe('EndToEndTest',function(){
    browser.ignoreSynchronization = true;
    let loginpage = require('../../pages/Login');
    let homepage = require('../../pages/HomePage')
    let notificationpage = require('../../pages/Nofitications');
    it('Login',function(){
        loginpage.launchbrowser();
        loginpage.enterUsername();
        loginpage.enterPassword();
        loginpage.clickLogin('clickLogin');
    })
    /*xit('NavigateToAccounts',function() {
        homepage.clickOnAccountIcon();
    },300000)
    xit('VerifyNotifications',function(){
        homepage.verifytabunderpreferences('notifications');
    })
    xit('navigate to notifications',function(){
        homepage.navigateToTab('notifications');
        
    })
    xit('verifyemail notifications section',function(){
        notificationpage.verifyHeaderIntroText();
        notificationpage.verifyToggleEnabled("email notifications",'true');
        notificationpage.verifyActiveSummaryEmailSection();
        notificationpage.verifyToggleEnabled("number of overdues",'true');
        notificationpage.verifyToggleEnabled("number of pending tasks",'true');
        
    })
    xit('Verify the default values and dropdown values',function(){
        notificationpage.verifyselecteddropdownvalue("send a summary email","Daily");
        notificationpage.verifyselecteddropdownvalue("time of the day","09:00 AM");
        notificationpage.VerifyCloseButton();
    })
    xit('Verify send summary email dropdown values',function(){
        notificationpage.clickdrop('summary');
        notificationpage.verifyDropdownValues('summary');
    })
    xit('verify dropdown values',function(){
        notificationpage.clickdrop('time');
        notificationpage.verifyDropdownValues('time');
    })
    xit('select daily from dropdown and verify dropdown values',function(){
        notificationpage.selectddvalue('Daily','summary');
        notificationpage.verifyselecteddropdownvalue("send a summary email","Daily");
        notificationpage.clickdrop('summary');
      notificationpage.verifyDropdownValues('summary');
    })
    xit('select weekly from dropdown and verify dropdown values',function(){
        notificationpage.selectddvalue('Weekly','summary');
        notificationpage.verifyselecteddropdownvalue("send a summary email","Weekly");
        notificationpage.clickdrop('week');
    
        notificationpage.verifyDropdownValues('week');
        
    })
    xit('change dropdown values',function(){
        //verify the time doesn't change after change in summary value
        notificationpage.selectddvalue('05:00 AM','time');
        notificationpage.selectddvalue('Daily','summary');
        notificationpage.verifyselecteddropdownvalue("time of the day","05:00 AM");

    })
    xit('verify revert apply buttons',function(){
        notificationpage.VerifyRevertApply();
    })
    xit('click apply and verify default values',function(){
        notificationpage.clickButton('apply');
        notificationpage.selectddvalue('Daily','summary');
        notificationpage.verifyselecteddropdownvalue("send a summary email","Daily");
    })
    xit('verify close button functionality',function(){
        notificationpage.clickButton('close');
        
    })
    */

    
})

