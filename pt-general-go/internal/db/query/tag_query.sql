-- name: GetTagsByTourID :many
SELECT
  tags.id,
  tags.name
FROM tour_tags
  JOIN tags ON tour_tags.tag_id = tags.id
WHERE tour_tags.tour_id = @tour_id;

-- name: GetTagsByTourIDs :many
SELECT
  tour_tags.tour_id,
  tags.id,
  tags.name
FROM tour_tags
  JOIN tags ON tour_tags.tag_id = tags.id
WHERE tour_tags.tour_id = ANY(@tour_ids::uuid[]);
