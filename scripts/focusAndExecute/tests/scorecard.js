// Sites \\

let site = null;

// Scorecard Page \\

let scorecard = {};

// User \\

const user = require('../../../assets/logins/focusAndExecute/scorecard');

/*** Tests ***/

module.exports = {
    setup: browser => {
        // Page Objects
        site = browser.page.homePage();
        scorecard = browser.page.scorecardPage();

        site.login(user);

        // Navigation
        scorecard.card();
    },
    teardown: browser => { site.logout(); },

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
}