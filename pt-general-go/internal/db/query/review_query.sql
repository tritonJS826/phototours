-- name: GetReviewsByTourID :many
SELECT
    id,
    tour_id,
    user_id,
    rating,
    comment,
    created_at
FROM reviews
WHERE tour_id = @tour_id
ORDER BY created_at DESC;

-- name: GetReviewAmountAndStarAmount :one
SELECT
    COUNT(*) as review_amount,
    COALESCE(ROUND(AVG(rating)::numeric, 1), 0)::float8 as star_amount
FROM reviews
WHERE tour_id = @tour_id;

-- name: GetReviewsByTourIDs :many
SELECT
    id,
    tour_id,
    user_id,
    rating,
    comment,
    created_at
FROM reviews
WHERE tour_id = ANY(@tour_ids::uuid[])
ORDER BY tour_id, created_at DESC;

-- name: GetReviewAmountAndStarAmountByTourIDs :many
SELECT
    tour_id,
    COUNT(*) as review_amount,
    COALESCE(ROUND(AVG(rating)::numeric, 1), 0)::float8 as star_amount
FROM reviews
WHERE tour_id = ANY(@tour_ids::uuid[])
GROUP BY tour_id;
