﻿var assert = require('assert');

describe('webdriver.io page', function () {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://www.yahoo.com');
        var title = browser.getTitle();
        assert.equal(title, 'Google');
    });
});

