var loginCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .setValue('@user', data.user)
            .setValue('@pass', data.code)
            .click('@loginbtn')
            .pause(3000)
            .waitForElementPresent('@page')
            /* SET VERIFICATION */
        return this;
    },
    logout: function () {
        this
            .waitForElementPresent('@page')
            .click('@options')
            .waitForElementPresent('@logout')
            .click('@logout')
            .waitForElementPresent('@login')
            .pause(3000)
            /* SET VERIFICATION */
        return this;
    }
}
module.exports = {
    url: 'http://testfocus.thatoneplace.net/',		// Change me to whatever url you want!
    commands: [loginCommands],
    elements: {
        'login': '#body',
        'loginbtn': '#loginButton',
        'user': '#UserName',
        'pass': '#Password',
        'verify': '.user',
        'page': '#content',
        'table': '#objectives-table',
        'logout': 'a[href="#"]',
        'options': '.user',
    }
}