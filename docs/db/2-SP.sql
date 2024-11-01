DELIMITER //

CREATE PROCEDURE sp_inserir_cliente (
    IN p_cnpj CHAR(14),
    IN p_razao_social VARCHAR(255),
    IN p_nome_fantasia VARCHAR(255),
    IN p_status ENUM('ativo', 'inativo'),
    IN p_data_cadastro DATE
)
BEGIN
    IF NOT EXISTS (SELECT 1 FROM clientes WHERE cnpj = p_cnpj) THEN
        INSERT INTO clientes (cnpj, razao_social, nome_fantasia, status, data_cadastro)
        VALUES (p_cnpj, p_razao_social, p_nome_fantasia, p_status, p_data_cadastro);
        
        SELECT LAST_INSERT_ID() AS id_cliente;
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Cliente já cadastrado com este CNPJ.';
    END IF;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_buscar_cliente_por_cnpj (
    IN p_cnpj CHAR(14)
)
BEGIN
    SELECT * FROM clientes WHERE cnpj = p_cnpj;
END //

DELIMITER ;














DELIMITER //

CREATE PROCEDURE sp_inserir_cliente (
    IN p_cnpj CHAR(14),
    IN p_razao_social VARCHAR(255),
    IN p_nome_fantasia VARCHAR(255),
    IN p_status ENUM('ativo', 'inativo'),
    IN p_data_cadastro DATE
)
BEGIN
    INSERT INTO clientes (cnpj, razao_social, nome_fantasia, status, data_cadastro)
    VALUES (p_cnpj, p_razao_social, p_nome_fantasia, p_status, p_data_cadastro);
END //

CREATE PROCEDURE sp_atualizar_cliente (
    IN p_id_cliente INT,
    IN p_cnpj CHAR(14),
    IN p_razao_social VARCHAR(255),
    IN p_nome_fantasia VARCHAR(255),
    IN p_status ENUM('ativo', 'inativo'),
    IN p_data_cadastro DATE
)
BEGIN
    UPDATE clientes
    SET cnpj = p_cnpj,
        razao_social = p_razao_social,
        nome_fantasia = p_nome_fantasia,
        status = p_status,
        data_cadastro = p_data_cadastro
    WHERE id_cliente = p_id_cliente;
END //

CREATE PROCEDURE sp_buscar_cliente (
    IN p_id_cliente INT
)
BEGIN 
    SELECT * 
    FROM clientes
    WHERE id_cliente = p_id_cliente;
END //

CREATE PROCEDURE sp_deletar_cliente (
    IN p_id_cliente INT
)
BEGIN
    DELETE FROM clientes
    WHERE id_cliente = p_id_cliente;
END //

DELIMITER ;



/*Tipo Serviço*/

DELIMITER //

CREATE PROCEDURE sp_inserir_tipo_servico (
    IN p_descricao VARCHAR(255)
)
BEGIN
    INSERT INTO tipo_servico (descriacao) VALUES (p_descricao);
END //

CREATE PROCEDURE sp_atualizar_tipo_servico (
    IN p_id_tipo_servico INT,
    IN p_descricao VARCHAR(255)
)
BEGIN
    UPDATE tipo_servico
    SET descriacao = p_descricao
    WHERE id_tipo_servico = p_id_tipo_servico;
END //

CREATE PROCEDURE sp_buscar_tipo_servico (
    IN p_id_tipo_servico INT
)
BEGIN 
    SELECT * 
    FROM tipo_servico
    WHERE id_tipo_servico = p_id_tipo_servico;
END //

CREATE PROCEDURE sp_deletar_tipo_servico (
    IN p_id_tipo_servico INT
)
BEGIN
    DELETE FROM tipo_servico
    WHERE id_tipo_servico = p_id_tipo_servico;
END //

DELIMITER ;



/*Serviço*/

DELIMITER //

CREATE PROCEDURE sp_inserir_servico (
    IN p_id_cliente INT,
    IN p_id_tipo_servico INT,
    IN p_descricao VARCHAR(255)
)
BEGIN
    INSERT INTO servicos (id_cliente, id_tipo_servico, descriacao)
    VALUES (p_id_cliente, p_id_tipo_servico, p_descricao);
END //

CREATE PROCEDURE sp_atualizar_servico (
    IN p_id_servico INT,
    IN p_id_cliente INT,
    IN p_id_tipo_servico INT,
    IN p_descricao VARCHAR(255)
)
BEGIN
    UPDATE servicos
    SET id_cliente = p_id_cliente,
        id_tipo_servico = p_id_tipo_servico,
        descriacao = p_descricao
    WHERE id_servico = p_id_servico;
