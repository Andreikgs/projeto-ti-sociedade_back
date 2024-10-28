const db = require('../config/bd');

class HistoricoLicitacaoModel {
    static async inserir(num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto) {
        return await db.query('CALL sp_inserir_historico_licitacao(?, ?, ?, ?, ?, ?, ?)', [num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto]);
    }

    static async atualizar(id_historico_licitacao, num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto) {
        return await db.query('CALL sp_atualizar_historico_licitacao(?, ?, ?, ?, ?, ?, ?, ?)', [id_historico_licitacao, num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto]);
    }

    static async buscar(id_historico_licitacao) {
        const results = await db.query('CALL sp_buscar_historico_licitacao(?)', [id_historico_licitacao]);
        return results.length > 0 ? results[0] : null;
    }

    static async deletar(id_historico_licitacao) {
        return await db.query('CALL sp_deletar_historico_licitacao(?)', [id_historico_licitacao]);
    }

    static async listar() {
        return await db.query('SELECT * FROM vw_historico_licitacao');
    }
}

module.exports = HistoricoLicitacaoModel;
