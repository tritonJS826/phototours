DO $$
DECLARE
    -- User IDs
    user1_id UUID := '11111111-1111-1111-1111-111111111101';
    user2_id UUID := '11111111-1111-1111-1111-111111111102';
    user3_id UUID := '11111111-1111-1111-1111-111111111103';
    user4_id UUID := '11111111-1111-1111-1111-111111111104';
    user5_id UUID := '11111111-1111-1111-1111-111111111105';
    user6_id UUID := '11111111-1111-1111-1111-111111111106';
    user7_id UUID := '11111111-1111-1111-1111-111111111107';
    user8_id UUID := '11111111-1111-1111-1111-111111111108';
    user9_id UUID := '11111111-1111-1111-1111-111111111109';
    user10_id UUID := '11111111-1111-1111-1111-111111111110';

    -- Guide IDs
    guide1_id UUID := '22222222-2222-2222-2222-222222222201';
    guide2_id UUID := '22222222-2222-2222-2222-222222222202';
    guide3_id UUID := '22222222-2222-2222-2222-222222222203';
    guide4_id UUID := '22222222-2222-2222-2222-222222222204';
    guide5_id UUID := '22222222-2222-2222-2222-222222222205';

    -- Tour IDs
    tour1_id UUID := '33333333-3333-3333-3333-333333333301';
    tour2_id UUID := '33333333-3333-3333-3333-333333333302';
    tour3_id UUID := '33333333-3333-3333-3333-333333333303';
    tour4_id UUID := '33333333-3333-3333-3333-333333333304';
    tour5_id UUID := '33333333-3333-3333-3333-333333333305';

    -- Tour Date IDs
    tour_date1_id UUID := '44444444-4444-4444-4444-444444444401';
    tour_date2_id UUID := '44444444-4444-4444-4444-444444444402';
    tour_date3_id UUID := '44444444-4444-4444-4444-444444444403';
    tour_date4_id UUID := '44444444-4444-4444-4444-444444444404';
    tour_date5_id UUID := '44444444-4444-4444-4444-444444444405';

    -- Booking IDs
    booking1_id UUID := '55555555-5555-5555-5555-555555555501';
    booking2_id UUID := '55555555-5555-5555-5555-555555555502';
    booking3_id UUID := '55555555-5555-5555-5555-555555555503';
    booking4_id UUID := '55555555-5555-5555-5555-555555555504';
    booking5_id UUID := '55555555-5555-5555-5555-555555555505';
BEGIN