END //

CREATE PROCEDURE sp_buscar_servico (
    IN p_id_servico INT
)
BEGIN 
    SELECT * 
    FROM servicos
    WHERE id_servico = p_id_servico;
END //

CREATE PROCEDURE sp_deletar_servico (
    IN p_id_servico INT
)
BEGIN
    DELETE FROM servicos
    WHERE id_servico = p_id_servico;
END //

DELIMITER ;



/*Tipos telefone*/


DELIMITER //

CREATE PROCEDURE sp_inserir_tipo_telefone (
    IN p_descricao VARCHAR(255)
)
BEGIN
    INSERT INTO tipos_telefone (descriacao) VALUES (p_descricao);
END //

CREATE PROCEDURE sp_atualizar_tipo_telefone (
    IN p_id_tipo_telefone INT,
    IN p_descricao VARCHAR(255)
)
BEGIN
    UPDATE tipos_telefone
    SET descriacao = p_descricao
    WHERE id_tipo_telefone = p_id_tipo_telefone;
END //

CREATE PROCEDURE sp_buscar_tipo_telefone (
    IN p_id_tipo_telefone INT
)
BEGIN 
    SELECT * 
    FROM tipos_telefone
    WHERE id_tipo_telefone = p_id_tipo_telefone;
END //

CREATE PROCEDURE sp_deletar_tipo_telefone (
    IN p_id_tipo_telefone INT
)
BEGIN
    DELETE FROM tipos_telefone
    WHERE id_tipo_telefone = p_id_tipo_telefone;
END //

DELIMITER ;



/*Login Usuarios*/


DELIMITER //

CREATE PROCEDURE sp_inserir_login_usuario (
    IN p_usuario INT,
    IN p_username VARCHAR(50),
    IN p_senha VARCHAR(255)
)
BEGIN
    INSERT INTO login_usuarios (usuario, username, senha)
    VALUES (p_usuario, p_username, p_senha);
END //

CREATE PROCEDURE sp_atualizar_login_usuario (
    IN p_id_login INT,
    IN p_username VARCHAR(50),
    IN p_senha VARCHAR(255)
)
BEGIN
    UPDATE login_usuarios
    SET username = p_username,
        senha = p_senha
    WHERE id_login = p_id_login;
END //

CREATE PROCEDURE sp_buscar_login_usuario (
    IN p_id_login INT
)
BEGIN 
    SELECT * 
    FROM login_usuarios
    WHERE id_login = p_id_login;
END //

CREATE PROCEDURE sp_deletar_login_usuario (
    IN p_id_login INT
)
BEGIN
    DELETE FROM login_usuarios
    WHERE id_login = p_id_login;
END //

DELIMITER ;



/*Licitações*/

DELIMITER //

CREATE PROCEDURE sp_inserir_licitacao (
    IN p_num_licitacao INT,
    IN p_modalidade INT,
    IN p_data_licitacao DATE,
    IN p_data_cadastro_licitacao DATE
)
BEGIN
    INSERT INTO licitacoes (num_licitacao, modalidade, data_licitacao, data_cadastro_licitacao)
    VALUES (p_num_licitacao, p_modalidade, p_data_licitacao, p_data_cadastro_licitacao);
END //

CREATE PROCEDURE sp_atualizar_licitacao (
    IN p_num_licitacao INT,
    IN p_modalidade INT,
    IN p_data_licitacao DATE,
    IN p_data_cadastro_licitacao DATE
)
BEGIN
    UPDATE licitacoes
    SET modalidade = p_modalidade,
        data_licitacao = p_data_licitacao,
        data_cadastro_licitacao = p_data_cadastro_licitacao
    WHERE num_licitacao = p_num_licitacao;
END //

CREATE PROCEDURE sp_buscar_licitacao (
    IN p_num_licitacao INT
)
BEGIN 
    SELECT * 
    FROM licitacoes
    WHERE num_licitacao = p_num_licitacao;
END //

CREATE PROCEDURE sp_deletar_licitacao (
    IN p_num_licitacao INT
)
BEGIN
    DELETE FROM licitacoes
    WHERE num_licitacao = p_num_licitacao;
END //

DELIMITER ;



/*Histórico licitação*/

DELIMITER //

