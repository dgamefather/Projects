var user = require('../../assets/logins/focusAndExecute/execute');
var tags = require('../../assets/focusAndExecute/tags');
var employees = require('../../assets/focusAndExecute/employees');
var goal = require('../../assets/focusAndExecute/goals');
var call = {};
module.exports = {
    before: browser => {
        call = browser.page.focusPage();
        call.navigate();
    },
    after: browser => {
        browser.end();
    },
    'Login': browser => {
        call.login(user);
    },

    /*** GOALS PAGE ***/

    // // Old Goal Page Link Checker /* DO THIS ONE LATER! */
    // 'Old URL Checker': browser => {
    //     call.oldPage();
    // },

    // // Ownership/Authorship | Goal/Action Plan/Task Name Editor
    // 'Editor': browser => {
    //     call
    //         .author()
    //         .editor();
    // },

    // // Updates | Due Dates
    // 'Progress Check': browser => {
    //     call
    //         .update()
    //         .dueDate();
    // },

    // Search/Tags
    'Filter System - Owner': browser => {
        employees.forEach(employee =>
            call
                .search(employee)
        )
    },

    'Filter System - Goal': browser => {
        goal.forEach(goal =>
            call
                .search(goal)
        )
    },

    'Filter System - Tag (Search)': browser => {
        tags.forEach(tag =>
            call
                .search(tag)
        )
    },

    'Filter System - Tag (Tag)': browser => {
        tags.forEach(tag =>
            call
                .tag(tag)
        )
    },


    // // Plan Duplication
    // 'Duping': browser => {
    //     call.dupe();
    // },
}