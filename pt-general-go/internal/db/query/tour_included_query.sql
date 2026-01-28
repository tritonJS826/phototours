-- name: CreateTourIncluded :one
INSERT INTO tour_included (tour_id, included)
VALUES (@tour_id, @included)
RETURNING id, tour_id, included, created_at;

-- name: DeleteTourIncluded :exec
DELETE FROM tour_included WHERE id = @id;

-- name: DeleteTourIncludedByTourID :exec
DELETE FROM tour_included WHERE tour_id = @tour_id;

-- name: GetTourIncludedByTourID :many
SELECT id, tour_id, included, created_at
FROM tour_included
WHERE tour_id = @tour_id
ORDER BY created_at ASC;

-- name: GetTourIncludedByTourIDs :many
SELECT id, tour_id, included, created_at
FROM tour_included
WHERE tour_id = ANY(@tour_ids::uuid[])
ORDER BY created_at ASC;