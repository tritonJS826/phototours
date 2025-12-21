-- name: GetGuideWithUserByID :one
SELECT
  guides.id                 AS guide_id,
  guides.user_id            AS guide_user_id,
  guides.experience         AS guide_experience,
  guides.specializations    AS guide_specializations,
  guides.created_at         AS guide_created_at,
  guides.updated_at         AS guide_updated_at,

  users.id                 AS user_id,
  users.email              AS user_email,
  users.first_name         AS user_first_name,
  users.last_name          AS user_last_name,
  users.phone              AS user_phone,
  users.bio                AS user_bio,
  users.profile_pic_url    AS user_profile_pic_url,
  users.role               AS user_role,
  users.created_at         AS user_created_at,
  users.updated_at         AS user_updated_at
FROM guides
JOIN users ON guides.user_id = users.id
WHERE guides.id = @id;

-- name: GetGuidesWithUserByIDs :many
SELECT
  guides.id                 AS guide_id,
  guides.user_id            AS guide_user_id,
  guides.experience         AS guide_experience,
  guides.specializations    AS guide_specializations,
  guides.created_at         AS guide_created_at,
  guides.updated_at         AS guide_updated_at,

  users.id                 AS user_id,
  users.email              AS user_email,
  users.first_name         AS user_first_name,
  users.last_name          AS user_last_name,
  users.phone              AS user_phone,
  users.bio                AS user_bio,
  users.profile_pic_url    AS user_profile_pic_url,
  users.role               AS user_role,
  users.created_at         AS user_created_at,
  users.updated_at         AS user_updated_at
FROM guides
JOIN users ON guides.user_id = users.id
WHERE guides.id = ANY(@ids::uuid[]);
