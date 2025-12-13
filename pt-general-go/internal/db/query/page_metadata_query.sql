-- name: CreatePageMetadata :one
INSERT INTO page_metadata (
  url,
  tags
)
VALUES (
    $1, $2
)
RETURNING
  url,
  tags;

-- name: GetPageMetadata :one
SELECT
    url,
    tags
FROM page_metadata
WHERE url = $1;

-- name: UpdatePageMetadata :one
UPDATE page_metadata
SET
  url = COALESCE(sqlc.narg('new_url'), url),
  tags = COALESCE(sqlc.narg('new_tags'), tags)
WHERE url = sqlc.arg('url')
RETURNING url, tags;

-- name: DeletePageMetadata :execrows
DELETE FROM page_metadata
WHERE url = $1;
