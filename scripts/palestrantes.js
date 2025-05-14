document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".expand-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const description = button.previousElementSibling;
            description.classList.toggle("expanded");

            // Alterar o texto do botão
            if (description.classList.contains("expanded")) {
                button.textContent = "Leia menos";
            } else {
                button.textContent = "Leia mais";
            }
        });
    });
});