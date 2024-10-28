const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');

class UserController {
    static async login(req, res) {
        const { username, senha } = req.body;

        try {
            const user = await UserModel.findByLogin(username);
            if (!user) return res.status(401).send('Usuário não encontrado');

            const isMatch = await bcrypt.compare(senha, user.senha);
            if (!isMatch) return res.status(401).send('Senha incorreta');

            const token = jwt.sign({ id: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
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

    static async inserir(req, res) {
        const { usuario, username, senha } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(senha, 10);
            await UserModel.inserir(usuario, username, hashedPassword);
            res.status(201).send('Usuário inserido com sucesso');
        } catch (error) {
            console.error('Erro ao inserir usuário:', error);
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        const { username, senha } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(senha, 10);
            await UserModel.atualizar(req.params.id, username, hashedPassword);
            res.send('Usuário atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) {
        try {
            const usuario = await UserModel.buscar(req.params.id);
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).send('Usuário não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await UserModel.deletar(req.params.id);
            res.send('Usuário deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) {
        try {
            const usuarios = await UserModel.listar();
            res.json(usuarios);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = UserController;
