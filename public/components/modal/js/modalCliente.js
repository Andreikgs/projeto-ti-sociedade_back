document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];

    await loadModalContent();

    if (!modal || !span) return;

    // Fecha a modal ao clicar no "X"
    span.onclick = () => {
        modal.style.display = "none";
    };

    // Fecha a modal ao clicar na área de fundo
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
    }
}

function addModalEventListeners() {
    const clientForm = document.getElementById("clientForm");
    const errorMessageDiv = document.getElementById("error-message");
    const successMessageDiv = document.getElementById("success-message");
    const modal = document.getElementById("modal");

    if (clientForm) {
        clientForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            errorMessageDiv.style.display = "none";
            errorMessageDiv.textContent = "";
            successMessageDiv.style.display = "none"; // Esconde a mensagem de sucesso antes do envio

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

                let result;
                if (!response.ok) {
                    const text = await response.text();
                    try {
                        result = JSON.parse(text);
                    } catch (e) {
                        result = { message: text || 'Erro desconhecido' };
                    }
                    
                    errorMessageDiv.textContent = `Erro: ${result.message || 'Erro desconhecido'}`;
                    errorMessageDiv.style.display = "block";
                } else {
                    result = await response.json();
                    console.log("Cliente cadastrado!");
                    successMessageDiv.textContent = `Cliente cadastrado com sucesso! ID: ${result.id}`;
                    successMessageDiv.style.display = "block"; // Exibe a mensagem de sucesso

                    // Limpa o formulário
                    clientForm.reset(); // Limpa todos os campos do formulário

                    // Fecha a modal após um pequeno atraso
                    setTimeout(() => {
                        modal.style.display = "none"; 
                    }, 2000); // Adiciona um atraso antes de fechar
                }
            } catch (error) {
                console.error(error);
                errorMessageDiv.textContent = `Erro: ${error.message || 'Erro desconhecido'}`;
                errorMessageDiv.style.display = "block";
            }
        });
    }
}
