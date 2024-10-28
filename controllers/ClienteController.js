const Cliente = require('../models/cliente');

class ClienteController {
    async inserir(req, res) {
        try {
            await Cliente.inserir(req.body.cnpj, req.body.razaoSocial, req.body.nomeFantasia, req.body.status, req.body.dataCadastro);
            res.status(201).send('Cliente inserido com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async atualizar(req, res) {
        try {
            await Cliente.atualizar(req.params.id, req.body.cnpj, req.body.razaoSocial, req.body.nomeFantasia, req.body.status, req.body.dataCadastro);
            res.send('Cliente atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async buscar(req, res) {
        try {
            const cliente = await Cliente.buscar(req.params.id);
            res.json(cliente);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async deletar(req, res) {
        try {
            await Cliente.deletar(req.params.id);
            res.send('Cliente deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async listar(req, res) {
        try {
            const clientes = await Cliente.listar(); 
            res.json(clientes);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = ClienteController;
