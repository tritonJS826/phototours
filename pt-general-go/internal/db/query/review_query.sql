-- name: GetReviewsByTourID :many
SELECT
    id,
    tour_id,
    user_id,
    rating,
    comment,
    created_at
FROM reviews
WHERE tour_id = $1
ORDER BY created_at DESC;

-- name: GetReviewAmountAndStarAmount :one
SELECT
    COUNT(*) as review_amount,
    COALESCE(ROUND(AVG(rating)::numeric, 1), 0)::float8 as star_amount
FROM reviews
WHERE tour_id = $1;
