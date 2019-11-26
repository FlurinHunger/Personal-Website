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

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    window.location = `//${window.location.host}#login-success`;
  }
});

//LoginForm elements
const worker = $('#worker');
const btnSignIn = $('#btnSignIn');
const btnSignUp = $('#btnSignUp');
const btnPasswordReset = $('#btnPasswordReset');
const btnExitSignup = $('#btnExitSignup');
const formLogin = $('#formLogin');
const txtEmail = $('#txtEmail');
const txtPassword = $('#txtPassword');
const txtError = $('#txtError');

/* Show signin */
btnSignIn.on('click', function(event) {
  event.preventDefault();
  gotoSignIn();
})
btnExitSignup.on('click', function(event) {event.preventDefault();gotoSignIn();})

/* Show signup */
btnSignUp.on('click', function(event) {
  event.preventDefault();
  gotoSignUp();
})
btnPasswordReset.on('click', function(event) {
  event.preventDefault();
  gotoPasswordReset();
})

/* Handle submit */
formLogin.on('submit', function(event) {
  event.preventDefault();
  const email = txtEmail.val();
  const password = txtPassword.val();
  const auth = firebase.auth();

  if(worker.hasClass('type-signin')) {
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then(user => {
        console.log(user);
      })
      .catch(e => txtError.text('Email or password wrong.'));
  } else {
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .then(user => {
        console.log(user);
      })
      .catch(e => txtError.text('User already exists.'));
  }
});

/* Form state functions */
function gotoSignIn() {
  if(worker.hasClass('type-signin')) return;
  worker.addClass('type-signin');
  worker.removeClass('type-signup');
  btnSignUp.addClass('underlineHover')
  btnSignIn.removeClass('underlineHover')
  txtError.text('')
}
function gotoSignUp() {
  if(worker.hasClass('type-signup')) return;
  worker.addClass('type-signup');
  worker.removeClass('type-signin');
  btnSignIn.addClass('underlineHover')
  btnSignUp.removeClass('underlineHover')
  txtError.text('')
}
function gotoPasswordReset() {

}











































/* Handle style */
$(function() {
  $(".input input").focus(function() {
    $(this).parent(".input").each(function() {
      $("label", this).css({
        "line-height": "18px",
        "font-size": "18px",
        "font-weight": "100",
        "top": "0px"
      })

      $(".spin", this).css({
        "width": "100%"
      })
    });
   }).blur(function() {
      $(".spin").css({
        "width": "0px"
      })
      if ($(this).val() == "") {
        $(this).parent(".input").each(function() {
          $("label", this).css({
            "line-height": "60px",
            "font-size": "24px",
            "font-weight": "300",
            "top": "10px"
          })
        });
      }
   });

   $(".button").click(function(e) {
      var pX = e.pageX,
         pY = e.pageY,
         oX = parseInt($(this).offset().left),
         oY = parseInt($(this).offset().top);

      $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
      $('.x-' + oX + '.y-' + oY + '').animate({
         "width": "500px",
         "height": "500px",
         "top": "-250px",
         "left": "-250px",

      }, 600);
      $("button", this).addClass('active');
   })

   $(".alt-2").click(function() {
      if (!$(this).hasClass('material-button')) {
         $(".shape").css({
            "width": "100%",
            "height": "100%",
            "transform": "rotate(0deg)"
         })

         setTimeout(function() {
            $(".overbox").css({
               "overflow": "initial"
            })
         }, 600)

         $(this).animate({
            "width": "140px",
            "height": "140px"
         }, 500, function() {
            $(".box").removeClass("back");

            $(this).removeClass('active')
         });

         $(".overbox .title").fadeOut(300);
         $(".overbox .input").fadeOut(300);
         $(".overbox .button").fadeOut(300);

         $(".alt-2").addClass('material-buton');
      }

   })

   $(".material-button").click(function() {

      if ($(this).hasClass('material-button')) {
         setTimeout(function() {
            $(".overbox").css({
               "overflow": "hidden"
            })
            $(".box").addClass("back");
         }, 200)
         $(this).addClass('active').animate({
            "width": "700px",
            "height": "700px"
         });

         setTimeout(function() {
            $(".shape").css({
               "width": "50%",
               "height": "50%",
               "transform": "rotate(45deg)"
            })

            $(".overbox .title").fadeIn(300);
            $(".overbox .input").fadeIn(300);
            $(".overbox .button").fadeIn(300);
         }, 700)

         $(this).removeClass('material-button');

      }

      if ($(".alt-2").hasClass('material-buton')) {
         $(".alt-2").removeClass('material-buton');
         $(".alt-2").addClass('material-button');
      }

   });

});
