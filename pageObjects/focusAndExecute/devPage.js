var loginCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .setValue('@user', data.user)
            .setValue('@pass', data.code)
            .click('@loginBtn')
            .waitForElementPresent('@page')
            .api.assert.elementPresent('#content');
        return this;
    },
    logout: function () {
        this
            .waitForElementPresent('@page')
            .click('@options')
            .waitForElementPresent('@logout')
            .click('@logout')
            .waitForElementPresent('@login')
            .api.assert.urlContains('http://testfocus.thatoneplace.net');	// Change me to whatever url you want!
        return this;
    }
}
module.exports = {
    url: 'http://testfocus.thatoneplace.net/',		// Change me to whatever url you want!
    commands: [loginCommands],
    elements: {
        'login': '#body',
        'loginBtn': '#loginButton',
        'user': '#UserName',
        'pass': '#Password',
        'page': '#content',
        'table': '#objectives-table',
        'logout': 'a[href="#"]',
        'options': '.user',
    }
}