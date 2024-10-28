const db = require('../config/bd');

class Cliente {
    async inserir(cnpj, razaoSocial, nomeFantasia, status, dataCadastro) {
        const [result] = await db.query('CALL sp_inserir_cliente(?, ?, ?, ?, ?)', [cnpj, razaoSocial, nomeFantasia, status, dataCadastro]);
        return result;
    }

    async atualizar(idCliente, cnpj, razaoSocial, nomeFantasia, status, dataCadastro) {
        const [result] = await db.query('CALL sp_atualizar_cliente(?, ?, ?, ?, ?, ?)', [idCliente, cnpj, razaoSocial, nomeFantasia, status, dataCadastro]);
        return result;
    }

    async buscar(idCliente) {
        const [rows] = await db.query('CALL sp_buscar_cliente(?)', [idCliente]);
        return rows[0];
    }

    async deletar(idCliente) {
        const [result] = await db.query('CALL sp_deletar_cliente(?)', [idCliente]);
        return result;
    }

    async listar() {
        const [rows] = await db.query('CALL sp_listar_clientes()'); 
        return rows;
    }
}

module.exports = Cliente;
