-- name: GetArticles :many
SELECT
    id,
    slug,
    title,
    excerpt,
    content,
    cover_url,
    alt,
    author,
    featured,
    created_at,
    blocks
FROM articles
ORDER BY created_at DESC
LIMIT @limit_count OFFSET @offset_count;

-- name: GetArticleBySlug :one
SELECT
    id,
    slug,
    title,
    excerpt,
    content,
    cover_url,
    alt,
    author,
    featured,
    created_at,
    blocks
FROM articles
WHERE slug = @slug;
