CREATE TABLE partida (
  codigo bigint NOT NULL AUTO_INCREMENT,
  pontos int NOT NULL,
  max_temporada int NOT NULL,
  min_temporada int NOT NULL,
  quebra_min int NOT NULL,
  quebra_max int NOT NULL,
  PRIMARY KEY (codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO publicaprowayapi.partida
(codigo, pontos, max_temporada, min_temporada, quebra_min, quebra_max)
VALUES(12, 12, 12, 12, 0, 0);
INSERT INTO publicaprowayapi.partida
(codigo, pontos, max_temporada, min_temporada, quebra_min, quebra_max)
VALUES(13, 24, 24, 12, 0, 1);
INSERT INTO publicaprowayapi.partida
(codigo, pontos, max_temporada, min_temporada, quebra_min, quebra_max)
VALUES(14, 10, 24, 10, 1, 1);
INSERT INTO publicaprowayapi.partida
(codigo, pontos, max_temporada, min_temporada, quebra_min, quebra_max)
VALUES(15, 24, 24, 10, 1, 1);
