document.addEventListener("DOMContentLoaded", async function () {
    const modalConfig = document.getElementById("modalConfig");
    const closeButton = document.getElementsByClassName("close")[0];

    await loadModalConfigContent();

    if (!modalConfig || !closeButton) return;

    
    closeButton.onclick = () => {
        modalConfig.style.display = "none";
    };

    
    window.onclick = function (event) {
        if (event.target === modal) {
            modalConfig.style.display = "none";
        }
    };
});

async function loadModalConfigContent() {
    try {
        const response = await fetch('components/modal/html/modalConfig.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o conteúdo da modal');
        }
        const modalHTML = await response.text();
        document.getElementById('modalConfig').innerHTML = modalHTML;

        addModalConfigEventListeners();
    } catch (error) {
        console.error(error);
        showError('Não foi possível carregar o conteúdo da modal.');
    }
}

function addModalConfigEventListeners() {
    const modalConfig = document.getElementById("modalConfig");

    const usersButton = document.getElementById("btn-users");
    const permissionsButton = document.getElementById("btn-permissions");
    const perfilButton = document.getElementById("btn-perfil");
    const securityButton = document.getElementById("btn-security");
    const preferencesButton = document.getElementById("btn-preferences");

    const usersContainer = document.getElementById("users-container");
    const permissionsContainer = document.getElementById("permissions-container");
    const perfilContainer = document.getElementById("perfil-container");
    const preferencesContainer = document.getElementById("preferences-container");
    const securityContainer = document.getElementById("security-container");
    
    const close = document.getElementById('close-config');

    function hideAllContainers() {
        usersContainer.style.display = 'none';
        permissionsContainer.style.display = 'none';
        perfilContainer.style.display = 'none';
        preferencesContainer.style.display = 'none';
        securityContainer.style.display = 'none';

    }

    if (usersButton) {
        usersButton.addEventListener("click", () => {
            hideAllContainers();  
            usersContainer.style.display = 'block';  
        });
    }

    if (perfilButton) {
        perfilButton.addEventListener("click", () => {
            hideAllContainers();  
            perfilContainer.style.display = 'block';  
        });
    }

    if (securityButton) {
        securityButton.addEventListener("click", () => {
            hideAllContainers();  
            securityContainer.style.display = 'block';  
        });
    }
    
    if (preferencesButton) {
        preferencesButton.addEventListener("click", () => {
            hideAllContainers();  
            preferencesContainer.style.display = 'block';  
        });
    }
    
    if (permissionsButton) {
        permissionsButton.addEventListener("click", () => {
            hideAllContainers(); 
            permissionsContainer.style.display = 'block'; 
        });
    }

    close.addEventListener("click", () => {
        modalConfig.style.display= 'none';
    });
}
