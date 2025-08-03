FROM postgres:16.2-alpine

# Установка дополнительных расширений
RUN apk add --no-cache \
    postgresql-contrib \
    && rm -rf /var/cache/apk/*

# Копирование инициализационного скрипта
COPY postgres/postgres-general.init.sql /docker-entrypoint-initdb.d/01-init.sql

# Настройка конфигурации PostgreSQL
COPY postgres/postgresql.conf /etc/postgresql/postgresql.conf

# Установка прав доступа
RUN chmod 644 /docker-entrypoint-initdb.d/01-init.sql

EXPOSE 5432

CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]