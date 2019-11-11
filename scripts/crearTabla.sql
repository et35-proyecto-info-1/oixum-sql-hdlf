CREATE DATABASE IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test.estudiantes (
	id INT NOT NULL AUTO_INCREMENT,
	nombre varchar(100) NOT NULL,
	comidaPreferida varchar(100) NULL,
	fechaNacimiento DATE NOT NULL,
	CONSTRAINT estudiantes_PK PRIMARY KEY (id)
);

INSERT INTO test.estudiantes (nombre, comidaPreferida, fechaNacimiento)
VALUES 
  ('Alan Castro', 'Fideos con tuco', '1993-08-21'),
  ('Camila Sierra', 'Milanesa con pure', '1957-02-29'),
  ('Matias Rodriguez', 'Estofado de pollo', '1961-04-05'),
  ('Melanie Torres', 'Ensalada cesar', '1934-02-14');