-- name: GetTourDatesByTourID :many
SELECT
    id,
    tour_id,
    date_from,
    date_to,
    group_size,
    is_available,
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
    created_at,
    updated_at
FROM tour_dates
WHERE tour_id = ANY(@tour_ids::uuid[]);
