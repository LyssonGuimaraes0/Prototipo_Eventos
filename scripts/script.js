document.addEventListener("DOMContentLoaded", function () {
    const menuabrir = document.getElementById("menu-abrir-button");
    const menufechar = document.getElementById("menu-fechar-button");
    const menubotaofechar = document.getElementsByClassName("nav-link");
    if (menuabrir) {
        menuabrir.addEventListener("click", function () {
            document.body.classList.toggle("mobile-menu-show");
        });
    }

    if (menufechar) {
        menufechar.addEventListener("click", function () {
            document.body.classList.toggle("mobile-menu-show");
        });
    }

    /*Pecorre um array de elementos e adiciona o evento de clique a cada um deles para fechar o menu
     quando clicado*/

    if (menubotaofechar) {
        for (let i = 0; i < menubotaofechar.length; i++) {
            menubotaofechar[i].addEventListener("click", function () {
                document.body.classList.toggle("mobile-menu-show");
            });
        }
      
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

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

    // Adiciona evento de rolagem
    window.addEventListener("scroll", onScroll);

    // Adiciona evento de clique nos links da navbar
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
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




    document.addEventListener("DOMContentLoaded", function() {
      // Seleciona todos os botões de expansão
      const buttons = document.querySelectorAll('.toggle-btn');
      
      buttons.forEach(button => {
          button.addEventListener('click', function(e) {
              e.preventDefault();
              
              // 1. Isola o card específico que foi clicado
              const card = this.closest('.palestrantes-item, .moderador-item');
              
              // 2. Encontra a biografia dentro deste card específico
              const bio = card.querySelector('.collapse');
              
              // 3. Fecha TODAS as outras biografias
              document.querySelectorAll('.collapse').forEach(otherBio => {
                  if (otherBio !== bio) {
                      otherBio.classList.remove('show');
                      
                      // 4. Atualiza TODOS os outros botões
                      const otherButton = otherBio.closest('.palestrantes-item, .moderador-item')
                                                  .querySelector('.toggle-btn');
                      otherButton.textContent = 'Expandir biografia';
                      otherButton.setAttribute('aria-expanded', 'false');
                  }
              });
              
              // 5. Alterna APENAS a biografia clicada
              bio.classList.toggle('show');
              
              // 6. Atualiza APENAS o botão clicado
              const isExpanded = bio.classList.contains('show');
              this.textContent = isExpanded ? 'Ler menos' : 'Expandir biografia';
              this.setAttribute('aria-expanded', isExpanded);
          });
      });
  });