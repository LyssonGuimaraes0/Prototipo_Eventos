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
            let targetCollapse = document.querySelector(this.getAttribute('href'));
          
            // Alterna o atual
            targetCollapse.classList.toggle('show');
            this.textContent = targetCollapse.classList.contains('show') 
                ? 'Recolher biografia' 
                : 'Expandir biografia';
        });
    });
});