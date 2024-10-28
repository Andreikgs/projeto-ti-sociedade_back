const db = require('../config/bd');

class UserModel {
    static async findByLogin(username) {
        try {
            const results = await db.query('SELECT * FROM login_usuarios WHERE username = ?', [username]);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    }

    static async inserir(usuario, username, senha) {
        try {
            const result = await db.query('CALL sp_inserir_login_usuario(?, ?, ?)', [usuario, username, senha]);
            return result;
        } catch (error) {
            console.error('Erro ao inserir usuário:', error);
            throw error;
        }
    }

    static async atualizar(idLogin, username, senha) {
        try {
            const result = await db.query('CALL sp_atualizar_login_usuario(?, ?, ?)', [idLogin, username, senha]);
            return result;
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            throw error;
        }
    }

    static async buscar(idLogin) {
        try {
            const results = await db.query('CALL sp_buscar_login_usuario(?)', [idLogin]);
            return results.length > 0 ? results[0] : null;
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            throw error;
        }
    }

    static async deletar(idLogin) {
        try {
            const result = await db.query('CALL sp_deletar_login_usuario(?)', [idLogin]);
            return result;
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            throw error;
        }
    }

    static async listar() {
        try {
            const results = await db.query('SELECT * FROM vw_login_usuarios');
            return results;
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            throw error;
        }
    }

}

module.exports = UserModel;