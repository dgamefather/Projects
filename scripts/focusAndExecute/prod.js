// Production Site \\

var pro = {};

// Users \\

var user1 = require('../../assets/logins/focusAndExecute/tester');
var user2 = require('../../assets/logins/focusAndExecute/scorecard');

// Goals Page \\

var goals = {};
var tags = require('../../assets/focusAndExecute/tags');
var employees = require('../../assets/focusAndExecute/employees');
var goal = require('../../assets/focusAndExecute/goals');

// Scorecard Page \\

var scorecard = {};

// Tests \\

module.exports = {
    before: browser => {
		pro = browser.page.prodSite();
        goals = browser.page.goalsPage();
        scorecard = browser.page.scorecardPage();
        pro
            .navigate();
    },
    after: browser => {
		pro
			.logout();
        browser
            .end();
    },

	/* Main Plan */

    'Login - Tester Litster': browser => {
		pro
			.login(user1);
    },

    /*** GOALS PAGE ***/

    'Navigation - Goals': browser => {
        goals
            .goals();
    },

	// Ownership/Authorship | Goal/Action Plan/Task Name Editor
    'Editor': browser => {
        goals
            .editor()
			.delete();
    },

    // Old Goal Page Link Checker
    'Old URL Checker': browser => {
        goals
            .oldPage();
    },

    // Search/Tags
    'Filter System - Owner': browser => {
        employees.forEach(employee =>
            goals
                .search(employee)
        )
    },

    'Filter System - Goal': browser => {
        goal.forEach(goal =>
            goals
                .search(goal)
        )
    },

    'Filter System - Tag (Tag)': browser => {
        tags.forEach(tag =>
            goals
                .tag(tag)
        )
    },

    /* Secondary Plan */

    /*** Scorecard ***/
    
    'Login - Script Litster': browser => {	
		pro
			.logout()
			.login(user2);
    },

    'Navigation - Scorecard': browser => {
        scorecard
            .card();
    },

    'Score Check': browser => {
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
}