var bamboozled = {};
module.exports = {
    before: browser => {
        bamboozled = browser.page.bamboo();
        bamboozled
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Navigation - Home': browser => {
        bamboozled
            .home();
    },
    'Navigation - Software': browser => {
        bamboozled
            .ourSoftware();
    },
    'Navigation - Why': browser => {
        bamboozled
            .why();
    },
    'Navigation - Resources': browser => {
        bamboozled
            .resources();
    },
    'Navigation - About': browser => {
        bamboozled
            .about();
    },
}