-- name: CreateTour :one
INSERT INTO tours (
    title,
    description,
    difficulty,
    program,
    price,
    start_location,
    end_location,
    duration_days,
    min_age,
    cover_url,
    languages,
    available_months,
    guide_id
) VALUES (
    @title,
    @description,
    sqlc.arg(difficulty)::difficulty_level,
    @program,
    sqlc.narg(price),
    sqlc.narg(start_location),
    sqlc.narg(end_location),
    sqlc.narg(duration_days),
    sqlc.narg(min_age),
    sqlc.narg(cover_url),
    @languages,
    @available_months,
    sqlc.narg(guide_id)
) RETURNING
    id,
    slug,
    title,
    description,
    difficulty,
    price,
    program,
    guide_id,
    cover_url,
    duration_days,
    end_location,
    available_months,
    languages,
    min_age,
    start_location,
    created_at,
    updated_at;

-- name: GetTourByID :one
SELECT
    id,
    slug,
    title,
    description,
    difficulty,
    price,
    program,
    guide_id,
    cover_url,
    duration_days,
    end_location,
    available_months,
    languages,
    min_age,
    start_location,
    created_at,
    updated_at
FROM tours
WHERE id = $1;

-- name: GetTourBySlug :one
SELECT
    id,
    slug,
    title,
    description,
    difficulty,
    price,
    program,
    guide_id,
    cover_url,
    duration_days,
    end_location,
    available_months,
    languages,
    min_age,
    start_location,
    created_at,
    updated_at
FROM tours
WHERE slug = $1;

-- name: GetTours :many
SELECT DISTINCT
    t.id,
    t.slug,
    t.title,
    t.description,
    t.difficulty,
    t.price,
    t.program,
    t.guide_id,
    t.cover_url,
    t.duration_days,
    t.end_location,
    t.available_months,
    t.languages,
    t.min_age,
    t.start_location,
    t.created_at,
    t.updated_at
FROM tours t
LEFT JOIN tour_dates td ON t.id = td.tour_id AND td.is_available = TRUE
WHERE
    (sqlc.narg('location')::text IS NULL
        OR t.start_location ILIKE '%' || sqlc.narg('location')::text || '%'
        OR t.end_location ILIKE '%' || sqlc.narg('location')::text || '%')
    AND (sqlc.narg('date_from')::timestamp IS NULL OR td.date >= sqlc.narg('date_from')::timestamp)
    AND (sqlc.narg('date_to')::timestamp IS NULL OR td.date <= sqlc.narg('date_to')::timestamp)
    AND (sqlc.narg('group_size')::int IS NULL OR td.group_size >= sqlc.narg('group_size')::int)
    AND (sqlc.narg('price_min')::float IS NULL OR t.price >= sqlc.narg('price_min')::float)
    AND (sqlc.narg('price_max')::float IS NULL OR t.price <= sqlc.narg('price_max')::float)
    AND (sqlc.narg('season_months')::int[] IS NULL OR EXTRACT(MONTH FROM td.date)::int = ANY(sqlc.narg('season_months')::int[]))
ORDER BY t.created_at DESC
LIMIT $1 OFFSET $2;

-- name: UpdateTourByID :one
UPDATE tours
SET
    title = COALESCE(sqlc.narg(title), title),
    slug = COALESCE(sqlc.narg(slug), slug),
    description = COALESCE(sqlc.narg(description), description),
    difficulty = COALESCE(sqlc.narg(difficulty)::difficulty_level, difficulty),
    program = COALESCE(sqlc.narg(program), program),
    price = COALESCE(sqlc.narg(price), price),
    start_location = COALESCE(sqlc.narg(start_location), start_location),
    end_location = COALESCE(sqlc.narg(end_location), end_location),
    duration_days = COALESCE(sqlc.narg(duration_days), duration_days),
    min_age = COALESCE(sqlc.narg(min_age), min_age),
    cover_url = COALESCE(sqlc.narg(cover_url), cover_url),
    languages = COALESCE(sqlc.narg(languages), languages),
    available_months = COALESCE(sqlc.narg(available_months), available_months),
    guide_id = COALESCE(sqlc.narg(guide_id), guide_id),
    updated_at = NOW()
WHERE id = @id
RETURNING
    id,
    slug,
    title,
    description,
    difficulty,
    price,
    program,
    guide_id,
    cover_url,
    duration_days,
    end_location,
    available_months,
    languages,
    min_age,
    start_location,
    created_at,
    updated_at;

-- name: DeleteTourByID :execrows
DELETE FROM tours
WHERE id = $1;
