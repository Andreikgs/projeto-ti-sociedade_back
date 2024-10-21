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
}

module.exports = UserModel;
