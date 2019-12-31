var page = {};

module.exports = {
    before: browser => {
        page = browser.page.rcstakePage();
        page
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    '': browser => {
        
    },
}