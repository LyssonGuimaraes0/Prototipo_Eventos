
//configuração de menu mobile
const menuabrir = document.getElementById("menu-abrir-button");

menuabrir.addEventListener("click", function () {
    document.body.classList.toggle("mobile-menu-show");
});

const menufechar = document.getElementById("menu-fechar-button");
menufechar.addEventListener("click", function () {
    document.body.classList.toggle("mobile-menu-show");
});
