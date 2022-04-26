// Dev Site \\

let site = null;

// Test Files \\

const greenlight = require("./tests/greenlight");
const goal = require("./tests/goals");
const scorecard = require("./tests/scorecard");

// Test Runner \\

module.exports = {
    before: browser => { 
        console.log(browser.launch_url);

/*
    USE --env and the following to change environments:
    fande_
        prod
        testfocus
        testfocus2
*/

        site = browser.page.homePage();
        site.navigate(browser.launch_url);
    },
    after: browser => { browser.end(); },

    /*** Goals ***/
    'Setup (Goals)': goal.setup,

    Edits: goal.Editor,
    'Old Page': goal["URL Check"],
    // Progress: goal["Progress Check"], // NOT WORKING!
    Search: goal.Filter,

    'Teardown (Goals)': goal.teardown,
            
    /*** Scorecard ***/
    'Setup (Scorecard)': scorecard.setup,
    Scorecard: scorecard["Score Check"],
    'Teardown (Scorecard)': scorecard.teardown,

    /*** Greenlight ***/
    // 'Setup (Greenlight)': greenlight.setup, // NOT WORKING!
    // 'Teardown (Greenlight)': greenlight.teardown, // NOT WORKING!
}