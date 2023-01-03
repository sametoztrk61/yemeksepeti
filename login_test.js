Feature('yenisyemek');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://www.nefisyemektarifleri.com');
    I.seeElement('div [class="nokta-skip-click sign-in"]');
    I.click('div [class="nokta-skip-click sign-in"]');
    I.click('div [id="email-login-button"]')
    I.click('div [id="modalUsername"]')
    I.fillField('div [id="modalUsername"]','samet')
    I.click('div [id="modalPassword"]')
    I.fillField('div [id="modalPassword"]','samet')
    I.click('div [class="login-button buttons submit"]')
    
    close()
    
});
