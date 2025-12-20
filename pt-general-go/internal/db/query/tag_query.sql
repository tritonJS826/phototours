-- name: GetTagsByTourID :many
SELECT
  t.id,
  t.name
FROM tour_tags tt
  JOIN tags t ON tt.tag_id = t.id
WHERE tt.tour_id = $1;

-- name: GetTagsByTourIDs :many
SELECT
  tt.tour_id,
  t.id,
  t.name
FROM tour_tags tt
  JOIN tags t ON tt.tag_id = t.id
WHERE tt.tour_id = ANY($1::int[]);
