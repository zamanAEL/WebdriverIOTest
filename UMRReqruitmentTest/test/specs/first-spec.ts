var assert = require('assert');

describe('Google search', function () {
    it('searches for WebdriverIO', function () {
        browser.url('http://google.com/');
        browser.setValue('#lst-ib', 'WebdriverIO');
        browser.click('#sblsbb .lsb');

        var title = browser.getTitle();
        console.log('Title is: ' + title);
        assert.equal(title, 'Google');
    });
});
