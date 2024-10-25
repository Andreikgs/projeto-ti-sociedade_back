const express =  require('express');
const clienteController = require('../controllers/ClienteController.js');


const router = express.router();

router.post('/', clienteController.criarCliente);
router.get('/', clienteController.listarCliente);


module.exports = router;

