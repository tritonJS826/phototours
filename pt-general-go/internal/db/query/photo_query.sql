-- name: GetPhotosByTourID :many
SELECT
	id,
	tour_id,
	url,
	description,
	created_at
FROM photos
WHERE tour_id = @tour_id;

-- name: GetPhotosByTourIDs :many
SELECT
	id,
	tour_id,
	url,
	description,
	created_at
FROM photos
WHERE tour_id = ANY(@tour_ids::uuid[]);

-- name: UpdatePhoto :one
UPDATE photos
SET url = @url, description = @description
WHERE id = @id
RETURNING id, tour_id, url, description, created_at;

-- name: CreatePhoto :one
INSERT INTO photos (id, tour_id, url, description)
VALUES (@id, @tour_id, @url, @description)
RETURNING id, tour_id, url, description, created_at;

-- name: DeletePhoto :exec
DELETE FROM photos WHERE id = @id;

-- name: DeletePhotosByTourID :exec
DELETE FROM photos WHERE tour_id = @tour_id;
