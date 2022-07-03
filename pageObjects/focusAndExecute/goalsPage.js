var goalCommands = {

    // Navigation
    goals: function () {
        this
            .waitForElementPresent('@page')
            .click('@myGoals')
            .waitForElementVisible('@table')
            .api.assert.urlContains("/Objectives/Goals?userId=20323");
        return this;
    },

    // Fresh slate - WIP
    // cleanUp: function (text) {
    //     this.goals();
    //     let element = this.api.findElement('//p[text()=' +text+ ']');
    //     while (element != null) {
    //         this.delete(text);
    //     }
    //     try {
    //         element = this.api.findElement('//p[text()=' +text+ ']');
    //     }
    //     catch (e) {
    //         element = null;
    //     }
    //     return this;
    // },
    delete: function (text) {
        this.goals();
        this
            .click('@deleteBtn')
        if (this.api.expect.element('.DTE').to.be.present) {
            this
                .click('@confirmDelete')
                .waitForElementVisible('@table')
                .api.verify.not.containsText('#objectives-table', text);
        }
        return this;
        // this
        // 	.useXpath()
        // if (this.api.expect.element('//*[@id="Objective_5878"]//*[@class="add-item"]').to.be.present) {
        // 	this
        // 		.api.verify.containsText('#objectives-table', 'Test Goal');
        // 	this
        // 		.click('@deleteBtn')
        // 		.api.assert.elementPresent('.DTE');
        // 		if (this.api.expect.element('.DTE').to.be.present) {
        // 			this
        // 				.click('@confirmDelete')
        // 				.api.verify.not.containsText('#objectives-table', 'Test Goal');
        // 			return this;
        // 		}
        // 		else {
        // 			this
        // 				.api.verify.containsText('#objectives-table', 'Test Goal');
        // 			return this;
        // 		}
        // }
        // else {
        // 	return this;
        // }
    },

    // Functions
    oldPage: function () {      // IN PROGRESS
        this.goals();
        // Goal Nav Bar - Company Goals
        this
            .waitForElementPresent('@page')
            .click('@compGoals')
            .waitForElementVisible('@table')
            .api.verify.urlContains("/Objectives/Goals");	// Works

        // Goal Nav Bar - My Goals
        this
            .waitForElementPresent('@page')
            .click('@myGoals')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Objectives/Goals");	// Works

        //     // Org Chart
        // this
        //     .waitForElementPresent('@page')
        //     .click('@orgChart')
        //     .waitForElementPresent('@page')
        //     .api.moveToElement('#ui-id-13', 0, 0);
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
            .api.verify.urlContains("/Objectives/Goals");	// Works

        //     // VAU Dropdown - Show All
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@showAll')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Show All");
        // this
        // 	.api.verify.urlContains("/Objectives/Goals");

        //     // VAU Dropdown - CEO
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@ceo')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Brennan Litster");
        // this
        // 	.api.verify.urlContains("/Objectives/Goals");

        //     // VAU Dropdown - Tester
        // this
        //     .waitForElementPresent('@page')
        //     .click('@user')
        //     .waitForElementVisible('@tester')
        //     .click('@tester')
        //     .pause(3000)
        //     .api.expect.element('@user').to.have.value.which.contains("Tester Litster");
        // this.api.verify.urlContains("/Objectives/Goals");
        return this;
    },
    editor: function () {
        var elementSelector = '[aria-describedby="edit-denied"] button[title="Close"]';

        this.goals()

        /* Add Goal */
        this
            .pause(5000)
            .waitForElementPresent('@addGoal')
            .click('@addGoal')
            .pause(250);
        /*
            FIX THIS POS TO SKIP IF THIS FAILS BUT NEEDS TO RUN OTHER TESTS 
            This could possibly be a nightwatchjs config issues, investigate further.

            Update (5/10/22): 👎🏻 Microsoft won't lemme flip the bird LUL
        */
       let canContinue = true;
        this.api.element('css selector', elementSelector, function (result) {
            if (result.status != -1) {
                console.log('Edit Denied dialog appeared.')
                    .click('@editDenied')
                    .api.verify.containsText('#objectives-table', 'Test Goal');
                canContinue = false;
                console.log('Goal did not add. Unauthorized access.')
                return this;
            }
            console.log('Access granted.')
            console.log('Results: ', result)
            console.log('This: ', this)
            this
                .click('@goalTitleEdit')
                .keys('@goalTitleEdit', 'Test Goal')
                .click('@saveBtn')
                .pause(250)
                .waitForElementNotVisible('@goalTitleEdit')
                .verify.containsText('#objectives-table', 'Test Goal');
            return this;
        });
        if (canContinue) {
            this.delete('Test Goal');
            return this;
        }
    },
    author: function () {      // IN PROGRESS
        this.goals();
        this
        return this;
    },
    update: function () {      // IN PROGRESS
        this.goals();
        this
        return this;
    },
    dueDate: function () {      // IN PROGRESS
        this.goals();
        this
        return this;
    },
    search: function (data) {
        this.goals();

        /* SEARCH */
        this
            .clearValue('@search')
            .setValue('@search', data, this.api.Keys.ENTER)
            .waitForElementVisible('@table')
            .api.verify.containsText('#objectives-table', data)
        return this;
    },
    tag: function (tags) {
        this.goals();

        /* SEARCH TAGS */
        this
            .clearValue('@tag')
            .setValue('@tag', tags, this.api.Keys.ENTER)
            .waitForElementVisible('@table')
            .api.verify.containsText('#content', tags);
        return this;
    },
}
module.exports = {
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
        'goalTitleEdit': 'td.inline-edit iframe',
        'user': '.user-select',
        'ceo': '[value="20322"]',
        'tester': '[value="20323"]',
        'showAll': '[value="0"]',
        'table': '#objectives-table',
        'editDenied': '[aria-describedby="edit-denied"] button[title="Close"]',
        'search': {
            selector: '//*[@id="objectives-table_filter"]//*[@type="search"]',
            locateStrategy: 'xpath'
        },
        'tag': {
            selector: '//*[@id="tags-filter-container"]//*[@class="select2-search__field"]',
            locateStrategy: 'xpath'
        },

        'addGoal': {
            selector: '//*[@id="Objective_5878"]//*[@class="add-item"]',
            locateStrategy: 'xpath'
        },
        'saveBtn': {
            selector: '//*[@data-dte-e="form_buttons"]//*[@class="btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only big"]',
            locateStrategy: 'xpath'
        },
        'cancelBtn': {
            selector: '//*[@data-dte-e="form_buttons"]//*[@class="btn ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only cancel"]',
            locateStrategy: 'xpath'
        },

        'deleteBtn': {
            selector: '//*[@id="Objective_5878"]/following-sibling::tr//*[@title="Delete Goal"]',
            locateStrategy: 'xpath'
        },
        'confirmDelete': {
            selector: '//*[@class="DTE_Form_Buttons"]//*[span="Delete"]',
            locateStrategy: 'xpath'
        },
    }
}

// #goalFilterByUser