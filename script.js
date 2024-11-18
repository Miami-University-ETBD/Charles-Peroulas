document.addEventListener("DOMContentLoaded", () => {
    // JavaScript interaction: Alert on page load
    alert("Welcome to Miami University Dining Options!");

    // JavaScript interaction: Contact form submission
    const contactLink = document.getElementById("contact");
    contactLink.addEventListener("click", () => {
        alert("You clicked the Contact Us link!");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
          
