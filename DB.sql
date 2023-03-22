create table Usuario (
      id int primary key,
	nombre varchar,
	apellido varchar,      
      telefono BIGINT,
	perfil_id int
);

create table Perfil (
	id int primary key,
	email varchar,
	password varchar
);

create table Categoria (
      id int primary key,
      nombre varchar
);

create table Productos (
      id int primary key,
	nombre varchar,
	precio BIGINT,
      detalles VARCHAR,
      categoria_id INT
);

create table Orden (
      id int primary key,
	usuario_id int,
      fecha DATE
);

create table Produc_orden (
      id int primary key,
	produc_id int,
      orden_id int
);

create table Inventario (
      id int primary key,
	produc_id INT,
      cantidad INT
);


ALTER TABLE Orden
    ADD CONSTRAINT r1 FOREIGN KEY (usuario_id) REFERENCES Usuario(id);
ALTER TABLE Produc_orden
    ADD CONSTRAINT r2 FOREIGN KEY (orden_id) REFERENCES Orden(id);
ALTER TABLE Produc_orden
    ADD CONSTRAINT r3 FOREIGN KEY (produc_id) REFERENCES Productos(id);
ALTER TABLE Productos
    ADD CONSTRAINT r4 FOREIGN KEY (categoria_id) REFERENCES Categoria(id);
ALTER TABLE Inventario
    ADD CONSTRAINT r5 FOREIGN KEY (produc_id) REFERENCES Productos(id);
ALTER TABLE Usuario
    ADD CONSTRAINT r6 FOREIGN KEY (perfil_id) REFERENCES Perfil(id);


insert into Perfil values (1,'mario@mario.com', 'lsakdjf');
insert into Perfil values (2,'ñslkf@meio.com', 'lsakdjf');
insert into Perfil values (3,'juan@mari.com', 'lsakdjf');
insert into Perfil values (4,'jode@jjjt.com', 'lsakdjf');

insert into Usuario values (1,'Mario','Beltran', 3216549870, 1);
insert into Usuario values (2,'juan','gomez', 3216549871, 2);
insert into Usuario values (3,'jose','ramire', 3216549875, 3);
insert into Usuario values (4,'Martin','Belt', 3216549879, 4);

insert into Categoria values (1,'DH');
insert into Categoria values (2,'enduro');
insert into Categoria values (3,'xt');
insert into Categoria values (4,'ruta');

insert into Productos values (1,'xtmarlin',250000, 3);
insert into Productos values (2,'aero',250000, 4);
insert into Productos values (3,'superdh',250000, 1);
insert into Productos values (4,'capra',250000, 2);

insert into Orden values (1, 1, '24/02/2022');
insert into Orden values (2, 2, '24/02/2022');
insert into Orden values (3, 3, '24/02/2022');
insert into Orden values (4, 4, '24/02/2022');

insert into Produc_orden values (1,1,1);
insert into Produc_orden values (2,2,2);
insert into Produc_orden values (3,3,3);
insert into Produc_orden values (4,4,4);

insert into Inventario values (1,1,250);
insert into Inventario values (2,2,251);
insert into Inventario values (3,3,215);
insert into Inventario values (4,4,325);




