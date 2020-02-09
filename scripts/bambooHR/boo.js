var bamboozled = {};
var bam = require('../../assets/bambooHR/bam');
module.exports = {
    beforeEach: browser => {
        bamboozled = browser.page.bamboo();
        bamboozled
            .navigate();
    },
    after: browser => {
        browser
            .end();
    },
    'Home': browser => {
        bam.forEach(nav => {
            bamboozled
                .home(nav)
        });
    },
    // 'Our Software': browser => {
    //     bamboozled
    //         .ourSoftware();
    // },
    // 'Why BambooHR': browser => {
    //     bamboozled
    //         .why();
    // },
    // 'Resources': browser => {
    //     bamboozled
    //         .resources();
    // },
    // 'About BambooHR': browser => {
    //     bamboozled
    //         .about();
    // },
    // 'Mobile View': browser => {
    //     bamboozled
    //         .mobile();
    // },
}