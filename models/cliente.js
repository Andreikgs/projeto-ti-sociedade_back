const db = require('../config/bd');

class Cliente {
    async inserir(cnpj, razaoSocial, nomeFantasia, status, dataCadastro) {
        try {
            const result = await db.query('CALL sp_inserir_cliente(?, ?, ?, ?, ?)', [cnpj, razaoSocial, nomeFantasia, status, dataCadastro]);

            if (!Array.isArray(result) || result.length === 0) {
                throw new Error('Resultado inesperado ao inserir cliente.');
            }

            return result[0]; // Retorna o primeiro elemento do array
        } catch (error) {
            console.error('Erro ao inserir cliente na camada de model:', error);
            throw new Error(error.message || 'Erro ao inserir cliente no banco de dados');
        }
    }

    async buscarPorCnpj(cnpj) {
        try {
            const rows = await db.query('CALL sp_buscar_cliente_por_cnpj(?)', [cnpj]);
            return rows.length > 0 ? rows : null; // Retorna null se não houver clientes
        } catch (error) {
            console.error('Erro ao buscar cliente pelo CNPJ:', error);
            throw new Error('Erro ao buscar cliente pelo CNPJ no banco de dados');
        }
    }

    // Outras funções permanecem inalteradas...
    async atualizar(idCliente, cnpj, razaoSocial, nomeFantasia, status, dataCadastro) {
        try {
            const result = await db.query('CALL sp_atualizar_cliente(?, ?, ?, ?, ?, ?)', [idCliente, cnpj, razaoSocial, nomeFantasia, status, dataCadastro]);
            return result;
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw new Error('Erro ao atualizar cliente no banco de dados');
        }
    }

    async buscar(idCliente) {
        try {
            const rows = await db.query('CALL sp_buscar_cliente(?)', [idCliente]);
            return rows[0];
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            throw new Error('Erro ao buscar cliente no banco de dados');
        }
    }

    async deletar(idCliente) {
        try {
            const result = await db.query('CALL sp_deletar_cliente(?)', [idCliente]);
            return result;
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            throw new Error('Erro ao deletar cliente no banco de dados');
        }
    }

    async listar() {
        try {
            const rows = await db.query('CALL sp_listar_clientes()'); 
            return rows;
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            throw new Error('Erro ao listar clientes no banco de dados');
        }
    }
}

module.exports = new Cliente();
