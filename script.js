document.addEventListener("DOMContentLoaded", function () {

  const boutonMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-mobile");

  if (!boutonMenu || !menu) {
    return;
  }

  boutonMenu.addEventListener("click", function () {

    const ouvert = menu.classList.toggle("ouvert");

    boutonMenu.classList.toggle("ouvert", ouvert);

    boutonMenu.setAttribute(
      "aria-expanded",
      ouvert ? "true" : "false"
    );

  });


  const liens = menu.querySelectorAll("a");

  liens.forEach(function (lien) {

    lien.addEventListener("click", function () {

      menu.classList.remove("ouvert");
      boutonMenu.classList.remove("ouvert");

      boutonMenu.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

});
