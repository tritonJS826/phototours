-- name: GetGuideWithUserByID :one
SELECT
  g.id                 AS guide_id,
  g.user_id            AS guide_user_id,
  g.experience         AS guide_experience,
  g.specializations    AS guide_specializations,
  g.created_at         AS guide_created_at,
  g.updated_at         AS guide_updated_at,

  u.id                 AS user_id,
  u.email              AS user_email,
  u.first_name         AS user_first_name,
  u.last_name          AS user_last_name,
  u.phone              AS user_phone,
  u.bio                AS user_bio,
  u.profile_pic_url    AS user_profile_pic_url,
  u.role               AS user_role,
  u.created_at         AS user_created_at,
  u.updated_at         AS user_updated_at
FROM guides g
JOIN users u ON g.user_id = u.id
WHERE g.id = $1;
