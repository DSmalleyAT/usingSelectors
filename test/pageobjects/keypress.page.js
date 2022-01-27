const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KeyPressPage extends Page {
    /**
     * define selectors using getter methods
     */
    get KeypressInput() {
        return $('#target');
    }

    get KeypressResult() {
        return $('#result');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async PressUnKey (input) {
        await this.KeypressInput.setValue(input);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('key_presses');
    }
}

module.exports = new KeyPressPage();
