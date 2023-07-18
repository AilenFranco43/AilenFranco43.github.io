window.addEventListener("scroll", function () {
  var menu = document.querySelector(".container__nav");
  menu.classList.toggle("abajo", window.scrollY > 0);
});



$(document).ready(function () {
  if(window.matchMedia("(max-width: 800px)").matches) {
    
    
    
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

    var menuJoyasOculto = true;
    menuDesplegableJoyas.click(() => {
      if (menuJoyasOculto) {
        submenuJoyas.css("display", "block");
        menuDesplegableJoyas.css("background", "#c8a2ff");
      } else {
        submenuJoyas.css("display", "none");
        menuDesplegableJoyas.css("background", "none");
      }
      menuJoyasOculto = !menuJoyasOculto;
      console.log(menuJoyasOculto);
    });

    var menuRopaOculto = true;
    menuDesplegableRopa.click(() => {

       
      if (menuRopaOculto) {
        submenuRopa.css("display", "block");
        menuDesplegableRopa.css("background", "#c8a2ff");
      } else {
        submenuRopa.css("display", "none");
        menuDesplegableRopa.css("background", "none");
      }

      menuRopaOculto = !menuRopaOculto;
      console.log(menuRopaOculto);
    });
  }
});
