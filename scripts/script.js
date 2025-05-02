$(document).ready(function () {
//configuração de menu mobile
const menuabrir = document.getElementById("menu-abrir-button");

menuabrir.addEventListener("click", function () {
    document.body.classList.toggle("mobile-menu-show");
});

const menufechar = document.getElementById("menu-fechar-button");
menufechar.addEventListener("click", function () {
    document.body.classList.toggle("mobile-menu-show");
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".menu-link");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuIcon = document.getElementById("menu-icon");
 
    // ScrollSpy
    function onScroll() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });
 
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

});

});
