const express = require('express');
const router = express.Router();
const DocumentoLicitacaoController = require('../controllers/documentosController');


router.post('/', DocumentoLicitacaoController.inserir);
router.put('/:id_documento', DocumentoLicitacaoController.atualizar);
router.get('/:id_documento', DocumentoLicitacaoController.buscar);
router.delete('/:id_documento', DocumentoLicitacaoController.deletar);
router.get('/', DocumentoLicitacaoController.listar);

module.exports = router;
