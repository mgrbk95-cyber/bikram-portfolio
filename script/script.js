
// =================================
// 1. MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    });

});


// =================================
// 2. DARK / LIGHT THEME
// =================================

const themeToggle = document.getElementById("theme-toggle");

// Load previously selected theme

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}


// Update theme button

function updateThemeButton() {

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "Dark Mode" : "Light Mode";

    themeToggle.setAttribute("aria-pressed", isLight);

}

updateThemeButton();


// Switch theme when button is clicked

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    updateThemeButton();

});
