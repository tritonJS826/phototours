-- name: GetVideosByTourID :many
SELECT
  id,
  tour_id,
  url,
  description,
  created_at
FROM videos
WHERE tour_id = @tour_id;

-- name: GetVideosByTourIDs :many
SELECT
  id,
  tour_id,
  url,
  description,
  created_at
FROM videos
WHERE tour_id = ANY(@tour_ids::uuid[]);
