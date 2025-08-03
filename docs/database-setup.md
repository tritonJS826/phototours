# Настройка PostgreSQL через Docker

Этот документ описывает, как настроить и использовать PostgreSQL базу данных через Docker в проекте PhotoTours.

## 🚀 Быстрый старт

### 1. Запуск базы данных

```bash
# Запуск только PostgreSQL
./scripts/db-manager.sh start

# Или через docker-compose
docker-compose -f local.docker-compose.yml up -d postgres-general
```

### 2. Проверка подключения

```bash
# Проверка статуса
./scripts/db-manager.sh status

# Подключение к базе данных
./scripts/db-manager.sh connect
```

## 📋 Конфигурация

### Переменные окружения

Создайте файл `.env` в папке `pt-general/` на основе `env.example`:

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/mastersway_db"
DATABASE_URL_DOCKER="postgresql://postgres:postgres123@postgres-general:5432/mastersway_db"

# Application Configuration
NODE_ENV=development
PORT=3000
```

### Параметры подключения

- **Хост**: `localhost` (для локальной разработки) или `postgres-general` (в Docker)
- **Порт**: `5432`
- **Пользователь**: `postgres`
- **Пароль**: `postgres123`
- **База данных**: `mastersway_db`

## 🛠 Управление базой данных

### Основные команды

```bash
# Запуск
./scripts/db-manager.sh start

# Остановка
./scripts/db-manager.sh stop

# Перезапуск
./scripts/db-manager.sh restart

# Просмотр логов
./scripts/db-manager.sh logs

# Подключение к базе
./scripts/db-manager.sh connect

# Создание резервной копии
./scripts/db-manager.sh backup

# Восстановление из резервной копии
./scripts/db-manager.sh restore backup_20240101_120000.sql

# Статус
./scripts/db-manager.sh status
```

### Резервное копирование

```bash
# Создание резервной копии
./scripts/db-manager.sh backup

# Восстановление
./scripts/db-manager.sh restore backup_20240101_120000.sql
```

Резервные копии сохраняются в папку `backups/`.

## 🔧 Настройка Prisma

### Генерация клиента

```bash
cd pt-general
npx prisma generate
```

### Применение миграций

```bash
cd pt-general
npx prisma migrate dev
```

### Просмотр базы данных

```bash
cd pt-general
npx prisma studio
```

## 🐳 Docker Compose

### Полный запуск всех сервисов

```bash
docker-compose -f local.docker-compose.yml up -d
```

### Запуск только базы данных

```bash
docker-compose -f local.docker-compose.yml up -d postgres-general
```

### Остановка всех сервисов

```bash
docker-compose -f local.docker-compose.yml down
```

## 📊 Мониторинг

### Grafana

Grafana доступна по адресу: http://localhost:9876

### Логи PostgreSQL

```bash
# Просмотр логов в реальном времени
docker-compose -f local.docker-compose.yml logs -f postgres-general

# Или через скрипт
./scripts/db-manager.sh logs
```

## 🔍 Отладка

### Проверка подключения

```bash
# Проверка доступности порта
telnet localhost 5432

# Проверка через psql
psql -h localhost -p 5432 -U postgres -d mastersway_db
```

### Частые проблемы

1. **Порт 5432 занят**
   ```bash
   # Остановить локальный PostgreSQL
   sudo service postgresql stop
   ```

2. **Ошибка подключения в Docker**
   ```bash
   # Проверить сеть Docker
   docker network ls
   docker network inspect phototours_app-network
   ```

3. **Проблемы с правами доступа**
   ```bash
   # Пересоздать контейнер
   docker-compose -f local.docker-compose.yml down
   docker-compose -f local.docker-compose.yml up -d postgres-general
   ```

## 📁 Структура файлов

```
phototours/
├── postgres/
│   ├── postgres-general.Dockerfile    # Dockerfile для PostgreSQL
│   ├── postgres-general.init.sql      # Инициализационный скрипт
│   └── postgresql.conf                # Конфигурация PostgreSQL
├── pt-general/
│   ├── prisma/
│   │   └── schema.prisma              # Схема базы данных
│   ├── src/
│   │   └── db/
│   │       └── prisma.ts              # Конфигурация Prisma
│   └── env.example                    # Пример переменных окружения
├── scripts/
│   └── db-manager.sh                  # Скрипт управления БД
└── local.docker-compose.yml           # Docker Compose конфигурация
```

## 🔐 Безопасность

### Рекомендации для продакшена

1. Измените пароли по умолчанию
2. Используйте переменные окружения для секретов
3. Настройте SSL/TLS подключения
4. Ограничьте доступ к базе данных
5. Регулярно создавайте резервные копии

### Пример безопасной конфигурации

```env
# Продакшен переменные
DATABASE_URL="postgresql://user:strong_password@host:5432/dbname?sslmode=require"
POSTGRES_PASSWORD=very_strong_password
```

## 📚 Дополнительные ресурсы

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Docker PostgreSQL](https://hub.docker.com/_/postgres)
- [Docker Compose](https://docs.docker.com/compose/) 