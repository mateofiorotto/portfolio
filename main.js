document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuDesktop = document.querySelector("[data-menu]");
  const menuMobile = document.querySelector("[data-menu-mobile]");

  const langToggle = document.querySelector("[data-lang-toggle]");
  const langMenu = document.querySelector("[data-lang-menu]");

  // Toggle menú hamburguesa (mobile)
  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuMobile.classList.toggle("hidden");
    });
  }

  // Toggle dropdown de idioma
  if (langToggle && langMenu) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("hidden");
    });
  }

  // Cerrar menús al hacer click fuera
  document.addEventListener("click", () => {
    if (langMenu && !langMenu.classList.contains("hidden")) {
      langMenu.classList.add("hidden");
    }
    if (menuMobile && !menuMobile.classList.contains("hidden")) {
      menuMobile.classList.add("hidden");
    }
  });
});
