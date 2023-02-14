create table Usuario (
      id int primary key,
	    nombre varchar,
	    apellido varchar,
      correo varchar,
      telefono BIGINT
);

create table Categoria (
      id int primary key,
	    nombre varchar
);

create table Orden (
      id int primary key,
	    id_usuario int,
      fecha DATE
);

create table Productos (
      id int primary key,
	    nombre varchar,
	    precio int,
      detalles VARCHAR,
      id_categoria INT
);

create table Produc_orden (
      id int primary key,
	    id_produc int,
      id_orden int
);

create table Inventario (
      id int primary key,
	    id_produc INT,
      cantidad INT
);

ALTER TABLE Orden
    ADD CONSTRAINT r1 FOREIGN KEY (id_usuario) REFERENCES Usuario(id);
ALTER TABLE Produc_orden
    ADD CONSTRAINT r2 FOREIGN KEY (id_orden) REFERENCES Orden(id);
ALTER TABLE Produc_orden
    ADD CONSTRAINT r3 FOREIGN KEY (id_produc) REFERENCES Productos(id);
ALTER TABLE Productos
    ADD CONSTRAINT r4 FOREIGN KEY (id_categoria) REFERENCES Categoria(id);
ALTER TABLE Inventario
    ADD CONSTRAINT r5 FOREIGN KEY (id_produc) REFERENCES Productos(id);


insert into Usuario values (4524,'Mario','Beltran','admin@admin.com', 3216549870);

