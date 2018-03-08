
$( document ).ready(function() {
  const curren= document.querySelector('#current');
  const imgs = document.querySelectorAll('.imgs img')
  const opacity = 0.6;
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