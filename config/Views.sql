/*Clientes*/

CREATE VIEW vw_clientes_ativos AS
SELECT *
FROM clientes
WHERE status = 'ativo';


CREATE VIEW vw_clientes_inativos AS
SELECT *
FROM clientes
WHERE status = 'inativo';

CREATE VIEW vw_clientes_contatos AS
SELECT c.id_cliente, c.razao_social, c.nome_fantasia, ct.ddd, ct.telefone, ct.nome_completo
FROM clientes c
JOIN contato ct ON c.id_cliente = ct.cliente;



