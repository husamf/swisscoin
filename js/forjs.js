//////////1
$(document).ready(function () {
    $(".divinside1").mouseenter(function () {
        $(".colorgold1").css({ 'color': '#fff', 'transition': '0.4s' });
        $(".btnash7n1").css({ 'color': '#fff', 'border': 'solid 1px #fff' });

    });
});

$(document).ready(function () {
    $(".divinside1").mouseleave(function () {
        $(".colorgold1").css({ 'color': '#efab2c', 'transition': '0.4s' });
        $(".btnash7n1").css({ 'color': '#efab2c', 'border': 'solid 1px #efab2c' });

    });
});

//

$(document).ready(function () {
    $(".btnash7n1").mouseenter(function () {
        $(".btnash7n1").css({ 'color': '#efab2c', 'border': 'solid 1px transparent', 'background-color': '#fff' });
    });
});

$(document).ready(function () {
    $(".btnash7n1").mouseleave(function () {
        $(".btnash7n1").css({ 'color': '#fff', 'border': 'solid 1px #fff', 'background-color': 'transparent' });
    });
});
//////////2
$(document).ready(function () {
    $(".divinside2").mouseenter(function () {
        $(".colorgold2").css({ 'color': '#fff', 'transition': '0.4s' });
        $(".btnash7n2").css({ 'color': '#fff', 'border': 'solid 1px #fff' });

    });
});

$(document).ready(function () {
    $(".divinside2").mouseleave(function () {
        $(".colorgold2").css({ 'color': '#efab2c', 'transition': '0.4s' });
        $(".btnash7n2").css({ 'color': '#efab2c', 'border': 'solid 1px #efab2c' });

    });
});

//
//RM
//document.addEventListener('contextmenu', event => event.preventDefault());

$(document).ready(function () {
    $(".btnash7n2").mouseenter(function () {
        $(".btnash7n2").css({ 'color': '#efab2c', 'border': 'solid 1px transparent', 'background-color': '#fff' });
    });
});

$(document).ready(function () {
    $(".btnash7n2").mouseleave(function () {
        $(".btnash7n2").css({ 'color': '#fff', 'border': 'solid 1px #fff', 'background-color': 'transparent' });
    });
});
//////////3
$(document).ready(function () {
    $(".divinside3").mouseenter(function () {
        $(".colorgold3").css({ 'color': '#fff', 'transition': '0.4s' });
        $(".btnash7n3").css({ 'color': '#fff', 'border': 'solid 1px #fff' });

    });
});

$(document).ready(function () {
    $(".divinside3").mouseleave(function () {
        $(".colorgold3").css({ 'color': '#efab2c', 'transition': '0.4s' });
        $(".btnash7n3").css({ 'color': '#efab2c', 'border': 'solid 1px #efab2c' });

    });
});

//

$(document).ready(function () {
    $(".btnash7n3").mouseenter(function () {
        $(".btnash7n3").css({ 'color': '#efab2c', 'border': 'solid 1px transparent', 'background-color': '#fff' });
    });
});

$(document).ready(function () {
    $(".btnash7n3").mouseleave(function () {
        $(".btnash7n3").css({ 'color': '#fff', 'border': 'solid 1px #fff', 'background-color': 'transparent' });
    });
});
///
$(document).ready(function () {
    $(".btnsubmit").mouseenter(function () {
        $(".forsendbtn").removeClass('fa-envelope-o');
        $(".forsendbtn").addClass('fa-paper-plane');
    });
});
//
$(document).ready(function () {
    $(".btnsubmit").mouseleave(function () {
        $(".forsendbtn").removeClass('fa-paper-plane');
        $(".forsendbtn").addClass('fa-envelope-o');
    });
});
///////
$(document).ready(function(){
    $('.btnB').click(function(){
        $('.icT1').toggleClass('ic1 ic11');
        $('.icT2').toggleClass('ic2 ic22');
        $('.icT3').toggleClass('ic3 ic33');
        $('.btnT1').toggleClass('btn1 btn11');
    });
});
///to top byn default fade out
$(document).ready(function(){
        $("#to-top").fadeOut(0)
});
/////////////to-top
$(function() {
  // Amount of scrolling before button is shown/hidden.
  var offset = 100;

  // Fade duration
  var duration = 500;

  // Toggle view of button when scrolling.
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('#to-top').fadeIn(duration);
    } else {
      $('#to-top').fadeOut(duration);
    }
  });

  // Scroll to top when button is clicked.
  $('#to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });
});
/////motion go to section in the page
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
  //*//
