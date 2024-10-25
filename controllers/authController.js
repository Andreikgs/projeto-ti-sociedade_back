const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel');

class AuthController {
    static async login(req, res) {
        const { login_usu, senha_usu } = req.body;

        try {
            const user = await UserModel.findByLogin(login_usu);
            console.log('Usuário encontrado:', user);
            if (!user) return res.status(401).send('Usuário não encontrado');

            console.log('Senha fornecida:', senha_usu);
            console.log('Hash armazenado:', user.senha);
            
            if (!user.senha) {
                console.error('Senha não encontrada para o usuário:', user);
                return res.status(500).send('Erro: senha não encontrada para o usuário');
            }

            const isMatch = await bcrypt.compare(senha_usu, user.senha);
            if (!isMatch) return res.status(401).send('Senha incorreta');

            const token = jwt.sign({ id: user.usuario_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true }); 
            res.status(200).send('Login realizado com sucesso'); 
        } catch (err) {
            console.error('Erro no login:', err);
            res.status(500).send('Erro no servidor');
        }
    }

    static logout(req, res) {
        res.clearCookie('token');
        res.send('Logout realizado com sucesso');
    }
}

module.exports = AuthController;
