const ChecklistLicitacaoModel = require('../models/checkListLicitacao');

class ChecklistLicitacaoController {
    static async inserir(req, res) {
        const { num_licitacao, item, status } = req.body;
        try {
            await ChecklistLicitacaoModel.inserir(num_licitacao, item, status);
            res.status(201).send('Checklist de Licitação inserido com sucesso');
        } catch (error) {
            console.error('Erro ao inserir checklist de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        const { num_licitacao, item, status } = req.body;
        try {
            await ChecklistLicitacaoModel.atualizar(req.params.id_checklist, num_licitacao, item, status);
            res.send('Checklist de Licitação atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar checklist de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) {
        try {
            const checklist = await ChecklistLicitacaoModel.buscar(req.params.id_checklist);
            if (checklist) {
                res.json(checklist);
            } else {
                res.status(404).send('Checklist de Licitação não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar checklist de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await ChecklistLicitacaoModel.deletar(req.params.id_checklist);
            res.send('Checklist de Licitação deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar checklist de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) {
        try {
            const checklists = await ChecklistLicitacaoModel.listar();
            res.json(checklists);
        } catch (error) {
            console.error('Erro ao listar checklists de licitações:', error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = ChecklistLicitacaoController();
