/*Clientes*/

CREATE TRIGGER trg_after_insert_clientes
AFTER INSERT ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, usuario, descricao)
    VALUES ('clientes', 'inserir', NEW.id_cliente, NULL, 
            CONCAT('INSERT INTO clientes (cnpj, razao_social, nome_fantasia, status, data_cadastro) VALUES (', 
                   QUOTE(NEW.cnpj), ', ', 
                   QUOTE(NEW.razao_social), ', ', 
                   QUOTE(NEW.nome_fantasia), ', ', 
                   QUOTE(NEW.status), ', ', 
                   QUOTE(NEW.data_cadastro), ');'));
END;

CREATE TRIGGER trg_after_update_clientes
AFTER UPDATE ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, usuario, descricao)
    VALUES ('clientes', 'editar', NEW.id_cliente, NULL, 
            CONCAT('UPDATE clientes SET ',
                   'cnpj = ', QUOTE(NEW.cnpj), ', ',
                   'razao_social = ', QUOTE(NEW.razao_social), ', ',
                   'nome_fantasia = ', QUOTE(NEW.nome_fantasia), ', ',
                   'status = ', QUOTE(NEW.status), ', ',
                   'data_cadastro = ', QUOTE(NEW.data_cadastro), 
                   ' WHERE id_cliente = ', NEW.id_cliente, ';'));
END;

CREATE TRIGGER trg_after_delete_clientes
AFTER DELETE ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, usuario, descricao)
    VALUES ('clientes', 'deletar', OLD.id_cliente, NULL, 
            CONCAT('DELETE FROM clientes WHERE id_cliente = ', 
                   OLD.id_cliente, 
                   ' (cnpj: ', OLD.cnpj, ', razao_social: ', OLD.razao_social, 
                   ', nome_fantasia: ', OLD.nome_fantasia, 
                   ', status: ', OLD.status, 
                   ', data_cadastro: ', OLD.data_cadastro, ');'));
END;
