document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("navbar-toggle");
    const navbarList = document.getElementById("navbarlist");

    if (toggleButton && navbarList) {
        toggleButton.addEventListener("click", () => {
            navbarList.classList.toggle("active");
        });
    }
});