var logoutCommands = {
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
			.api.assert.urlContains('https://www.focusandexecute.com');
		return this;
	}
}
module.exports = {
    url: 'https://www.focusandexecute.com/',
	commands: [logoutCommands],
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