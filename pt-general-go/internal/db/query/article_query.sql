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
LIMIT $1 OFFSET $2;

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
WHERE slug = $1;