CREATE PROCEDURE sp_inserir_historico_licitacao (
    IN p_num_licitacao INT,
    IN p_modalidade INT,
    IN p_status_licitacao INT,
    IN p_data_licitacao DATE,
    IN p_cidade VARCHAR(255),
    IN p_estado VARCHAR(2),
    IN p_objeto TEXT
)
BEGIN
    INSERT INTO historico_licitacao (num_licitacao, modalidade, status_licitacao, data_licitacao, cidade, estado, objeto)
    VALUES (p_num_licitacao, p_modalidade, p_status_licitacao, p_data_licitacao, p_cidade, p_estado, p_objeto);
END //

CREATE PROCEDURE sp_atualizar_historico_licitacao (
    IN p_id_historico_licitacao INT,
    IN p_num_licitacao INT,
    IN p_modalidade INT,
    IN p_status_licitacao INT,
    IN p_data_licitacao DATE,
    IN p_cidade VARCHAR(255),
    IN p_estado VARCHAR(2),
    IN p_objeto TEXT
)
BEGIN
    UPDATE historico_licitacao
    SET num_licitacao = p_num_licitacao,
        modalidade = p_modalidade,
        status_licitacao = p_status_licitacao,
        data_licitacao = p_data_licitacao,
        cidade = p_cidade,
        estado = p_estado,
        objeto = p_objeto
    WHERE id_historico_licitacao = p_id_historico_licitacao;
END //

CREATE PROCEDURE sp_buscar_historico_licitacao (
    IN p_id_historico_licitacao INT
)
BEGIN 
    SELECT * 
    FROM historico_licitacao
    WHERE id_historico_licitacao = p_id_historico_licitacao;
END //

CREATE PROCEDURE sp_deletar_historico_licitacao (
    IN p_id_historico_licitacao INT
)
BEGIN
    DELETE FROM historico_licitacao
    WHERE id_historico_licitacao = p_id_historico_licitacao;
END //

DELIMITER ;



/*Documentos Licitação*/

DELIMITER //

CREATE PROCEDURE sp_inserir_documento_licitacao (
    IN p_num_licitacao INT,
    IN p_descricao VARCHAR(255),
    IN p_obrigatorio BOOLEAN
)
BEGIN
    INSERT INTO documentos_licitacao (num_licitacao, descricao, obrigatorio)
    VALUES (p_num_licitacao, p_descricao, p_obrigatorio);
END //

CREATE PROCEDURE sp_atualizar_documento_licitacao (
    IN p_id_documento INT,
    IN p_num_licitacao INT,
    IN p_descricao VARCHAR(255),
    IN p_obrigatorio BOOLEAN
)
BEGIN
    UPDATE documentos_licitacao
    SET num_licitacao = p_num_licitacao,
        descricao = p_descricao,
        obrigatorio = p_obrigatorio
    WHERE id_documento = p_id_documento;
END //

CREATE PROCEDURE sp_buscar_documento_licitacao (
    IN p_id_documento INT
)
BEGIN 
    SELECT * 
    FROM documentos_licitacao
    WHERE id_documento = p_id_documento;
END //

CREATE PROCEDURE sp_deletar_documento_licitacao (
    IN p_id_documento INT
)
BEGIN
    DELETE FROM documentos_licitacao
    WHERE id_documento = p_id_documento;
END //

DELIMITER ;


/*Check List Licitação*/


DELIMITER //

DELIMITER //

CREATE PROCEDURE sp_inserir_checklist (
    IN p_num_licitacao INT,
    IN p_id_documento INT,
    IN p_obrigatorio BOOLEAN,
    IN p_id_status INT
)
BEGIN
    INSERT INTO checklist_licitacao (num_licitacao, id_documento, obrigatorio, id_status)
    VALUES (p_num_licitacao, p_id_documento, p_obrigatorio, p_id_status);
END //

CREATE PROCEDURE sp_atualizar_checklist (
    IN p_id_checklist INT,
    IN p_num_licitacao INT,
    IN p_id_documento INT,
    IN p_obrigatorio BOOLEAN,
    IN p_id_status INT
)
BEGIN
    UPDATE checklist_licitacao
    SET num_licitacao = p_num_licitacao,
        id_documento = p_id_documento,
        obrigatorio = p_obrigatorio,
        id_status = p_id_status
    WHERE id_checklist = p_id_checklist;
END //

CREATE PROCEDURE sp_buscar_checklist (
    IN p_id_checklist INT
)
BEGIN 
    SELECT * 
    FROM checklist_licitacao
    WHERE id_checklist = p_id_checklist;
END //

CREATE PROCEDURE sp_deletar_checklist (
    IN p_id_checklist INT
)
BEGIN
    DELETE FROM checklist_licitacao
    WHERE id_checklist = p_id_checklist;
END //

DELIMITER ;

