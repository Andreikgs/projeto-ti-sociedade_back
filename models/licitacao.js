const db = require('../config/bd');

class LicitacaoModel {
    static async inserir(num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao) {
        return await db.query('CALL sp_inserir_licitacao(?, ?, ?, ?)', [num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao]);
    }

    static async atualizar(num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao) {
        return await db.query('CALL sp_atualizar_licitacao(?, ?, ?, ?)', [num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao]);
    }

    static async buscar(num_licitacao) {
        const results = await db.query('CALL sp_buscar_licitacao(?)', [num_licitacao]);
        return results.length > 0 ? results[0] : null;
    }

    static async deletar(num_licitacao) {
        return await db.query('CALL sp_deletar_licitacao(?)', [num_licitacao]);
    }

    static async listar() {
        return await db.query('SELECT * FROM vw_licitacoes');
    }
}

module.exports = LicitacaoModel;
