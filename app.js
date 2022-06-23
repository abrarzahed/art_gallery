const tl = gsap.timeline();
tl.from("header, h2, h3, button, p, .big, .card, .about__content", {
  duration: 1,
  y: 200,
  opacity: 0,
  stagger: {
    amount: 0.5,
  },
});
const initThemeSelector = () => {
  let isLight = false;
  const lightIcon = document.getElementById("lightIcon");
  const themeStylesheetLink = document.getElementById("themeStylesheetLink");

  const activateTheme = (theme) => {
    themeStylesheetLink.setAttribute("href", `${theme}.css`);
  };
  activateTheme(localStorage.getItem("artGalleryTheme"));

  lightIcon.addEventListener("click", () => {
    isLight = !isLight;
    if (isLight) {
      localStorage.setItem("artGalleryTheme", "light");
      activateTheme(localStorage.getItem("artGalleryTheme"));
    } else {
      localStorage.setItem("artGalleryTheme", "dark");
      activateTheme(localStorage.getItem("artGalleryTheme"));
    }
  });
};
initThemeSelector();
