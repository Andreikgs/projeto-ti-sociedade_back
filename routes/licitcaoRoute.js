const express = require('express');
const router = express.Router();
const LicitacaoController = require('../controllers/licitacaoController');

router.post('/', LicitacaoController.inserir);
router.put('/:num_licitacao', LicitacaoController.atualizar);
router.get('/:num_licitacao', LicitacaoController.buscar);
router.delete('/:num_licitacao', LicitacaoController.deletar);
router.get('/', LicitacaoController.listar);

module.exports = router;
