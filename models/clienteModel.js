const db = require('../config/bd');

class Cliente {
    constructor(cnpj, razaoSocial, nomeFantasia, status, dataCadastro) {
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.status = status;
        this.dataCadastro = dataCadastro;
    }

    static async criarCliente(cliente) {
        const query = 'INSERT INTO clientes (cnpj, razao_social, nome_fantasia, status, data_cadastro) VALUES (?, ?, ?, ?, ?)';
        const [result] = await db.execute(query, [cliente.cnpj, cliente.razaoSocial, cliente.nomeFantasia, cliente.status, cliente.dataCadastro]);
        return result.insertId;
    }

    static async listarClientesAtivos() {
        const query = 'SELECT * FROM vw_clientes_ativos';
        const [rows] = await db.query(query);
        return rows;
    }

}

module.exports = Cliente;