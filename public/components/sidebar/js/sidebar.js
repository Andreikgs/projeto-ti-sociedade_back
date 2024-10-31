document.addEventListener("DOMContentLoaded", async function () {
    await loadSidebar();
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


