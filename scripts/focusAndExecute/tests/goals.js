// Sites \\

let site = null;

// Goals Page \\

let goal = {};

// Assets \\

const tags = require('../../../assets/focusAndExecute/tags');
const employees = require('../../../assets/focusAndExecute/employees');
const goals = require('../../../assets/focusAndExecute/goals');

// User \\

const user = require('../../../assets/logins/focusAndExecute/tester');

/*** Tests ***/

module.exports = {
    setup: browser => {
        // Page Objects
        site = browser.page.homePage();
        goal = browser.page.goalsPage();

        site.login(user);

        // Deletion of Excess Goals
        // goal.cleanUp('Test Goal');
    },
    teardown: browser => { site.logout(); },

	// Ownership/Authorship | Goal/Action Plan/Task Name Editor
    'Editor': browser => {
        goal
            .editor()   // WORKS!
            // .author()
    },

    // Old Goal Page Link Checker
    'URL Check': browser => { goal.oldPage(); }, // WORKS!

	// Updates | Due Dates
    'Progress Check': browser => {
        goal
            .update()
            .dueDate();
    },

    // Search/Tags
    'Filter': browser => {
        employees.forEach(employee => goal.search(employee)); // WORKS!
        goals.forEach(goal => goal.search(goals)); // WORKS!
        tags.forEach(tag => goal.tag(tag)); // WORKS!
        // tags.forEach(tag => goal.search(tag));
    },
}