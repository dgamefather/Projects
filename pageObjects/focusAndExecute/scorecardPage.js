var scorecardCommands = {
    card: function (data) {
        this
            .waitForElementPresent('@page')
            .click('@scorecard')
            .waitForElementVisible('@table')
            .pause(3000) // USE ONLY IF NEED BE!!!
            /* SET VERIFICATION */
        return this;
    },
    sus1: function () {     // Score should equal to: 20 (-)
        this
        return this;
    },
    sus2: function () {     // Score should equal to: 40
        this
        return this;
    },
    sus3: function () {     // Score should equal to: 60
        this
        return this;
    },
    sus4: function () {     // Score should equal to: 30
        this
        return this;
    },
    sus5: function () {     // Score should equal to: 50
        this
        return this;
    },
    sus6: function () {     // Score should equal to: 70
        this
        return this;
    },
    sus7: function () {     // Score should equal to: 90
        this
        return this;
    },
    sus8: function () {     // Score should equal to: 100 w/ APPROVED
        this
        return this;
    },
    sus9: function () {     // Score should equal to: 100 w/ NOT APPROVED (should switch to APPROVED)
        this
        return this;
    },
    sus10: function () {     // Score should equal to: 80
        this
        return this;
    },
    sus11: function () {     // Score should equal to: 70
        this
        return this;
    },
}
module.exports = {
    url: 'http://testfocus2.thatoneplace.net/',
    commands: [scorecardCommands],
    elements: {
        // Site
        'page': '#content',

        // Nav Bar
        'compGoals' : {
            selector: '//*[@id="company-plan-nav"]//*[@href="/Objectives/Goals?userId=21894"]',
            locateStrategy: 'xpath'
        },
        'myGoals': {
            selector: '//*[@id="my-plan-nav"]//*[@href="/Objectives/Goals?userId=21895"]',
            locateStrategy: 'xpath'
        },
        'scorecard': 'a[href="/Dashboard/Scorecard"]',
        
        // Goals Page
        'sus1' : {
            selector: '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21896"]',
            locateStrategy: 'xpath'
        },
        'sus2' : {
            selector: '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21897"]',
            locateStrategy: 'xpath'
        },
        'sus3' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21898"]',
            locateStrategy: 'xpath'
        },
        'sus4' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21902"]',
            locateStrategy: 'xpath'
        },
        'sus5' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21899"]',
            locateStrategy: 'xpath'
        },
        'sus6' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21903"]',
            locateStrategy: 'xpath'
        },
        'sus7' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21900"]',
            locateStrategy: 'xpath'
        },
        'sus8' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21904"]',
            locateStrategy: 'xpath'
        },
        'sus9' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21901"]',
            locateStrategy: 'xpath'
        },
        'sus10' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21905"]',
            locateStrategy: 'xpath'
        },
        'sus11' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21906"]',
            locateStrategy: 'xpath'
        },
        'table': '#scorecard-table',
    }
}