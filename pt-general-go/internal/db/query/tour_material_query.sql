-- name: GetTourMaterialsByTourID :many
SELECT
    id,
    tour_id,
    title,
    url,
    type,
    created_at
FROM tour_materials
WHERE tour_id = $1;
