// Sites \\

let site = null;

// Greenlight Review Page \\

let greenlight = null;

// Users \\

const user = require('../../../assets/logins/focusAndExecute/reviewer');    // DOESN'T WORK AS OF 1/22/21
const admin = require('../../../assets/logins/focusAndExecute/admin');

/*** Tests ***/

module.exports = {
    setup: browser => {
        // Page Objects
        site = browser.page.sitePage();
        greenlight = browser.page.greenlightPage();

        site.login(user);

        // Navigation
        greenlight.review();
    },
    teardown: browser => { site.logout(); },
}