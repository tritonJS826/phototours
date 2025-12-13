-- name: GetPhotosByTourID :many
SELECT
	id,
	tour_id,
	url,
	description,
	created_at
FROM photos
WHERE tour_id = $1;
