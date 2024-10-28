const db = require('../config/bd');

class TipoServico {
    async inserir(descricao) {
        const [result] = await db.query('CALL sp_inserir_tipo_servico(?)', [descricao]);
        return result;
    }

    async atualizar(idTipoServico, descricao) {
        const [result] = await db.query('CALL sp_atualizar_tipo_servico(?, ?)', [idTipoServico, descricao]);
        return result;
    }

    async buscar(idTipoServico) {
        const [rows] = await db.query('CALL sp_buscar_tipo_servico(?)', [idTipoServico]);
        return rows[0];
    }

    async deletar(idTipoServico) {
        const [result] = await db.query('CALL sp_deletar_tipo_servico(?)', [idTipoServico]);
        return result;
    }

    async listar() {
        const [rows] = await db.query('SELECT * FROM tipo_servico');
        return rows;
    }
}

module.exports = TipoServico;
