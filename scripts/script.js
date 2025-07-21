document.getElementById("navbar").addEventListener("click", function(e) {
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
  
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', function(e) {
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
    document.addEventListener("DOMContentLoaded", function () {
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
      });