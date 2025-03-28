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
