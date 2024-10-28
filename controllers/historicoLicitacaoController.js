const HistoricoLicitacaoModel = require('../models/historicoLicitacao');

class HistoricoLicitacaoController {
    static async inserir(req, res) {
        const { num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto } = req.body;
        try {
            await HistoricoLicitacaoModel.inserir(num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto);
            res.status(201).send('Histórico de Licitação inserido com sucesso');
        } catch (error) {
            console.error('Erro ao inserir histórico de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        const { num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto } = req.body;
        try {
            await HistoricoLicitacaoModel.atualizar(req.params.id_historico_licitacao, num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto);
            res.send('Histórico de Licitação atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar histórico de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) {
        try {
            const historico = await HistoricoLicitacaoModel.buscar(req.params.id_historico_licitacao);
            if (historico) {
                res.json(historico);
            } else {
                res.status(404).send('Histórico de Licitação não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar histórico de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await HistoricoLicitacaoModel.deletar(req.params.id_historico_licitacao);
            res.send('Histórico de Licitação deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar histórico de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) {
        try {
            const historicos = await HistoricoLicitacaoModel.listar();
            res.json(historicos);
        } catch (error) {
            console.error('Erro ao listar históricos de licitações:', error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = HistoricoLicitacaoController;
