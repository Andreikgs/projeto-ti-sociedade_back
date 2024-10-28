const DocumentoLicitacaoModel = require('../models/documentos');

class DocumentoLicitacaoController {
    static async inserir(req, res) {
        const { num_licitacao, descricao, obrigatorio } = req.body;
        try {
            await DocumentoLicitacaoModel.inserir(num_licitacao, descricao, obrigatorio);
            res.status(201).send('Documento de Licitação inserido com sucesso');
        } catch (error) {
            console.error('Erro ao inserir documento de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async atualizar(req, res) {
        const { num_licitacao, descricao, obrigatorio } = req.body;
        try {
            await DocumentoLicitacaoModel.atualizar(req.params.id_documento, num_licitacao, descricao, obrigatorio);
            res.send('Documento de Licitação atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar documento de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async buscar(req, res) {
        try {
            const documento = await DocumentoLicitacaoModel.buscar(req.params.id_documento);
            if (documento) {
                res.json(documento);
            } else {
                res.status(404).send('Documento de Licitação não encontrado');
            }
        } catch (error) {
            console.error('Erro ao buscar documento de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async deletar(req, res) {
        try {
            await DocumentoLicitacaoModel.deletar(req.params.id_documento);
            res.send('Documento de Licitação deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar documento de licitação:', error);
            res.status(500).send(error.message);
        }
    }

    static async listar(req, res) {
        try {
            const documentos = await DocumentoLicitacaoModel.listar();
            res.json(documentos);
        } catch (error) {
            console.error('Erro ao listar documentos de licitação:', error);
            res.status(500).send(error.message);
        }
    }
}

module.exports = DocumentoLicitacaoController;
