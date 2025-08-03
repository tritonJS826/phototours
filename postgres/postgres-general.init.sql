-- Создание расширений
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- Создание пользователя для приложения (если не существует)
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'app_user') THEN
        CREATE USER app_user WITH PASSWORD 'app_password';
    END IF;
END
$$;

-- Предоставление прав пользователю
GRANT ALL PRIVILEGES ON DATABASE mastersway_db TO app_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO app_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO app_user;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO app_user;

-- Установка прав по умолчанию для новых таблиц
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO app_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO app_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO app_user;

-- Создание схемы для приложения (опционально)
CREATE SCHEMA IF NOT EXISTS app_schema;
GRANT ALL PRIVILEGES ON SCHEMA app_schema TO app_user;

-- Логирование успешной инициализации
DO $$
BEGIN
    RAISE NOTICE 'Database initialization completed successfully';
END
$$;