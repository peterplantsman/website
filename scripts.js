// PAGE ANIMATIONS

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// FADE IN PAGE

$(document).ready(function(){
  $('#wrapper').fadeIn(1200);
});

// CONTROLLING THE DROPDOWN MENU.

var mobile = $('#mobile-menu');

function myFunction(x) {
  x.classList.toggle("change");
  mobile.toggleClass("showme");
}


// BLOG PAGES SCRIPTS

var blog1 = $('#blog1');
var blog2 = $('#blog2');
var blog3 = $('#blog3');
var blog4 = $('#blog4');
var blog5 = $('#blog5');

var content1 = $('#content1')
var content2 = $('#content2')
var content3 = $('#content3')
var content4 = $('#content4')
var content5 = $('#content5')



// add hover instructions for divs.

// todo: change blog width on click

blog1.click(function(){
  if (content1.css("display") == "none") {
    blog1.css("margin-bottom", "0");
    blog1.animate({
      height: "10rem",
      width: "100%",
        }, 500);
  content1.slideDown(1000);
  } 
  else {
    if($(window).width() < 768) {
    blog1.animate({
      height: "10rem",
      width: "100%",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog1.animate({
        height: "20rem",
        width: "60%",
      }, 500);
    }
    content1.slideUp(1000);
    blog1.css("margin-bottom", "1rem");

  }
});

blog2.click(function(){
  if (content2.css("display") == "none") {
    blog2.css("margin-bottom", "0");
    blog2.animate({
      height: "10rem",
      width: "60%",
        }, 500);
        blog1.animate({
          height: "10rem",
          width: "30%",
        })
  content2.slideDown(1000);
  } 
  else {
    if($(window).width() < 768) {
    blog2.animate({
      height: "10rem",
      width: "100%",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog2.animate({
        height: "20rem",
        width: "30%",
      }, 500);
      blog1.animate({
        height: "20rem",
        width: "60%"
      })
    }
    content2.slideUp(1000);
  }
});