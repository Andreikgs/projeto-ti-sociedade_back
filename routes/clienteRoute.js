const express = require('express');
const ClienteController = require('../controllers/clienteController'); 
const router = express.Router();

router.post('/clientes', ClienteController);
router.put('/clientes/:id', ClienteController);
router.get('/clientes/:id', ClienteController);
router.delete('/clientes/:id', ClienteController);
router.get('/clientes', ClienteController);

module.exports = router;
