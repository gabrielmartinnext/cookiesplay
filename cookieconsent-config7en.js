import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Cookie categories
const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";
const CAT_FUNCTIONALITY = "functionality";
const CAT_MARKETING = "marketing";

// Google Consent Mode v2 services
const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';
const SERVICE_SECURITY_STORAGE = 'security_storage';

// Initialize dataLayer and gtag
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Set default consent to 'denied' (before loading Google Tags)
gtag('consent', 'default', {
    [SERVICE_AD_STORAGE]: 'denied',
    [SERVICE_AD_USER_DATA]: 'denied',
    [SERVICE_AD_PERSONALIZATION]: 'denied',
    [SERVICE_ANALYTICS_STORAGE]: 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
    [SERVICE_SECURITY_STORAGE]: 'denied',
});

/**
 * Update Google consent according to user choices
 */
function updateGtagConsent() {
    gtag('consent', 'update', {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
        [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_MARKETING) ? 'granted' : 'denied',
        [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_MARKETING) ? 'granted' : 'denied',
        [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_MARKETING) ? 'granted' : 'denied',
        [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        [SERVICE_SECURITY_STORAGE]: CookieConsent.acceptedService(SERVICE_SECURITY_STORAGE, CAT_NECESSARY) ? 'granted' : 'denied',
    });
}

/**
 * Push consent event to GTM with consent states
 */
function pushConsentToGTM(eventName) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': eventName,
        'consent_analytics': CookieConsent.acceptedCategory(CAT_ANALYTICS) ? 'granted' : 'denied',
        'consent_marketing': CookieConsent.acceptedCategory(CAT_MARKETING) ? 'granted' : 'denied',
        'consent_functionality': CookieConsent.acceptedCategory(CAT_FUNCTIONALITY) ? 'granted' : 'denied',
        'consent_necessary': 'granted'
    });
}

CookieConsent.run({
    revision: 1,

    cookie: {
        name: 'cookieaceptada',
        expiresAfterDays: 31,
    },

    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    // Events to update Google Consent Mode and GTM
    onFirstConsent: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onFirstConsent');
    },
    onConsent: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onConsent');
    },
    onChange: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onChange');
    },

    categories: {
        [CAT_NECESSARY]: {
            enabled: true,
            readOnly: true
        },
        [CAT_ANALYTICS]: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/   // Clear all cookies starting with '_ga'
                    },
                    {
                        name: '_gid'
                    }
                ]
            },
            services: {
                [SERVICE_ANALYTICS_STORAGE]: {
                    label: 'Google Analytics - Storage related to analytics (e.g. visit duration)'
                }
            }
        },
        [CAT_FUNCTIONALITY]: {
            services: {
                [SERVICE_FUNCTIONALITY_STORAGE]: {
                    label: 'Storage supporting website functionality (e.g. language settings)'
                },
                [SERVICE_PERSONALIZATION_STORAGE]: {
                    label: 'Storage related to personalization (e.g. content recommendations)'
                }
            }
        },
        [CAT_MARKETING]: {
            services: {
                [SERVICE_AD_STORAGE]: {
                    label: 'Storage related to advertising'
                },
                [SERVICE_AD_USER_DATA]: {
                    label: 'Sending user data related to advertising to Google'
                },
                [SERVICE_AD_PERSONALIZATION]: {
                    label: 'Personalized advertising'
                }
            }
        }
    },

    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Manage Consent",
                    description: "To provide the best experiences, we use technologies such as cookies to store and/or access device information. Consent to these technologies will allow us to process data such as browsing behaviour or unique identifiers on this site. Not consenting or withdrawing consent may adversely affect certain features and functions.",
                    closeIconLabel: "Close",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: ""
                },
                preferencesModal: {
                    title: "Cookie Preferences",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose to enable/disable each category whenever you want."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly. They are used to facilitate navigation, ensure that content loads efficiently and maintain the security of the site.",
                            linkedCategory: CAT_NECESSARY,
                            cookieTable: {
                                headers: {
                                    name: "Name",
                                    domain: "Service",
                                    description: "Description",
                                    expiration: "Expiration"
                                },
                                body: [
                                    {
                                        name: "cookieaceptada",
                                        domain: "This site",
                                        description: "Stores your cookie preferences",
                                        expiration: "31 days"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Performance, Analytics and Optimization",
                            description: "These cookies allow us to analyze website usage and measure its performance. They help us understand how visitors interact with our pages, allowing us to improve content and user experience.",
                            linkedCategory: CAT_ANALYTICS,
                            cookieTable: {
                                headers: {
                                    name: "Name",
                                    domain: "Service",
                                    description: "Description",
                                    expiration: "Expiration"
                                },
                                body: [
                                    {
                                        name: "_ga",
                                        domain: "Google Analytics",
                                        description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\" target=\"_blank\">Google Analytics</a>. Used to distinguish users.",
                                        expiration: "2 years"
                                    },
                                    {
                                        name: "_gid",
                                        domain: "Google Analytics",
                                        description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\" target=\"_blank\">Google Analytics</a>. Used to distinguish users.",
                                        expiration: "24 hours"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Personalization and Functionality",
                            description: "These cookies allow information to be remembered so that you can access the service with personalized features, such as language, display preferences or region from which you access. They enhance your experience making it more personalized and efficient.",
                            linkedCategory: CAT_FUNCTIONALITY
                        },
                        {
                            title: "Advertising and Marketing",
                            description: "These cookies are used to display relevant ads and conduct marketing campaigns. Google uses cookies for advertising, including serving and rendering ads, personalizing ads (according to your settings at <a href=\"https://g.co/adsettings\" target=\"_blank\">g.co/adsettings</a>), limiting the number of times an ad is shown, and measuring ad effectiveness.",
                            linkedCategory: CAT_MARKETING
                        },
                        {
                            title: "More Information",
                            description: "For any queries related to our cookie policy."
                        }
                    ]
                }
            }
        }
    }
});