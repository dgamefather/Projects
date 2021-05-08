var greenCommands = {
    review: function () {
        this
            .waitForElementPresent('@page')
            .click('@nav')
            .waitForElementPresent('@page')
            .api.verify.urlContains("/User");
        this
            .api.verify.containsText('#content', "Green Light Review");
        return this;
    },
    
}
module.exports = {
    commands: [greenCommands],
    elements: {
        // Site
        'page': '#content',
        'nav': '.nav8',

        // Green Light Review
        '': '',
    }
}
