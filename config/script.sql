create database liciteaqui;

use liciteaqui;


create table clientes (
    id_cliente int primary key auto_increment,
    cnpj varchar(14) not null unique,
    razao_social varchar (255) not null,
    nome_fantasia varchar (255),
    status enum ('ativo', 'inativo') not null,
    data_cadastro date not null
);

create table tipo_servico (
    id_tipo_servico int primary key auto_increment,
    descriacao varchar (255) not null unique,

);

create table servicos(
    id_servico int primary key auto_increment,
    id_cliente int,
    id_tipo_servico
    descriacao varchar (255) not null,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_tipo_servico) references tipo_servico(id_tipo_servico)
);

create table tipos_telefone (
    id_tipo_telefone int primary key auto_increment
    descriacao varchar(255) not null unique
);

create table contato (
    id_contato int primary key auto_increment,
    cliente int,
    tipo_telefone,
    ddd varchar(3) not null,
    telefone varchar (10) not null,
    nome_completo varchar(255) not null,
    sexo enum ('Masculino', 'Feminino') not null,
    data_nascimento date,
    cpf varchar(11) not null unique,
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
    cpf varchar(11) not null unique

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
    data_cadastro timestamp default current_timestamp,;
);