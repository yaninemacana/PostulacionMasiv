--creating the database
CREATE DATABASE postulacionMasiv;

--using the database
use postulacionMasiv;

CREATE TABLE Tareas(
    Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Crador VARCHAR(100) NOT NULL,
    Fecha DATETIME,
    Estado VARCHAR(100) NOT NULL,
    Detalle VARCHAR(100) NOT NULL 
);

--Muestra todas las tablas
SHOW TABLES;

--describe la tabla Tareas
describe Tareas;