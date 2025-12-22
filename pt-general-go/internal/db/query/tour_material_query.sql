-- name: GetTourMaterialsByTourID :many
SELECT
    id,
    tour_id,
    title,
    url,
    type,
    created_at
FROM tour_materials
WHERE tour_id = @tour_id;

-- name: GetTourMaterialsByTourIDs :many
SELECT
    id,
    tour_id,
    title,
    url,
    type,
    created_at
FROM tour_materials
WHERE tour_id = ANY(@tour_ids::uuid[]);
