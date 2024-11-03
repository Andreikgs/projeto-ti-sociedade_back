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
    const errorMessageDiv = document.getElementById("error-message");
    const successMessageDiv = document.getElementById("success-message");
    const modal = document.getElementById("modal");
    const prosseguirButton = document.getElementById("prosseguir");
    const cancelarButton = document.getElementById("cancelar");
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

        clientForm.addEventListener("input", () => {
            const isValid = clientForm.checkValidity();
            prosseguirButton.disabled = !isValid;
        });

       
        prosseguirButton.addEventListener("click", () => {
            if (clientForm.checkValidity()) {
                contactFormContainer.style.display = "block"; 
                clientForm.style.display = "none"; 
            }
        });

       
        cancelarButton.addEventListener("click", () => {
            modal.style.display = "none"; 
        });

      
        clientForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            hideMessages();

            const formData = new FormData(clientForm);
            const data = Object.fromEntries(formData);
            console.log('Dados do formulário:', data);

            try {
                const response = await fetch('/clientes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    showError(`Erro: ${errorData.message || 'Erro desconhecido'}`);
                } else {
                    const result = await response.json();
                    console.log("Cliente cadastrado!");
                    showSuccess(`Cliente cadastrado com sucesso! ID: ${result.id}`);

                    clientForm.reset(); 

                    setTimeout(() => {
                        modal.style.display = "none"; 
                    }, 2000);
                }
            } catch (error) {
                console.error(error);
                showError(`Erro: ${error.message || 'Erro desconhecido'}`);
            }
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

