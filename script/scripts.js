$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});



const toggleSubMenu = (event) => {
  event.preventDefault();
  const subMenu = event.target.nextElementSibling;
  subMenu.style.display ==="block" ? "none" : "block"; 
};


const navLinks = document.querySelectorAll("link__submenu");

navLinks.forEach((link) => {
  const subMenu = link.nextElementSibling;

  if(subMenu){
    link.addEventListener("click", toggleSubMenu);
  }
});



