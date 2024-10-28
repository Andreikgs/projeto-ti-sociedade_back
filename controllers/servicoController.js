const Servico = require('../models/servico');

class ServicoController {
    async inserir(req, res) {
        try {
            const { id_cliente, id_tipo_servico, descricao } = req.body;
            await Servico.inserir(id_cliente, id_tipo_servico, descricao);
            res.status(201).send('Serviço inserido com sucesso');
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async atualizar(req, res) {
        try {
            const { id_cliente, id_tipo_servico, descricao } = req.body;
            await Servico.atualizar(req.params.id, id_cliente, id_tipo_servico, descricao);
            res.send('Serviço atualizado com sucesso');
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async buscar(req, res) {
        try {
            const servico = await Servico.buscar(req.params.id);
            if (servico) {
                res.json(servico);
            } else {
                res.status(404).send('Serviço não encontrado');
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async deletar(req, res) {
        try {
            await Servico.deletar(req.params.id);
            res.send('Serviço deletado com sucesso');
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }

    async listar(req, res) {
        try {
            const servicos = await Servico.listar();
            res.json(servicos);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }
}

module.exports = ServicoController;
