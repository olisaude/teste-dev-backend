
CREATE OR REPLACE TABLE clients(
    id LONG PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    birth_date DATE,
    gender VARCHAR(100) NOT NULL,
    creationDate DATE,
    updateDate DATE
)