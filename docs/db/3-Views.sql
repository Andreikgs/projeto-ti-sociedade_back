/*Clientes*/

CREATE VIEW vw_clientes AS
SELECT id_cliente, cnpj, razao_social, nome_fantasia, status, data_cadastro
FROM clientes;

CREATE VIEW vw_clientes_ativos AS
SELECT *
FROM vw_clientes
WHERE status = 'ativo';

CREATE VIEW vw_clientes_inativos AS
SELECT *
FROM vw_clientes
WHERE status = 'inativo';

CREATE VIEW vw_clientes_contatos AS
SELECT c.id_cliente, c.razao_social, c.nome_fantasia, ct.ddd, ct.telefone, ct.nome_completo
FROM clientes c
JOIN contato ct ON c.id_cliente = ct.cliente;




/*Serviços*/

CREATE VIEW vw_servicos AS
SELECT s.id_servico, c.razao_social, ts.descricao AS tipo_servico, s.descricao
FROM servicos s
JOIN clientes c ON s.id_cliente = c.id_cliente
JOIN tipo_servico ts ON s.id_tipo_servico = ts.id_tipo_servico;



/*Tipos de Serviços*/

CREATE VIEW vw_tipos_servico AS
SELECT id_tipo_servico, descriacao
FROM tipo_servico;


/*Tipos de Telefone*/

CREATE VIEW vw_tipos_telefone AS
SELECT id_tipo_telefone, descriacao
FROM tipos_telefone;


/*Contatos*/

CREATE VIEW vw_contatos AS
SELECT id_contato, cliente, tipo_telefone, ddd, telefone, nome_completo, sexo, data_nascimento, cpf, status_cadastro
FROM contato;


/*Login Usuarios*/
CREATE VIEW vw_login_usuarios AS
SELECT lu.id_login, u.nome_completo AS usuario, lu.username, lu.data_cadastro
FROM login_usuarios lu
JOIN usuarios u ON lu.usuario = u.id_usuarios;


/*Licitcações*/

CREATE VIEW vw_licitacoes AS
SELECT l.num_licitacao, m.nome_modalidade, l.data_licitacao, l.data_cadastro_licitacao
FROM licitacoes l
JOIN modalidade m ON l.modalidade = m.id_modalidade;


/*Historico Licitação*/

CREATE VIEW vw_historico_licitacao AS
SELECT h.id_historico_licitacao, l.num_licitacao, m.nome_modalidade, s.nome_status, h.data_licitacao, h.cidade, h.estado, h.objeto
FROM historico_licitacao h
JOIN licitacoes l ON h.num_licitacao = l.num_licitacao
JOIN modalidade m ON l.modalidade = m.id_modalidade
JOIN status_licitacao s ON h.status_licitacao = s.id_status;


/*Documentos Licitcação*/

CREATE VIEW vw_documentos_licitacao AS
SELECT d.id_documento, l.num_licitacao, d.descricao, d.obrigatorio
FROM documentos_licitacao d
JOIN licitacoes l ON d.num_licitacao = l.num_licitacao;


/*CheckList Licitação*/

CREATE VIEW vw_checklist_licitacao AS
SELECT c.id_checklist, l.num_licitacao, d.descricao AS documento, c.obrigatorio, s.nome_status
FROM checklist_licitacao c
JOIN licitacoes l ON c.num_licitacao = l.num_licitacao
JOIN documentos_licitacao d ON c.id_documento = d.id_documento
JOIN status_checklist s ON c.id_status = s.id_status;


/*Status Licitação*/
CREATE VIEW vw_status_licitacao AS
SELECT id_status, nome_status
FROM status_licitacao;



/*Modalidade*/

CREATE VIEW vw_modalidades AS
SELECT id_modalidade, nome_modalidade
FROM modalidade;

/*Status de CheckList*/

CREATE VIEW vw_status_checklist AS
SELECT id_status, nome_status
FROM status_checklist;
