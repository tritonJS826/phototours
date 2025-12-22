-- name: CreateUser :one
INSERT INTO users (
    email,
    password,
    first_name,
    last_name,
    phone,
    bio,
    profile_pic_url,
    role
)
VALUES (
    @email,
    @password,
    @first_name,
    @last_name,
    @phone,
    @bio,
    @profile_pic_url,
    @role
)
RETURNING
  id,
  email,
  password,
  first_name,
  last_name,
  phone,
  bio,
  profile_pic_url,
  role,
  created_at,
  updated_at;

-- name: GetUserByID :one
SELECT
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
    bio,
    profile_pic_url,
    role,
    created_at,
    updated_at
FROM users
WHERE id = @id;

-- name: GetUserByEmail :one
SELECT
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
    bio,
    profile_pic_url,
    role,
    created_at,
    updated_at
FROM users
WHERE email = @email;

-- name: GetUsers :many
SELECT
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
    bio,
    profile_pic_url,
    role,
    created_at,
    updated_at
FROM users
ORDER BY created_at DESC
LIMIT @limit_count OFFSET @offset_count;

-- name: UpdateUser :one
UPDATE users
SET
    first_name = COALESCE(sqlc.narg('first_name'), first_name),
    last_name = COALESCE(sqlc.narg('last_name'), last_name),
    phone = COALESCE(sqlc.narg('phone'), phone),
    bio = COALESCE(sqlc.narg('bio'), bio),
    profile_pic_url = COALESCE(sqlc.narg('profile_pic_url'), profile_pic_url)
WHERE id = @id
RETURNING
  id,
  email,
  password,
  first_name,
  last_name,
  phone,
  bio,
  profile_pic_url,
  role,
  created_at,
  updated_at;

-- name: UpdateUserPassword :one
UPDATE users
SET password = @password
WHERE id = @id
RETURNING
  id,
  email,
  password,
  first_name,
  last_name,
  phone,
  bio,
  profile_pic_url,
  role,
  created_at,
  updated_at;
