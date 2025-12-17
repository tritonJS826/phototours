DO $$
BEGIN

-- USERS
INSERT INTO users (id, email, password, first_name, last_name, role)
VALUES
  (1, 'guide1@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'John', 'Mitchell', 'GUIDE'),
  (2, 'guide2@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Sarah', 'Williams', 'GUIDE'),
  (3, 'client1@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Michael', 'Brown', 'CLIENT'),
  (4, 'client2@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Emily', 'Davis', 'CLIENT'),
  (5, 'guide3@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Jake', 'Thompson', 'GUIDE'),
  (6, 'guide4@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Jessica', 'Martinez', 'GUIDE'),
  (7, 'client3@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'David', 'Johnson', 'CLIENT'),
  (8, 'client4@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Amanda', 'Wilson', 'CLIENT'),
  (9, 'guide5@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Chris', 'Anderson', 'GUIDE'),
  (10, 'client5@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Lauren', 'Taylor', 'CLIENT');

-- GUIDES
INSERT INTO guides (id, user_id, experience, specializations)
VALUES
  (1, 1, '8 years of experience in national park hiking tours', ARRAY['mountains','nature']),
  (2, 2, 'Expert in American history and cultural city tours', ARRAY['history','culture']),
  (3, 5, 'Professional wildlife photographer and outdoor explorer', ARRAY['photography','nature']),
  (4, 6, 'Certified whitewater rafting and kayaking instructor', ARRAY['water','adventure']),
  (5, 9, 'California wine country and culinary specialist', ARRAY['food','wine','culture']);

-- TOURS
INSERT INTO tours (
  id, slug, title, description, difficulty, price, program, guide_id,
  cover_url, duration_days, end_location, start_location,
  available_months, languages, min_age
)
VALUES
  (1, 'grand-canyon-hiking-2025', 'Grand Canyon Hiking Adventure',
   'A 5-day hiking tour through the majestic Grand Canyon trails.',
   'MEDIUM', 1250.00,
   '{"days":[{"day":1,"plan":"Arrival at South Rim and orientation"},{"day":2,"plan":"Bright Angel Trail hike"},{"day":3,"plan":"Rim-to-Rim preparation"},{"day":4,"plan":"North Kaibab Trail exploration"},{"day":5,"plan":"Sunrise hike and departure"}]}',
   1,
   '/images/1.avif', 5, 'North Rim', 'South Rim',
   ARRAY['March','April','May','September','October'], ARRAY['English','Spanish'], 16),

  (2, 'new-york-history-tour', 'Historic Walk Through New York City',
   'Explore the hidden historical gems of NYC with a local expert.',
   'EASY', 180.00,
   '{"days":[{"day":1,"plan":"Statue of Liberty and Ellis Island"},{"day":2,"plan":"Lower Manhattan and 9/11 Memorial"}]}',
   2,
   '/images/2.avif', 2, 'Times Square', 'Battery Park',
   ARRAY['April','May','September','October','November'], ARRAY['English','Spanish','French'], 12),

  (3, 'colorado-river-rafting', 'Colorado River Whitewater Rafting',
   'Adrenaline-filled whitewater rafting experience through stunning canyons.',
   'HARD', 650.00,
   '{"days":[{"day":1,"plan":"Arrival and safety training"},{"day":2,"plan":"Class III-IV rapids adventure"},{"day":3,"plan":"Canyon exploration and departure"}]}',
   4,
   '/images/3.avif', 3, 'Moab', 'Grand Junction',
   ARRAY['May','June','July','August'], ARRAY['English','Spanish'], 18),

  (4, 'yellowstone-photo-tour', 'Yellowstone Photo Expedition',
   'A 7-day tour for photographers exploring Americas first national park.',
   'MEDIUM', 1800.00,
   '{"days":[{"day":1,"plan":"Arrival in Jackson Hole"},{"day":2,"plan":"Old Faithful and geyser basins"},{"day":3,"plan":"Grand Prismatic Spring sunrise"},{"day":4,"plan":"Lamar Valley wildlife"},{"day":5,"plan":"Mammoth Hot Springs"},{"day":6,"plan":"Yellowstone Lake"},{"day":7,"plan":"Final shots and departure"}]}',
   3,
   '/images/4.avif', 7, 'West Yellowstone', 'Jackson Hole',
   ARRAY['May','June','September'], ARRAY['English','Japanese'], 18),

  (5, 'napa-valley-wine-road', 'Napa Valley Wine and Culinary Tour',
   'Taste the finest wines and cuisine across California wine country.',
   'EASY', 950.00,
   '{"days":[{"day":1,"plan":"Arrival in San Francisco"},{"day":2,"plan":"Napa Valley vineyard tours"},{"day":3,"plan":"Sonoma County exploration"},{"day":4,"plan":"Farm-to-table experience and departure"}]}',
   5,
   '/images/5.avif', 4, 'Sonoma', 'San Francisco',
   ARRAY['April','May','September','October','November'], ARRAY['English','Spanish'], 21);

-- TOUR DATES
INSERT INTO tour_dates (tour_id, date, group_size, is_available)
VALUES
  (1, '2025-04-15', 12, TRUE),
  (1, '2025-05-20', 10, TRUE),
  (1, '2025-09-10', 8, TRUE),
  (2, '2025-04-10', 20, TRUE),
  (2, '2025-05-12', 25, TRUE),
  (2, '2025-10-18', 15, TRUE),
  (3, '2025-06-05', 6, TRUE),
  (3, '2025-07-15', 8, TRUE),
  (4, '2025-05-01', 8, TRUE),
  (4, '2025-09-10', 10, TRUE),
  (5, '2025-05-18', 12, TRUE),
  (5, '2025-10-25', 14, TRUE);

-- MATERIALS
INSERT INTO tour_materials (tour_id, title, url, type)
VALUES
  (1, 'Grand Canyon Trail Guide', 'https://example.com/grand-canyon-guide.pdf', 'PDF'),
  (1, 'Hiking Preparation Video', 'https://example.com/gc-prep-video.mp4', 'VIDEO'),
  (2, 'NYC Historical Map', 'https://example.com/nyc-history-map.pdf', 'PDF'),
  (2, 'Manhattan Walking Guide', 'https://example.com/manhattan-guide.pdf', 'PDF'),
  (3, 'Rafting Safety Manual', 'https://example.com/rafting-safety.pdf', 'PDF'),
  (3, 'Whitewater Training Video', 'https://example.com/rafting-training.mp4', 'VIDEO'),
  (4, 'Wildlife Photography Tips', 'https://example.com/wildlife-photo-tips.pdf', 'PDF'),
  (5, 'Napa Valley Wine Map', 'https://example.com/napa-wine-map.pdf', 'PDF'),
  (5, 'Wine Tasting Guide Video', 'https://example.com/wine-tasting.mp4', 'VIDEO');

-- PHOTOS
INSERT INTO photos (tour_id, url, description)
VALUES
  (1, 'https://example.com/gc-photo1.jpg', 'Sunrise over the Grand Canyon'),
  (1, 'https://example.com/gc-photo2.jpg', 'Group on Bright Angel Trail'),
  (2, 'https://example.com/nyc-photo1.jpg', 'Statue of Liberty'),
  (2, 'https://example.com/nyc-photo2.jpg', 'Brooklyn Bridge at sunset'),
  (3, 'https://example.com/rafting-photo1.jpg', 'Navigating Class IV rapids'),
  (3, 'https://example.com/rafting-photo2.jpg', 'Canyon campsite under stars'),
  (4, 'https://example.com/yellowstone-photo1.jpg', 'Old Faithful eruption'),
  (5, 'https://example.com/napa-photo1.jpg', 'Napa Valley vineyards at golden hour');

-- VIDEOS
INSERT INTO videos (tour_id, url, description)
VALUES
  (1, 'https://example.com/gc-video.mp4', 'Grand Canyon hiking highlights'),
  (2, 'https://example.com/nyc-video.mp4', 'New York City history tour'),
  (3, 'https://example.com/rafting-video.mp4', 'Colorado River rafting adventure'),
  (4, 'https://example.com/yellowstone-video.mp4', 'Yellowstone wildlife encounters'),
  (5, 'https://example.com/napa-video.mp4', 'Napa Valley wine experience');

-- TAGS
INSERT INTO tags (name) VALUES
  ('hiking'), ('nature'), ('city'), ('history'), ('culture'),
  ('adventure'), ('photography'), ('food'), ('wine'), ('rafting')
ON CONFLICT (name) DO NOTHING;

-- TOUR TAGS
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, 1 FROM tags WHERE name IN ('hiking', 'nature', 'adventure');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, 2 FROM tags WHERE name IN ('city', 'history', 'culture');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, 3 FROM tags WHERE name IN ('adventure', 'rafting', 'nature');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, 4 FROM tags WHERE name IN ('photography', 'nature');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, 5 FROM tags WHERE name IN ('food', 'wine', 'culture');

-- CATEGORIES
INSERT INTO categories (name) VALUES
  ('Outdoor'), ('Adventure'), ('Cultural'), ('Urban'), ('Food & Wine'), ('Photography')
ON CONFLICT (name) DO NOTHING;

-- TOUR CATEGORIES
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, 1 FROM categories WHERE name IN ('Outdoor', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, 2 FROM categories WHERE name IN ('Cultural', 'Urban');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, 3 FROM categories WHERE name IN ('Outdoor', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, 4 FROM categories WHERE name IN ('Outdoor', 'Photography');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, 5 FROM categories WHERE name IN ('Food & Wine', 'Cultural');

-- BOOKINGS
INSERT INTO bookings (tour_id, user_id, status, participants, total_price)
VALUES
  (1, 3, 'CONFIRMED', 2, 2500.00),
  (2, 4, 'PENDING', 1, 180.00),
  (3, 7, 'CONFIRMED', 3, 1950.00),
  (4, 8, 'CANCELLED', 2, 3600.00),
  (5, 10, 'CONFIRMED', 1, 950.00);

-- PAYMENTS
INSERT INTO payments (booking_id, amount, payment_method, status, transaction_id)
VALUES
  (1, 2500.00, 'CARD', 'COMPLETED', 'TXN123ABC'),
  (2, 180.00, 'PAYPAL', 'PENDING', 'TXN987XYZ'),
  (3, 1950.00, 'BANK_TRANSFER', 'COMPLETED', 'TXN654QWE'),
  (4, 3600.00, 'CARD', 'REFUNDED', 'TXN444RTY'),
  (5, 950.00, 'CARD', 'COMPLETED', 'TXN999BNM');

-- REVIEWS
INSERT INTO reviews (tour_id, user_id, rating, comment)
VALUES
  -- Tour 1: Grand Canyon Hiking (3 reviews)
  (1, 3, 5, 'Absolutely breathtaking views! John was an amazing guide.'),
  (1, 4, 4, 'Great experience, though the hike was more challenging than expected.'),
  (1, 7, 5, 'Best hiking trip of my life. Highly recommend!'),

  -- Tour 2: NYC History Tour (2 reviews)
  (2, 3, 4, 'Sarah knows so much about NYC history. Learned a lot!'),
  (2, 10, 5, 'Perfect tour for history lovers. Well organized.'),

  -- Tour 3: Colorado River Rafting (4 reviews)
  (3, 4, 5, 'Adrenaline rush! The rapids were incredible.'),
  (3, 7, 5, 'Professional guides and top-notch safety equipment.'),
  (3, 8, 4, 'Amazing adventure, but bring waterproof bags for your stuff.'),
  (3, 10, 5, 'Worth every penny. Cant wait to do it again!'),

  -- Tour 4: Yellowstone Photo Tour (1 review)
  (4, 3, 5, 'Jake helped me capture shots I never thought possible.'),

  -- Tour 5: Napa Valley Wine Tour (3 reviews)
  (5, 4, 4, 'Delicious wines and beautiful scenery.'),
  (5, 7, 5, 'The farm-to-table dinner was unforgettable!'),
  (5, 8, 4, 'Great tour, wish it was a bit longer.');

-- Update sequences to avoid conflicts
PERFORM setval(pg_get_serial_sequence('users', 'id'), COALESCE((SELECT MAX(id) FROM users), 1));
PERFORM setval(pg_get_serial_sequence('guides', 'id'), COALESCE((SELECT MAX(id) FROM guides), 1));
PERFORM setval(pg_get_serial_sequence('tours', 'id'), COALESCE((SELECT MAX(id) FROM tours), 1));
PERFORM setval(pg_get_serial_sequence('bookings', 'id'), COALESCE((SELECT MAX(id) FROM bookings), 1));
PERFORM setval(pg_get_serial_sequence('payments', 'id'), COALESCE((SELECT MAX(id) FROM payments), 1));
PERFORM setval(pg_get_serial_sequence('reviews', 'id'), COALESCE((SELECT MAX(id) FROM reviews), 1));

END $$;
