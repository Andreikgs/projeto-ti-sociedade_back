document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const login_usu = document.getElementById('login_usu').value;
    const senha_usu = document.getElementById('senha_usu').value;
    const errorMessageDiv = document.getElementById('errorMessage');

    const response = await fetch('/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: login_usu, senha: senha_usu })
    });

    if (response.ok) {
        window.location.href = '/dashboard'; 
    } else {
        const errorText = await response.text();
        errorMessageDiv.textContent = errorText; 
        errorMessageDiv.style.display = 'block'; 

        setTimeout(() => {
            errorMessageDiv.style.display = 'none';
        }, 3000);
    }
});
