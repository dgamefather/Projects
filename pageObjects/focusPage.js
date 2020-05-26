var fewCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .setValue('@user', data.user)
            .setValue('@pass', data.code)
            .click('@loginbtn')
            .waitForElementPresent('@page');
            /* SET VERIFICATION */
        return this;
    },
    oldPage: function () {
        this

        return this;
    },
    editor: function () {
        this

        return this;
    },
    author: function () {
        this

        return this;
    },
    update: function () {
        this

        return this;
    },
    dueDate: function () {
        this

        return this;
    },
    search: function (data) {
        this

        return this;
    },
    tag: function (data) {
        this

        return this;
    },
    dupe: function () {
        this

        return this;
    },
}
module.exports = {
    url: 'http://testfocus2.thatoneplace.net/',
    commands: [fewCommands],
    elements: {
        // Login
        'login': '#body',
        'loginbtn': '#loginButton',
        'user': '#UserName',
        'pass': '#Password',
        'verify': '.user',

        // Site
        'page': '#content',
    }
}