const KeyPressPage = require('../pageobjects/keypress.page');

describe('My Key Press application', () => {
    it('should display the pressed key', async () => {
        await KeyPressPage.open();

        await KeyPressPage.PressUnKey('f');
// Press F to pay respects
        await expect(KeyPressPage.KeypressResult).toHaveTextContaining(
            'You entered: F');
    });
});


