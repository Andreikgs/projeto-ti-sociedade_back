const express = require('express');
const ClienteController = require('../controllers/clienteController'); 
const router = express.Router();

const clienteController = new ClienteController();

router.post('/clientes', clienteController.inserir.bind(clienteController));
router.put('/clientes/:id', clienteController.atualizar.bind(clienteController));
router.get('/clientes/:id', clienteController.buscar.bind(clienteController));
router.delete('/clientes/:id', clienteController.deletar.bind(clienteController));
router.get('/clientes', clienteController.listar.bind(clienteController));

module.exports = router;
