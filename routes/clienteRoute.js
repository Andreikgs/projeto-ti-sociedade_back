const express = require('express');
const ClienteController = require('../controllers/clienteController'); 
const router = express.Router();

router.post('/', ClienteController.inserir); 
router.put('/:id', ClienteController.atualizar);
router.get('/:id', ClienteController.buscar);
router.delete('/:id', ClienteController.deletar);
router.get('/', ClienteController.listar);

module.exports = router;
