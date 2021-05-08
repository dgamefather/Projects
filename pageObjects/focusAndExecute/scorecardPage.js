var scorecardCommands = {
    card: function (data) {
        this
            .waitForElementPresent('@page')
            .click('@scorecard')
            .waitForElementVisible('@table')
            .pause(3000) // USE ONLY IF NEED BE!!!
            .api.verify.urlContains("/Dashboard/Scorecard");
        return this;
    },
    override: function () {   // Score should equal to: 100 w/ NOT APPROVED (should switch to APPROVED)
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-2"]//*[@href="/Objectives/Goals?userId=21901"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@over')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21901");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-2"]//*[@href="/Objectives/Goals?userId=21901"]',
				locateStrategy : 'xpath'
			});
		this
            .api.moveToElement({
				selector : '//*[@id="21901_Override Not Approved to Show Approved (Shows 100%) User Meets ALL Criteria"]',
				locateStrategy : 'xpath'
			}, 0, 0);
        this
            .waitForElementVisible('@overscore')
            .api.verify.containsText({
				selector : '//*[@id="21901_Override Not Approved to Show Approved (Shows 100%) User Meets ALL Criteria"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '100');
        return this;
    },
	sct001: function () {     // Score should equal to: 20 (-) **UPDATE - WILL NOT SHOW ON SCORECARD**
        this
            .waitForElementPresent('@page')
			.api.verify.not.elementPresent({
				selector : '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21896"]', 
				locateStrategy : 'xpath'
			});
        return this;
    },
    sct002: function () {     // Score should equal to: 30
        this
            .waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21898"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct002')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21898");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
        this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21898"]',
				locateStrategy : 'xpath'
			});
		this
            .api.moveToElement({
				selector : '//*[@id="21898_sct002"]',
				locateStrategy : 'xpath'
			}, 0, 0);
        this
            .waitForElementVisible('@sct002score')
            .api.verify.containsText({
				selector : '//*[@id="21898_sct002"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '30');
        return this;
    },
    sct003: function () {     // Score should equal to: 100
        this
            .waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21900"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct003')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21900");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21900"]',
				locateStrategy : 'xpath'
			});
        this
            .api.moveToElement({
				selector : '//*[@id="21900_sct003"]',
				locateStrategy : 'xpath'
			}, 0, 0);
        this
            .waitForElementVisible('@sct003score')
            .api.verify.containsText({
				selector : '//*[@id="21900_sct003"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '100');
        return this;
    },
    sct004: function () {     // Score should equal to: 90
        this
            .waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21904"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct004')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21904");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21904"]',
				locateStrategy : 'xpath'
			});
        this
			.api.moveToElement({
				selector : '//*[@id="21904_sct004"]',
				locateStrategy : 'xpath'
			}, 0, 0);
        this
            .waitForElementVisible('@sct004score')
            .api.verify.containsText({
				selector : '//*[@id="21904_sct004"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '90');
        return this;
    },
    sct005: function () {     // Score should equal to: 80
        this
            .waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21905"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct005')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21905");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
        this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21905"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector : '//*[@id="21905_sct005"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct005score')
			.api.verify.containsText({
				selector : '//*[@id="21905_sct005"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '80');
        return this;
    },
    sct006: function () {     // Score should equal to: 100
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21926"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct006')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21926");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21926"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector : '//*[@id="21926_sct006"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct006score')
			.api.verify.containsText({
				selector : '//*[@id="21926_sct006"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '100');
        return this;
    },
    sct007: function () {     // Score should equal to: 100 w/ APPROVED
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21927"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct007')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21927");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector : '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21927"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector : '//*[@id="21927_sct007"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct007score')
			.api.verify.containsText({
				selector : '//*[@id="21927_sct007"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '100');
        return this;
    },
    sct008: function () {     // Score should equal to: 90
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21899"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct008')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21899");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21899"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector : '//*[@id="21899_sct008"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct008score')
			.api.verify.containsText({
				selector : '//*[@id="21899_sct008"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '90');
        return this;
    },
    sct009: function () {     // Score should equal to: 100 (ACTION PLANS ONLY)
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21928"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct009')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21928");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21928"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector: '//*[@id="21928_sct009"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct009score')
			.api.verify.containsText({
				selector : '//*[@id="21928_sct009"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '100');
        return this;
    },
    sct010: function () {     // Score should equal to: 70
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21906"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct010')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21906");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21906"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector: '//*[@id="21906_sct010"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct010score')
			.api.verify.containsText({
				selector : '//*[@id="21906_sct010"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '70');
        return this;
    },
    sct011: function () {     // Score should equal to: 50
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21897"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct011')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21897");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21897"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector: '//*[@id="21897_sct011"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct011score')
			.api.verify.containsText({
				selector : '//*[@id="21897_sct011"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '50');
        return this;
    },
    sct012: function () {     // Score should equal to: 70
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21902"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct012')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21902");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
		this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21902"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector: '//*[@id="21902_sct012"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct012score')
			.api.verify.containsText({
				selector : '//*[@id="21902_sct012"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '70');
        return this;
    },
    sct013: function () {     // Score should equal to: 80
        this
			.waitForElementPresent('@page')
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21903"]',
				locateStrategy : 'xpath'
			});
		this
            .click('@sct013')
            .waitForElementPresent('@page')
            .api.verify.urlContains("?userId=21903");
        this
            .click('@scorecard')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/Dashboard/Scorecard");
			this
			.api.verify.elementPresent({
				selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21903"]',
				locateStrategy : 'xpath'
			});
		this
			.api.moveToElement({
				selector: '//*[@id="21903_sct013"]',
				locateStrategy : 'xpath'
			}, 0, 0);
		this
			.waitForElementVisible('@sct013score')
			.api.verify.containsText({
				selector : '//*[@id="21903_sct013"]/following-sibling::div[@class="score"]',
				locateStrategy : 'xpath'
			}, '80');
        return this;
    },
}
module.exports = {
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
        'scorecard': '.nav6',
        
        // Goals Page
        'over' : {
            selector: '//*[@class="user-name level-2"]//*[@href="/Objectives/Goals?userId=21901"]',
            locateStrategy: 'xpath'
        },
        'sct001' : {
            selector: '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21896"]',
            locateStrategy: 'xpath'
        },
        'sct002' : {
            selector: '//*[@class="user-name level-3"]//*[@href="/Objectives/Goals?userId=21898"]',
            locateStrategy: 'xpath'
        },
        'sct003' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21900"]',
            locateStrategy: 'xpath'
        },
        'sct004' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21904"]',
            locateStrategy: 'xpath'
        },
        'sct005' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21905"]',
            locateStrategy: 'xpath'
        },
        'sct006' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21926"]',
            locateStrategy: 'xpath'
        },
        'sct007' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21927"]',
            locateStrategy: 'xpath'
        },
        'sct008' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21899"]',
            locateStrategy: 'xpath'
        },
        'sct009' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21928"]',
            locateStrategy: 'xpath'
        },
        'sct010' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21906"]',
            locateStrategy: 'xpath'
        },
        'sct011' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21897"]',
            locateStrategy: 'xpath'
        },
        'sct012' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21902"]',
            locateStrategy: 'xpath'
        },
        'sct013' : {
            selector: '//*[@class="user-name level-4"]//*[@href="/Objectives/Goals?userId=21903"]',
            locateStrategy: 'xpath'
        },
        'table': '#scorecard-table',

		// Scores
		'overscore' : {
			selector: '//*[@id="21901_Override Not Approved to Show Approved (Shows 100%) User Meets ALL Criteria"]/following-sibling::div[@class="score"]',
			locateStrategy: 'xpath'
		},
		'sct002score' : {
			selector: '//*[@id="21898_sct002"]',
			locateStrategy: 'xpath'
		},
		'sct003score' : {
			selector: '//*[@id="21900_sct003"]',
			locateStrategy: 'xpath'
		},
		'sct004score' : {
			selector: '//*[@id="21904_sct004"]',
			locateStrategy: 'xpath'
		},
		'sct005score' : {
			selector: '//*[@id="21905_sct005"]',
			locateStrategy: 'xpath'
		},
		'sct006score' : {
			selector: '//*[@id="21926_sct006"]',
			locateStrategy: 'xpath'
		},
		'sct007score' : {
			selector: '//*[@id="21927_sct007"]',
			locateStrategy: 'xpath'
		},
		'sct008score' : {
			selector: '//*[@id="21899_sct008"]',
			locateStrategy: 'xpath'
		},
		'sct009score' : {
			selector: '//*[@id="21928_sct009"]',
			locateStrategy: 'xpath'
		},
		'sct010score' : {
			selector: '//*[@id="21906_sct010"]',
			locateStrategy: 'xpath'
		},
		'sct011score' : {
			selector: '//*[@id="21897_sct011"]',
			locateStrategy: 'xpath'
		},
		'sct012score' : {
			selector: '//*[@id="21902_sct012"]',
			locateStrategy: 'xpath'
		},
		'sct013score' : {
			selector: '//*[@id="21903_sct013"]',
			locateStrategy: 'xpath'
		},
    }
}