// Production Site 
// var pro = {};    /* DO NOT USE!!!!!! */

// Users

var user1 = require('../../assets/logins/focusAndExecute/tester');
var user2 = require('../../assets/logins/focusAndExecute/scorecard');
var login = {};

// Goals Page

var goals = {};
var tags = require('../../assets/focusAndExecute/tags');
var employees = require('../../assets/focusAndExecute/employees');
var goal = require('../../assets/focusAndExecute/goals');

// Scorecard Page

var scorecard = {};

// Tests

module.exports = {
    before: browser => {
        login = browser.page.loginPage();
        goals = browser.page.goalsPage();
        scorecard = browser.page.scorecardPage();
        // pro = browser.page.prodSite();   /* DO NOT USE!!!!!! */
        login.navigate();
        // pro.navigate();  /* DO NOT USE!!!!!! */
    },
    after: browser => {
        login.logout();
        browser.end();
    },

    /*** GOALS PAGE ***/

    'Login - Tester Litster': browser => {
        login.login(user1);
    },

    'Navigation - Goals': browser => {
        goals.goals();
    },

    // Old Goal Page Link Checker
    'Old URL Checker': browser => {
        goals.oldPage();
    },

    // // Ownership/Authorship | Goal/Action Plan/Task Name Editor
    // 'Editor': browser => {
    //     goals
    //         .author()
    //         .editor();
    // },

    // // Updates | Due Dates
    // 'Progress Check': browser => {
    //     goals
    //         .update()
    //         .dueDate();
    // },

    // // Search/Tags
    // 'Filter System - Owner': browser => {
    //     employees.forEach(employee =>
    //         goals
    //             .search(employee)
    //     )
    // },

    // 'Filter System - Goal': browser => {
    //     goal.forEach(goal =>
    //         goals
    //             .search(goal)
    //     )
    // },

    // 'Filter System - Tag (Search)': browser => {
    //     tags.forEach(tag =>
    //         goals
    //             .search(tag)
    //     )
    // },

    // 'Filter System - Tag (Tag)': browser => {
    //     tags.forEach(tag =>
    //         goals
    //             .tag(tag)
    //     )
    // },

    /*** Scorecard ***/
    
    // 'Login - Script Litster': browser => {
    //     login
    //         .logout()
    //         .login(user2);
    // },

    // 'Navigation - Scorecard': browser => {
    //     scorecard.card();
    // },

    // 'Score Check': browser => {
    //     scorecard
    //         .sus1()
    //         .sus2()
    //         .sus3()
    //         .sus4()
    //         .sus5()
    //         .sus6()
    //         .sus7()
    //         .sus8()
    //         .sus9()
    //         .sus10()
    //         .sus11();
    // },
}