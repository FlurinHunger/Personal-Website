//resolve('key')
//lang-key="key"
var userLang = navigator.language || navigator.userLanguage,
userLang = (["en", "de", "it", "fr", "es"].includes(userLang.split("-")[0]) ? userLang.split("-")[0] : "en"),
translations = {
  "en": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "About",
    "NAVIGATION_PORTFOLIO": "Portfolio",
    "NAVIGATION_CONTACT": "Contact",
    "HEAD_INFO": "Hello World!",
    "HEAD_INTRO": "I'm",
    "TYPED_PROFESSION": "a Developer",

    "CONTACT_TITLE": "Contact me",
    "CONTACT_SEND": "Send message"
  },
  "de": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "Über mich",
    "NAVIGATION_PORTFOLIO": "Portfolio",
    "NAVIGATION_CONTACT": "Kontakt",
    "HEAD_INFO": "Hello World!",
    "HEAD_INTRO": "Ich bin",
    "TYPED_PROFESSION": "ein Entwickler",

    "CONTACT_TITLE": "Kontaktiere mich",
    "CONTACT_SEND": "Nachricht senden"
  },
  "it": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "About",
    "NAVIGATION_PORTFOLIO": "Portafoglio",
    "NAVIGATION_CONTACT": "Contatto",
    "HEAD_INFO": "Hello World!",
    "HEAD_INTRO": "Sono",
    "TYPED_PROFESSION": "Sono uno Sviluppatore",

    "CONTACT_TITLE": "Contattami",
    "CONTACT_SEND": "Invia messaggio"
  },
  "fr": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "About",
    "NAVIGATION_PORTFOLIO": "Portfolio",
    "NAVIGATION_CONTACT": "Contact",
    "HEAD_INFO": "Hello World!",
    "HEAD_INTRO": "Je suis",
    "TYPED_PROFESSION": "un Développeur",

    "CONTACT_TITLE": "Contactez moi",
    "CONTACT_SEND": "Envoyer le message"
  },
  "es": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "sobre mí",
    "NAVIGATION_PORTFOLIO": "Cartera",
    "NAVIGATION_CONTACT": "Contacto",
    "HEAD_INFO": "Hello World!",
    "HEAD_INTRO": "Soy",
    "TYPED_PROFESSION": "Un Programador",

    "CONTACT_TITLE": "Contáctame",
    "CONTACT_SEND": "Enviar"
  }
};
function resolve(key) { return translations[userLang][key]; }
function translateDocument() {
  $("[lang-key]").each(function(i, e) {
    var element = $(e);
    element.html( resolve(element.attr("lang-key")) );
  });
}
