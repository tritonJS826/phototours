package domain

import "time"

type Role string

const (
	RoleAdmin  Role = "ADMIN"
	RoleClient Role = "CLIENT"
)

type User struct {
	ID            int32     `json:"id"`
	FirstName     string    `json:"firstName"`
	LastName      string    `json:"lastName"`
	Email         string    `json:"email"`
	Password      string    `json:"-"`
	Role          Role      `json:"role"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
	Phone         *string   `json:"phone,omitempty"`
	ProfilePicURL *string   `json:"profilePicUrl,omitempty"`
	Bio           *string   `json:"bio,omitempty"`
}

// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   first_name TEXT NOT NULL,
//   last_name TEXT NOT NULL,
//   email TEXT UNIQUE NOT NULL,
//   password TEXT NOT NULL,
//   phone TEXT,
//   role TEXT NOT NULL DEFAULT 'CLIENT',
//   bio TEXT,
//   profile_pic_url TEXT,
//   created_at TIMESTAMP DEFAULT NOW()
// );

// -- name: CreateUser :one
// INSERT INTO users (
//   first_name, last_name, email, password, phone, role
// ) VALUES (
//   $1, $2, $3, $4, $5, $6
// ) RETURNING *;
//
// -- name: GetUserByEmail :one
// SELECT * FROM users WHERE email = $1;
//
// -- name: GetUserByID :one
// SELECT * FROM users WHERE id = $1;
//
// -- name: UpdateUserPassword :exec
// UPDATE users SET password = $2 WHERE id = $1;
//
// -- name: UpdateUserProfile :one
// UPDATE users
// SET
//   first_name = COALESCE($2, first_name),
//   last_name  = COALESCE($3, last_name),
//   phone      = $4,
//   bio        = $5,
//   profile_pic_url = $6
// WHERE id = $1
// RETURNING *;
