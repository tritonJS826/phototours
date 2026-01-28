-- name: CreateTourActivity :one
INSERT INTO tour_activities (tour_id, activity)
VALUES (@tour_id, @activity)
RETURNING id, tour_id, activity, created_at;

-- name: DeleteTourActivity :exec
DELETE FROM tour_activities WHERE id = @id;

-- name: DeleteTourActivitiesByTourID :exec
DELETE FROM tour_activities WHERE tour_id = @tour_id;

-- name: GetTourActivitiesByTourID :many
SELECT id, tour_id, activity, created_at
FROM tour_activities
WHERE tour_id = @tour_id
ORDER BY created_at ASC;

-- name: GetTourActivitiesByTourIDs :many
SELECT id, tour_id, activity, created_at
FROM tour_activities
WHERE tour_id = ANY(@tour_ids::uuid[])
ORDER BY created_at ASC;