const menuButton = document.querySelector("[data-open]");
const closeButton = document.querySelector("[data-close]");
const navList = document.querySelector(".header__nav--list");

    menuButton.addEventListener("click", function () {
        navList.classList.add("active");
        closeButton.style.display = "block";
        menuButton.style.display = "none";

    });

    closeButton.addEventListener("click", function () {
        navList.classList.remove("active");
        closeButton.style.display = "none";
        menuButton.style.display = "block";
    });