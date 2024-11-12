document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.getElementById("modalLicitacao");
    const closeButton = document.getElementsByClassName("close")[0];

    await loadModaLicitacaoContent();

    if (!modal || !closeButton) return;

    
    closeButton.onclick = () => {
        modal.style.display = "none";
    };

    
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

async function loadModaLicitacaoContent() {
    try {
        const response = await fetch('components/modal/html/modalLicitacao.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o conteúdo da modal');
        }
        const modalHTML = await response.text();
        document.getElementById('modalLicitacao').innerHTML = modalHTML;

        addModalLicitacaoEventListeners();
    } catch (error) {
        console.error(error);
        showError('Não foi possível carregar o conteúdo da modal.');
    }
}

function addModalLicitacaoEventListeners() {
    const modal = document.getElementById("modalLicitacao");
    const close = document.getElementById("close-licitacao");
    const cancelarButton = document.getElementById("cancelar");

    close.addEventListener("click", () => {
        modal.style.display= 'none';
    });

    cancelarButton.addEventListener("click", () => {
        modal.style.display= 'none';
    });
}

function hideMessages() {
    document.getElementById("error-message").style.display = "none";
    document.getElementById("success-message").style.display = "none";
}

function showError(message) {
    const errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = "block";
}

function showSuccess(message) {
    const successMessageDiv = document.getElementById("success-message");
    successMessageDiv.textContent = message;
    successMessageDiv.style.display = "block";
}
