document.addEventListener("DOMContentLoaded", async function () {
    await loadSidebar();
});

async function loadSidebar() {
    try {
        const response = await fetch('components/sidebar/html/sidebar.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar a sidebar');
        }
        
        // Adiciona o conteúdo HTML da sidebar
        const sidebarHTML = await response.text();
        document.getElementById('sidebar').innerHTML = sidebarHTML;

        // Injeta o script manualmente após o HTML ser carregado
        const script = document.createElement('script');
        script.src = 'components/sidebar/js/sidebarUI.js'; // Caminho do seu script de interação da sidebar
        document.body.appendChild(script);
        
        // Adiciona os event listeners
        addSidebarEventListeners();
    } catch (error) {
        console.error(error);
    }
}
function addSidebarEventListeners() {
    const cadastrarClientesButton = document.getElementById("adicionar-clientes");
    const listarLicitacoes = document.getElementById("listarLicitacoes");
    const dashboardGeral = document.getElementById("dashboardGeral");

    if (cadastrarClientesButton) {
        cadastrarClientesButton.addEventListener("click", () => {
            const modal = document.getElementById("modal");
            modal.style.display = "block";
        });
    }

    if (dashboardGeral) {
        dashboardGeral.addEventListener("click", () => {
            window.location.href = '/dashboard';
        });
    }

    if (listarLicitacoes) {
        listarLicitacoes.addEventListener("click", () => {
            window.location.href = '/licitacoes';
        });
    }
}
