# Система аутентификации

Этот документ описывает реализацию системы регистрации и авторизации пользователей с интеграцией Zoho CRM.

## 🔐 Безопасность

### Хеширование паролей

- Пароли хешируются с помощью **bcrypt** с 12 раундами соли
- В базу данных сохраняется только хешированный пароль
- Пароли **НЕ** передаются в Zoho CRM

### JWT токены

- Используются JWT токены для аутентификации
- Токены содержат ID пользователя
- Время жизни токена: 7 дней (настраивается)

## 📋 API Endpoints

### Регистрация

```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "Иван Иванов",
  "password": "securepassword123",
  "phone": "+7 999 123-45-67",
  "company": "ООО Рога и Копыта"
}
```

**Ответ:**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "Иван Иванов",
    "role": "CLIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Пользователь успешно зарегистрирован"
}
```

### Авторизация

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Ответ:**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "Иван Иванов",
    "role": "CLIENT"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Успешная авторизация"
}
```

### Получение информации о пользователе

```http
GET /api/auth/me
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Обновление профиля

```http
PUT /api/auth/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "name": "Новое имя",
  "bio": "О себе",
  "profilePicUrl": "https://example.com/avatar.jpg"
}
```

### Смена пароля

```http
POST /api/auth/change-password
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```

## 🔗 Интеграция с Zoho CRM

### Что отправляется в Zoho:

- **Имя** (разделяется на First_Name и Last_Name)
- **Email**
- **Телефон** (если указан)
- **Компания** (если указана)
- **Источник лида**: "PhotoTours Website Registration"
- **Описание**: автоматически генерируется

### Что НЕ отправляется в Zoho:

- **Пароль** (никогда не покидает сервер)
- **Хешированный пароль**
- **JWT токены**
- **Другие чувствительные данные**

## 🛠 Установка и настройка

### 1. Установка зависимостей

```bash
cd pt-general
npm install bcryptjs jsonwebtoken
npm install --save-dev @types/bcryptjs @types/jsonwebtoken
```

### 2. Настройка переменных окружения

Создайте файл `.env` на основе `env.example`:

```env
# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-change-this-in-production
JWT_EXPIRES_IN=7d

# Zoho Configuration
ZOHO_CLIENT_ID=your-zoho-client-id
ZOHO_CLIENT_SECRET=your-zoho-client-secret
ZOHO_REDIRECT_URI=http://localhost:8000/auth/zoho/callback
ZOHO_REFRESH_TOKEN=your-zoho-refresh-token
```

### 3. Применение миграций

```bash
npx prisma migrate dev
```

## 🔒 Middleware

### authMiddleware

Проверяет JWT токен и добавляет `userId` в `req`:

```typescript
import { authMiddleware } from "../controllers/authControllers";

app.get("/protected", authMiddleware, (req, res) => {
  const userId = req.userId; // ID пользователя из токена
  // ...
});
```

### roleMiddleware

Проверяет роль пользователя:

```typescript
import { roleMiddleware } from "../controllers/authControllers";

app.get("/admin", authMiddleware, roleMiddleware(["ADMIN"]), (req, res) => {
  // Доступ только для администраторов
});
```

## 📊 Роли пользователей

- **CLIENT** - обычный пользователь (по умолчанию)
- **GUIDE** - гид/экскурсовод
- **ADMIN** - администратор

## 🚀 Примеры использования

### Frontend (JavaScript)

```javascript
// Регистрация
const registerUser = async (userData) => {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Авторизация
const loginUser = async (credentials) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

// Защищенный запрос
const getProfile = async (token) => {
  const response = await fetch("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};
```

### cURL примеры

```bash
# Регистрация
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","password":"password123"}'

# Авторизация
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Получение профиля
curl -X GET http://localhost:8000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔍 Отладка

### Проверка токена

```bash
# Декодирование JWT токена (без проверки подписи)
echo "YOUR_JWT_TOKEN" | cut -d. -f2 | base64 -d | jq
```

### Логи

Система логирует все важные события:

- ✅ Успешная регистрация
- ✅ Успешная авторизация
- ✅ Создание лида в Zoho
- ❌ Ошибки аутентификации
- ❌ Ошибки интеграции с Zoho

## 🛡️ Безопасность

### Рекомендации для продакшена:

1. **Измените JWT_SECRET** на сложный случайный ключ
2. **Настройте HTTPS** для всех запросов
3. **Ограничьте CORS** только нужными доменами
4. **Настройте rate limiting** для предотвращения брутфорса
5. **Используйте переменные окружения** для всех секретов
6. **Регулярно обновляйте зависимости**

### Валидация данных:

- Email проверяется на корректность формата
- Пароль должен содержать минимум 6 символов
- Все обязательные поля проверяются
- Защита от SQL инъекций через Prisma ORM
