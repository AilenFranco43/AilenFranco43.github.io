window.addEventListener("scroll", function () {
  var menu = document.querySelector(".container__nav");
  menu.classList.toggle("abajo", window.scrollY > 0);
});



$(document).ready(function () {
  if (window.matchMedia("(max-width: 900px)").matches) {
    
    
    
    //mostrar y ocultar menu
    var navMenu = $(".container__nav");
    var btnMenu = $("#btn-menu");

    btnMenu.click(() => {
      if (btnMenu.prop("checked")) {
        navMenu.css("display", "block");
      } else {
        navMenu.css("display", "none");
      }
    });




    //mostrar y ocultar submenu

    var menuDesplegableJoyas = $(".joyas");
    var menuDesplegableRopa = $(".ropa");
    var submenuJoyas = $(".submenu__joyas").children("li");
    var submenuRopa = $(".submenu__ropa").children("li");

    var oculto = true;
    menuDesplegableJoyas.click(() => {
      if (oculto) {
        submenuJoyas.css("display", "block");
      } else {
        submenuJoyas.css("display", "none");
      }
      oculto = !oculto;
      console.log(oculto);
    });

    menuDesplegableRopa.click(() => {
      if (oculto) {
        submenuRopa.css("display", "block");
      } else {
        submenuRopa.css("display", "none");
      }

      oculto = !oculto;
      console.log(oculto);
    });
  }
});
