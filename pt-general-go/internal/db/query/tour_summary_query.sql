-- name: CreateTourSummary :one
INSERT INTO tour_summary (tour_id, name, value)
VALUES (@tour_id, @name, @value)
RETURNING id, tour_id, name, value, created_at;

-- name: DeleteTourSummary :exec
DELETE FROM tour_summary WHERE id = @id;

-- name: DeleteTourSummaryByTourID :exec
DELETE FROM tour_summary WHERE tour_id = @tour_id;

-- name: GetTourSummaryByTourID :many
SELECT id, tour_id, name, value, created_at
FROM tour_summary
WHERE tour_id = @tour_id
ORDER BY created_at ASC;

-- name: GetTourSummaryByTourIDs :many
SELECT id, tour_id, name, value, created_at
FROM tour_summary
WHERE tour_id = ANY(@tour_ids::uuid[])
ORDER BY created_at ASC;