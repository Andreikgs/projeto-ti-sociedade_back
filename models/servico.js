const db = require('../config/bd');

class Servico {
    async inserir(idCliente, idTipoServico, descricao) {
        const [result] = await db.query('CALL sp_inserir_servico(?, ?, ?)', [idCliente, idTipoServico, descricao]);
        return result;
    }

    async atualizar(idServico, idCliente, idTipoServico, descricao) {
        const [result] = await db.query('CALL sp_atualizar_servico(?, ?, ?, ?)', [idServico, idCliente, idTipoServico, descricao]);
        return result;
    }

    async buscar(idServico) {
        const [rows] = await db.query('CALL sp_buscar_servico(?)', [idServico]);
        return rows[0] || null;
    }

    async deletar(idServico) {
        const [result] = await db.query('CALL sp_deletar_servico(?)', [idServico]);
        return result;
    }

    async listar() {
        const [rows] = await db.query('SELECT * FROM vw_servicos');
        return rows;
    }
}

module.exports = Servico;
