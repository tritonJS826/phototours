-- name: GetVideosByTourID :many
SELECT
  id,
  tour_id,
  url,
  description,
  created_at
FROM videos
WHERE tour_id = $1;
