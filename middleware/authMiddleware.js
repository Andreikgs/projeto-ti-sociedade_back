const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return redirectToLogin(res, 'Acesso não autorizado');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return redirectToLogin(res, 'Token inválido');
        }
        req.user = user; 
        next(); 
    });
};

const redirectToLogin = (res, message) => {
    res.status(401).send(`
        <html>
            <body>
                <p>${message}</p>
                <p>Redirecionando para a página de login...</p>
                <script>
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 3000);
                </script>
            </body>
        </html>
    `);
};

module.exports = authenticateToken;
