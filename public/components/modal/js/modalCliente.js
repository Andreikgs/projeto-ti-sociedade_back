document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementsByClassName("close")[0];

    await loadModalContent();

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

async function loadModalContent() {
    try {
        const response = await fetch('components/modal/html/modalCliente.html');
        if (!response.ok) {
            throw new Error('Erro ao carregar o conteúdo da modal');
        }
        const modalHTML = await response.text();
        document.getElementById('modal').innerHTML = modalHTML;

        addModalEventListeners();
    } catch (error) {
        console.error(error);
        showError('Não foi possível carregar o conteúdo da modal.');
    }
}

function addModalEventListeners() {
    const clientForm = document.getElementById("clientForm");
    const contactForm = document.getElementById("contactForm");
    const titleCliente = document.getElementById('title-cliente');
    const titleContato = document.getElementById('title-contato');
    const errorMessageDiv = document.getElementById("error-message");
    const successMessageDiv = document.getElementById("success-message");
    const modal = document.getElementById("modal");
    const close = document.getElementById('close-cliente');
    const prosseguirButton = document.getElementById("prosseguir");
    const cancelarButton = document.getElementById("cancelar");
    const avancarButton = document.getElementById("avancar");
    const contactFormContainer = document.getElementById("contactFormContainer");

    if (clientForm) {
        
        // Máscara de cnpj no campo do cnpj do cliente
        document.getElementById('cnpj').addEventListener('input', function(e) {
            let input = e.target;
            let value = input.value.replace(/\D/g, '');
            if (value.length > 14) {
                value = value.substring(0, 14); 
            }
            if (value.length > 2) {
                value = value.replace(/(\d{2})(\d)/, '$1.$2');
            }
            if (value.length > 6) {
                value = value.replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            }
            if (value.length > 10) {
                value = value.replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4'); 
            }
            if (value.length > 15) {
                value = value.replace(/(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5'); 
            }
        
            input.value = value;
        });

        // Máscara de cpf no campo do cpf do contato
        document.getElementById('cpf').addEventListener('input', function(e) {
            let input = e.target;
            let value = input.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
        
            if (value.length > 11) {
                value = value.substring(0, 11); // Limita o valor a 11 dígitos
            }
        
            if (value.length > 0) {
                value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
            }
        
            if (value.length > 7) {
                value = value.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona o segundo ponto
            }
        
            if (value.length > 10) {
                value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4'); // Adiciona o traço
            }
        
            input.value = value;
        });

        avancarButton.addEventListener("click", () => {
            clientForm.style.display = 'none';
            titleCliente.style.display = 'none';
            titleContato.style.display = 'block';
            contactForm.style.display = 'block';
        });

        
        cancelarButton.addEventListener("click", () => {
            modal.style.display= 'none';
        });

        close.addEventListener("click", () => {
            modal.style.display= 'none';
        });
    }
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

