const express = require('express');
const router = express.Router();
const TipoServicoController = require('../controllers/tipoServicoController'); // Verifique o caminho

const tipoServicoController = new TipoServicoController(); // Instanciando o controller

router.post('/tipos-servico', tipoServicoController.inserir.bind(tipoServicoController));
router.put('/tipos-servico/:id', tipoServicoController.atualizar.bind(tipoServicoController));
router.get('/tipos-servico/:id', tipoServicoController.buscar.bind(tipoServicoController));
router.delete('/tipos-servico/:id', tipoServicoController.deletar.bind(tipoServicoController));
router.get('/tipos-servico', tipoServicoController.listar.bind(tipoServicoController));

module.exports = router;
