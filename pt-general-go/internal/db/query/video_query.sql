-- name: GetVideosByTourID :many
SELECT
  id,
  tour_id,
  url,
  description,
  created_at
FROM videos
WHERE tour_id = $1;

-- name: GetVideosByTourIDs :many
SELECT
  id,
  tour_id,
  url,
  description,
  created_at
FROM videos
WHERE tour_id = ANY($1::int[]);
