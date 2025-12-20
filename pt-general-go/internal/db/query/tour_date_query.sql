-- name: GetTourDatesByTourID :many
SELECT
    id,
    tour_id,
    date,
    group_size,
    is_available,
    created_at,
    updated_at
FROM tour_dates
WHERE tour_id = $1;

-- name: GetTourDatesByTourIDs :many
SELECT
    id,
    tour_id,
    date,
    group_size,
    is_available,
    created_at,
    updated_at
FROM tour_dates
WHERE tour_id = ANY($1::int[]);
