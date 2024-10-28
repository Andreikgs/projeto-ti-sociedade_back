const express = require('express');
const router = express.Router();
const HistoricoLicitacaoController = require('../controllers/historicoLicitacaoController');

router.post('/', HistoricoLicitacaoController.inserir);
router.put('/:id_historico_licitacao', HistoricoLicitacaoController.atualizar);
router.get('/:id_historico_licitacao', HistoricoLicitacaoController.buscar);
router.delete('/:id_historico_licitacao', HistoricoLicitacaoController.deletar);
router.get('/', HistoricoLicitacaoController.listar);

module.exports = router;
