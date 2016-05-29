var assert = require('assert');

describe('Google search', function () {
    //it('should demonstrate the addValue command', function () {
    //    const value = browser
    //        .url('/')
    //        .setValue('#lst-ib', 'test') // setValue will clear the value and set the new value
    //        .addValue('#lst-ib', '123') // add value doesn't erase old value. It appends new value
    //        .getValue('#lst-ib'); // getValue will get vlaue from input box

    //    assert.equal(value, 'test123'); // true
    //});

    //it('should demonstrate the clearElement command', function () {
    //    const value = browser

    //        .url('/')
    //        .setValue('#lst-ib', 'test123')
    //        .clearElement('#lst-ib')
    //        .getValue('#lst-ib');

    //    assert.equal(value, '');
    //});

    //it('should demonstrate the click command', function () {
    //    const text = browser
    //        .url('/')
    //        .setValue('#lst-ib', 'foo')
    //        .click('.lsb')
    //        .getValue('#lst-ib');

    //    console.log(`value: ${text}`);

    //    assert.equal(text, 'foo'); // true
    //});

    //it('should demonstrate the doubleClick command', function () {
    //    const text = browser
    //        .url('/')
    //        .setValue('#lst-ib', 'foo')
    //        .doubleClick('.lsb')
    //        .getValue('#lst-ib');

    //    console.log(`value: ${text}`);

    //    assert.equal(text, 'foo'); // true
    //});

    //it('should demonstrate the doubleClick command', function () {
    //    const text = browser
    //        .url('http://www.w3schools.com/html/html5_draganddrop.asp')
    //        .dragAndDrop('#div1', '#div2');// doesn't work
    //});

    //it('should demonstrate the left click command', function () {
    //    const text = browser
    //        .url('/')
    //        .setValue('#lst-ib', 'foo')
    //        .leftClick('.lsb')
    //        .getValue('#lst-ib');

    //    console.log(`value: ${text}`);

    //    assert.equal(text, 'foo'); // true
    //});

    //it('should demonstrate the middle click command', function () {
    //    const text = browser
    //        .url('/')
    //        .middleClick('#lst-ib'); //doesn't work
    //});

    //it('should demonstrate the right click command', function () {
    //    const text = browser
    //        .url('/')
    //        .rightClick('#lst-ib');
    //});


    it('should demonstrate the selectByAttribute command', function () {
        const selectBox =<any> browser
            .url('file:///E:/Samples/WebdriverIOTest/UMRReqruitmentTest/HTML1.html')
            .element('#selectbox');

        (<any>selectBox).selectByAttribute('value', 'someValue1');
        const value = selectBox.getValue();
        console.log(value);

        //assert.equql(value, 'someValue1');
    });


});

