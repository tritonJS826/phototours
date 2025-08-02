-- Создание пользователя postgres (если не существует)
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'postgres') THEN
        CREATE ROLE postgres LOGIN PASSWORD 'postgres123' SUPERUSER CREATEDB CREATEROLE;
    END IF;
END
$$;

-- Создание базы данных
CREATE DATABASE phototours_db OWNER postgres;

-- Подключение к новой базе данных
\c phototours_db;

-- Создание расширения для UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Проверка
SELECT current_database(), current_user; 