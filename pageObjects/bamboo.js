var bamboozled = {
    // Utility Functions
    element: function (select, prop) {
        this
            .api.getElementProperty(select, prop, function (result) {
                console.log('result', result)
            });
        return this;
    },
    vUrl: function (url) {
        this
            .verify.urlEquals(url, 'URL Verified!');
        return this;
    },
    main: function () {
        this
            .waitForElementPresent('@mainPage');
        return this;
    },
    part: function () {
        this
            .waitForElementPresent('@partnerPage');
        return this;
    },
    vApi: function () {
        this
            .waitForElementPresent('@apiPage');
        return this;
    },
    hp: function () {
        this
            .click('@home');
        return this;
    },

    // Home
    home: function (nav) {
        this
            .main()
            .element(nav.img, 'alt')
            .click(nav.learn)
            .main()
            .vUrl(nav.link)
            .hp()
        return this;
    },

    // Our Software
    ourSoftware: function () {
        this
        return this;
    },

    // Why BambooHR
    why: function () {
        this
        return this;
    },

    // Resources
    resources: function () {
        this
        return this;
    },

    // About BambooHR
    about: function () {
        this
        return this;
    },

    // Mobile View
    mobile: function () {
        this
            .resizeWindow(1200, 800)
        return this;
    },
}
module.exports = {
    url: 'https://www.bamboohr.com/',
    commands: [bamboozled],
    elements: {
        // Page
        'mainPage': '[data-abr="init"]',
        'home': '.NavbarMain__logo',
        'partnerPage': '.home',
        'apiPage': '.body-none',

        // Home Page
        'peLearn': '[aria-label="Click here to learn more about People Data & Analytics"]',
        'hiLearn': '[aria-label="Click here to learn more about Hiring"]',
        'onLearn': '[aria-label="Click here to learn more about Onboarding"]',
        'compLearn': '[aria-label="Click here to learn more about Compensation"]',
        'cultLearn': '[aria-label="Click here to learn more about Culture"]',
        /* Images */
        'peImg': '[src="/images/icons/people-data.svg"]',
        'hiImg': '[src="/images/icons/hiring.svg"]',
        'onImg': '[src="/images/icons/onboarding.svg"]',
        'compImg': '[src="/images/icons/compensation.svg"]',
        'cultImg': '[src="/images/icons/people-stacked-green.svg"]',

        // Navigation
        'software': '.js-nav-drop-opener-1',
        'whyBam': '.js-nav-drop-opener-2',
        'resources': '.js-nav-drop-opener-3',
        'aboutBam': '.js-nav-drop-opener-4',
        /* Icon */
        'icon': '.NavbarHelper__iconDisplay',

        // Our Software
        /* Overview */
        'tour': '[href="/tour/"]',
        'video': '[href="/video-tour/"]',
        /* People Data & Analytics */
        'records': '[href="/employee-database-software/"]',
        'workflow': '[href="/custom-workflows/"]',
        'reporting': '[href="/hr-reporting/"]',
        'mobile': '[href="/mobile/"]',
        /* Hiring */
        'applicant': '[href="/applicant-tracking/"]',
        'hireMobile': '[href="/mobile-hiring-app/"]',
        /* Onboarding */
        'onboard': '[href="/employee-self-onboarding/"]',
        'offboard': '[href="/employee-offboarding-software/"]',
        'sign': '[href="/electronic-signatures/"]',
        /* Compensation */
        'time': '[href="/time-tracking-software/"]',
        'pTO': '[href="/paid-time-off/"]',
        /* Culture */
        'performance': '[href="/performance-management/"]',
        'eNPS': '[href="/employee-net-promoter-score-software/"]',
        /* Packaging */
        'packing': '[href="/packaging/"]',

        // Why BambooHR
        'setMeFree': '[href="/why-bamboohr/"]',
        'apps': '[href="https://marketplace.bamboohr.com"]',
        /* Customer Success */
        'testimony': '[href="/customers/"]',
        /* Services */
        'support': '[href="/services/"]',

        // Resources
        'blog': '[href="/blog/"]',
        'content': '[href="/resources/"]',
        'webinar': '[href="/webinars/"]',
        'glossary': '[href="/hr-glossary/"]',
        'research': '[href="/about/studies-and-reports/"]',
        'api': '[href="https://documentation.bamboohr.com/docs"]',

        // About BambooHR
        'story': '[href="/about/"]',
        'media': '[href="/about/media-assets"]',
        'press': '[href="/about/press-releases"]',
        'career': '[href="/careers/"]',
        'events': '[href="/events-calendar/"]',
        'partner': '[href="https://partners.bamboohr.com"]',
        'contact': '[href="/contact/"]',

        // Mobile View
        'hamburger': '.js-nav-mobile-opener',
    }
}