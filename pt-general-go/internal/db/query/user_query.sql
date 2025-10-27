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
    $1, $2, $3, $4, $5, $6, $7, $8
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
WHERE id = $1;

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
WHERE email = $1;

-- name: UpdateUser :one
UPDATE users
SET
    first_name = COALESCE(sqlc.narg('first_name'), first_name),
    last_name = COALESCE(sqlc.narg('last_name'), last_name),
    phone = COALESCE(sqlc.narg('phone'), phone),
    bio = COALESCE(sqlc.narg('bio'), bio),
    profile_pic_url = COALESCE(sqlc.narg('profile_pic_url'), profile_pic_url)
WHERE id = $1
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
SET password = $1
WHERE id = $2
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
