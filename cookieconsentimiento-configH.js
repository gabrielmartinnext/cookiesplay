import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

var urlcookies=document.getElementById('ccp-cookie-policy-url').value;
var urlpolticas=document.getElementById('ccp-privacy-policy-url').value;
var urlaviso=document.getElementById('ccp-terms-url').value;

// Categorías de cookies
const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";
const CAT_FUNCTIONALITY = "functionality";
const CAT_MARKETING = "marketing";

// Servicios de Google Consent Mode v2
const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';
const SERVICE_SECURITY_STORAGE = 'security_storage';

// Inicializar dataLayer y gtag
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Establecer consentimiento por defecto en 'denied' (antes de cargar Google Tags)
gtag('consent', 'default', {
    [SERVICE_AD_STORAGE]: 'denied',
    [SERVICE_AD_USER_DATA]: 'denied',
    [SERVICE_AD_PERSONALIZATION]: 'denied',
    [SERVICE_ANALYTICS_STORAGE]: 'denied',
    [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
    [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
    [SERVICE_SECURITY_STORAGE]: 'denied',
});

// Leer estado previo de WP Consent API (inyectado desde PHP via wp_footer)
if (window._wpConsentDefaults) {
    console.debug('[CCP] WP Consent API defaults recibidos:', window._wpConsentDefaults);
}

/**
 * Actualizar el consentimiento de Google según las elecciones del usuario
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

/**
 * Sincronizar con WP Consent API via CustomEvent (frontend puro)
 * Mapeo: analytics→statistics | functionality→preferences | marketing→marketing | necessary→functional
 * WP Consent API escucha 'wp_consent_change' en document
 */
function syncWithWPConsentAPI() {
    const map = [
        { category: 'functional',  accepted: true }, // necesarias, siempre activas
        { category: 'statistics',  accepted: CookieConsent.acceptedCategory(CAT_ANALYTICS) },
        { category: 'marketing',   accepted: CookieConsent.acceptedCategory(CAT_MARKETING) },
        { category: 'preferences', accepted: CookieConsent.acceptedCategory(CAT_FUNCTIONALITY) },
    ];

    map.forEach(({ category, accepted }) => {
        document.dispatchEvent(new CustomEvent('wp_consent_change', {
            detail: { category, value: accepted ? 'allow' : 'deny' }
        }));
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
            layout: "bar",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },

    // Eventos para actualizar Google Consent Mode y WP Consent API
    onFirstConsent: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onFirstConsent');
        syncWithWPConsentAPI();
    },
    onConsent: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onConsent');
        syncWithWPConsentAPI();
    },
    onChange: () => {
        updateGtagConsent();
        pushConsentToGTM('cc_onChange');
        syncWithWPConsentAPI();
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
                        name: /^_ga/   // Elimina todas las cookies que empiezan con '_ga'
                    },
                    {
                        name: '_gid'
                    }
                ]
            },
            services: {
                [SERVICE_ANALYTICS_STORAGE]: {
                    label: 'Google Analytics - Almacenamiento relacionado con analíticas (ej. duración de visita)'
                }
            }
        },
        [CAT_FUNCTIONALITY]: {
            services: {
                [SERVICE_FUNCTIONALITY_STORAGE]: {
                    label: 'Almacenamiento que soporta la funcionalidad del sitio (ej. configuración de idioma)'
                },
                [SERVICE_PERSONALIZATION_STORAGE]: {
                    label: 'Almacenamiento relacionado con personalización (ej. recomendaciones de contenido)'
                }
            }
        },
        [CAT_MARKETING]: {
            services: {
                [SERVICE_AD_STORAGE]: {
                    label: 'Almacenamiento relacionado con publicidad'
                },
                [SERVICE_AD_USER_DATA]: {
                    label: 'Envío de datos de usuario relacionados con publicidad a Google'
                },
                [SERVICE_AD_PERSONALIZATION]: {
                    label: 'Publicidad personalizada'
                }
            }
        }
    },

    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            es: {
                consentModal: {
                    title: "Usamos cookies propias y de terceros para:",
                    description: "\t\t<ul>\n\t\t\t<li>Proporcionar, desarrollar, mantener y mejorar nuestros servicios.</li>\n\t\t\t<li>Mejorar el rendimiento de nuestra WEB, prevenir el spam, el fraude y los abusos.</li>\n\t\t</ul>\n\t\t<p>Si elige “Aceptar todo”, también usaremos cookies y datos para:</p>\n\t\t<ul>\n\t\t\t<li>Fines analíticos para medir la interacción con nuestra WEB según sus hábitos de navegación (p.e. páginas visitadas, clic en enlaces, …)  y asi poder entender cómo se utilizan nuestros servicios y mejorar su calidad, como también poder tener estadísticas del comportamiento de los usuarios.</li>\n\t\t\t<li>Mostrar contenido y anuncios personalizados en función de sus ajustes y medir su eficacia para poder mostrarle publicidad personalizada en base a un perfil elaborado según sus hábitos de navegación.</li>\n\t\t</ul>\n\t\t<p>Si elige “Rechazar todo”, no usaremos cookies para estos fines adicionales.</p>\n\t\t<p>Más información y configuración de éstas en el botón de \"Configuración\".</p>\n\t\t<p>Puede cambiar la configuración, y/o rechazar, asi como obtener más información haciendo clic en <a href=\"" + urlcookies + "\" aria-label=\"Políticas de Cookies\" target=\"_blank\" class=\"info\">Políticas de Cookies</a></p>\n   ",
                    closeIconLabel: "Cerrar",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"" + urlcookies + "\">Politica de Cookies</a>\n <a href=\"" + urlpolticas + "\">Politica de Privacidad</a>\n<a href=\"" + urlaviso + "\">Términos y Condiciones</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento <a class='politicsBaner' href=\"" + urlpolticas + "\">Politica de Privacidad</a> ",
                    closeIconLabel: "Cerrar modal",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Utilizamos cookies para asegurar las funcionalidades básicas del sitio web y mejorar su experiencia en línea. Puede elegir activar/desactivar cada categoría cuando lo desee."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Estas cookies son esenciales para el correcto funcionamiento del sitio web. Sin estas cookies, el sitio web no funcionaría correctamente. Se utilizan para facilitar la navegación, asegurar que el contenido se carga eficazmente y mantener la seguridad del sitio.",
                            linkedCategory: CAT_NECESSARY,
                            cookieTable: {
                                headers: {
                                    name: "Nombre",
                                    domain: "Servicio",
                                    description: "Descripción",
                                    expiration: "Expiración"
                                },
                                body: [
                                    {
                                        name: "cookieaceptada",
                                        domain: "Este sitio",
                                        description: "Guarda tus preferencias de cookies",
                                        expiration: "31 días"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Rendimiento, Analíticas y Optimización",
                            description: "Estas cookies nos permiten analizar el uso del sitio web y medir su rendimiento. Nos ayudan a entender cómo los visitantes interactúan con nuestras páginas, permitiéndonos mejorar el contenido y la experiencia del usuario.",
                            linkedCategory: CAT_ANALYTICS,
                            cookieTable: {
                                headers: {
                                    name: "Nombre",
                                    domain: "Servicio",
                                    description: "Descripción",
                                    expiration: "Expiración"
                                },
                                body: [
                                    {
                                        name: "_ga",
                                        domain: "Google Analytics",
                                        description: "Cookie establecida por <a href=\"https://business.safety.google/adscookies/\" target=\"_blank\">Google Analytics</a>. Se utiliza para distinguir usuarios.",
                                        expiration: "2 años"
                                    },
                                    {
                                        name: "_gid",
                                        domain: "Google Analytics",
                                        description: "Cookie establecida por <a href=\"https://business.safety.google/adscookies/\" target=\"_blank\">Google Analytics</a>. Se utiliza para distinguir usuarios.",
                                        expiration: "24 horas"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Personalización y Funcionalidad",
                            description: "Estas cookies permiten recordar información para que puedas acceder al servicio con características personalizadas, como el idioma, preferencias de visualización o región desde la que accedes. Mejoran tu experiencia haciéndola más personalizada y eficiente.",
                            linkedCategory: CAT_FUNCTIONALITY
                        },
                        {
                            title: "Publicidad y Marketing",
                            description: "Estas cookies se utilizan para mostrar anuncios relevantes y realizar campañas de marketing. Google utiliza cookies para publicidad, incluyendo servir y renderizar anuncios, personalizar anuncios (según tu configuración en <a href=\"https://g.co/adsettings\" target=\"_blank\">g.co/adsettings</a>), limitar la cantidad de veces que se muestra un anuncio y medir la efectividad de los anuncios.",
                            linkedCategory: CAT_MARKETING
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier consulta relacionada con nuestra <a href=\"" + urlcookies + "\">política de cookies</a>. consulta nuestra <a href=\"" + urlpolticas + "\">política de privacidad</a>"
                        }
                    ]
                }
            }
     
        }
    }
});
