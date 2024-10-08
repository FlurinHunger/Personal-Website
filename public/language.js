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
    "HEAD_INFO": "I love to code",
    "HEAD_INTRO": "I'm",
    "TYPED_PROFESSION": "a Developer",

    "ABOUT_TITLE": "I'm a learning Developer",
    "ABOUT_INTRO": "Hello, I am <b>Flurin Hunger</b>! I am £ years old and I live in Zurich, Switzerland. I am currently traveling through spain.",
    "ABOUT_SKILLS": "My Skills",
    "ABOUT_SPOTIFY": "My Spotify playlist",

    "PORTFOLIO_TITLE": "My Portfolio",
    "PORTFOLIO_PROJECT1_NAME": "Project 2",
    "PORTFOLIO_PROJECT1_DESCRIPTION": "Game (Beta)",
    "PORTFOLIO_PROJECT2_NAME": "Project 1",
    "PORTFOLIO_PROJECT2_DESCRIPTION": "Calculator",
    "PORTFOLIO_PROJECT3_NAME": "Project 3",
    "PORTFOLIO_PROJECT3_DESCRIPTION": "Discord Bot",

    "CONTACT_TITLE": "Contact me",
    "CONTACT_SEND": "Send message",

    "CALCULATOR_WARNING": "Don't divide by zero",
    "CALCULATOR_RESET": "Reset Universe?",
    "CALCULATOR_TITLE": "Calculator",
    "CALCULATOR_BROKE": "You broke it!",
    "CALCULATOR_BROKE2": "Look at what you've done",
    "CALCULATOR_PLUS": "plus",
    "CALCULATOR_MINUS": "minus",
    "CALCULATOR_DIVIDE": "divided by",
    "CALCULATOR_MULTIPLY": "times",

    "COMINGSOON_TITLE": "Coming Soon",
    "COMINGSOON_TITLE2": "Stay tuned",
    "COMINGSOON_SEC": "Seconds",
    "COMINGSOON_MIN": "Minutes",
    "COMINGSOON_HOUR": "Hours",
    "COMINGSOON_DAY": "Days"
  },
  "de": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "Über mich",
    "NAVIGATION_PORTFOLIO": "Portfolio",
    "NAVIGATION_CONTACT": "Kontakt",
    "HEAD_INFO": "Ich programmiere gerne",
    "HEAD_INTRO": "Ich bin",
    "TYPED_PROFESSION": "ein Entwickler",

    "ABOUT_TITLE": "Ich bin ein lernender Entwickler",
    "ABOUT_INTRO": "Hallo, ich bin <b>Flurin Hunger</b>! Ich bin £ Jahre alt und lebe in Zürich, Schweiz. Ich bin zurzeit auf einer Reise durch Spanien.",
    "ABOUT_SKILLS": "Meine Fähigkeiten",
    "ABOUT_SPOTIFY": "Meine Spotify Playlist",

    "PORTFOLIO_TITLE": "Mein Portfolio",
    "PORTFOLIO_PROJECT1_NAME": "Projekt 2",
    "PORTFOLIO_PROJECT1_DESCRIPTION": "Game (Beta)",
    "PORTFOLIO_PROJECT2_NAME": "Projekt 1",
    "PORTFOLIO_PROJECT2_DESCRIPTION": "Taschenrechner",
    "PORTFOLIO_PROJECT3_NAME": "Projekt 3",
    "PORTFOLIO_PROJECT3_DESCRIPTION": "Discord Bot",

    "CONTACT_TITLE": "Kontaktiere mich",
    "CONTACT_SEND": "Nachricht senden",

    "CALCULATOR_WARNING": "Rechne nicht durch 0",
    "CALCULATOR_RESET": "Zurücksetzen?",
    "CALCULATOR_TITLE": "Rechner",
    "CALCULATOR_BROKE": "Es ist überlastet!",
    "CALCULATOR_BROKE2": "Schau dir an was du getan hast!",
    "CALCULATOR_PLUS": "plus",
    "CALCULATOR_MINUS": "minus",
    "CALCULATOR_DIVIDE": "durch",
    "CALCULATOR_MULTIPLY": "mal",

    "COMINGSOON_TITLE": "Bald verfügbar",
    "COMINGSOON_TITLE2": "Bleib dran!",
    "COMINGSOON_SEC": "Sekunden",
    "COMINGSOON_MIN": "Minuten",
    "COMINGSOON_HOUR": "Stunden",
    "COMINGSOON_DAY": "Tage"
  },
  "it": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "About",
    "NAVIGATION_PORTFOLIO": "Portafoglio",
    "NAVIGATION_CONTACT": "Contatto",
    "HEAD_INFO": "Adoro Programmare",
    "HEAD_INTRO": "Sono",
    "TYPED_PROFESSION": "Sono uno Sviluppatore",

    "ABOUT_TITLE": "Sono uno sviluppatore di apprendimento",
    "ABOUT_INTRO": "Ciao, sono <b>Flurin Hunger</b>! Ho £ anni e vivo a Zurigo, in Svizzera.  Attualmente sto viaggiando in Spagna.",
    "ABOUT_SKILLS": "Le mie Abilità",
    "ABOUT_SPOTIFY": "La mia playlist di Spotify",

    "PORTFOLIO_TITLE": "Il mio Portfolio",
    "PORTFOLIO_PROJECT1_NAME": "Progetto 2",
    "PORTFOLIO_PROJECT1_DESCRIPTION": "Gioco (Beta)",
    "PORTFOLIO_PROJECT2_NAME": "Progetto 1",
    "PORTFOLIO_PROJECT2_DESCRIPTION": "Calcolatrice",
    "PORTFOLIO_PROJECT3_NAME": "Progetto 3",
    "PORTFOLIO_PROJECT3_DESCRIPTION": "Discord Bot",

    "CONTACT_TITLE": "Contattami",
    "CONTACT_SEND": "Invia messaggio",

    "CALCULATOR_WARNING": "Non dividere per zero",
    "CALCULATOR_RESET": "Resetta universo?",
    "CALCULATOR_TITLE": "Calcolatrice",
    "CALCULATOR_BROKE": "L'hai rotto!",
    "CALCULATOR_BROKE2": "Guarda cosa hai fatto!",
    "CALCULATOR_PLUS": "plus",
    "CALCULATOR_MINUS": "minus",
    "CALCULATOR_DIVIDE": "divided by",
    "CALCULATOR_MULTIPLY": "times",

    "COMINGSOON_TITLE": "Prossimamente",
    "COMINGSOON_TITLE2": "Resta sintonizzato",
    "COMINGSOON_SEC": "Secondi",
    "COMINGSOON_MIN": "Minuti",
    "COMINGSOON_HOUR": "Ore",
    "COMINGSOON_DAY": "Giorni"
  },
  "fr": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "About",
    "NAVIGATION_PORTFOLIO": "Portfolio",
    "NAVIGATION_CONTACT": "Contact",
    "HEAD_INFO": "J'aime coder",
    "HEAD_INTRO": "Je suis",
    "TYPED_PROFESSION": "un Développeur",

    "ABOUT_TITLE": "Je suis un Développeur en apprentissage",
    "ABOUT_INTRO": "Bonjour, je suis <b>Flurin Hunger</b>! J'ai £ ans et j'habite à Zurich, en Suisse.  Je suis actuellement en voyage en Espagne.",
    "ABOUT_SKILLS": "Mes Compétences",
    "ABOUT_SPOTIFY": "Ma playlist Spotify",

    "PORTFOLIO_TITLE": "Mon portfolio",
    "PORTFOLIO_PROJECT1_NAME": "Projet 2",
    "PORTFOLIO_PROJECT1_DESCRIPTION": "Juego (Beta)",
    "PORTFOLIO_PROJECT2_NAME": "Projet 1",
    "PORTFOLIO_PROJECT2_DESCRIPTION": "Calculatrice",
    "PORTFOLIO_PROJECT3_NAME": "Projet 3",
    "PORTFOLIO_PROJECT3_DESCRIPTION": "Discord Bot",

    "CONTACT_TITLE": "Contactez moi",
    "CONTACT_SEND": "Envoyer le message",

    "CALCULATOR_WARNING": "Ne pas diviser par zéro",
    "CALCULATOR_RESET": "Réinitialiser l'univers",
    "CALCULATOR_TITLE": "Calculatrice",
    "CALCULATOR_BROKE": "Tu as cassé!",
    "CALCULATOR_BROKE2": "Regardez ce que vous avez fait",
    "CALCULATOR_PLUS": "plus",
    "CALCULATOR_MINUS": "minus",
    "CALCULATOR_DIVIDE": "divided by",
    "CALCULATOR_MULTIPLY": "times",

    "COMINGSOON_TITLE": "Bientôt disponible",
    "COMINGSOON_TITLE2": "Restez à l'écoute",
    "COMINGSOON_SEC": "Seconds",
    "COMINGSOON_MIN": "Minutes",
    "COMINGSOON_HOUR": "Heures",
    "COMINGSOON_DAY": "Journées"
  },
  "es": {
    "NAVIGATION_HOME": "Home",
    "NAVIGATION_ABOUT": "sobre mí",
    "NAVIGATION_PORTFOLIO": "Cartera",
    "NAVIGATION_CONTACT": "Contacto",
    "HEAD_INFO": "Me gusta programar",
    "HEAD_INTRO": "Soy",
    "TYPED_PROFESSION": "Un Programador",

    "ABOUT_TITLE": "Soy un Programador aprendiz",
    "ABOUT_INTRO": "Hola, soy <b>Flurin Hunger</b>! Tengo £ años y yo vivo en Zurich, Suiza.  Actualmente estoy de viaje por España.",
    "ABOUT_SKILLS": "Mi Competencia",
    "ABOUT_SPOTIFY": "Mi lista de reproducción de Spotify",

    "PORTFOLIO_TITLE": "My Portfolio",
    "PORTFOLIO_PROJECT1_NAME": "Proyecto 2",
    "PORTFOLIO_PROJECT1_DESCRIPTION": "Juego (Beta)",
    "PORTFOLIO_PROJECT2_NAME": "Proyecto 1",
    "PORTFOLIO_PROJECT2_DESCRIPTION": "Calculadora",
    "PORTFOLIO_PROJECT3_NAME": "Proyecto 1",
    "PORTFOLIO_PROJECT3_DESCRIPTION": "Discord Bot",

    "CONTACT_TITLE": "Contáctame",
    "CONTACT_SEND": "Enviar",

    "CALCULATOR_WARNING": "No dividir por cero",
    "CALCULATOR_RESET": "Restablecer universo?",
    "CALCULATOR_TITLE": "Calculadora",
    "CALCULATOR_BROKE": "Lo rompiste!",
    "CALCULATOR_BROKE2": "Mira lo que has hecho!",
    "CALCULATOR_PLUS": "plus",
    "CALCULATOR_MINUS": "minus",
    "CALCULATOR_DIVIDE": "divided by",
    "CALCULATOR_MULTIPLY": "times",

    "COMINGSOON_TITLE": "Próximamente",
    "COMINGSOON_TITLE2": "Estén atentos",
    "COMINGSOON_SEC": "Segundos",
    "COMINGSOON_MIN": "Minutos",
    "COMINGSOON_HOUR": "Horas",
    "COMINGSOON_DAY": "Días"
  }
};
function resolve(key) { return translations[userLang][key]; }
function translateDocument() {
  $("[lang-key]").each(function(i, e) {
    var element = $(e);
    element.html( resolve(element.attr("lang-key")) );
  });
}
