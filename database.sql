CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(60),
    email TEXT
);

INSERT INTO usuarios (usuario, email) VALUES ('danny', 'da.lopez@udla.edu.co');

select * from usuarios