CREATE TABLE IF NOT EXISTS NOME_TABELA_BANDAS (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    music_genre VARCHAR(255) NOT NULL,
    responsible VARCHAR(255) UNIQUE NOT NULL 
);

CREATE TABLE IF NOT EXISTS NOME_TABELA_SHOWS (
    id VARCHAR(255) PRIMARY KEY,
    week_day VARCHAR(255) NOT NULL,
    start_time INT NOT NULL,
    end_time INT NOT NULL,
    band_id VARCHAR(255) NOT NULL,
    FOREIGN KEY(band_id) REFERENCES NOME_TABELA_BANDAS(id)
);

CREATE TABLE IF NOT EXISTS NOME_TABELAS_USUÁRIOS (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
);

ALTER TABLE NOME_TABELA_SHOWS 
            ADD sold_tickets INT NOT NULL, 
            ADD total_tickets INT NOT NULL;
            
CREATE TABLE IF NOT EXISTS NOME_TABELA_FOTOS (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	link VARCHAR(255) NOT NULL,
	show_id VARCHAR(255) NOT NULL,
	FOREIGN KEY (show_id) REFERENCES NOME_TABELA_SHOWS(id)
);