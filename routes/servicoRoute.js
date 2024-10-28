const express = require('express');
const router = express.Router();
const ServicoController = require('../controllers/servicoController');

router.post('/servicos', ServicoController.inserir);
router.put('/servicos/:id', ServicoController.atualizar);
router.get('/servicos/:id', ServicoController.buscar);
router.delete('/servicos/:id', ServicoController.deletar);
router.get('/servicos', ServicoController.listar);

module.exports = router;
