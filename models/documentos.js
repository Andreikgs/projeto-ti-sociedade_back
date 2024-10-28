const db = require('../config/bd');

class DocumentoLicitacaoModel {
    static async inserir(num_licitacao, descricao, obrigatorio) {
        return await db.query('CALL sp_inserir_documento_licitacao(?, ?, ?)', [num_licitacao, descricao, obrigatorio]);
    }

    static async atualizar(id_documento, num_licitacao, descricao, obrigatorio) {
        return await db.query('CALL sp_atualizar_documento_licitacao(?, ?, ?, ?)', [id_documento, num_licitacao, descricao, obrigatorio]);
    }

    static async buscar(id_documento) {
        const results = await db.query('CALL sp_buscar_documento_licitacao(?)', [id_documento]);
        return results.length > 0 ? results[0] : null;
    }

    static async deletar(id_documento) {
        return await db.query('CALL sp_deletar_documento_licitacao(?)', [id_documento]);
    }

    static async listar() {
        return await db.query('SELECT * FROM vw_documentos_licitacao');
    }
}

module.exports = DocumentoLicitacaoModel;
