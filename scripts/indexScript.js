
$( document ).ready(function() {
  const curren= document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img')
  const opacity = 0.6;

  //force load to top
  $(this).scrollTop(0);

  //thumbnail functionality
  imgs.forEach(img => img.addEventListener('mouseover', imgClick));

  function imgClick(e) {
    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));
  
    // Change current image to src of mouse over event image
    current.src = e.target.src;
  
    // Add fade in class
    current.classList.add("fade-in");
  
    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove("fade-in"), 1000);
  
    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
  }

  /* make card flip on click*/
  $('.flip-container').click(function() {
    $(this).toggleClass('flipped');
  });

  //check for menu click and toggle open and close icons accordingly
  $( "#menu" ).click(function() {
    //alert( "Handler for .click() called." );
    if($("label").find($(".fa")).hasClass('fa fa-bars')){
      //console.log('found icon');
      $("label").find($(".fa")).removeClass('fa fa-bars').addClass('fa fa-times-circle-o');
    } else {
      $("label").find($(".fa")).removeClass('fa fa-times-circle-o').addClass('fa fa-bars');
    }

  });
 
 function changeText() {
  let text = document.getElementById('text');
  
  setTimeout( function(){
    text.innerHTML = 'Every once in awhile, a new technology, an old problem, and a big idea turn into innovation.';
  }, 5000);
  setTimeout( function(){
    text.innerHTML = "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.";
  }, 10000);
  setTimeout( function(){
    text.innerHTML = "If I can't explain it to a 6-year old, I don't understand it myself.";
  }, 15000);
  setTimeout( function(){
    text.innerHTML = "My job is to connect to people, to interact with them in a way that leaves them more interested.";
  }, 20000);
  setTimeout( function(){
    text.innerHTML = "People are what they repeatedly do. Excellence, therefore, is not an act, but a habit.";
  }, 25000);
  setTimeout( function(){
    text.innerHTML = "A satisfied customer is the best business strategy of all.";
  }, 30000);
  setTimeout( function(){
    text.innerHTML = "He who knows best knows how little he knows";
  }, 35000);
}
//call animation
changeText();
//Animate every ... seconds
setInterval(changeText, 36000);

 //add bigIcons animation classes on mouseover
 $(".bigIcon").on('mouseover', function () {
  $("a.fa-github.bigIcon").addClass('animated swing infinite');
  $("a.fa-linkedin.bigIcon").addClass('animated wobble infinite');
  $("a.fa-facebook.bigIcon").addClass('animated bounce infinite');
  $("a.fa-twitter.bigIcon").addClass('animated jello infinite');
});
//remove bigIcons animation classes on mouseout
$(".bigIcon").on('mouseout', function () {
  $("a.fa-github.bigIcon").removeClass('animated swing infinite');
  $("a.fa-linkedin.bigIcon").removeClass('animated wobble infinite');
  $("a.fa-facebook.bigIcon").removeClass('animated bounce infinite');
  $("a.fa-twitter.bigIcon").removeClass('animated jello infinite');
});

  $(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});