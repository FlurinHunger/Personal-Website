var firebaseConfig = {
  apiKey: "AIzaSyAuDpYcfVe8jybKct4h19bDnemQygPIJs4",
  authDomain: "flurinsapp.firebaseapp.com",
  databaseURL: "https://flurinsapp.firebaseio.com",
  projectId: "flurinsapp",
  storageBucket: "flurinsapp.appspot.com",
  messagingSenderId: "763375741818",
  appId: "1:763375741818:web:9119a43e392784381244c3",
  measurementId: "G-DS32FTN5NV"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Animation
$(function() {
  "use strict";
  var wind = $(window);
  var typed = new Typed(".cd-words-wrapper", {
    strings: ["Flurin Hunger", resolve('TYPED_PROFESSION')],
    startDelay: 100,
    typeSpeed: 50,
    backDelay: 1700,
    backSpeed: 60,
    loop: true,
    smartBackspace: true
  });
  // scrollIt
  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: 'swing',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: -63
  });

  // Change navbar background on scroll
  wind.on("scroll",function () {
    var bodyScroll = wind.scrollTop(),
    navbar = $(".navbar");
    if(bodyScroll > 100){
      navbar.addClass("nav-scroll");
    } else{
      navbar.removeClass("nav-scroll");
    }
  });
  $(window).on("load",function () {
    var wind = $(window);
    wind.scroll();
  });


  //Account management
  var loggedIn = false;
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      loggedIn = true;
      $('.nav-item.account').html('<a class="nav-link" href=""><i class="fas fa-sign-in-alt"></i> Logout</a>');
    } else {
      loggedIn = false;
      $('.nav-item.account').html('<a class="nav-link" href=""><i class="fas fa-sign-in-alt"></i> Login</a>');
    }
  });

  $('.nav-item.account').on('click', function(event) {
    event.preventDefault();
    if(loggedIn) {
      firebase.auth().signOut();
    } else {
      window.location.href = `//${window.location.host}/login`;
    }
  });
});


// Mail Manager
function loadEvents() {
  var mailString;
  function updateMailString() {
    mailString = '?subject=' + encodeURIComponent($('#form_subject').val()) + '&body=' + encodeURIComponent($('#form_message').val());
    $('#mail-link').attr('href',  'mailto:contact@flurinhunger.ch' + mailString);
  }
  $( "#form_subject" ).focusout(function() { updateMailString(); });
  $( "#form_message" ).focusout(function() { updateMailString(); });
  updateMailString();
}
loadEvents();


if(window.location.hash == '#login-success') {
  window.history.pushState("", "", '/');
  setTimeout(function() {
    $('[data-scroll-nav="2"]').click();
  }, 200);
}
translateDocument();


//change age
const d = new Date();
var age = 0;
if(d.getMonth() < 6) {
   age = d.getFullYear() - 2005;
 }
 else {
    age=d.getFullYear() - 2004;
  }
let text = document.getElementById("myage").innerHTML;
document.getElementById("myage").innerHTML = text.replace("£", age);
