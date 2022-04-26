var loginCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .setValue('@user', data.user)
            .setValue('@pass', data.code)
            .click('@loginBtn')
            .waitForElementPresent('@page')
            .api.assert.elementPresent('#content');
        this.api.assert.urlContains('/OrgChart');
        return this;
    },
    logout: function () {
        this
            .waitForElementPresent('@page')
            .click('@options')
            .waitForElementPresent('@logout')
            .click('@logout')
            .waitForElementPresent('@login')
        return this;
    }
}
module.exports = {
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