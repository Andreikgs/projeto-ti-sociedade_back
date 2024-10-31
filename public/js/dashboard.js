import { addSidebarEventListeners } from 'components/sidebar/js/sidebar.js';

document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];

    if (!modal || !span) return;

    //Alterado método de carregamento da sidebar para carregar junto o JS
    try {
        const response = await fetch('components/sidebar/html/sidebar.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar a sidebar');
        }
        const sidebarHTML = await response.text();
        document.getElementById('sidebar').innerHTML = sidebarHTML;

        addSidebarEventListeners(); // Chama a função importada
    } catch (error) {
        console.error(error);
    }
    

    const cadastrarClientesButton = document.getElementById("cadastrar-clientes");
    if (cadastrarClientesButton) {
        cadastrarClientesButton.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    span.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

async function loadSidebar() {
    try {
        const response = await fetch('components/sidebar/html/sidebar.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar a sidebar');
        }
        const sidebarHTML = await response.text();
        document.getElementById('sidebar').innerHTML = sidebarHTML;
        addSidebarEventListeners();
    } catch (error) {
        console.error(error);
    }
}

function addSidebarEventListeners() {
    const cadastrarClientesButton = document.getElementById("adicionar-clientes");
    if (cadastrarClientesButton) {
        cadastrarClientesButton.addEventListener("click", () => {
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        });
    }
}
