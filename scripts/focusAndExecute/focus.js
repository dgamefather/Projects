// Production Site \\

var pro = {};

// Users \\

var user1 = require('../../assets/logins/focusAndExecute/tester');
var user2 = require('../../assets/logins/focusAndExecute/scorecard');
var user3 = require('../../assets/logins/focusAndExecute/reviewer');    // DOESN'T WORK AS OF 1/22/21
var admin = require('../../assets/logins/focusAndExecute/admin');
var login = {};

// Goals Page \\

var goals = {};
var tags = require('../../assets/focusAndExecute/tags');
var employees = require('../../assets/focusAndExecute/employees');
var goal = require('../../assets/focusAndExecute/goals');

// Scorecard Page \\

var scorecard = {};

// Greenlight Review Page \\

// var greenlight = {};

// Tests \\

module.exports = {
    before: browser => {
        login = browser.page.loginPage();
        goals = browser.page.goalsPage();
        scorecard = browser.page.scorecardPage();
        // greenlight = browser.page.greenlightPage();
        pro = browser.page.prodSite();
        login
            .navigate();					/* COMMENT OUT WHEN TESTING PRODUCTION */
        // pro
        //     .navigate();					/* COMMENT OUT WHEN TESTING TEST SITE */
    },
    after: browser => {
        login
            .logout();						/* COMMENT OUT WHEN TESTING PRODUCTION */
		// pro
		// 	.logout();						/* COMMENT OUT WHEN TESTING TEST SITE */
        browser
            .end();
    },

	/* Main Plan */

    'Login - Tester Litster': browser => {    // WORKS!
        login
            .login(user1);

		// pro	/* COMMENT OUT WHEN TESTING TEST SITE */
		// 	.login(user1);
    },

    /*** GOALS PAGE ***/

    'Navigation - Goals': browser => {    // WORKS!
        goals
            .goals();
    },

	// Ownership/Authorship | Goal/Action Plan/Task Name Editor
    'Editor': browser => {
        goals
            .editor()   // WORKS!
            // .author()
			.delete();	// WORKS!
    },

    // Old Goal Page Link Checker
    'Old URL Checker': browser => {    // WORKS!
        goals
            .oldPage();
    },

	// // Updates | Due Dates
    // 'Progress Check': browser => {
    //     goals
    //         .update()
    //         .dueDate();
    // },

    // Search/Tags
    'Filter System - Owner': browser => {    // WORKS!
        employees.forEach(employee =>
            goals
                .search(employee)
        )
    },

    'Filter System - Goal': browser => {    // WORKS!
        goal.forEach(goal =>
            goals
                .search(goal)
        )
    },

    'Filter System - Tag (Tag)': browser => {    // WORKS!
        tags.forEach(tag =>
            goals
                .tag(tag)
        )
    },

    // 'Filter System - Tag (Search)': browser => {     /* VERIFICATION BREAKS THIS TEST */
    //     tags.forEach(tag =>
    //         goals
    //             .search(tag)
    //     )
    // },

    /* Secondary Plan */

    /*** Scorecard ***/
    
    'Login - Script Litster': browser => {    // WORKS!
        login	/* COMMENT OUT WHEN TESTING PRODUCTION */
        	.logout()
            .login(user2);
		
		// pro	/* COMMENT OUT WHEN TESTING TEST SITE */
		// 	.logout()
		// 	.login(user2);
    },

    'Navigation - Scorecard': browser => {    // WORKS!
        scorecard
            .card();
    },

    'Score Check': browser => {     // WORKS!
        scorecard
            .override()
            .sct001()   // This scenario WILL FAIL! Won't show on scoreboard as of 1/27/2021
			.sct002()
            .sct003()
            .sct004()
            .sct005()
            .sct006()
            .sct007()
            .sct008()
            .sct009()
            .sct010()
            .sct011()
            .sct012()
            .sct013();
    },

    // /*** Green Light Review ***/

    // 'Login - Green Litster': browser => {               // WORKS!
    //     login	/* COMMENT OUT WHEN TESTING PRODUCTION */
    //         .logout()
    //         .login(admin);
		
	// 	// pro	/* COMMENT OUT WHEN TESTING TEST SITE */
	// 	// 	.logout()
	// 	// 	.login(admin);
    // },

    // 'Navigation - Green Light Review': browser => {
    //     greenlight
    //         .review();
    // },
}