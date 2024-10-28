const TipoServico = require('../models/tipoServico');

class TipoServicoController {
    async inserir(req, res) {
        try {
            await TipoServico.inserir(req.body.descricao);
            res.status(201).send('Tipo de serviço inserido com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async atualizar(req, res) {
        try {
            await TipoServico.atualizar(req.params.id, req.body.descricao);
            res.send('Tipo de serviço atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async buscar(req, res) {
        try {
            const tipoServico = await TipoServico.buscar(req.params.id);
            res.json(tipoServico);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async deletar(req, res) {
        try {
            await TipoServico.deletar(req.params.id);
            res.send('Tipo de serviço deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async listar(req, res) {
        try {
            const tiposServico = await TipoServico.listar();
            res.json(tiposServico);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}
module.exports = TipoServicoController;
