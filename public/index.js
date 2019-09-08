var typed = new Typed(".cd-words-wrapper", {
  strings: ["Flurin Hunger", "a Developer"],
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
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 600,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: -63            // offste (in px) for fixed top navigation
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



    // progress bar
  /*  wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    }); */
});


// === window When Loading === //

$(window).on("load",function (){

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);


    // stellar
    wind.stellar();


    // isotope
    $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });
});


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
