const TipoServico = require('../models/tipoServico');

class TipoServicoController {
    static async inserir(req, res) { 
        try {
            await TipoServico.inserir(req.body.descricao);
            res.status(201).send('Tipo de serviço inserido com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        try {
            await TipoServico.atualizar(req.params.id, req.body.descricao);
            res.send('Tipo de serviço atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) { 
        try {
            const tipoServico = await TipoServico.buscar(req.params.id);
            res.json(tipoServico);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await TipoServico.deletar(req.params.id);
            res.send('Tipo de serviço deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) { 
        try {
            const tiposServico = await TipoServico.listar();
            res.json(tiposServico);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = TipoServicoController;
