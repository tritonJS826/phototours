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
