const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/', UserController.login);
router.post('/logout', UserController.logout);
router.post('/inserir', UserController.inserir);
router.put('/:id', UserController.atualizar);
router.get('/:id', UserController.buscar);
router.delete('/:id', UserController.deletar);
router.get('/listar', UserController.listar);

module.exports = router;
