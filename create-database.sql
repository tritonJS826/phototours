-- Создание базы данных для проекта Photo Tours
CREATE DATABASE phototours_db;

-- Подключение к новой базе данных
\c phototours_db;

-- Создание расширения для UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Создание пользователя для приложения (опционально)
-- CREATE USER phototours_user WITH PASSWORD 'your_secure_password';
-- GRANT ALL PRIVILEGES ON DATABASE phototours_db TO phototours_user;

-- Проверка создания
SELECT current_database(); 