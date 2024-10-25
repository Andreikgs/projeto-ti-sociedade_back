/*Clientes*/


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

DELIMITER ;



DELIMITER //

CREATE PROCEDURE sp_atualizar_status_cliente (
    IN p_id_cliente INT,
    IN p_novo_status ENUM('ativo', 'inativo')
)
BEGIN
    UPDATE clientes
    SET status = p_novo_status
    WHERE id_cliente = p_id_cliente;
END //

DELIMITER ;
