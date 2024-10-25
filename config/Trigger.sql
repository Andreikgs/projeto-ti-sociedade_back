/*Clientes*/

CREATE TRIGGER trg_after_insert_clientes
AFTER INSERT ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, id_usuario, descricao)
    VALUES ('clientes', 'inserir', NEW.id_cliente, NULL, 'Cliente inserido');
END;

CREATE TRIGGER trg_after_update_clientes
AFTER UPDATE ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, id_usuario, descricao)
    VALUES ('clientes', 'editar', NEW.id_cliente, NULL, 'Cliente atualizado');
END;

CREATE TRIGGER trg_after_delete_clientes
AFTER DELETE ON clientes
FOR EACH ROW
BEGIN
    INSERT INTO logs (tabela_afetada, operacao, id_registro, id_usuario, descricao)
    VALUES ('clientes', 'deletar', OLD.id_cliente, NULL, 'Cliente deletado');
END;


