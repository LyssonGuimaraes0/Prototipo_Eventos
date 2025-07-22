document.getElementById("navbar").addEventListener("click", function (e) {
    const menuabrir = document.getElementById("menu-abrir-button");
    const menufechar = document.getElementById("menu-fechar-button");
    const navmenu = document.getElementById("nav-menu");
    const navbar = document.getElementById("navbar");
    const navout = document.getElementById("navout");
    if (!document.body.classList.contains("mobile-menu-show")) {
        if (e.target.id == menuabrir.id) {
            document.body.classList.add("mobile-menu-show");
        }
    } else {

        if (e.target.id == menufechar.id) {
            document.body.classList.remove("mobile-menu-show");
        }
        if ((e.target.id == navout.id)
            || e.target.classList.contains("nav-link")) {
            document.body.classList.remove("mobile-menu-show");
        }
    }
});

//Clipes para os botões da tabela
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            tabs.forEach((t) => t.classList.remove("active"));
            panes.forEach((pane) => pane.classList.remove("active"));

            this.classList.add("active");
            const targetPane = document.querySelector(`#${this.dataset.tab}`);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            const targetCollapseId = this.getAttribute('href');
            const targetCollapse = document.querySelector(targetCollapseId);

            if (targetCollapse) {
                // Alterna a classe 'show'
                targetCollapse.classList.toggle('show');

                // Altera o texto do botão
                if (targetCollapse.classList.contains('show')) {
                    this.textContent = 'Recolher biografia';
                } else {
                    this.textContent = 'Expandir biografia';
                }
            }
        });
    });
});

//Função para Deixa a imagem da area de gallery em fullscreen!

/* document.addEventListener("DOMContentLoaded", function () {

const thumbnails = document.querySelectorAll(".thumbnails img");

const fullImage = document.querySelector(".full-image img");

 const closeButton = document.querySelector(".full-image");



let currentIndex = 0;



function showImage(index) {
if (index >= 0 && index < thumbnails.length) {

 fullImage.src = thumbnails[index].src.replace("-thumb", "");

 fullImage.alt = thumbnails[index].alt;

 currentIndex = index;

 }

 }



thumbnails.forEach((thumbnail, index) => {

 thumbnail.addEventListener("click", () => {
 showImage(index);

 fullImage.parentElement.style.display = "flex";

});

 });



closeButton.addEventListener("click", (event) => {

if (event.target === closeButton) {

 fullImage.parentElement.style.display = "none";

 }

 });



 document.addEventListener("keydown", (event) => {

 if (fullImage.parentElement.style.display === "flex") {

 if (event.key === "ArrowLeft") {

 showImage(currentIndex - 1);

 } else if (event.key === "ArrowRight") {

showImage(currentIndex + 1);

 } else if (event.key === "Escape") {

fullImage.parentElement.style.display = "none";

 }

 }
 });
 }); */

document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
            if (lightbox) {
                const lightboxImg = document.getElementById('lightbox-img');
                const closeBtn = document.querySelector('.lightbox-close');
                const prevBtn = document.querySelector('.lightbox-prev');
                const nextBtn = document.querySelector('.lightbox-next');

                let currentIndex;
                let imagesInCurrentTab = [];

                // Função para abrir o lightbox
                const openLightbox = (event) => {
                    const clickedImg = event.target.closest('img');
                    if (!clickedImg) return; // Se o clique não foi em uma imagem, sai

                    const activeGallery = document.querySelector('.tab-pane.active .image-gallery');
                    imagesInCurrentTab = Array.from(activeGallery.querySelectorAll('img'));
                    currentIndex = imagesInCurrentTab.findIndex(img => img === clickedImg);

                    if (currentIndex > -1) {
                        lightbox.style.display = 'flex';
                        document.body.style.overflow = 'hidden'; // Impede o scroll da página ao fundo
                        showImage(currentIndex);
                    }
                };

                // Função para exibir a imagem correta e controlar as setas
                const showImage = (index) => {
                    if (index < 0 || index >= imagesInCurrentTab.length) {
                        return; // Índice inválido
                    }
                    lightboxImg.src = imagesInCurrentTab[index].src;
                    lightboxImg.alt = imagesInCurrentTab[index].alt;
                    currentIndex = index;

                    // Esconde ou mostra as setas de navegação
                    prevBtn.style.display = (index === 0) ? 'none' : 'block';
                    nextBtn.style.display = (index === imagesInCurrentTab.length - 1) ? 'none' : 'block';
                };

                // Funções para navegar
                const showNext = () => showImage(currentIndex + 1);
                const showPrev = () => showImage(currentIndex - 1);

                // Função para fechar o lightbox
                const closeLightbox = () => {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Restaura o scroll da página
                };

                // Adiciona o evento de clique nas galerias
                document.querySelectorAll('.image-gallery').forEach(gallery => {
                    gallery.addEventListener('click', openLightbox);
                });

                // Eventos dos botões do lightbox
                closeBtn.addEventListener('click', closeLightbox);
                prevBtn.addEventListener('click', showPrev);
                nextBtn.addEventListener('click', showNext);

                // Fecha ao clicar fora da imagem
                lightbox.addEventListener('click', (event) => {
                    if (event.target === lightbox) {
                        closeLightbox();
                    }
                });

                // Eventos do teclado
                document.addEventListener('keydown', (event) => {
                    if (lightbox.style.display === 'flex') {
                        if (event.key === 'ArrowRight') showNext();
                        else if (event.key === 'ArrowLeft') showPrev();
                        else if (event.key === 'Escape') closeLightbox();
                    }
                });
            }
        });