-- USERS
INSERT INTO users (id, email, password, first_name, last_name, role)
VALUES
  (user1_id, 'guide1@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'John', 'Mitchell', 'GUIDE'),
  (user2_id, 'guide2@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Sarah', 'Williams', 'GUIDE'),
  (user3_id, 'client1@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Michael', 'Brown', 'CLIENT'),
  (user4_id, 'client2@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Emily', 'Davis', 'CLIENT'),
  (user5_id, 'guide3@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Jake', 'Thompson', 'GUIDE'),
  (user6_id, 'guide4@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Jessica', 'Martinez', 'GUIDE'),
  (user7_id, 'client3@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'David', 'Johnson', 'CLIENT'),
  (user8_id, 'client4@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Amanda', 'Wilson', 'CLIENT'),
  (user9_id, 'guide5@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Chris', 'Anderson', 'GUIDE'),
  (user10_id, 'client5@example.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjYyNzM1ODIsInJvbGUiOiJDTElFTlQiLCJzdWIiOjF9.2HEDJzhIEr3sjuNXEVfB3-Yr5X1AdzAdNVjWOZaGP9Y', 'Lauren', 'Taylor', 'CLIENT');

-- GUIDES
INSERT INTO guides (id, user_id, experience, specializations)
VALUES
  (guide1_id, user1_id, '8 years of experience in national park hiking tours', ARRAY['mountains','nature']),
  (guide2_id, user2_id, 'Expert in American history and cultural city tours', ARRAY['history','culture']),
  (guide3_id, user5_id, 'Professional wildlife photographer and outdoor explorer', ARRAY['photography','nature']),
  (guide4_id, user6_id, 'Certified whitewater rafting and kayaking instructor', ARRAY['water','adventure']),
  (guide5_id, user9_id, 'California wine country and culinary specialist', ARRAY['food','wine','culture']);

-- TOURS
INSERT INTO tours (
  id, slug, title, description, difficulty, price, program, guide_id,
  cover_url, duration_days, end_location, start_location,
  available_months, languages, min_age
)
VALUES
  (tour1_id, 'grand-canyon-hiking-2025', 'Photography Tour in Tuscany in Spring',
   'Spring Tuscany — the emerald hills of Val d’Orcia and Crete Senesi, sunrises and mist — impressions and images that will stay with you for a lifetime',
   'MEDIUM', 1250.00,
   '{"days":[{"day":1,"plan":"DAY 1. ARRIVAL. FIUMICINO","description":"Meeting at Fiumicino Airport. For smooth logistics, please arrive in the first half of the day — or come one day earlier. In that case, we’ll pick you up from your hotel in the morning.\n\nWe’ll start with lunch at a seaside restaurant on Lungomare di Salute. This street in Fiumicino is famous for its seafood restaurants loved by locals. There are no tourists, the staff doesn’t speak English, and the prices are pleasantly moderate — a true Roman experience.\n\nAfter lunch, we’ll head to Tuscany and check into our base — and this place deserves a special mention. It’s Poggio Covili, a historic estate and one of the most iconic and beautiful locations in Tuscany. In the evening, we’ll photograph it at sunset so you can enjoy a relaxed first shooting session after the trip.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"},{"day":2,"plan":"DAY 2. PIENZA","description":"At sunrise we will go to the most beautiful place in Tuscany, the quintessence of the best views of Val d’Orcia — the panoramic viewpoint of the town of Pienza. With good light conditions, and especially if we are lucky with fog, you can return from here with a dozen unique and magnificent shots.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"},{"day":3,"plan":"DAY 3. PODERE BELVEDERE","description":"We will meet the sunrise at perhaps the most photographed location in all of Tuscany — Podere Belvedere. This truly iconic spot looks equally stunning at both sunrise and sunset. After the morning shoot, we’ll enjoy a coffee in the medieval town of San Quirico d’Orcia.\n\nThen we’ll return to our villa for a midday rest, and in the evening we’ll head out to capture the most famous little chapel in the Tuscan fields — Madonna di Vitaleta. If we’re efficient, we’ll have the chance to photograph it from different angles, using both wide-angle and telephoto lenses.\n\nWe’ll end the day with dinner at one of our favourite restaurants — Fonte Alla Vena. This cozy trattoria has a true country soul: wooden beams, simple tablecloths, bottles of homemade olive oil and wine. It’s a place for honest food: local vegetables, pasta, pici with rich sauces, and Cinta Senese pork prepared using the family recipes that Luciano, the owner, is always happy to share with us.\n\nYou will need lenses up to 400 mm. After the shoot, we will have a cappuccino with a dolce in a café on the central square, and then you will have time to take a leisurely walk through the streets of the town, lovingly designed and built by Pope Pius II on the site of his native village. Pienza is also the homeland of the most delicious sheep cheese in the world — pecorino.\n\nThen we will return to our house to rest, and in the evening we will go to shoot one of the iconic views of the small chapel of Madonna di Vitaleta. A pleasant 10-minute walk awaits us directly to the chapel. Afterwards — a wonderful dinner and relaxation.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___2572_65%D1%85138-200dpi_202-Edit_bl1mdd.avif"},{"day":4,"plan":"DAY 4. SAN GIMIGNANO","description":"On this day we’ll wake up earlier than ever — it’s our longest morning drive, about 1.5 hours. We will meet the rising sun overlooking the \"Medieval Manhattan\" — the town of San Gimignano, famous for its 13 towering stone skyscrapers built by noble families centuries ago.\n\nAfter the sunrise shoot, we’ll enjoy a morning coffee at Marcella’s chocolaterie, known for her incredibly delicious dolci. Then we’ll take a slow walk through the charming streets of this remarkable town, visit the Duomo — one of its frescoes was painted by Ghirlandaio himself — and climb the tallest tower, Torre Municipale, for magnificent views.\n\nNext, we’ll head to Siena for lunch at the historic Taverna San Giuseppe, famous for its tagliolini with truffles. Afterwards, we’ll explore Siena’s medieval streets and visit the Siena Duomo — one of the most stunning Gothic cathedrals in Italy.\n\nWe’ll climb to a panoramic terrace to photograph the city from above and relax on the legendary Piazza del Campo, where the Palio horse race takes place. In the evening, we’ll return home for dinner at a cozy trattoria near our villa.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___1337705-Pano-Edit_142%D1%85109-200dpi-Edit_ivizwp.avif"},{"day":5,"plan":"DAY 5. MACCIANO","description":"Our sunrise shoot is planned in the valley near Macciano: smooth rolling fields opening up in the first light of dawn, solitary farmhouses, and — if we’re lucky — a soft veil of morning mist. This is the essence of warm springtime Tuscany.\n\nWe will photograph the landscape from several more viewpoints, including the iconic shot from La Foce, and then head for a morning coffee in the small, completely non-touristic town of Cetona.\n\nAfter a gentle morning walk, we’ll try to visit the gallery of well-known Tuscan artists Tazio Angellini and Fausta Ottolini, located in an ancient 10th-century cantina. We’ll enjoy a glass of chilled prosecco with Fausta — depending on how she’s feeling.\n\nAfter lunch at the best restaurant in town, we’ll finish the day with a sunset shoot at Podere Belvedere.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"},{"day":6,"plan":"DAY 6. MONTALCINO","description":"Our sunrise location offers breathtaking views of Val d’Orcia from the hilltop town of Montalcino — the birthplace of Brunello di Montalcino.\n\nAfter our morning shoot and a walk through town, we’ll enjoy a tasting of the best Brunellos at the winemakers association inside the medieval fortress La Fortezza.\n\nFollowing a midday rest, we’ll visit the ancient Abbey of Sant’Antimo, founded by Charlemagne. In the afternoon, we’ll continue our wine journey with tastings at small local producers.\n\nWe’ll finish the day with a sunset shoot in the fields near Torrenieri.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"},{"day":7,"plan":"DAY 7. PITIGLIANO","description":"We will greet the new day in Pitigliano, a dramatic town perched on a massive tuff cliff. After the sunrise shoot, we’ll enjoy a slow walk through town, visit the Duomo, and explore the catacombs carved into the rock.\n\nOur friends will show us their underground chambers and offer their famous homemade salsa. Later, we’ll relax at the Saturnia hot springs.\n\nAt sunset, we’ll photograph the medieval town of Sorano. Dinner will be at Sette di Vino in Pienza — a cozy osteria loved by locals for its honest, cheese-driven cuisine.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886465/tuscan-spring___1337204-Edit_copy1_ft81tv.avif"},{"day":8,"plan":"DAY 8. CRETE SENESI","description":"We’ll greet the sunrise near the village of Mucigliano, surrounded by classic Tuscan landscapes still unknown to most tourists. On our way back, we’ll drive along the stunning roads of Crete Senesi, stopping often to photograph the rolling hills.\n\nAfter a longer siesta, we’ll photograph the iconic Podere Baccoleno at sunset, with its elegant cypress-lined road.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring___1337705_98x132_200dpi_217-Edit_zcc3nn.avif"},{"day":9,"plan":"DAY 9. BAGNO VIGNONI & SAN GALGANO","description":"We’ll welcome sunrise in Bagno Vignoni, famous for its ancient thermal pool and beloved by Tarkovsky.\n\nWith a view of the main pool, we’ll enjoy our morning cappuccino and then visit Sarteano to taste freshly pressed olive oil, and Radicofani, home to an original Andrea della Robbia majolica.\n\nLater we’ll soak in the natural hot springs at Bagni San Filippo. In the evening, we’ll photograph the roofless monastery of San Galgano and see the legendary sword in the stone. We’ll finish with a farewell dinner at one of the best restaurants in the region.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__180R1797_j6wetk.avif"},{"day":10,"plan":"DAY 10. ROME. DEPARTURE","description":"In the morning, we will choose the final sunrise location based on the weather forecast. After the shoot, we will head to Rome and arrive at Fiumicino Airport at approximately 12:00.\n\nYour return flight should be scheduled for the second half of the day. Those who wish to spend additional time exploring Rome will be taken directly to the city.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__400mm-f5_6-1s-iso200_ra1vyo.avif"}]}',
   guide1_id,
   '/images/1.avif', 5, 'North Rim', 'South Rim',
   ARRAY['March','April','May','September','October'], ARRAY['English','Spanish'], 16),

  (tour2_id, 'new-york-history-tour', 'Historic Walk Through New York City',
   'Explore the hidden historical gems of NYC with a local expert.',
   'EASY', 180.00,
   '{"days":[{"day":1,"plan":"Statue of Liberty and Ellis Island"},{"day":2,"plan":"Lower Manhattan and 9/11 Memorial"}]}',
   guide2_id,
   '/images/2.avif', 2, 'Times Square', 'Battery Park',
   ARRAY['April','May','September','October','November'], ARRAY['English','Spanish','French'], 12),

  (tour3_id, 'colorado-river-rafting', 'Colorado River Whitewater Rafting',
   'Adrenaline-filled whitewater rafting experience through stunning canyons.',
   'HARD', 650.00,
   '{"days":[{"day":1,"plan":"Arrival and safety training"},{"day":2,"plan":"Class III-IV rapids adventure"},{"day":3,"plan":"Canyon exploration and departure"}]}',
   guide4_id,
   '/images/3.avif', 3, 'Moab', 'Grand Junction',
   ARRAY['May','June','July','August'], ARRAY['English','Spanish'], 18),

  (tour4_id, 'yellowstone-photo-tour', 'Yellowstone Photo Expedition',
   'A 7-day tour for photographers exploring Americas first national park.',
   'MEDIUM', 1800.00,
   '{"days":[{"day":1,"plan":"Arrival in Jackson Hole"},{"day":2,"plan":"Old Faithful and geyser basins"},{"day":3,"plan":"Grand Prismatic Spring sunrise"},{"day":4,"plan":"Lamar Valley wildlife"},{"day":5,"plan":"Mammoth Hot Springs"},{"day":6,"plan":"Yellowstone Lake"},{"day":7,"plan":"Final shots and departure"}]}',
   guide3_id,
   '/images/4.avif', 7, 'West Yellowstone', 'Jackson Hole',
   ARRAY['May','June','September'], ARRAY['English','Japanese'], 18),

  (tour5_id, 'napa-valley-wine-road', 'Napa Valley Wine and Culinary Tour',
   'Taste the finest wines and cuisine across California wine country.',
   'EASY', 950.00,
   '{"days":[{"day":1,"plan":"Arrival in San Francisco"},{"day":2,"plan":"Napa Valley vineyard tours"},{"day":3,"plan":"Sonoma County exploration"},{"day":4,"plan":"Farm-to-table experience and departure"}]}',
   guide5_id,
   '/images/5.avif', 4, 'Sonoma', 'San Francisco',
   ARRAY['April','May','September','October','November'], ARRAY['English','Spanish'], 21);

-- TOUR DATES
INSERT INTO tour_dates (id, tour_id, date_from, date_to, group_size, is_available)
VALUES
  (tour_date1_id, tour1_id, '2025-04-15', '2025-04-19', 12, TRUE),  -- 5 days
  (tour_date2_id, tour1_id, '2025-05-20', '2025-05-24', 10, TRUE),  -- 5 days
  (tour_date3_id, tour2_id, '2025-04-10', '2025-04-11', 20, TRUE),  -- 2 days
  (tour_date4_id, tour3_id, '2025-06-05', '2025-06-07', 6, TRUE),   -- 3 days
  (tour_date5_id, tour5_id, '2025-05-18', '2025-05-21', 12, TRUE);  -- 4 days

-- MATERIALS
INSERT INTO tour_materials (tour_id, title, url, type)
VALUES
  (tour1_id, 'Grand Canyon Trail Guide', 'https://example.com/grand-canyon-guide.pdf', 'PDF'),
  (tour1_id, 'Hiking Preparation Video', 'https://example.com/gc-prep-video.mp4', 'VIDEO'),
  (tour2_id, 'NYC Historical Map', 'https://example.com/nyc-history-map.pdf', 'PDF'),
  (tour2_id, 'Manhattan Walking Guide', 'https://example.com/manhattan-guide.pdf', 'PDF'),
  (tour3_id, 'Rafting Safety Manual', 'https://example.com/rafting-safety.pdf', 'PDF'),
  (tour3_id, 'Whitewater Training Video', 'https://example.com/rafting-training.mp4', 'VIDEO'),
  (tour4_id, 'Wildlife Photography Tips', 'https://example.com/wildlife-photo-tips.pdf', 'PDF'),
  (tour5_id, 'Napa Valley Wine Map', 'https://example.com/napa-wine-map.pdf', 'PDF'),
  (tour5_id, 'Wine Tasting Guide Video', 'https://example.com/wine-tasting.mp4', 'VIDEO');

-- PHOTOS
INSERT INTO photos (tour_id, url, description)
VALUES
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886477/tuscan-spring__Untitled_Panorama2_114%D1%85249-200dpi_299-Edit_tebrjd.avif', 'Sunrise over the Grand Canyon'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__Untitled_Panorama1_65%D1%8587-200dpi_100-Edit_sprpmc.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8829-1_86x56_x5eivl.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__OSKIN_3950_fdilkc.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886475/tuscan-spring__OSKIN_218_43%D1%8572-200dpi_sy8xug.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMGP0277_68%D1%8593-200dpi-Edit_fful6e.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__FUJI8847-Pano-Pano-Dehancer_copy_lgg7p7.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMG_1698_69%D1%8546-200dpi_2_zsq3qn.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring___IGP6527_Panorama-Edit_copy_a2einq.avif', 'Group on Bright Angel Trail'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__AA8B2655_43%D1%8573-200dpi_113-Edit_lykwgv.avif', 'Group on Bright Angel Trail'),
  
  (tour2_id, 'https://example.com/nyc-photo1.jpg', 'Statue of Liberty'),
  (tour2_id, 'https://example.com/nyc-photo2.jpg', 'Brooklyn Bridge at sunset'),
  (tour3_id, 'https://example.com/rafting-photo1.jpg', 'Navigating Class IV rapids'),
  (tour3_id, 'https://example.com/rafting-photo2.jpg', 'Canyon campsite under stars'),
  (tour4_id, 'https://example.com/yellowstone-photo1.jpg', 'Old Faithful eruption'),
  (tour5_id, 'https://example.com/napa-photo1.jpg', 'Napa Valley vineyards at golden hour');

-- VIDEOS
INSERT INTO videos (tour_id, url, description)
VALUES
  (tour1_id, 'https://example.com/gc-video.mp4', 'Grand Canyon hiking highlights'),
  (tour2_id, 'https://example.com/nyc-video.mp4', 'New York City history tour'),
  (tour3_id, 'https://example.com/rafting-video.mp4', 'Colorado River rafting adventure'),
  (tour4_id, 'https://example.com/yellowstone-video.mp4', 'Yellowstone wildlife encounters'),
  (tour5_id, 'https://example.com/napa-video.mp4', 'Napa Valley wine experience');

-- TAGS
INSERT INTO tags (name) VALUES
  ('hiking'), ('nature'), ('city'), ('history'), ('culture'),
  ('adventure'), ('photography'), ('food'), ('wine'), ('rafting')
ON CONFLICT (name) DO NOTHING;

-- TOUR TAGS
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour1_id FROM tags WHERE name IN ('hiking', 'nature', 'adventure');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour2_id FROM tags WHERE name IN ('city', 'history', 'culture');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour3_id FROM tags WHERE name IN ('adventure', 'rafting', 'nature');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour4_id FROM tags WHERE name IN ('photography', 'nature');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour5_id FROM tags WHERE name IN ('food', 'wine', 'culture');

-- CATEGORIES
INSERT INTO categories (name) VALUES
  ('Outdoor'), ('Adventure'), ('Cultural'), ('Urban'), ('Food & Wine'), ('Photography')
ON CONFLICT (name) DO NOTHING;

-- TOUR CATEGORIES
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour1_id FROM categories WHERE name IN ('Outdoor', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour2_id FROM categories WHERE name IN ('Cultural', 'Urban');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour3_id FROM categories WHERE name IN ('Outdoor', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour4_id FROM categories WHERE name IN ('Outdoor', 'Photography');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour5_id FROM categories WHERE name IN ('Food & Wine', 'Cultural');

-- BOOKINGS
INSERT INTO bookings (id, tour_date_id, user_id, status, participants, total_price)
VALUES
  (booking1_id, tour_date1_id, user3_id, 'CONFIRMED', 2, 2500.00),
  (booking2_id, tour_date3_id, user4_id, 'PENDING', 1, 180.00),
  (booking3_id, tour_date4_id, user7_id, 'CONFIRMED', 3, 1950.00),
  (booking4_id, tour_date5_id, user8_id, 'CANCELLED', 2, 3600.00),
  (booking5_id, tour_date5_id, user10_id, 'CONFIRMED', 1, 950.00);

-- PAYMENTS
INSERT INTO payments (booking_id, amount, payment_method, status, transaction_id)
VALUES
  (booking1_id, 2500.00, 'CARD', 'COMPLETED', 'TXN123ABC'),
  (booking2_id, 180.00, 'PAYPAL', 'PENDING', 'TXN987XYZ'),
  (booking3_id, 1950.00, 'BANK_TRANSFER', 'COMPLETED', 'TXN654QWE'),
  (booking4_id, 3600.00, 'CARD', 'REFUNDED', 'TXN444RTY'),
  (booking5_id, 950.00, 'CARD', 'COMPLETED', 'TXN999BNM');

-- REVIEWS
INSERT INTO reviews (tour_id, user_id, rating, comment)
VALUES
  -- Tour 1: Grand Canyon Hiking (3 reviews)
  (tour1_id, user3_id, 5, 'Absolutely breathtaking views! John was an amazing guide.'),
  (tour1_id, user4_id, 4, 'Great experience, though the hike was more challenging than expected.'),
  (tour1_id, user7_id, 5, 'Best hiking trip of my life. Highly recommend!'),

  -- Tour 2: NYC History Tour (2 reviews)
  (tour2_id, user3_id, 4, 'Sarah knows so much about NYC history. Learned a lot!'),
  (tour2_id, user10_id, 5, 'Perfect tour for history lovers. Well organized.'),

  -- Tour 3: Colorado River Rafting (4 reviews)
  (tour3_id, user4_id, 5, 'Adrenaline rush! The rapids were incredible.'),
  (tour3_id, user7_id, 5, 'Professional guides and top-notch safety equipment.'),
  (tour3_id, user8_id, 4, 'Amazing adventure, but bring waterproof bags for your stuff.'),
  (tour3_id, user10_id, 5, 'Worth every penny. Cant wait to do it again!'),

  -- Tour 4: Yellowstone Photo Tour (1 review)
  (tour4_id, user3_id, 5, 'Jake helped me capture shots I never thought possible.'),

  -- Tour 5: Napa Valley Wine Tour (3 reviews)
  (tour5_id, user4_id, 4, 'Delicious wines and beautiful scenery.'),
  (tour5_id, user7_id, 5, 'The farm-to-table dinner was unforgettable!'),
  (tour5_id, user8_id, 4, 'Great tour, wish it was a bit longer.');

END $$;
