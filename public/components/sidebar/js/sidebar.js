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

document.querySelectorAll('.nav-links > li > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o link redirecione
        event.stopPropagation(); // Previne o fechamento imediato

        // Fecha qualquer submenu aberto, exceto o do item atual
        document.querySelectorAll('.sub-links').forEach(sub => {
            if (sub !== item.nextElementSibling) {
                sub.style.display = 'none';
            }
        });

        // Alterna a exibição do submenu do item atual
        const subLinks = item.nextElementSibling;
        if (subLinks && subLinks.classList.contains('sub-links')) {
            subLinks.style.display = subLinks.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Fechar os submenus ao clicar fora do menu
document.addEventListener('click', function() {
    document.querySelectorAll('.sub-links').forEach(sub => sub.style.display = 'none');
});


