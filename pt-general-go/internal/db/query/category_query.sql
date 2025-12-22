-- name: GetCategoriesByTourID :many
SELECT
  categories.id,
  categories.name
FROM tour_categories
  JOIN categories ON tour_categories.category_id = categories.id
WHERE tour_categories.tour_id = @tour_id;

-- name: GetCategoriesByTourIDs :many
SELECT
  tour_categories.tour_id,
  categories.id,
  categories.name
FROM tour_categories
  JOIN categories ON tour_categories.category_id = categories.id
WHERE tour_categories.tour_id = ANY(@tour_ids::uuid[]);
