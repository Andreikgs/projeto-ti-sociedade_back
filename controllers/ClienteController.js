const Cliente = require('../models/clienteModel');

class ClienteController {
    static async criarCliente(req, res) {
        try {
            const { cnpj, razaoSocial, nomeFantasia, status, dataCadastro } = req.body;
            const cliente = new Cliente(cnpj, razaoSocial, nomeFantasia, status, dataCadastro);
            const id = await Cliente.criar(cliente);
            res.status(201).json({ id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async listarClientes(req, res) {
        try {
            const clientes = await Cliente.listar();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

  
}

module.exports = ClienteController;
