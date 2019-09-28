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



// Toggle classes on click. 
// Add class for button clicked, and then make all other blog buttons appear disabled.

// Display instructions for blog grid.
// Sorry it's in spaghetti. 

blog1.click(function(){
  // CHECKS FOR OTHER CONTENT; CLOSES IT IF IT'S OPEN.
  if (content2.css("display") == "block" || content3.css("display") == "block" || content4.css("display") == "block" || content5.css("display") == "block") {
      content2.slideUp(500);
      content3.slideUp(500);
      content4.slideUp(500);
      content5.slideUp(500);
  }
  if (content1.css("display") == "none") {
    blog1.animate({
      height: "10rem",
      width: "60%",
        }, 500);
        blog2.animate({
          height: "10rem",
          width: "30%",
        })
  content1.slideDown(700);
  } 
  else {
    if($(window).width() < 768) {
    blog1.animate({
      height: "10rem",
      width: "90%",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog1.animate({
        height: "20rem",
        width: "60%",
      }, 500);
      blog2.animate({
        height: "20rem",
        width: "30%"
      })
    }
    content1.slideUp(1000);
    blog1.css("margin-bottom", "1rem");

  }
});


// SECOND BOX
blog2.click(function(){
  if (content1.css("display") == "block" || content3.css("display") == "block" || content4.css("display") == "block" || content5.css("display") == "block") {
    content1.slideUp(500);
    content3.slideUp(500);
    content4.slideUp(500);
    content5.slideUp(500);
}
  if (content2.css("display") == "none") {
    blog2.animate({
      height: "10rem",
      width: "60%",
        }, 500);
        blog1.animate({
          height: "10rem",
          width: "30%",
        })
  content2.slideDown(700);
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
    content2.slideUp(700);
  }
});

// THIRD BLOG BOX
blog3.click(function(){
  if (content1.css("display") == "block" || content2.css("display") == "block" || content4.css("display") == "block" || content5.css("display") == "block") {
    content1.slideUp(500);
    content2.slideUp(500);
    content4.slideUp(500);
    content5.slideUp(500);
}
  if (content3.css("display") == "none") {
    blog3.animate({
      height: "10rem",
      width: "60%",
        }, 500);
        blog4.animate({
          height: "10rem",
          width: "30%",
        })
  content3.slideDown(700);
  } 
  else {
    if($(window).width() < 768) {
    blog3.animate({
      height: "10rem",
      width: "100%",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog3.animate({
        height: "20rem",
        width: "30%",
      }, 500);
      blog4.animate({
        height: "20rem",
        width: "60%"
      })
    }
    content3.slideUp(700);
  }
});

// Fourth BOX
blog4.click(function(){
  if (content1.css("display") == "block" || content2.css("display") == "block" || content3.css("display") == "block" || content5.css("display") == "block") {
    content1.slideUp(500);
    content2.slideUp(500);
    content3.slideUp(500);
    content5.slideUp(500);
}
  if (content4.css("display") == "none") {
    blog4.animate({
      height: "10rem",
      width: "60%",
        }, 500);
        blog3.animate({
          height: "10rem",
          width: "30%",
        })
  content4.slideDown(700);
  } 
  else {
    if($(window).width() < 768) {
    blog4.animate({
      height: "10rem",
      width: "100%",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog4.animate({
        height: "20rem",
        width: "60%",
      }, 500);
      blog3.animate({
        height: "20rem",
        width: "30%"
      })
    }
    content4.slideUp(700);
  }
});

// FIFTH BOX
blog5.click(function(){
  if (content1.css("display") == "block" || content2.css("display") == "block" || content3.css("display") == "block" || content4.css("display") == "block") {
    content1.slideUp(500);
    content2.slideUp(500);
    content3.slideUp(500);
    content4.slideUp(500);
}
  if (content5.css("display") == "none") {
    blog5.animate({
      height: "10rem",
    })
  content5.slideDown(700);
  } 
  else {
    if($(window).width() < 768) {
    blog5.animate({
      height: "10rem",
    }, 500);
    } else if(
      $(window).width() > 768
    ) {
      blog5.animate({
        height: "20rem",
      }, 500);
    }
    content5.slideUp(700);
  }
});