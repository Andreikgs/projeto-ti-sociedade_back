const LicitacaoModel = require('../models/licitacao');

class LicitacaoController {
    static async inserir(req, res) {
        const { num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao } = req.body;
        try {
            await LicitacaoModel.inserir(num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao);
            res.status(201).send('Licitação inserida com sucesso');
        } catch (error) {
            console.error('Erro ao inserir licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        const { modalidade, data_licitacao, data_cadastro_licitacao } = req.body;
        try {
            await LicitacaoModel.atualizar(req.params.num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao);
            res.send('Licitação atualizada com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) {
        try {
            const licitacao = await LicitacaoModel.buscar(req.params.num_licitacao);
            if (licitacao) {
                res.json(licitacao);
            } else {
                res.status(404).send('Licitação não encontrada');
            }
        } catch (error) {
            console.error('Erro ao buscar licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await LicitacaoModel.deletar(req.params.num_licitacao);
            res.send('Licitação deletada com sucesso');
        } catch (error) {
            console.error('Erro ao deletar licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) {
        try {
            const licitacoes = await LicitacaoModel.listar();
            res.json(licitacoes);
        } catch (error) {
            console.error('Erro ao listar licitações:', error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = LicitacaoController;
