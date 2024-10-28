const db = require('../config/bd');

class ChecklistLicitacaoModel {
    static async inserir(num_licitacao, item, status) {
        return await db.query('CALL sp_inserir_checklist_licitacao(?, ?, ?)', [num_licitacao, item, status]);
    }

    static async atualizar(id_checklist, num_licitacao, item, status) {
        return await db.query('CALL sp_atualizar_checklist_licitacao(?, ?, ?, ?)', [id_checklist, num_licitacao, item, status]);
    }

    static async buscar(id_checklist) {
        const results = await db.query('CALL sp_buscar_checklist_licitacao(?)', [id_checklist]);
        return results.length > 0 ? results[0] : null;
    }

    static async deletar(id_checklist) {
        return await db.query('CALL sp_deletar_checklist_licitacao(?)', [id_checklist]);
    }

    static async listar() {
        return await db.query('SELECT * FROM vw_checklist_licitacao');
    }
}

module.exports = ChecklistLicitacaoModel;
