#!/bin/bash

# Скрипт для управления базой данных PostgreSQL через Docker

set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функции для вывода
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Проверка наличия Docker
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker не установлен. Пожалуйста, установите Docker."
        exit 1
    fi
    
    if ! docker info &> /dev/null; then
        print_error "Docker не запущен. Пожалуйста, запустите Docker."
        exit 1
    fi
}

# Запуск базы данных
start_db() {
    print_info "Запуск PostgreSQL базы данных..."
    cd "$(dirname "$0")/.."
    
    if docker-compose -f local.docker-compose.yml up -d postgres-general; then
        print_success "PostgreSQL запущен успешно"
        print_info "База данных доступна на localhost:5432"
        print_info "Пользователь: postgres"
        print_info "Пароль: postgres123"
        print_info "База данных: mastersway_db"
    else
        print_error "Ошибка при запуске PostgreSQL"
        exit 1
    fi
}

# Остановка базы данных
stop_db() {
    print_info "Остановка PostgreSQL базы данных..."
    cd "$(dirname "$0")/.."
    
    if docker-compose -f local.docker-compose.yml stop postgres-general; then
        print_success "PostgreSQL остановлен"
    else
        print_error "Ошибка при остановке PostgreSQL"
        exit 1
    fi
}

# Перезапуск базы данных
restart_db() {
    print_info "Перезапуск PostgreSQL базы данных..."
    stop_db
    sleep 2
    start_db
}

# Просмотр логов
logs_db() {
    print_info "Просмотр логов PostgreSQL..."
    cd "$(dirname "$0")/.."
    docker-compose -f local.docker-compose.yml logs -f postgres-general
}

# Подключение к базе данных
connect_db() {
    print_info "Подключение к PostgreSQL..."
    cd "$(dirname "$0")/.."
    
    if docker-compose -f local.docker-compose.yml ps postgres-general | grep -q "Up"; then
        docker-compose -f local.docker-compose.yml exec postgres-general psql -U postgres -d mastersway_db
    else
        print_error "PostgreSQL не запущен. Запустите его командой: $0 start"
        exit 1
    fi
}

# Резервное копирование
backup_db() {
    local backup_file="backup_$(date +%Y%m%d_%H%M%S).sql"
    print_info "Создание резервной копии базы данных..."
    cd "$(dirname "$0")/.."
    
    if docker-compose -f local.docker-compose.yml ps postgres-general | grep -q "Up"; then
        if docker-compose -f local.docker-compose.yml exec -T postgres-general pg_dump -U postgres mastersway_db > "backups/$backup_file"; then
            print_success "Резервная копия создана: backups/$backup_file"
        else
            print_error "Ошибка при создании резервной копии"
            exit 1
        fi
    else
        print_error "PostgreSQL не запущен. Запустите его командой: $0 start"
        exit 1
    fi
}

# Восстановление из резервной копии
restore_db() {
    local backup_file="$1"
    if [ -z "$backup_file" ]; then
        print_error "Укажите файл резервной копии"
        echo "Использование: $0 restore <backup_file>"
        exit 1
    fi
    
    print_info "Восстановление базы данных из резервной копии: $backup_file"
    cd "$(dirname "$0")/.."
    
    if [ ! -f "backups/$backup_file" ]; then
        print_error "Файл резервной копии не найден: backups/$backup_file"
        exit 1
    fi
    
    if docker-compose -f local.docker-compose.yml ps postgres-general | grep -q "Up"; then
        if docker-compose -f local.docker-compose.yml exec -T postgres-general psql -U postgres -d mastersway_db < "backups/$backup_file"; then
            print_success "База данных восстановлена из резервной копии"
        else
            print_error "Ошибка при восстановлении базы данных"
            exit 1
        fi
    else
        print_error "PostgreSQL не запущен. Запустите его командой: $0 start"
        exit 1
    fi
}

# Создание папки для резервных копий
create_backup_dir() {
    mkdir -p "$(dirname "$0")/../backups"
}

# Показать статус
status_db() {
    print_info "Статус PostgreSQL..."
    cd "$(dirname "$0")/.."
    docker-compose -f local.docker-compose.yml ps postgres-general
}

# Показать справку
show_help() {
    echo "Скрипт для управления PostgreSQL базой данных через Docker"
    echo ""
    echo "Использование: $0 <команда>"
    echo ""
    echo "Команды:"
    echo "  start     - Запустить PostgreSQL"
    echo "  stop      - Остановить PostgreSQL"
    echo "  restart   - Перезапустить PostgreSQL"
    echo "  logs      - Показать логи PostgreSQL"
    echo "  connect   - Подключиться к базе данных"
    echo "  backup    - Создать резервную копию"
    echo "  restore   - Восстановить из резервной копии"
    echo "  status    - Показать статус"
    echo "  help      - Показать эту справку"
    echo ""
    echo "Примеры:"
    echo "  $0 start"
    echo "  $0 backup"
    echo "  $0 restore backup_20240101_120000.sql"
}

# Основная логика
main() {
    check_docker
    create_backup_dir
    
    case "${1:-help}" in
        start)
            start_db
            ;;
        stop)
            stop_db
            ;;
        restart)
            restart_db
            ;;
        logs)
            logs_db
            ;;
        connect)
            connect_db
            ;;
        backup)
            backup_db
            ;;
        restore)
            restore_db "$2"
            ;;
        status)
            status_db
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Неизвестная команда: $1"
            show_help
            exit 1
            ;;
    esac
}

# Запуск скрипта
main "$@" 