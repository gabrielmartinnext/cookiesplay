import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    revision: 1,

    cookie: {
        name: 'cookieaceptada',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
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
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {},
        analytics: {},
        marketing: {}
    },
    language: {
        default: "es",
        translations: {
            es: {
                consentModal: {
                    title: "Usamos cookies propias y de terceros para:",
                    description: "\t\t<ul>\n\t\t\t<li>Proporcionar, desarrollar, mantener y mejorar nuestros servicios.</li>\n\t\t\t<li>Mejorar el rendimiento de nuestra WEB, prevenir el spam, el fraude y los abusos.</li>\n\t\t</ul>\n\t\t<p>Si elige “Aceptar todo”, también usaremos cookies y datos para:</p>\n\t\t<ul>\n\t\t\t<li>Fines analíticos para medir la interacción con nuestra WEB según sus hábitos de navegación (p.e. páginas visitadas, clic en enlaces, …)  y asi poder entender cómo se utilizan nuestros servicios y mejorar su calidad, como también poder tener estadísticas del comportamiento de los usuarios.</li>\n\t\t\t<li>Mostrar contenido y anuncios personalizados en función de sus ajustes y medir su eficacia para poder mostrarle publicidad personalizada en base a un perfil elaborado según sus hábitos de navegación.</li>\n\t\t</ul>\n\t\t<p>Si elige “Rechazar todo”, no usaremos cookies para estos fines adicionales.</p>\n\t\t<p>Más información y configuración de éstas en el botón de \"Configuración\".</p>\n\t\t<p>Puede cambiar la configuración, y/o rechazar, asi como obtener más información haciendo clic en <a href=\"/politica-de-cookies/\" aria-label=\"Políticas de Cookies\" target=\"_blank\" class=\"info\">Políticas de Cookies</a></p>\n   ",
                    closeIconLabel: "",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Configuracion",
                    footer: ""
                },
                preferencesModal: {
                    title: "Su elección de cookies",
                    closeIconLabel: "Cerrar modal",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Las cookies son importantes para el correcto funcionamiento de una página. Para mejorar su experiencia en la navegación, utilizamos cookies para conservar la información de inicio de sesión y proporcionarle una conexión segura, optimizar el rendimiento del sitio web, ofrecerle servicios adicionales, recopilar estadísticas anónimas para optimizar las características del sitio, adaptar el contenido a sus intereses y permitir compartir sus intereses con terceros. Usted puede seleccionar su elección para cada categoría de cookies, además puede cambiar su elección en cualquier momento desde la  <a href=\"/politica-de-cookies/\">página de cookies </a>"
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Utilizamos estas cookies para mejorar la funcionalidad y el buen funcionamiento de nuestra WEB.\n\nEstas cookies son necesarias para facilitar la correcta navegación y que nuestro sitio web funcione correctamente, asegurando que el contenido se carga eficazmente y no se pueden desactivar en nuestros sistemas. De forma general, solo se utilizan en acciones como cuando solicita servicios, establece sus preferencias de privacidad, inicia sesión o completa formularios.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Rendimiento, analíticas y optimización ",
                            description: "Estas cookies son propias o de terceros que nos permiten optimizar tu experiencia en el sitio web, evaluando su rendimiento y mejorar añadiendo nuevas funcionalidades.\n\nEsta categoría también se conoce como Analytics. Actividades como el recuento de visitas a la página, la velocidad de carga de la página, la tasa de rebote y las tecnologías utilizadas para acceder a nuestro sitio se incluyen en esta categoría",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Personalización",
                            description: "Estas Cookies son aquellas que permiten recordar información para que puedas acceder al servicio con determinadas características que pueden diferenciar tu experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el usuario realiza una búsqueda, el aspecto o contenido del servicio en función del tipo de navegador a través del cual el usuario accede al servicio o de la región desde la que accede al servicio, etc. En el caso de que esta personalización sea necesaria para el funcionamiento de la WEB o sea solicitada directamente por usted, permanecerán activas ya que son imprescindibles para el funcionamiento de la WEB.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Publicidad Comportamental y Marketing",
                            description: "Estas cookies son utilizadas para almacenar información del comportamiento de los usuarios obtenida a través de la observación continuada. Gracias a ellas, podemos conocer los hábitos de navegación en el sitio web y mostrar publicidad relacionada con el perfil de navegación del usuario.\n\nAdemás con estas cookies podemos ofrecerle una serie de servicios de redes sociales que hemos agregado al sitio para permitirle compartir nuestro contenido con sus amigos y redes. También podremos hacer un seguimiento de su navegación y crear un perfil de sus intereses para mostrarle publicidad relacionada en las redes sociales que visite.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            }
        }
    }
});



/*

*/