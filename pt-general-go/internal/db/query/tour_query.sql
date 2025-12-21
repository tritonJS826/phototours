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
    @difficulty::difficulty_level,
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
WHERE id = @id;

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
WHERE slug = @slug;

-- name: GetTours :many
SELECT DISTINCT
    tours.id,
    tours.slug,
    tours.title,
    tours.description,
    tours.difficulty,
    tours.price,
    tours.program,
    tours.guide_id,
    tours.cover_url,
    tours.duration_days,
    tours.end_location,
    tours.available_months,
    tours.languages,
    tours.min_age,
    tours.start_location,
    tours.created_at,
    tours.updated_at
FROM tours
LEFT JOIN tour_dates ON tours.id = tour_dates.tour_id AND tour_dates.is_available = TRUE
WHERE
    (sqlc.narg('location')::text IS NULL
        OR tours.start_location ILIKE '%' || sqlc.narg('location')::text || '%'
        OR tours.end_location ILIKE '%' || sqlc.narg('location')::text || '%')
    AND (sqlc.narg('date_from')::timestamp IS NULL OR tour_dates.date_to >= sqlc.narg('date_from')::timestamp)
    AND (sqlc.narg('date_to')::timestamp IS NULL OR tour_dates.date_from <= sqlc.narg('date_to')::timestamp)
    AND (sqlc.narg('group_size')::int IS NULL OR tour_dates.group_size >= sqlc.narg('group_size')::int)
    AND (sqlc.narg('price_min')::float IS NULL OR tours.price >= sqlc.narg('price_min')::float)
    AND (sqlc.narg('price_max')::float IS NULL OR tours.price <= sqlc.narg('price_max')::float)
    AND (sqlc.narg('season_months')::int[] IS NULL OR EXTRACT(MONTH FROM tour_dates.date_from)::int = ANY(sqlc.narg('season_months')::int[]))
ORDER BY tours.created_at DESC
LIMIT @limit_count OFFSET @offset_count;

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
WHERE id = @id;
