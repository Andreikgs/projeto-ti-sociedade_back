create database liciteaqui;

use liciteaqui;


create table clientes (
    id_cliente int primary key auto_increment,
    cnpj char(14) not null unique,
    razao_social varchar (255) not null,
    nome_fantasia varchar (255),
    status enum ('ativo', 'inativo') not null,
    data_cadastro date not null
);

create table tipo_servico (
    id_tipo_servico int primary key auto_increment,
    descriacao varchar (255) not null unique

);

create table servicos(
    id_servico int primary key auto_increment,
    id_cliente int,
    id_tipo_servico int,
    descriacao varchar (255) not null,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_tipo_servico) references tipo_servico(id_tipo_servico)
);

create table tipos_telefone (
    id_tipo_telefone int primary key auto_increment,
    descriacao varchar(255) not null unique
);

create table contato (
    id_contato int primary key auto_increment,
    cliente int,
    tipo_telefone int,
    ddd varchar(3) not null,
    telefone varchar (10) not null,
    nome_completo varchar(255) not null,
    sexo enum ('Masculino', 'Feminino') not null,
    data_nascimento date,
    cpf char(11) not null unique,
    status_cadastro enum('ativo', 'inativo'),
    foreign key (cliente) references clientes(id_cliente),
    foreign key (tipo_telefone) references tipos_telefone(id_tipo_telefone)

);

create table usuarios (
    id_usuarios  int primary key auto_increment,
    nome_completo varchar (255) not null,
    email varchar (255) not null,
    sexo enum ('Masculino', 'feminino') not null,
    data_nascimento date,
    data_cadastro date,
    cpf char(11) not null unique

);

create table permissoes (
    id_permissao int primary key auto_increment,
    descriacao varchar(255) not null unique
);

create table permissoes_usuarios (
    id_permissao_usuario int primary key auto_increment,
    usuario int,
    permissao int,
    foreign key (usuario) references usuarios(id_usuarios),
    foreign key (permissao) references permissoes(id_permissao),
    unique(usuario, permissao)
);

create table login_usuarios (
    id_login int primary key auto_increment,
    usuario int,
    username varchar(50) not null unique,
    senha varchar(255) not null,
    data_cadastro timestamp default current_timestamp,
    foreign key (usuario) references usuarios(id_usuarios)
);


create table status_licitacao (
    id_status int primary key auto_increment,
    nome_status varchar(255) not null unique
);

create table modalidade (
    id_modalidade int primary key auto_increment,
    nome_modalidade varchar(255) not null unique
);

create table licitacoes (
    num_licitacao int primary key,
    modalidade int,
    data_licitacao date not null,
    data_cadastro_licitacao date not null,
    foreign key (modalidade) references modalidade(id_modalidade)
);

create table historico_licitacao (
    id_historico_licitacao int primary key auto_increment,
    num_licitacao int,
    modalidade int,
    status_licitacao int,
    data_licitacao date not null,
    cidade varchar(255),
    estado varchar(2),
    objeto text,
    foreign key (num_licitacao) references licitacoes(num_licitacao),
    foreign key (modalidade) references modalidade(id_modalidade),
    foreign key (status_licitacao) references status_licitacao(id_status)
);

create table documentos_licitacao (
    id_documento int primary key auto_increment,
    num_licitacao int,
    descricao varchar(255) not null,
    obrigatorio boolean not null,
    foreign key (num_licitacao) references licitacoes(num_licitacao)
);

create table logs (
    id_log int primary key auto_increment,
    tabela_afetada varchar(255),
    operacao enum('inserir', 'editar', 'deletar') not null,
    id_registro int not null,
    usuario int,
    data_hora timestamp default current_timestamp,
    descricao text,
    foreign key (usuario) references usuarios(id_usuarios)
);


CREATE TABLE checklist_licitacao (
    id_checklist int primary key auto_increment,
    num_licitacao int,
    id_documento int,
    obrigatorio boolean not null,
    id_status int,
    foreign key (num_licitacao) references licitacoes(num_licitacao),
    foreign key (id_documento) references documentos_licitacao(id_documento),
    foreign key (id_status) references status_checklist(id_status),
    unique(num_licitacao, id_documento)
);


CREATE TABLE status_checklist (
    id_status int primary key auto_increment,
    nome_status varchar(255) not null unique
);





