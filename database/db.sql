CREATE DATABASE tasksdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(260) UNIQUE,
    description VARCHAR(260)
);

