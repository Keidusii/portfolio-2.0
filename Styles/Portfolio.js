$(document).ready(function(){
    // Adds smooth scrolling navbar buttons
    $(".nav-link").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 55
        }, 1300, function(){
  
        });
      }
    });
  });