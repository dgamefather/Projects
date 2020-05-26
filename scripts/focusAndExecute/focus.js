var user = require('../../assets/logins/focusAndExecute/execute');
var tags = require('../../assets/focusAndExecute/tags');
var employees = require('../../assets/focusAndExecute/employees');
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

    /* Old Goal Page Link Checker */
    'Old URL Checker': browser => {
        call.oldPage();
    },

    /* Ownership/Authorship | Goal/Action Plan/Task Name Editor */
    'Editor': browser => {
        call
            .author()
            .editor();
    },

    /* Updates | Due Dates */
    'Progress Check': browser => {
        call
            .update()
            .dueDate();
    },

    // Search/Tags
    'Filter System': browser => {
        call
            .search(employees)
            .tag(tags);
    },

    // Plan Duplication
    'Duping': browser => {
        call.dupe();
    },
}