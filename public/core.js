// Language support
var userLang = navigator.language || navigator.userLanguage, languages = ["en", "de", "it", "fr", "es"],
typedStrings = ["Flurin Hunger"];
userLang = (languages.includes(userLang.split("-")[0]) ? userLang.split("-")[0] : "en");


$.ajax({
  dataType: "application/json",
  url: "/lang.json",
}).always(function(data) {
  var data = JSON.parse(data.responseText)[userLang];
  typedStrings.push(data["TYPED_PROFESSION"]);
  $("[lang-key]").each(function(i, e) {
    var element = $(e);
    element.html( data[element.attr("lang-key")] );
  });
  contentReady();
});





// Animation
function contentReady() {
  var typed = new Typed(".cd-words-wrapper", {
    strings: typedStrings,
    startDelay: 100,
    typeSpeed: 50,
    backDelay: 1700,
    backSpeed: 60,
    loop: true,
    smartBackspace: true
  });
  $(function() {
    "use strict";
    var wind = $(window);
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
  });
}


// === window When Loading === //

$(window).on("load",function () {
    var wind = $(window);
    wind.scroll();
    // Preloader
    /*$(".loading").fadeOut(500);*/
});




// Mail Manager
function loadEvents() {
  var mailString;
  function updateMailString() {
    mailString = '?subject=' + encodeURIComponent($('#form_subject').val()) + '&body=' + encodeURIComponent($('#form_message').val());
    $('#mail-link').attr('href',  'mailto:hunger@flurin.ml' + mailString);
  }
  $( "#form_subject" ).focusout(function() { updateMailString(); });
  $( "#form_message" ).focusout(function() { updateMailString(); });
  updateMailString();
}
loadEvents();
