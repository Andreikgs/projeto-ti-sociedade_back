const express = require('express');
const router = express.Router();
const ChecklistLicitacaoController = require('../controllers/checklistLicitacaoController');

const ChecklistLicitacaoController = new ChecklistLicitacaoController();

router.post('/', ChecklistLicitacaoController.inserir);
router.put('/:id_checklist', ChecklistLicitacaoController.atualizar);
router.get('/:id_checklist', ChecklistLicitacaoController.buscar);
router.delete('/:id_checklist', ChecklistLicitacaoController.deletar);
router.get('/', ChecklistLicitacaoController.listar);

module.exports = router;
