-- name: CreateBookingRequest :one
INSERT INTO booking_requests (
    name,
    phone
)
VALUES (
    @name,
    @phone
)
RETURNING
  id,
  name,
  phone,
  created_at,
  updated_at;
