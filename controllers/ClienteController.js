const Cliente = require('../models/cliente');

class ClienteController {
    async inserir(req, res) {
        try {
            console.log('Dados recebidos para inserção:', req.body);
            const { cnpj, razaoSocial, nomeFantasia, status, dataCadastro } = req.body;

            // Validação básica
            if (!cnpj || !razaoSocial || !status || !dataCadastro) {
                return res.status(400).send('Todos os campos são obrigatórios.');
            }

            // Chama o método de inserção no modelo
            const resultado = await Cliente.inserir(cnpj, razaoSocial, nomeFantasia, status, dataCadastro);
            res.status(201).send({ message: 'Cliente inserido com sucesso', id: resultado.id_cliente });
        } catch (error) {
            console.error('Erro ao inserir cliente na controller:', error);
            res.status(400).send({ message: error.message || 'Erro ao inserir cliente: erro desconhecido' });
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { cnpj, razaoSocial, nomeFantasia, status, dataCadastro } = req.body;

            // Chama o método de atualização no modelo
            await Cliente.atualizar(id, cnpj, razaoSocial, nomeFantasia, status, dataCadastro);
            res.send('Cliente atualizado com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            res.status(500).send({ message: error.message || 'Erro ao atualizar cliente: erro desconhecido' });
        }
    }

    async buscar(req, res) {
        try {
            const { id } = req.params;
            const cliente = await Cliente.buscar(id);
            if (!cliente) {
                return res.status(404).send('Cliente não encontrado');
            }
            res.json(cliente);
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            res.status(500).send({ message: error.message || 'Erro ao buscar cliente: erro desconhecido' });
        }
    }

    async deletar(req, res) {
        try {
            const { id } = req.params;
            await Cliente.deletar(id);
            res.send('Cliente deletado com sucesso');
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            res.status(500).send({ message: error.message || 'Erro ao deletar cliente: erro desconhecido' });
        }
    }

    async listar(req, res) {
        try {
            const clientes = await Cliente.listar(); 
            res.json(clientes);
        } catch (error) {
            console.error('Erro ao listar clientes:', error);
            res.status(500).send({ message: error.message || 'Erro ao listar clientes: erro desconhecido' });
        }
    }
}

module.exports = new ClienteController();
