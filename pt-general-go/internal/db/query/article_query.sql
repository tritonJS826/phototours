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
    published_at
FROM articles
ORDER BY featured DESC, published_at DESC
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
    published_at
FROM articles
WHERE slug = @slug;
