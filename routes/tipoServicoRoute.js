const express = require('express');
const router = express.Router();
const TipoServicoController = require('../controllers/tipoServicoController'); 

router.post('/tipos-servico', TipoServicoController.inserir); 
router.put('/tipos-servico/:id', TipoServicoController.atualizar); 
router.get('/tipos-servico/:id', TipoServicoController.buscar); 
router.delete('/tipos-servico/:id', TipoServicoController.deletar); 
router.get('/tipos-servico', TipoServicoController.listar); 

module.exports = router;
