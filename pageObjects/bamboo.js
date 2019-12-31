var bamboozled = {
    // Home Page
    home: function () {
        this
            .waitForElementPresent('@mainPage')

        return this;
    },

    // Our Software
    ourSoftware: function () {
        this
            .waitForElementPresent('@mainPage')
        return this;
    },

    // Why BambooHR
    why: function () {
        this
            .waitForElementPresent('@mainPage')
        return this;
    },

    // Resources
    resources: function () {
        this
            .waitForElementPresent('@mainPage')
        return this;
    },

    // About BambooHR
    about: function () {
        this
            .waitForElementPresent('@mainPage')
        return this;
    },
}
module.exports = {
    url: 'https://www.bamboohr.com/',
    commands: [bamboozled],
    elements: {
        // Page
        'mainPage': '[data-abr="init"]',
        'partnerPage': '.home',
        'apiPage': '.body-none',

        // Home Page
        'peLearn': '[aria-label="Click here to learn more about People Data & Analytics"]',
        'hiLearn': '[aria-label="Click here to learn more about Hiring"]',
        'onLearn': '[aria-label="Click here to learn more about Onboarding"]',
        'compLearn': '[aria-label="Click here to learn more about Compensation"]',
        'cultLearn': '[aria-label="Click here to learn more about Culture"]',

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
    }
}