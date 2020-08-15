var fewCommands = {
    login: function (data) {
        this
            .waitForElementPresent('@login')
            .setValue('@user', data.user)
            .setValue('@pass', data.code)
            .click('@loginbtn')
            .waitForElementPresent('@popup')
            .click('@submitbtn')
            .pause(3000)
            .waitForElementPresent('@page')
            /* SET VERIFICATION */
        return this;
    },
    oldPage: function () {  /* DO THIS ONE LATER! */
        this
            // Goal Nav Bar
            .waitForElementPresent('@page')
            .click('@goals')
            .waitForElementPresent('@page')
            .click()
            /* SET VERIFICATION */

            // User
            .waitForElementPresent('@page')
            .click()
            .waitForElementPresent('@page')
            .click()
            /* SET VERIFICATION */

            // VAU Dropdown
            .waitForElementPresent('@page')
            .click()
            .waitForElementPresent('@page')
            .click()
            /* SET VERIFICATION */

            // Admin
            .waitForElementPresent('@page')
            .click()
            .waitForElementPresent('@page')
            .click()
            /* SET VERIFICATION */
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
            /* LOAD GOALS PAGE */
            .waitForElementPresent('@page')
            .click('@goals')
            .waitForElementVisible('@table')
            /* SET VERIFICATION */

            /* SEARCH */
            .clearValue('@search')
            .setValue('@search', data, this.api.Keys.ENTER)
            .waitForElementVisible('@table')
            /* SET VERIFICATION */
        return this;
    },
    tag: function (tags) {
        this
            /* LOAD GOALS PAGE */
            .waitForElementPresent('@page')
            .click('@goals')
            .waitForElementVisible('@table')
            /* SET VERIFICATION */

            /* SEARCH TAGS */
            .clearValue('@tag')
            .setValue('@tag', tags, this.api.Keys.ENTER)
            .waitForElementVisible('@table')
            .setValue('@search', "")
            /* SET VERIFICATION */
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
        'popup': '#loginChoicesDialog',
        'submitbtn': '#loginSubmit',

        // Site
        'page': '#content',
        'table': '#objectives-table',

        // Nav Bar
        'goals': 'a[href="/Objectives/Goals"]',
        
        // Goals Page
        'search': {
            selector: '//*[@id="objectives-table_filter"]//*[@type="search"]',
            locateStrategy: 'xpath'
        },
        'tag': {
            selector: '//*[@id="tags-filter-container"]//*[@class="select2-search__field"]',
            locateStrategy: 'xpath'
        },
    }
}