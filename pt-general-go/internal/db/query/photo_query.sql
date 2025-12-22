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
