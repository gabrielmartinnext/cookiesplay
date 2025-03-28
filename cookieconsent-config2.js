import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "middle center",
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
        default: "fr",
        translations: {
            es: {
                consentModal: {
                    title: "<div style=\"width:100; heigth:100\">    <svg style=\"    width: 100;\n    height: 100;\n}\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n        <path fill=\"currentColor\" d=\"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0 0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77 54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0 0 57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z\"></path>\n      </svg></div>\nUsamos cookies propias y de terceros para:",
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
            },
            fr: {
                consentModal: {
                    title: "Nous utilisons nos propres cookies et ceux de tiers pour :",
                    description: "<ul>\n    <li>Fournir, développer, maintenir et améliorer nos services.</li>\n    <li>Améliorer les performances de notre site web, prévenir le spam, la fraude et les abus.</li>\n</ul>\n<p>Si vous choisissez « Accepter tout », nous utiliserons également des cookies et des données pour :</p>\n<ul>\n    <li>à des fins analytiques pour mesurer l'interaction avec notre site web en fonction de vos habitudes de navigation (par exemple, les pages visitées, les clics sur les liens, ...) afin de comprendre comment nos services sont utilisés et d'en améliorer la qualité, ainsi que pour obtenir des statistiques sur le comportement des utilisateurs.</li>\n    <li>afficher un contenu et des publicités personnalisés en fonction de vos paramètres et mesurer leur efficacité afin de vous montrer des publicités personnalisées basées sur un profil de vos habitudes de navigation.</li>\n</ul>\n<p>Si vous choisissez « Refuser tout », nous n'utiliserons pas de cookies à ces fins supplémentaires.</p>\n<p>Vous trouverez de plus amples informations et la configuration de ces éléments en cliquant sur le bouton « Configuration ».</p>\n<p>Vous pouvez modifier les paramètres, et/ou refuser, ainsi qu'obtenir plus d'informations en cliquant sur<a href=\"/privacy-policy/\" aria-label=\"Politique en matière de cookies\" target=\"_blank\" class=\"info\">\n    Politique en matière de cookies.</a></p>",
                    closeIconLabel: "",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    showPreferencesBtn: "Gérer les préférences",
                    footer: ""
                },
                preferencesModal: {
                    title: "Préférences de cookies",
                    closeIconLabel: "Fermer la modale",
                    acceptAllBtn: "Tout accepter",
                    acceptNecessaryBtn: "Tout rejeter",
                    savePreferencesBtn: "Sauvegarder les préférences",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Utilisation des Cookies",
                            description: "\nLes cookies sont importants pour le bon fonctionnement d'un site web. Pour améliorer votre expérience de navigation, nous utilisons des cookies pour conserver les informations de connexion et vous fournir une connexion sécurisée, optimiser les performances du site web, vous fournir des services supplémentaires, collecter des statistiques anonymes pour optimiser les fonctionnalités du site, adapter le contenu à vos centres d'intérêt et permettre le partage de vos centres d'intérêt avec des tiers. Vous pouvez sélectionner votre choix pour chaque catégorie de cookies et vous pouvez modifier votre choix à tout moment à partir de la <a href=\"privacy-policy/\">page des cookies.</a>"
                        },
                        {
                            title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activé</span>",
                            description: "Nous utilisons ces cookies pour améliorer la fonctionnalité et le bon fonctionnement de notre SITE WEB.\n\nCes cookies sont nécessaires pour faciliter la navigation et faire fonctionner correctement notre site web, en garantissant que le contenu se charge efficacement et ne peut pas être désactivé sur nos systèmes. En général, ils ne sont utilisés que dans le cadre d'actions telles que la demande de services, le paramétrage de vos préférences en matière de confidentialité, la connexion ou le remplissage de formulaires.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Performance, analyse et optimisation ",
                            description: "Il s'agit de nos propres cookies ou de cookies de tiers qui nous permettent d'optimiser votre expérience sur le site web, d'évaluer ses performances et de l'améliorer en y ajoutant de nouvelles fonctionnalités.\n\nCette catégorie est également connue sous le nom d'analyse. Les activités telles que le comptage des pages vues, la vitesse de chargement des pages, le taux de rebond et les technologies utilisées pour accéder à notre site sont incluses dans cette catégorie.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Personnalisation",
                            description: "Il s'agit de cookies qui permettent de mémoriser des informations afin que vous puissiez accéder au service avec certaines caractéristiques qui peuvent différencier votre expérience de celle d'autres utilisateurs, comme par exemple la langue, le nombre de résultats à afficher lorsque l'utilisateur effectue une recherche, l'aspect ou le contenu du service en fonction du type de navigateur par lequel l'utilisateur accède au service ou de la région à partir de laquelle l'utilisateur accède au service, etc. Dans la mesure où cette personnalisation est nécessaire au fonctionnement du SITE ou est demandée directement par vous, elles resteront actives car elles sont indispensables au fonctionnement du SITE.",
                            linkedCategory: "functionality"
                        },
                        {
                            title: "Publicité et marketing comportementaux",
                            description: "Ces cookies sont utilisés pour stocker des informations sur le comportement de l'utilisateur, obtenues grâce à une observation continue. Grâce à eux, nous pouvons connaître les habitudes de navigation sur le site web et afficher des publicités liées au profil de navigation de l'utilisateur.\n\nEn outre, ces cookies nous permettent de vous proposer une série de services de réseaux sociaux que nous avons ajoutés au site pour vous permettre de partager nos contenus avec vos amis et vos réseaux. Nous pouvons également suivre votre navigation et créer un profil de vos intérêts pour vous montrer des publicités connexes sur les réseaux sociaux que vous visitez.",
                            linkedCategory: "marketing"
                        }
                    ]
                }
            }
        }
    }
});