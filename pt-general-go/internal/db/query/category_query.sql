-- name: GetCategoriesByTourID :many
SELECT
  c.id,
  c.name
FROM tour_categories tc
  JOIN categories c ON tc.category_id = c.id
WHERE tc.tour_id = $1;

-- name: GetCategoriesByTourIDs :many
SELECT
  tc.tour_id,
  c.id,
  c.name
FROM tour_categories tc
  JOIN categories c ON tc.category_id = c.id
WHERE tc.tour_id = ANY($1::int[]);
