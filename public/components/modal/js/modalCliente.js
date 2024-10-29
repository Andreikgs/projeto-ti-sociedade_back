document.addEventListener("DOMContentLoaded", async function () {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];

  
    await loadModalContent();

    if (!modal || !span) return;

    span.onclick = () => {
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
        const response = await fetch('components/modal/html/modal.html');
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
    const cadastrarClientesButton = document.getElementById("clientForm");
    if (cadastrarClientesButton) {
        cadastrarClientesButton.addEventListener("submit", (event) => {
            event.preventDefault(); 
           
            console.log("Cliente cadastrado!");
            const modal = document.getElementById("modal");
            modal.style.display = "none";
        });
    }
}
