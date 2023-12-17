
CREATE OR REPLACE TABLE health_problem (
    id LONG PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    active boolean,
    degree INT
);
