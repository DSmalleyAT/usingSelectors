const KeyPressPage = require('../pageobjects/keypress.page');

describe('My Key Press application', () => {
    it('should display the pressed letter key corresponding to a letter, displaying it as capital', async () => {
        await KeyPressPage.open();

        await KeyPressPage.PressUnKey('f');
// Press F to pay respects
        await expect(KeyPressPage.KeypressResult).toHaveTextContaining(
            'You entered: F');
    });
    it('should display a pressed number key', async () => {
        await KeyPressPage.open();

        await KeyPressPage.PressUnKey('9');

        await expect(KeyPressPage.KeypressResult).toHaveTextContaining(
            'You entered: 9');
    });
    it('should display the number key even if the input character was a symbol on the number key', async () => {
        await KeyPressPage.open();

        await KeyPressPage.PressUnKey('#');
// # is on the 3 key
        await expect(KeyPressPage.KeypressResult).toHaveTextContaining(
            'You entered: 3');
            
    });
});


