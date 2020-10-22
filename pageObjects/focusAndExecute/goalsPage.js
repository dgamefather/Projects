var goalCommands = {
    goals: function () {
        this
            .waitForElementPresent('@page')
            .click('@myGoals')
            .waitForElementVisible('@table')
            .api.verify.urlContains("/Objectives/Goals");
        return this;
    },
    oldPage: function () {
            // Goal Nav Bar - Company Goals
        this
            .waitForElementPresent('@page')
            .click('@compGoals')
            .waitForElementVisible('@table')
            .api.verify.urlContains("/Objectives/Goals");

            // Goal Nav Bar - My Goals
        this
            .waitForElementPresent('@page')
            .click('@myGoals')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Objectives/Goals");

        //     // Org Chart
        // this
        //     .waitForElementPresent('@page')
        //     .click('@orgChart')
        //     .waitForElementPresent('@page')
        //     .api.moveToElement('@orgUser', 10, 10);
        // this
        //     .waitForElementVisible('@orgNav')
        //     .click('@orgNav')
        //     .waitForElementVisible('@table')
        //     .api.verify.urlContains("/Objectives/Goals");

            // User
        this
            .waitForElementPresent('@page')
            .click('@headUser')
            .waitForElementVisible('@headNav')
            .click('@headGoals')
            .api.verify.urlContains("/Objectives/Goals");

        //     // VAU Dropdown - Show All
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@showAll')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Show All");
        //     this.api.verify.urlContains("/Objectives/Goals");

        //     // VAU Dropdown - CEO
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@ceo')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Brennan Litster");
        //     this.api.verify.urlContains("/Objectives/Goals");

        //     // VAU Dropdown - Tester
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@tester')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Tester Litster");
        //     this.api.verify.urlContains("/Objectives/Goals");
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
            .api.verify.urlContains("/Objectives/Goals");
            /* SET VERIFICATION */

            /* SEARCH */
        this
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
        this
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
        'orgUser': '#ui-id-13',
        'orgNav': '#ui-id-15',
        'headUser': '.user',
        'headNav': '#userOptions',
        'headGoals': {
            selector: '//*[@id="LogOffForm"]//*[@href="/Objectives/Goals"]',
            locateStrategy: 'xpath'
        },

        // Nav Bar
        'compGoals': 'a[href="/Objectives/Goals?userId=20322"]',
        'myGoals': 'a[href="/Objectives/Goals?userId=20323"]',
        'orgChart': 'a[href="/OrgChart"]',
        
        // Goals Page
        'user': '.user-select',
        'ceo': '[value="20322"]',
        'tester': '[value="20323"]',
        'showAll': '[value="0"]',
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