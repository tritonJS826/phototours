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

-- name: GetArticleByID :one
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
WHERE id = @id;

-- name: CreateArticle :one
INSERT INTO articles (
    slug,
    title,
    excerpt,
    content,
    cover_url,
    alt,
    author,
    featured,
    blocks
) VALUES (
    @slug,
    @title,
    @excerpt,
    @content,
    @cover_url,
    @alt,
    @author,
    @featured,
    @blocks
)
RETURNING
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
    blocks;

-- name: UpdateArticle :one
UPDATE articles
SET
    slug = COALESCE(@slug, slug),
    title = COALESCE(@title, title),
    excerpt = COALESCE(@excerpt, excerpt),
    content = COALESCE(@content, content),
    cover_url = COALESCE(@cover_url, cover_url),
    alt = COALESCE(@alt, alt),
    author = COALESCE(@author, author),
    featured = COALESCE(@featured, featured),
    blocks = COALESCE(@blocks, blocks),
    updated_at = CURRENT_TIMESTAMP
WHERE id = @id
RETURNING
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
    updated_at,
    blocks;

-- name: DeleteArticle :exec
DELETE FROM articles WHERE id = @id;
