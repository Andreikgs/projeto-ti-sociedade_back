document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("form-cadastrar-cliente");
    const cadastrarClientesButton = document.getElementById("cadastrar-clientes");

    if (!modal || !span || !form || !cadastrarClientesButton) return; 

 
    const openModal = () => {
        modal.style.display = "block";
    };


    const closeModal = () => {
        modal.style.display = "none";
    };

   
    cadastrarClientesButton.addEventListener("click", openModal);

 
    span.onclick = closeModal;


    window.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        const cnpj = event.target[0].value;
        const razaoSocial = event.target[1].value;
        const nomeFantasia = event.target[2].value;
        const status = event.target[3].value;
        const dataCadastro = event.target[4].value;

        try {
            const response = await fetch('/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cnpj, razaoSocial, nomeFantasia, status, dataCadastro })
            });
            if (response.ok) {
                alert('Cliente cadastrado com sucesso!');
                closeModal();
            } else {
                alert('Erro ao cadastrar cliente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar cliente.');
        }
    });
});
