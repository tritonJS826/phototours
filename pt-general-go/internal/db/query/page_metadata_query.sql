-- name: CreatePageMetadata :one
INSERT INTO page_metadata (
  url,
  tags
)
VALUES (
    @url, @tags
)
RETURNING
  url,
  tags;

-- name: GetPageMetadata :one
SELECT
    url,
    tags
FROM page_metadata
WHERE url = @url;

-- name: UpdatePageMetadata :one
UPDATE page_metadata
SET
  url = COALESCE(sqlc.narg('new_url'), url),
  tags = COALESCE(sqlc.narg('new_tags'), tags)
WHERE url = @url
RETURNING url, tags;

-- name: DeletePageMetadata :execrows
DELETE FROM page_metadata
WHERE url = @url;
