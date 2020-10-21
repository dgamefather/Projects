var goalCommands = {
    goals: function (data) {
        this
            .waitForElementPresent('@page')
            .click('@myGoals')
            .waitForElementVisible('@table')
            /* SET VERIFICATION */
        return this;
    },
    oldPage: function () {  /* DO THIS ONE LATER! */
        this
            // Goal Nav Bar - Company Goals
            .waitForElementPresent('@page')
            .click('@compGoals')
            .waitForElementPresent('@page')
            .click()
            /* SET VERIFICATION */

            // Goal Nav Bar - My Goals
            .waitForElementPresent('@page')
            .click('@myGoals')
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
            .click('@myGoals')
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
            .click('@myGoals')
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
}
module.exports = {
    url: 'http://testfocus2.thatoneplace.net/',
    commands: [goalCommands],
    elements: {
        // Site
        'page': '#content',

        // Nav Bar
        'compGoals': 'a[href="/Objectives/Goals?userId=20322"]',
        'myGoals': 'a[href="/Objectives/Goals?userId=20323"]',
        
        // Goals Page
        'table': '#objectives-table',
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