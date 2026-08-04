-- name: GetTourDatesByTourID :many
SELECT
    id,
    tour_id,
    date_from,
    date_to,
    group_size,
    is_available,
    price,
    description,
    created_at,
    updated_at
FROM tour_dates
WHERE tour_id = @tour_id;

-- name: GetTourDatesByTourIDs :many
SELECT
    id,
    tour_id,
    date_from,
    date_to,
    group_size,
    is_available,
    price,
    description,
    created_at,
    updated_at
FROM tour_dates
WHERE tour_id = ANY(@tour_ids::uuid[]);

-- name: CreateTourDate :one
INSERT INTO tour_dates (id, tour_id, date_from, date_to, group_size, is_available, price, description)
VALUES (@id, @tour_id, @date_from, @date_to, @group_size, @is_available, @price, @description)
RETURNING
    id,
    tour_id,
    date_from,
    date_to,
    group_size,
    is_available,
    price,
    description,
    created_at,
    updated_at;

-- name: UpdateTourDate :one
UPDATE tour_dates
SET
    date_from = @date_from,
    date_to = @date_to,
    group_size = @group_size,
    is_available = @is_available,
    price = @price,
    description = @description
WHERE id = @id
RETURNING
    id,
    tour_id,
    date_from,
    date_to,
    group_size,
    is_available,
    price,
    description,
    created_at,
    updated_at;

-- name: DeleteTourDate :exec
DELETE FROM tour_dates WHERE id = @id;

-- name: DeleteTourDatesByTourID :exec
DELETE FROM tour_dates WHERE tour_id = @tour_id;
