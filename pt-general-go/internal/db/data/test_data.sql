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

    tour6_id UUID := '33333333-3333-3333-3333-333333333306';
    tour7_id UUID := '33333333-3333-3333-3333-333333333307';
    tour8_id UUID := '33333333-3333-3333-3333-333333333308';
    tour9_id UUID := '33333333-3333-3333-3333-333333333309';
    tour10_id UUID := '33333333-3333-3333-3333-333333333310';
    tour11_id UUID := '33333333-3333-3333-3333-333333333311';
    tour12_id UUID := '33333333-3333-3333-3333-333333333312';
    tour13_id UUID := '33333333-3333-3333-3333-333333333313';
    tour14_id UUID := '33333333-3333-3333-3333-333333333314';
    tour15_id UUID := '33333333-3333-3333-3333-333333333315';

    -- Tour Date IDs
    tour_date1_id UUID := '44444444-4444-4444-4444-444444444401';
    tour_date2_id UUID := '44444444-4444-4444-4444-444444444402';
    tour_date3_id UUID := '44444444-4444-4444-4444-444444444403';
    tour_date4_id UUID := '44444444-4444-4444-4444-444444444404';
    tour_date5_id UUID := '44444444-4444-4444-4444-444444444405';
    tour_date6_id UUID := '44444444-4444-4444-4444-444444444406';
    tour_date7_id UUID := '44444444-4444-4444-4444-444444444407';
    tour_date8_id UUID := '44444444-4444-4444-4444-444444444408';
    tour_date9_id UUID := '44444444-4444-4444-4444-444444444409';

    tour_date16_id UUID := '44444444-4444-4444-4444-444444444416';
    tour_date17_id UUID := '44444444-4444-4444-4444-444444444417';
    tour_date18_id UUID := '44444444-4444-4444-4444-444444444418';
    tour_date19_id UUID := '44444444-4444-4444-4444-444444444419';
    tour_date20_id UUID := '44444444-4444-4444-4444-444444444420';
    tour_date21_id UUID := '44444444-4444-4444-4444-444444444421';
    tour_date22_id UUID := '44444444-4444-4444-4444-444444444422';
    tour_date23_id UUID := '44444444-4444-4444-4444-444444444423';
    tour_date24_id UUID := '44444444-4444-4444-4444-444444444424';
    tour_date25_id UUID := '44444444-4444-4444-4444-444444444425';
    tour_date26_id UUID := '44444444-4444-4444-4444-444444444426';
    tour_date27_id UUID := '44444444-4444-4444-4444-444444444427';
    tour_date28_id UUID := '44444444-4444-4444-4444-444444444428';
    tour_date29_id UUID := '44444444-4444-4444-4444-444444444429';
    tour_date30_id UUID := '44444444-4444-4444-4444-444444444430';
    tour_date31_id UUID := '44444444-4444-4444-4444-444444444431';
    tour_date32_id UUID := '44444444-4444-4444-4444-444444444432';
    tour_date33_id UUID := '44444444-4444-4444-4444-444444444433';
    tour_date34_id UUID := '44444444-4444-4444-4444-444444444434';
    tour_date35_id UUID := '44444444-4444-4444-4444-444444444435';
    tour_date36_id UUID := '44444444-4444-4444-4444-444444444436';
    tour_date37_id UUID := '44444444-4444-4444-4444-444444444437';
    tour_date38_id UUID := '44444444-4444-4444-4444-444444444438';
    tour_date39_id UUID := '44444444-4444-4444-4444-444444444439';
    tour_date40_id UUID := '44444444-4444-4444-4444-444444444440';
    tour_date41_id UUID := '44444444-4444-4444-4444-444444444441';
    tour_date42_id UUID := '44444444-4444-4444-4444-444444444442';
    tour_date43_id UUID := '44444444-4444-4444-4444-444444444443';
    tour_date44_id UUID := '44444444-4444-4444-4444-444444444444';
    tour_date45_id UUID := '44444444-4444-4444-4444-444444444445';
    tour_date46_id UUID := '44444444-4444-4444-4444-444444444446';
    tour_date47_id UUID := '44444444-4444-4444-4444-444444444447';
    tour_date48_id UUID := '44444444-4444-4444-4444-444444444448';
    tour_date49_id UUID := '44444444-4444-4444-4444-444444444449';
    tour_date50_id UUID := '44444444-4444-4444-4444-444444444450';
    tour_date51_id UUID := '44444444-4444-4444-4444-444444444451';
    tour_date52_id UUID := '44444444-4444-4444-4444-444444444452';
    tour_date53_id UUID := '44444444-4444-4444-4444-444444444453';
    tour_date54_id UUID := '44444444-4444-4444-4444-444444444454';
    tour_date55_id UUID := '44444444-4444-4444-4444-444444444455';
    tour_date56_id UUID := '44444444-4444-4444-4444-444444444456';
    tour_date57_id UUID := '44444444-4444-4444-4444-444444444457';


    -- Booking IDs
    booking1_id UUID := '55555555-5555-5555-5555-555555555501';
    booking2_id UUID := '55555555-5555-5555-5555-555555555502';
    booking3_id UUID := '55555555-5555-5555-5555-555555555503';
    booking4_id UUID := '55555555-5555-5555-5555-555555555504';
    booking5_id UUID := '55555555-5555-5555-5555-555555555505';

    -- Activities IDs
    tour_activity1_id UUID := '66666666-6666-6666-6666-666666666601';
    tour_activity2_id UUID := '66666666-6666-6666-6666-666666666602';
    tour_activity3_id UUID := '66666666-6666-6666-6666-666666666603';
    tour_activity4_id UUID := '66666666-6666-6666-6666-666666666604';
    tour_activity5_id UUID := '66666666-6666-6666-6666-666666666605';
    tour_activity6_id UUID := '66666666-6666-6666-6666-666666666606';
    tour_activity7_id UUID := '66666666-6666-6666-6666-666666666607';
    tour_activity8_id UUID := '66666666-6666-6666-6666-666666666608';
    tour_activity9_id UUID := '66666666-6666-6666-6666-666666666609';
    tour_activity10_id UUID := '66666666-6666-6666-6666-666666666610';
    tour_activity11_id UUID := '66666666-6666-6666-6666-666666666611';
    tour_activity12_id UUID := '66666666-6666-6666-6666-666666666612';
    tour_activity13_id UUID := '66666666-6666-6666-6666-666666666613';
    tour_activity14_id UUID := '66666666-6666-6666-6666-666666666614';
    tour_activity15_id UUID := '66666666-6666-6666-6666-666666666615';
    tour_activity16_id UUID := '66666666-6666-6666-6666-666666666616';
    tour_activity17_id UUID := '66666666-6666-6666-6666-666666666617';
    tour_activity18_id UUID := '66666666-6666-6666-6666-666666666618';
    tour_activity19_id UUID := '66666666-6666-6666-6666-666666666619';
    tour_activity20_id UUID := '66666666-6666-6666-6666-666666666620';
    tour_activity21_id UUID := '66666666-6666-6666-6666-666666666621';
    tour_activity22_id UUID := '66666666-6666-6666-6666-666666666622';
    tour_activity23_id UUID := '66666666-6666-6666-6666-666666666623';
    tour_activity24_id UUID := '66666666-6666-6666-6666-666666666624';
    tour_activity25_id UUID := '66666666-6666-6666-6666-666666666625';
    tour_activity26_id UUID := '66666666-6666-6666-6666-666666666626';
    tour_activity27_id UUID := '66666666-6666-6666-6666-666666666627';
    tour_activity28_id UUID := '66666666-6666-6666-6666-666666666628';
    tour_activity29_id UUID := '66666666-6666-6666-6666-666666666629';
    tour_activity30_id UUID := '66666666-6666-6666-6666-666666666630';
    tour_activity31_id UUID := '66666666-6666-6666-6666-666666666631';
    tour_activity32_id UUID := '66666666-6666-6666-6666-666666666632';
    tour_activity33_id UUID := '66666666-6666-6666-6666-666666666633';
    tour_activity34_id UUID := '66666666-6666-6666-6666-666666666634';
    tour_activity35_id UUID := '66666666-6666-6666-6666-666666666635';
    tour_activity36_id UUID := '66666666-6666-6666-6666-666666666636';
    tour_activity37_id UUID := '66666666-6666-6666-6666-666666666637';
    tour_activity38_id UUID := '66666666-6666-6666-6666-666666666638';
    tour_activity39_id UUID := '66666666-6666-6666-6666-666666666639';
    tour_activity40_id UUID := '66666666-6666-6666-6666-666666666640';
    tour_activity41_id UUID := '66666666-6666-6666-6666-666666666641';
    tour_activity42_id UUID := '66666666-6666-6666-6666-666666666642';
    tour_activity43_id UUID := '66666666-6666-6666-6666-666666666643';
    tour_activity44_id UUID := '66666666-6666-6666-6666-666666666644';
    tour_activity45_id UUID := '66666666-6666-6666-6666-666666666645';
    tour_activity46_id UUID := '66666666-6666-6666-6666-666666666646';
    tour_activity47_id UUID := '66666666-6666-6666-6666-666666666647';
    tour_activity48_id UUID := '66666666-6666-6666-6666-666666666648';
    tour_activity49_id UUID := '66666666-6666-6666-6666-666666666649';
    tour_activity50_id UUID := '66666666-6666-6666-6666-666666666650';
    tour_activity51_id UUID := '66666666-6666-6666-6666-666666666651';
    tour_activity52_id UUID := '66666666-6666-6666-6666-666666666652';
    tour_activity53_id UUID := '66666666-6666-6666-6666-666666666653';
    tour_activity54_id UUID := '66666666-6666-6666-6666-666666666654';
    tour_activity55_id UUID := '66666666-6666-6666-6666-666666666655';
    tour_activity56_id UUID := '66666666-6666-6666-6666-666666666656';
    tour_activity57_id UUID := '66666666-6666-6666-6666-666666666657';
    tour_activity58_id UUID := '66666666-6666-6666-6666-666666666658';
    tour_activity59_id UUID := '66666666-6666-6666-6666-666666666659';
    tour_activity60_id UUID := '66666666-6666-6666-6666-666666666660';
    tour_activity61_id UUID := '66666666-6666-6666-6666-666666666661';
    tour_activity62_id UUID := '66666666-6666-6666-6666-666666666662';

    -- Tour summary IDs
    tour_summary1_id UUID := '77777777-7777-7777-7777-777777777701';
    tour_summary2_id UUID := '77777777-7777-7777-7777-777777777702';
    tour_summary3_id UUID := '77777777-7777-7777-7777-777777777703';
    tour_summary4_id UUID := '77777777-7777-7777-7777-777777777704';
    tour_summary5_id UUID := '77777777-7777-7777-7777-777777777705';
    tour_summary6_id UUID := '77777777-7777-7777-7777-777777777706';
    tour_summary7_id UUID := '77777777-7777-7777-7777-777777777707';
    tour_summary8_id UUID := '77777777-7777-7777-7777-777777777708';
    tour_summary9_id UUID := '77777777-7777-7777-7777-777777777709';
    tour_summary10_id UUID := '77777777-7777-7777-7777-777777777710';
    tour_summary11_id UUID := '77777777-7777-7777-7777-777777777711';
    tour_summary12_id UUID := '77777777-7777-7777-7777-777777777712';
    tour_summary13_id UUID := '77777777-7777-7777-7777-777777777713';
    tour_summary14_id UUID := '77777777-7777-7777-7777-777777777714';
    tour_summary15_id UUID := '77777777-7777-7777-7777-777777777715';
    tour_summary16_id UUID := '77777777-7777-7777-7777-777777777716';
    tour_summary17_id UUID := '77777777-7777-7777-7777-777777777717';
    tour_summary18_id UUID := '77777777-7777-7777-7777-777777777718';
    tour_summary19_id UUID := '77777777-7777-7777-7777-777777777719';
    tour_summary20_id UUID := '77777777-7777-7777-7777-777777777720';
    tour_summary21_id UUID := '77777777-7777-7777-7777-777777777721';
    tour_summary22_id UUID := '77777777-7777-7777-7777-777777777722';
    tour_summary23_id UUID := '77777777-7777-7777-7777-777777777723';
    tour_summary24_id UUID := '77777777-7777-7777-7777-777777777724';
    tour_summary25_id UUID := '77777777-7777-7777-7777-777777777725';
    tour_summary26_id UUID := '77777777-7777-7777-7777-777777777726';
    tour_summary27_id UUID := '77777777-7777-7777-7777-777777777727';
    tour_summary28_id UUID := '77777777-7777-7777-7777-777777777728';
    tour_summary29_id UUID := '77777777-7777-7777-7777-777777777729';
    tour_summary30_id UUID := '77777777-7777-7777-7777-777777777730';
    tour_summary31_id UUID := '77777777-7777-7777-7777-777777777731';
    tour_summary32_id UUID := '77777777-7777-7777-7777-777777777732';
    tour_summary33_id UUID := '77777777-7777-7777-7777-777777777733';
    tour_summary34_id UUID := '77777777-7777-7777-7777-777777777734';
    tour_summary35_id UUID := '77777777-7777-7777-7777-777777777735';
    tour_summary36_id UUID := '77777777-7777-7777-7777-777777777736';
    tour_summary37_id UUID := '77777777-7777-7777-7777-777777777737';
    tour_summary38_id UUID := '77777777-7777-7777-7777-777777777738';
    tour_summary39_id UUID := '77777777-7777-7777-7777-777777777739';
    tour_summary40_id UUID := '77777777-7777-7777-7777-777777777740';
    tour_summary41_id UUID := '77777777-7777-7777-7777-777777777741';
    tour_summary42_id UUID := '77777777-7777-7777-7777-777777777742';
    tour_summary43_id UUID := '77777777-7777-7777-7777-777777777743';
    tour_summary44_id UUID := '77777777-7777-7777-7777-777777777744';
    tour_summary45_id UUID := '77777777-7777-7777-7777-777777777745';
    tour_summary46_id UUID := '77777777-7777-7777-7777-777777777746';
    tour_summary47_id UUID := '77777777-7777-7777-7777-777777777747';
    tour_summary48_id UUID := '77777777-7777-7777-7777-777777777748';
    tour_summary49_id UUID := '77777777-7777-7777-7777-777777777749';
    tour_summary50_id UUID := '77777777-7777-7777-7777-777777777750';
    tour_summary51_id UUID := '77777777-7777-7777-7777-777777777751';
    tour_summary52_id UUID := '77777777-7777-7777-7777-777777777752';
    tour_summary53_id UUID := '77777777-7777-7777-7777-777777777753';
    tour_summary54_id UUID := '77777777-7777-7777-7777-777777777754';
    tour_summary55_id UUID := '77777777-7777-7777-7777-777777777755';
    tour_summary56_id UUID := '77777777-7777-7777-7777-777777777756';
    tour_summary57_id UUID := '77777777-7777-7777-7777-777777777757';
    tour_summary58_id UUID := '77777777-7777-7777-7777-777777777758';
    tour_summary59_id UUID := '77777777-7777-7777-7777-777777777759';
    tour_summary60_id UUID := '77777777-7777-7777-7777-777777777760';
    tour_summary61_id UUID := '77777777-7777-7777-7777-777777777761';
    tour_summary62_id UUID := '77777777-7777-7777-7777-777777777762';
    tour_summary63_id UUID := '77777777-7777-7777-7777-777777777763';
    tour_summary64_id UUID := '77777777-7777-7777-7777-777777777764';
    tour_summary65_id UUID := '77777777-7777-7777-7777-777777777765';
    tour_summary66_id UUID := '77777777-7777-7777-7777-777777777766';
    tour_summary67_id UUID := '77777777-7777-7777-7777-777777777767';
    tour_summary68_id UUID := '77777777-7777-7777-7777-777777777768';
    tour_summary69_id UUID := '77777777-7777-7777-7777-777777777769';
    tour_summary71_id UUID := '77777777-7777-7777-7777-777777777771';
    tour_summary70_id UUID := '77777777-7777-7777-7777-777777777770';
    tour_summary72_id UUID := '77777777-7777-7777-7777-777777777772';

    -- Tour included IDs
    tour_included1_id UUID := '88888888-8888-8888-8888-888888888801';
    tour_included2_id UUID := '88888888-8888-8888-8888-888888888802';
    tour_included3_id UUID := '88888888-8888-8888-8888-888888888803';
    tour_included4_id UUID := '88888888-8888-8888-8888-888888888804';
    tour_included5_id UUID := '88888888-8888-8888-8888-888888888805';
    tour_included6_id UUID := '88888888-8888-8888-8888-888888888806';
    tour_included7_id UUID := '88888888-8888-8888-8888-888888888807';
    tour_included8_id UUID := '88888888-8888-8888-8888-888888888808';
    tour_included9_id UUID := '88888888-8888-8888-8888-888888888809';
    tour_included10_id UUID := '88888888-8888-8888-8888-888888888810';
    tour_included11_id UUID := '88888888-8888-8888-8888-888888888811';
    tour_included12_id UUID := '88888888-8888-8888-8888-888888888812';
    tour_included13_id UUID := '88888888-8888-8888-8888-888888888813';
    tour_included14_id UUID := '88888888-8888-8888-8888-888888888814';
    tour_included15_id UUID := '88888888-8888-8888-8888-888888888815';
    tour_included16_id UUID := '88888888-8888-8888-8888-888888888816';
    tour_included17_id UUID := '88888888-8888-8888-8888-888888888817';
    tour_included18_id UUID := '88888888-8888-8888-8888-888888888818';
    tour_included19_id UUID := '88888888-8888-8888-8888-888888888819';
    tour_included20_id UUID := '88888888-8888-8888-8888-888888888820';
    tour_included21_id UUID := '88888888-8888-8888-8888-888888888821';
    tour_included22_id UUID := '88888888-8888-8888-8888-888888888822';
    tour_included23_id UUID := '88888888-8888-8888-8888-888888888823';
    tour_included24_id UUID := '88888888-8888-8888-8888-888888888824';
    tour_included25_id UUID := '88888888-8888-8888-8888-888888888825';
    tour_included26_id UUID := '88888888-8888-8888-8888-888888888826';
    tour_included27_id UUID := '88888888-8888-8888-8888-888888888827';
    tour_included28_id UUID := '88888888-8888-8888-8888-888888888828';
    tour_included29_id UUID := '88888888-8888-8888-8888-888888888829';
    tour_included30_id UUID := '88888888-8888-8888-8888-888888888830';
    tour_included31_id UUID := '88888888-8888-8888-8888-888888888831';
    tour_included32_id UUID := '88888888-8888-8888-8888-888888888832';
    tour_included33_id UUID := '88888888-8888-8888-8888-888888888833';
    tour_included34_id UUID := '88888888-8888-8888-8888-888888888834';
    tour_included35_id UUID := '88888888-8888-8888-8888-888888888835';
    tour_included36_id UUID := '88888888-8888-8888-8888-888888888836';
    tour_included37_id UUID := '88888888-8888-8888-8888-888888888837';
    tour_included38_id UUID := '88888888-8888-8888-8888-888888888838';
    tour_included39_id UUID := '88888888-8888-8888-8888-888888888839';
    tour_included40_id UUID := '88888888-8888-8888-8888-888888888840';
    tour_included41_id UUID := '88888888-8888-8888-8888-888888888841';
    tour_included42_id UUID := '88888888-8888-8888-8888-888888888842';
    tour_included43_id UUID := '88888888-8888-8888-8888-888888888843';
    tour_included44_id UUID := '88888888-8888-8888-8888-888888888844';
    tour_included45_id UUID := '88888888-8888-8888-8888-888888888845';
    tour_included46_id UUID := '88888888-8888-8888-8888-888888888846';
    tour_included47_id UUID := '88888888-8888-8888-8888-888888888847';
    tour_included48_id UUID := '88888888-8888-8888-8888-888888888848';
    tour_included49_id UUID := '88888888-8888-8888-8888-888888888849';
    tour_included50_id UUID := '88888888-8888-8888-8888-888888888850';
    tour_included51_id UUID := '88888888-8888-8888-8888-888888888851';
    tour_included52_id UUID := '88888888-8888-8888-8888-888888888852';
    tour_included53_id UUID := '88888888-8888-8888-8888-888888888853';
    tour_included54_id UUID := '88888888-8888-8888-8888-888888888854';
    tour_included55_id UUID := '88888888-8888-8888-8888-888888888855';
    tour_included56_id UUID := '88888888-8888-8888-8888-888888888856';
    tour_included57_id UUID := '88888888-8888-8888-8888-888888888857';
    tour_included58_id UUID := '88888888-8888-8888-8888-888888888858';
    tour_included59_id UUID := '88888888-8888-8888-8888-888888888859';
    tour_included60_id UUID := '88888888-8888-8888-8888-888888888860';
    tour_included61_id UUID := '88888888-8888-8888-8888-888888888861';
    tour_included62_id UUID := '88888888-8888-8888-8888-888888888862';
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
   (tour1_id, 'tuscany-spring-photo-tour', 'Spring Tuscany | Italy Photography Workshop',
    'About Our Tuscany Spring Photo Expedition\n\nCapture the essence of Italy on our Spring Tuscany Photo Tour. Experience the iconic emerald hills of the Val d''Orcia, misty sunrises at Podere Belvedere, and the medieval charm of Pienza. This immersive landscape photography workshop features expert-led shoots, cypress alleys, and the hidden gems of the region. Limited to a small group for a 10-day tour. Book your photography adventure today!',
    'EASY', 3250.00,
   '{"days":[{"day":1,"plan":"ARRIVAL. FIUMICINO","description":"Meeting at Fiumicino Airport. For smooth logistics, please arrive in the first half of the day — or come one day earlier. In that case, we’ll pick you up from your hotel in the morning.\n\nWe’ll start with lunch at a seaside restaurant on Lungomare di Salute. This street in Fiumicino is famous for its seafood restaurants loved by locals. There are no tourists, the staff doesn’t speak English, and the prices are pleasantly moderate — a true Roman experience.\n\nAfter lunch, we’ll head to Tuscany and check into our base — and this place deserves a special mention. It’s Poggio Covili, a historic estate and one of the most iconic and beautiful locations in Tuscany. In the evening, we’ll photograph it at sunset so you can enjoy a relaxed first shooting session after the trip.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"},{"day":2,"plan":"PIENZA","description":"At sunrise we will go to the most beautiful place in Tuscany, the quintessence of the best views of Val d’Orcia — the panoramic viewpoint of the town of Pienza. With good light conditions, and especially if we are lucky with fog, you can return from here with a dozen unique and magnificent shots.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"},{"day":3,"plan":"PODERE BELVEDERE","description":"We will meet the sunrise at perhaps the most photographed location in all of Tuscany — Podere Belvedere. This truly iconic spot looks equally stunning at both sunrise and sunset. After the morning shoot, we’ll enjoy a coffee in the medieval town of San Quirico d’Orcia.\n\nThen we’ll return to our villa for a midday rest, and in the evening we’ll head out to capture the most famous little chapel in the Tuscan fields — Madonna di Vitaleta. If we’re efficient, we’ll have the chance to photograph it from different angles, using both wide-angle and telephoto lenses.\n\nWe’ll end the day with dinner at one of our favourite restaurants — Fonte Alla Vena. This cozy trattoria has a true country soul: wooden beams, simple tablecloths, bottles of homemade olive oil and wine. It’s a place for honest food: local vegetables, pasta, pici with rich sauces, and Cinta Senese pork prepared using the family recipes that Luciano, the owner, is always happy to share with us.\n\nYou will need lenses up to 400 mm. After the shoot, we will have a cappuccino with a dolce in a café on the central square, and then you will have time to take a leisurely walk through the streets of the town, lovingly designed and built by Pope Pius II on the site of his native village. Pienza is also the homeland of the most delicious sheep cheese in the world — pecorino.\n\nThen we will return to our house to rest, and in the evening we will go to shoot one of the iconic views of the small chapel of Madonna di Vitaleta. A pleasant 10-minute walk awaits us directly to the chapel. Afterwards — a wonderful dinner and relaxation.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___2572_65%D1%85138-200dpi_202-Edit_bl1mdd.avif"},{"day":4,"plan":"SAN GIMIGNANO","description":"On this day we’ll wake up earlier than ever — it’s our longest morning drive, about 1.5 hours. We will meet the rising sun overlooking the \"Medieval Manhattan\" — the town of San Gimignano, famous for its 13 towering stone skyscrapers built by noble families centuries ago.\n\nAfter the sunrise shoot, we’ll enjoy a morning coffee at Marcella’s chocolaterie, known for her incredibly delicious dolci. Then we’ll take a slow walk through the charming streets of this remarkable town, visit the Duomo — one of its frescoes was painted by Ghirlandaio himself — and climb the tallest tower, Torre Municipale, for magnificent views.\n\nNext, we’ll head to Siena for lunch at the historic Taverna San Giuseppe, famous for its tagliolini with truffles. Afterwards, we’ll explore Siena’s medieval streets and visit the Siena Duomo — one of the most stunning Gothic cathedrals in Italy.\n\nWe’ll climb to a panoramic terrace to photograph the city from above and relax on the legendary Piazza del Campo, where the Palio horse race takes place. In the evening, we’ll return home for dinner at a cozy trattoria near our villa.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___1337705-Pano-Edit_142%D1%85109-200dpi-Edit_ivizwp.avif"},{"day":5,"plan":"MACCIANO","description":"Our sunrise shoot is planned in the valley near Macciano: smooth rolling fields opening up in the first light of dawn, solitary farmhouses, and — if we’re lucky — a soft veil of morning mist. This is the essence of warm springtime Tuscany.\n\nWe will photograph the landscape from several more viewpoints, including the iconic shot from La Foce, and then head for a morning coffee in the small, completely non-touristic town of Cetona.\n\nAfter a gentle morning walk, we’ll try to visit the gallery of well-known Tuscan artists Tazio Angellini and Fausta Ottolini, located in an ancient 10th-century cantina. We’ll enjoy a glass of chilled prosecco with Fausta — depending on how she’s feeling.\n\nAfter lunch at the best restaurant in town, we’ll finish the day with a sunset shoot at Podere Belvedere.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"},{"day":6,"plan":"MONTALCINO","description":"Our sunrise location offers breathtaking views of Val d’Orcia from the hilltop town of Montalcino — the birthplace of Brunello di Montalcino.\n\nAfter our morning shoot and a walk through town, we’ll enjoy a tasting of the best Brunellos at the winemakers association inside the medieval fortress La Fortezza.\n\nFollowing a midday rest, we’ll visit the ancient Abbey of Sant’Antimo, founded by Charlemagne. In the afternoon, we’ll continue our wine journey with tastings at small local producers.\n\nWe’ll finish the day with a sunset shoot in the fields near Torrenieri.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"},{"day":7,"plan":"PITIGLIANO","description":"We will greet the new day in Pitigliano, a dramatic town perched on a massive tuff cliff. After the sunrise shoot, we’ll enjoy a slow walk through town, visit the Duomo, and explore the catacombs carved into the rock.\n\nOur friends will show us their underground chambers and offer their famous homemade salsa. Later, we’ll relax at the Saturnia hot springs.\n\nAt sunset, we’ll photograph the medieval town of Sorano. Dinner will be at Sette di Vino in Pienza — a cozy osteria loved by locals for its honest, cheese-driven cuisine.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886465/tuscan-spring___1337204-Edit_copy1_ft81tv.avif"},{"day":8,"plan":"CRETE SENESI","description":"We’ll greet the sunrise near the village of Mucigliano, surrounded by classic Tuscan landscapes still unknown to most tourists. On our way back, we’ll drive along the stunning roads of Crete Senesi, stopping often to photograph the rolling hills.\n\nAfter a longer siesta, we’ll photograph the iconic Podere Baccoleno at sunset, with its elegant cypress-lined road.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring___1337705_98x132_200dpi_217-Edit_zcc3nn.avif"},{"day":9,"plan":"BAGNO VIGNONI & SAN GALGANO","description":"We’ll welcome sunrise in Bagno Vignoni, famous for its ancient thermal pool and beloved by Tarkovsky.\n\nWith a view of the main pool, we’ll enjoy our morning cappuccino and then visit Sarteano to taste freshly pressed olive oil, and Radicofani, home to an original Andrea della Robbia majolica.\n\nLater we’ll soak in the natural hot springs at Bagni San Filippo. In the evening, we’ll photograph the roofless monastery of San Galgano and see the legendary sword in the stone. We’ll finish with a farewell dinner at one of the best restaurants in the region.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__180R1797_j6wetk.avif"},{"day":10,"plan":"ROME. DEPARTURE","description":"In the morning, we will choose the final sunrise location based on the weather forecast. After the shoot, we will head to Rome and arrive at Fiumicino Airport at approximately 12:00.\n\nYour return flight should be scheduled for the second half of the day. Those who wish to spend additional time exploring Rome will be taken directly to the city.","imgUrl":"https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__400mm-f5_6-1s-iso200_ra1vyo.avif"}]}',
    guide1_id,
    '/images/1.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['March','April','May','September','October'], ARRAY['English'], 16),

   (tour2_id, 'morocco-photo-tour', 'Morocco Photo Tour: Sahara Sands & Imperial Cities',
    'About Our Morocco Photo Expedition\n\nExperience the magic of Morocco on a visual journey from the blue-washed streets of Chefchaouen to the golden dunes of the Sahara Desert. Capture the vibrant souks of Marrakech, the ancient kasbahs of Ait Ben Haddou, and the majestic Atlas Mountains. This immersive photography workshop offers expert-led sunrise and sunset sessions in Morocco''s most iconic locations. Join our exclusive small group for an unforgettable adventure!',
    'EASY', 4250.00,
    '{"days":[{"day":1,"plan":"DAY 1. CASABLANCA: ATLANTIC CONTRASTS","description":"Arrival in Casablanca, explore the Hassan II Mosque and Art Deco architecture.","imgUrl":"/images/morocco-casablanca.avif"},{"day":2,"plan":"DAY 2. MARRAKECH: THE RED CITY","description":"Photography in the bustling souks and historic medina of Marrakech.","imgUrl":"/images/morocco-marrakech.avif"},{"day":3,"plan":"DAY 3. ATLAS MOUNTAINS","description":"Capture stunning mountain landscapes and Berber villages.","imgUrl":"/images/morocco-atlas.avif"},{"day":4,"plan":"DAY 4. SAHARA DESERT","description":"Sunrise and sunset photography in the golden dunes of Erg Chebbi.","imgUrl":"/images/morocco-sahara.avif"},{"day":5,"plan":"DAY 5. FEZ: MEDIEVAL WONDER","description":"Explore the ancient medina and traditional tanneries of Fez.","imgUrl":"/images/morocco-fez.avif"},{"day":6,"plan":"DAY 6. CHEFCHAOUEN: BLUE PEARL","description":"Photograph the iconic blue-washed streets of Chefchaouen.","imgUrl":"/images/morocco-chefchaouen.avif"}]}',
    guide1_id,
    '/images/2.avif', 6, 'Casablanca', 'Casablanca',
    ARRAY['March','April','May','October','November'], ARRAY['English','French'], 16),

   (tour3_id, 'venice-carnival-photo-tour', 'Venice Carnival | Professional Photography Workshop',
     'About Our Venice Carnival Photo Experience\n\nJoin our Venice Carnival Photo Tour for an unforgettable creative experience. Capture the elegance of Venetian masks and elaborate costumes against the backdrop of St. Mark''s Square. This photography workshop includes private shoots in historic palaces, gondola sessions, and hidden gems of Venice. Master your skills at sunrise and sunset. Limited small group tour. Book your photography adventure!',
     'EASY', 2850.00,
    '{"days":[{"day":1,"plan":"DAY 1. ARRIVAL IN VENICE","description":"Arrival at Venice Marco Polo Airport. Transfer to our hotel in the historic center. Evening orientation and welcome dinner at a traditional Venetian restaurant.","imgUrl":"/images/venice-arrival.avif"},{"day":2,"plan":"DAY 2. SAN MARCO & COSTUMES","description":"Sunrise photography session at St. Mark''s Square. Morning portrait session with elaborately costumed models. Afternoon gondola photography tour through the canals.","imgUrl":"/images/venice-san-marco.avif"},{"day":3,"plan":"DAY 3. HIDDEN VENICE","description":"Early morning exploration of quiet backstreets and bridges. Private palace interior photography session. Sunset shoot from a rooftop terrace overlooking the city.","imgUrl":"/images/venice-hidden.avif"},{"day":4,"plan":"DAY 4. MURANO & BURANO","description":"Morning excursion to Murano for glassblowing photography. Afternoon visit to colorful Burano island for architectural shots. Evening mask-making workshop demonstration.","imgUrl":"/images/venice-islands.avif"},{"day":5,"plan":"DAY 5. GRAND FINALE","description":"Final sunrise session at Rialto Bridge. Last costume portrait opportunities. Farewell lunch and transfer to airport.","imgUrl":"/images/venice-departure.avif"}]}',
     guide2_id,
     '/images/3.avif', 5, 'Venice Marco Polo Airport (VCE)', 'Venice Marco Polo Airport (VCE)',
     ARRAY['February','March'], ARRAY['English'], 12),



   (tour6_id, 'new-zealand-photo-tour', 'New Zealand Photography Expedition',
     'Discover the stunning landscapes of New Zealand from fjords to mountains. Capture the dramatic beauty of Milford Sound, the Southern Alps, and pristine lakes. This 10-day photography adventure features expert guidance, golden hour sessions, and diverse landscapes from glaciers to beaches. Small group ensures personalized instruction.',
     'EASY', 3850.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Departure flight to New Zealand with overnight connection."},{"day":2,"plan":"QUEENSTOWN ARRIVAL","description":"Arrival in Queenstown, orientation and sunset photography at Lake Wakatipu."},{"day":3,"plan":"MILFORD SOUND","description":"Full day excursion to Milford Sound for sunrise and landscape photography."},{"day":4,"plan":"GLENORCHY","description":"Photography in the Wakatipu Basin and Glenorchy area."},{"day":5,"plan":"SOUTHERN ALPS","description":"Scenic flight and photography in Mount Aspiring National Park."},{"day":6,"plan":"WANAKA","description":"Lake Wanaka and That Wanaka Tree photography session."},{"day":7,"plan":"AORAKI/MOUNT COOK","description":"Travel to Mount Cook for glacier and mountain photography."},{"day":8,"plan":"TEKAPO","description":"Lake Tekapo and Church of the Good Shepherd sunrise."},{"day":9,"plan":"QUEENSTOWN","description":"Final photography sessions and return to Queenstown."},{"day":10,"plan":"DEPARTURE","description":"Transfer to airport for return flight via Rome."}]}',
     guide1_id,
     '/images/6.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['March','April','May','September','October','November'], ARRAY['English'], 16),

   (tour7_id, 'japan-cherry-blossom-tour', 'Japan Cherry Blossom Photography',
     'Experience the magical sakura season across Japan''s most iconic locations. From Tokyo''s urban gardens to Kyoto''s ancient temples, capture the ethereal beauty of cherry blossoms. This photography workshop includes expert guidance, optimal timing for peak bloom, and cultural immersion. Limited small group ensures intimate shooting experiences.',
     'EASY', 4250.00,
     '{"days":[{"day":1,"plan":"TOKYO ARRIVAL","description":"Arrival in Tokyo, orientation at Shinjuku Gyoen garden photography."},{"day":2,"plan":"MT. FUJI","description":"Day trip to Lake Kawaguchi for Mt Fuji and cherry blossom views."},{"day":3,"plan":"KYOTO TEMPLES","description":"Travel to Kyoto, evening photography at Kiyomizu-dera temple."},{"day":4,"plan":"PHILOSOPHER''S PATH","description":"Early morning sunrise along Philosopher''s Path canal with cherry blossoms."},{"day":5,"plan":"ARASHIYAMA","description":"Bamboo forest and Tenryu-ji temple garden photography."},{"day":6,"plan":"NARA","description":"Day trip to Nara for deer park and Todai-ji temple with sakura."},{"day":7,"plan":"OSAKA CASTLE","description":"Osaka Castle and surrounding cherry blossom park photography."},{"day":8,"plan":"HIROSHIMA","description":"Travel to Hiroshima, Peace Memorial Park photography."},{"day":9,"plan":"MIYAJIMA","description":"Itsukushima shrine and torii gate photography at high tide."},{"day":10,"plan":"DEPARTURE","description":"Final shooting session and departure from Osaka."}]}',
     guide2_id,
     '/images/7.avif', 10, 'Tokyo, Narita Airport (NRT)', 'Osaka, Kansai Airport (KIX)',
     ARRAY['March','April'], ARRAY['English'], 14),

   (tour8_id, 'cyclades-sailing-tour', 'Cyclades Sailing Photography Tour',
     'Set sail through the stunning Cyclades islands for a 7-day photography adventure. Capture the iconic white-washed villages of Santorini, ancient ruins of Delos, and hidden beaches accessible only by boat. Experience authentic Greek island life, golden hour sailing, and night photography under Mediterranean skies. Small group with expert photo guidance.',
     'EASY', 3150.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ATHENS","description":"Welcome meeting in Athens. Transfer to Marina Alimos, board our sailing yacht. Evening safety briefing and sunset photography along the Athenian coast."},{"day":2,"plan":"SANTORINI SAIL","description":"Morning sail to Santorini. Afternoon photography of Oia village and blue-domed churches. Sunset session at Imerovigli caldera."},{"day":3,"plan":"SANTORINI EXPLORE","description":"Early morning at Fira. Visit Red Beach and Black Beach photography. Evening sail towards Ios under golden light."},{"day":4,"plan":"IOS TO NAXOS","description":"Morning exploration of Ios. Afternoon sail to Naxos. Photography at Portara and ancient Apollo temple ruins at sunset."},{"day":5,"plan":"DELOS TO MYKONOS","description":"Morning sail to sacred Delos island for ancient ruins photography. Afternoon arrival in Mykonos. Little Venice and windmill photography at sunset."},{"day":6,"plan":"MYKONOS HIDDEN GEMS","description":"Early morning at empty beaches. Explore traditional villages. Final night photography session under starlight. Farewell dinner onboard."},{"day":7,"plan":"RETURN ATHENS","description":"Morning sail back to Athens. Final photo review session. Transfer to Athens airport for departure."}]}',
     guide4_id,
     '/images/8.avif', 7, 'Athens, Greece', 'Athens, Greece',
     ARRAY['May','June','September','October'], ARRAY['English'], 16),

   (tour9_id, 'cinque-terre-umbria-tour', 'Cinque-Terre & Umbria Photography',
     'Explore the colorful cliffside villages of Cinque-Terre and the medieval hill towns of Umbria. This 10-day journey captures the essence of coastal Italy and its rural heartland. Photograph dramatic seascapes, vineyards, ancient architecture, and authentic Italian life. Expert guidance in small group settings.',
     'EASY', 3650.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. FLORENCE","description":"Meeting at Florence Airport. Orientation and evening photography in historic Florence."},{"day":2,"plan":"CINQUE-TERRE START","description":"Travel to Cinque-Terre. Photography in Monterosso al Mare."},{"day":3,"plan":"VERNazzA & CORNIGLIA","description":"Morning session in Vernazza. Afternoon in Corniglia village."},{"day":4,"plan":"MANAROLA & RIOMAGGIORE","description":"Sunrise in Manarola. Afternoon exploration of Riomaggiore."},{"day":5,"plan":"PORTOFINO & SANTA MARGHERITA","description":"Day trip to Portofino and Santa Margherita Ligure."},{"day":6,"plan":"UMBRIA ARRIVAL","description":"Travel to Umbria. Photography in Perugia historic center."},{"day":7,"plan":"ASSISI & GUBBIO","description":"Morning in Assisi. Afternoon in medieval Gubbio."},{"day":8,"plan":"ORVIETO & CIVITA","description":"Photography in Orvieto and hill town of Civita di Bagnoregio."},{"day":9,"plan":"TODI & SPOLETO","description":"Final shooting sessions in Todi and Spoleto."},{"day":10,"plan":"DEPARTURE FLORENCE","description":"Return to Florence. Final gallery review and departure."}]}',
     guide3_id,
     '/images/9.avif', 10, 'Florence, Peretola Airport (FLR)', 'Florence, Peretola Airport (FLR)',
     ARRAY['April','May','September','October'], ARRAY['English'], 14),

   (tour10_id, 'provence-photography-tour', 'Provence Lavender & Villages',
     'Discover the enchanting landscapes of Provence during peak lavender season. Capture endless purple fields, medieval villages, and golden light. This 10-day photography workshop includes intimate knowledge of hidden locations, optimal timing for lavender bloom, and authentic Provençal experiences. Small group with personalized instruction.',
     'EASY', 3400.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer to Provence via scenic drive."},{"day":2,"plan":"AVIGNON ORIENTATION","description":"Explore Avignon historic center. Evening photography at Palais des Papes."},{"day":3,"plan":"GORD & ROUSSILLON","description":"Morning in hilltop village of Gordes. Afternoon in ochre trails of Roussillon."},{"day":4,"plan":"LAVENDER FIELDS","description":"Full day photography in Valensole plateau lavender fields at sunrise and sunset."},{"day":5,"plan":"SENANQUE ABBEY","description":"Early morning at Cistercian abbey with lavender. Afternoon in local markets."},{"day":6,"plan":"LES BAUX & ARLES","description":"Morning at Les Baux de Provence. Afternoon in Arles roman monuments."},{"day":7,"plan":"CAMARGUE WETLANDS","description":"Day trip to Camargue for wildlife and traditional gardian photography."},{"day":8,"plan":"VERDON GORGE","description":"Scenic photography at Verdon Gorge and Lake of Sainte-Croix."},{"day":9,"plan":"CASSIS CALANQUES","description":"Day trip to Cassis for calanques coastal photography."},{"day":10,"plan":"DEPARTURE","description":"Final gallery review. Return transfer to Rome FCO."}]}',
     guide5_id,
     '/images/10.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['June','July','August','September'], ARRAY['English'], 16),

   (tour11_id, 'sicily-aeolian-tour', 'Sicily & Aeolian Islands Photography',
     'Experience the dramatic beauty of Sicily and the volcanic Aeolian Islands. Capture Mount Etna''s power, ancient Greek ruins, and Stromboli''s nightly eruptions. This 10-day adventure combines Sicilian culture, volcanic landscapes, and Mediterranean seascapes with expert photo guidance in intimate small groups.',
     'MEDIUM', 3800.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer to Sicily via scenic drive."},{"day":2,"plan":"TAORMINA ORIENTATION","description":"Explore Taormina with Greek theatre views. Evening golden hour photography."},{"day":3,"plan":"MOUNT ETNA","description":"Full day Mount Etna photography. Craters, lava flows, and volcanic landscapes."},{"day":4,"plan":"SIRACUSA","description":"Morning in Ortigia island. Afternoon Greek theatre and ancient architecture."},{"day":5,"plan":"AEOLIAN ISLANDS START","description": "Ferry to Lipari. Island exploration and coastal photography."},{"day":6,"plan":"STROMBOLI VOLCANO","description":"Day trip to Stromboli. Hike and evening eruption photography."},{"day":7,"plan":"VULCANO & PANAREA","description":"Morning in Vulcano with mud baths and hot springs. Afternoon in Panarea."},{"day":8,"plan":"PALERMO ARRIVAL","description":"Return to mainland. Palermo historic center photography."},{"day":9,"plan":"MONREALE & CEFALÙ","description":"Morning at Monreale cathedral. Afternoon in Cefalù coastal town."},{"day":10,"plan":"DEPARTURE","description":"Final gallery review. Return transfer to Rome FCO."}]}',
     guide4_id,
     '/images/11.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['May','June','September','October'], ARRAY['English'], 16),

(tour12_id, 'czechia-autumn-tour', 'Czechia Autumn Photography',
     'Capture the golden beauty of Czechia during peak autumn season. From Prague''s Gothic splendor to Bohemian castles and medieval towns, this 10-day journey showcases Central Europe''s finest fall colors. Expert guidance in small groups ensures optimal timing for golden hour and autumn foliage photography.',
     'EASY', 2950.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer flight to Prague."},{"day":2,"plan":"PRAGUE ORIENTATION","description":"Prague Castle and Charles Bridge sunrise photography. Old Town Square exploration."},{"day":3,"plan":"PRAGUE DEEP DIVE","description":"Jewish Quarter and Lesser Town photography. Evening golden hour from Petřín Hill."},{"day":4,"plan":"KUTNÁ HORA","description":"Day trip to Kutná Hora. Sedlec Ossuary and St. Barbara''s Church."},{"day":5,"plan":"ČESKÝ KRUMLOV","description":"Travel to Český Krumlov. Castle and medieval town photography."},{"day":6,"plan":"SOUTH BOHEMIA","description":"Hluboká Castle and surrounding autumn landscapes. Village photography."},{"day":7,"plan":"KARLOVY VARY","description":"Travel to Karlovy Vary. Spa town architecture and autumn colors."},{"day":8,"plan":"BOHEMIAN SWITZERLAND","description":"Day trip to Bohemian Switzerland National Park for dramatic landscapes."},{"day":9,"plan":"PRAGUE FINAL","description":"Return to Prague. Final photography sessions and gallery review."},{"day":10,"plan":"DEPARTURE","description":"Transfer to Prague airport for return flight via Rome."}]}',
     guide2_id,
     '/images/12.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['September','October','November'], ARRAY['English'], 14),

(tour13_id, 'scotland-photography-tour', 'Scotland Highlands & Islands',
     'Journey through the mystical Scottish Highlands and dramatic coastline. Capture lochs, castles, and the raw beauty of the Isle of Skye. This 10-day photography adventure includes remote landscapes, historic sites, and authentic Highland culture. Expert guidance in small groups ensures intimate shooting experiences.',
     'EASY', 3200.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer flight to Edinburgh."},{"day":2,"plan":"EDINBURGH ORIENTATION","description":"Edinburgh Castle and Royal Mile photography. Evening at Arthur''s Seat."},{"day":3,"plan":"STIRLING & TROSSACHS","description":"Stirling Castle photography. Drive through Trossachs National Park."},{"day":4,"plan":"GLENCOE","description":"Photography in Glencoe Valley. Buchaille Etive Mor and dramatic landscapes."},{"day":5,"plan":"ISLE OF SKYE ARRIVAL","description":"Travel to Isle of Skye. Sligachan and sunset at Neist Point."},{"day":6,"plan":"SKYE EXPLORATION","description":"Old Man of Storr, Kilt Rock, and Quiraing landscape photography."},{"day":7,"plan":"EILEAN DONAN","description":"Morning at Eilean Donan Castle. Drive through Wester Ross."},{"day":8,"plan":"INVERNESS & CAIRNGORMS","description":"Loch Ness photography. Cairngorms National Park exploration."},{"day":9,"plan":"ST ANDREWS","description":"Fishing villages and St Andrews Cathedral. Final coastal photography."},{"day":10,"plan":"DEPARTURE","description":"Return to Edinburgh. Transfer to airport for return flight via Rome."}]}',
     guide1_id,
     '/images/13.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['April','May','September','October'], ARRAY['English'], 16),

(tour14_id, 'tuscany-autumn-tour', 'Tuscany Autumn Photography',
     'Experience Tuscany''s golden autumn season when vineyards turn gold and harvest creates authentic rural scenes. From rolling hills to medieval hill towns, capture the essence of Italian autumn culture. This 10-day workshop features wine harvest photography, truffle hunting, and golden light across iconic landscapes.',
     'EASY', 3500.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer to Tuscany."},{"day":2,"plan":"VAL D''ORCIA AUTUMN","description":"Pienza and Podere Belvedere with autumn colors. Golden hour sessions."},{"day":3,"plan":"MONTALCINO WINERIES","description":"Wine harvest photography in Brunello vineyards. Cellar tours."},{"day":4,"plan":"SAN QUIRICO D''ORCIA","description":"Morning in San Quirico. Bagno Vignoni thermal village photography."},{"day":5,"plan":"MONTERIGGIONI & SIENA","description":"Monteriggioni walled town. Afternoon in Siena medieval center."},{"day":6,"plan":"CHIANTI REGION","description":"Full day Chanti valley photography. Vineyard harvest scenes."},{"day":7,"plan":"TRUFFLE HUNTING","description":"Morning truffle hunting experience with local hunters. Village markets."},{"day":8,"plan":"FLORENCE DAY TRIP","description":"Photography in Florence during autumn season. Ponte Vecchio at sunrise."},{"day":9,"plan":"CRETE SENESI","description":"Final landscape photography in Crete Senesi region."},{"day":10,"plan":"DEPARTURE","description":"Gallery review and transfer to Rome FCO for departure."}]}',
     guide3_id,
     '/images/14.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['September','October','November'], ARRAY['English'], 16),

(tour15_id, 'japan-photography-tour', 'Japan Cultural Photography Journey',
     'Immerse yourself in Japan''s rich cultural heritage and modern innovation. From ancient temples in Kyoto to neon-lit Tokyo streets, capture the fascinating contrast of traditional and contemporary Japan. This 10-day photography workshop includes expert guidance, cultural experiences, and optimal timing for seasonal beauty.',
     'EASY', 4100.00,
     '{"days":[{"day":1,"plan":"ARRIVAL. ROME FCO","description":"Meeting at Rome Fiumicino Airport. Transfer flight to Tokyo."},{"day":2,"plan":"TOKYO ORIENTATION","description":"Tokyo Tower and Shibuya Crossing photography. Evening at Senso-ji Temple."},{"day":3,"plan":"TOKYO CULTURE","description":"Tsukiji fish market morning. Meiji Shrine and Harajuku street photography."},{"day":4,"plan":"HAKONE & MT FUJI","description":"Day trip to Hakone. Lake Ashi with Mount Fuji views."},{"day":5,"plan":"KYOTO ARRIVAL","description":"Travel to Kyoto. Fushimi Inari shrine and bamboo forest photography."},{"day":6,"plan":"KYOTO TEMPLES","description":"Kinkaku-ji and Gion geisha district photography sessions."},{"day":7,"plan":"NARA DAY TRIP","description":"Todai-ji Temple and deer park photography. Traditional crafts."},{"day":8,"plan":"HIROSHIMA PEACE","description":"Travel to Hiroshima. Peace Memorial and Miyajima Island photography."},{"day":9,"plan":"OSAKA MODERN","description":"Osaka Castle and Dotonbori neon district photography."},{"day":10,"plan":"DEPARTURE","description":"Final gallery review. Transfer to Osaka airport for return flight via Rome."}]}',
     guide5_id,
     '/images/15.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
     ARRAY['March','April','May','October','November'], ARRAY['English'], 14);

-- TOUR ACTIVITIES
INSERT INTO tour_activities(id, tour_id, activity, created_at)
VALUES
  -- Tour 1: Tuscany Spring
  (tour_activity1_id, tour1_id, 'Sunrise photo sessions', '2025-04-15'),
  (tour_activity2_id, tour1_id, 'Sunset photo sessions', '2025-04-15'),
  (tour_activity3_id, tour1_id, 'Photography workshops', '2025-04-15'),
  (tour_activity4_id, tour1_id, 'Editing & post-processing sessions', '2025-04-15'),
  (tour_activity5_id, tour1_id, 'Cultural experiences', '2025-04-15'),
  
  -- Tour 2: Morocco
  (tour_activity6_id, tour2_id, 'Sunrise photo sessions', '2025-04-15'),
  (tour_activity7_id, tour2_id, 'Sunset photo sessions', '2025-04-15'),
  (tour_activity8_id, tour2_id, 'Photography workshops', '2025-04-15'),
  (tour_activity9_id, tour2_id, 'Editing & post-processing sessions', '2025-04-15'),
  (tour_activity10_id, tour2_id, 'Cultural experiences', '2025-04-15'),
  
  -- Tour 3: Venice Carnival
  (tour_activity11_id, tour3_id, 'Sunrise photo sessions', '2025-04-15'),
  (tour_activity12_id, tour3_id, 'Sunset photo sessions', '2025-04-15'),
  (tour_activity13_id, tour3_id, 'Photography workshops', '2025-04-15'),
  (tour_activity14_id, tour3_id, 'Editing & post-processing sessions', '2025-04-15'),
  (tour_activity15_id, tour3_id, 'Cultural experiences', '2025-04-15'),
  
  -- Tour 6: New Zealand
  (tour_activity16_id, tour6_id, 'Sunrise photo sessions', '2025-04-15'),
  (tour_activity17_id, tour6_id, 'Sunset photo sessions', '2025-04-15'),
  (tour_activity18_id, tour6_id, 'Photography workshops', '2025-04-15'),
  (tour_activity19_id, tour6_id, 'Editing & post-processing sessions', '2025-04-15'),
  (tour_activity20_id, tour6_id, 'Cultural experiences', '2025-04-15'),
  
   -- Tour 8: Cyclades
   (tour_activity21_id, tour8_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity22_id, tour8_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity23_id, tour8_id, 'Photography workshops', '2025-04-15'),
   (tour_activity24_id, tour8_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity25_id, tour8_id, 'The catamaran life experience', '2025-04-15'),
   (tour_activity26_id, tour8_id, 'Sea-to-Land landscape photography', '2025-04-15'),
   (tour_activity27_id, tour8_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 9: Cinque-Terre & Umbria
   (tour_activity28_id, tour9_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity29_id, tour9_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity30_id, tour9_id, 'Photography workshops', '2025-04-15'),
   (tour_activity31_id, tour9_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity32_id, tour9_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 10: Provence
   (tour_activity33_id, tour10_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity34_id, tour10_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity35_id, tour10_id, 'Photography workshops', '2025-04-15'),
   (tour_activity36_id, tour10_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity37_id, tour10_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 11: Sicily and Aeolian Islands
   (tour_activity38_id, tour11_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity39_id, tour11_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity40_id, tour11_id, 'Photography workshops', '2025-04-15'),
   (tour_activity41_id, tour11_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity42_id, tour11_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 12: Czechia (autumn)
   (tour_activity43_id, tour12_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity44_id, tour12_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity45_id, tour12_id, 'Photography workshops', '2025-04-15'),
   (tour_activity46_id, tour12_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity47_id, tour12_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 13: Scotland
   (tour_activity48_id, tour13_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity49_id, tour13_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity50_id, tour13_id, 'Photography workshops', '2025-04-15'),
   (tour_activity51_id, tour13_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity52_id, tour13_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 14: Tuscany autumn
   (tour_activity53_id, tour14_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity54_id, tour14_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity55_id, tour14_id, 'Photography workshops', '2025-04-15'),
   (tour_activity56_id, tour14_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity57_id, tour14_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 15: Japan
   (tour_activity58_id, tour15_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity59_id, tour15_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity60_id, tour15_id, 'Photography workshops', '2025-04-15'),
   (tour_activity61_id, tour15_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity62_id, tour15_id, 'Cultural experiences', '2025-04-15');

 -- TOUR SUMMARY
INSERT INTO tour_summary(id, tour_id, name, value, created_at)
VALUES
  -- Tour 1: Tuscany Spring
  (tour_summary1_id, tour1_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary2_id, tour1_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary3_id, tour1_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary4_id, tour1_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary5_id, tour1_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary6_id, tour1_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 2: Morocco
  (tour_summary7_id, tour2_id, 'Duration', '12 days', '2025-04-15'),
  (tour_summary8_id, tour2_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary9_id, tour2_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary10_id, tour2_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary11_id, tour2_id, 'Tour starts', 'Casablanca', '2025-04-15'),
  (tour_summary12_id, tour2_id, 'Ending place', 'Casablanca', '2025-04-15'),
  
  -- Tour 3: Venice Carnival
  (tour_summary13_id, tour3_id, 'Duration', '5 days', '2025-04-15'),
  (tour_summary14_id, tour3_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary15_id, tour3_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary16_id, tour3_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary17_id, tour3_id, 'Tour starts', 'Venice Marco Polo Airport (VCE)', '2025-04-15'),
  (tour_summary18_id, tour3_id, 'Ending place', 'Venice Marco Polo Airport (VCE)', '2025-04-15'),
  
  -- Tour 6: New Zealand
  (tour_summary19_id, tour6_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary20_id, tour6_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary21_id, tour6_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary22_id, tour6_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary23_id, tour6_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary24_id, tour6_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 8: Cyclades
  (tour_summary25_id, tour8_id, 'Duration', '7 days', '2025-04-15'),
  (tour_summary26_id, tour8_id, 'Group Size', '11 participants', '2025-04-15'),
  (tour_summary27_id, tour8_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary28_id, tour8_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary29_id, tour8_id, 'Tour starts', 'Athens International Airport (ATH)', '2025-04-15'),
  (tour_summary30_id, tour8_id, 'Ending place', 'Athens International Airport (ATH)', '2025-04-15'),
  
  -- Tour 9: Cinque-Terre & Umbria
  (tour_summary31_id, tour9_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary32_id, tour9_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary33_id, tour9_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary34_id, tour9_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary35_id, tour9_id, 'Tour starts', 'Florence Airport (FLR)', '2025-04-15'),
  (tour_summary36_id, tour9_id, 'Ending place', 'Florence Airport (FLR)', '2025-04-15'),
  
  -- Tour 10: Provence
  (tour_summary37_id, tour10_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary38_id, tour10_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary39_id, tour10_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary40_id, tour10_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary41_id, tour10_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary42_id, tour10_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 11: Sicily & Aeolian Islands
  (tour_summary43_id, tour11_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary44_id, tour11_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary45_id, tour11_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary46_id, tour11_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary47_id, tour11_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary48_id, tour11_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 12: Czechia Autumn
  (tour_summary49_id, tour12_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary50_id, tour12_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary51_id, tour12_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary52_id, tour12_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary53_id, tour12_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary54_id, tour12_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 13: Scotland Highlands
  (tour_summary55_id, tour13_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary56_id, tour13_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary57_id, tour13_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary58_id, tour13_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary59_id, tour13_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary60_id, tour13_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 14: Tuscany Autumn
  (tour_summary61_id, tour14_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary62_id, tour14_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary63_id, tour14_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary64_id, tour14_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary65_id, tour14_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary66_id, tour14_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 15: Japan Cultural
  (tour_summary67_id, tour15_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary68_id, tour15_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary69_id, tour15_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary70_id, tour15_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary71_id, tour15_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary72_id, tour15_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15');

 -- TOUR INCLUDED
INSERT INTO tour_included(id, tour_id, included, created_at)
VALUES
  -- Tour 1: Tuscany Spring
  (tour_included1_id, tour1_id, 'Accommodation', '2025-04-15'),
  (tour_included2_id, tour1_id, 'In-tour transportation', '2025-04-15'),
  (tour_included3_id, tour1_id, 'Photo shoots', '2025-04-15'),
  (tour_included4_id, tour1_id, 'Photo workshops', '2025-04-15'),
  (tour_included5_id, tour1_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 2: Morocco
  (tour_included6_id, tour2_id, 'Accommodation', '2025-04-15'),
  (tour_included7_id, tour2_id, 'In-tour transportation', '2025-04-15'),
  (tour_included8_id, tour2_id, 'Breakfasts', '2025-04-15'),
  (tour_included9_id, tour2_id, 'Photo shoots', '2025-04-15'),
  (tour_included10_id, tour2_id, 'Photo workshops', '2025-04-15'),
  (tour_included11_id, tour2_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 3: Venice Carnival
  (tour_included12_id, tour3_id, 'Accommodation', '2025-04-15'),
  (tour_included13_id, tour3_id, 'Photo shoots', '2025-04-15'),
  (tour_included14_id, tour3_id, 'Photo workshops', '2025-04-15'),
  (tour_included15_id, tour3_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 6: New Zealand
  (tour_included16_id, tour6_id, 'Accommodation', '2025-04-15'),
  (tour_included17_id, tour6_id, 'In-tour transportation', '2025-04-15'),
  (tour_included18_id, tour6_id, 'Photo shoots', '2025-04-15'),
  (tour_included19_id, tour6_id, 'Photo workshops', '2025-04-15'),
  (tour_included20_id, tour6_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 8: Cyclades
  (tour_included21_id, tour8_id, 'Accommodation', '2025-04-15'),
  (tour_included22_id, tour8_id, 'In-tour transportation', '2025-04-15'),
  (tour_included23_id, tour8_id, 'Photo shoots', '2025-04-15'),
  (tour_included24_id, tour8_id, 'Photo workshops', '2025-04-15'),
  (tour_included25_id, tour8_id, 'Expert photo guide', '2025-04-15'),
  (tour_included26_id, tour8_id, 'Professional skipper & crew services', '2025-04-15'),
  (tour_included27_id, tour8_id, 'Catamaran cruise', '2025-04-15'),
  
  -- Tour 9: Cinque-Terre & Umbria
  (tour_included28_id, tour9_id, 'Accommodation', '2025-04-15'),
  (tour_included29_id, tour9_id, 'In-tour transportation', '2025-04-15'),
  (tour_included30_id, tour9_id, 'Photo shoots', '2025-04-15'),
  (tour_included31_id, tour9_id, 'Photo workshops', '2025-04-15'),
  (tour_included32_id, tour9_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 10: Provence
  (tour_included33_id, tour10_id, 'Accommodation', '2025-04-15'),
  (tour_included34_id, tour10_id, 'In-tour transportation', '2025-04-15'),
  (tour_included35_id, tour10_id, 'Photo shoots', '2025-04-15'),
  (tour_included36_id, tour10_id, 'Photo workshops', '2025-04-15'),
  (tour_included37_id, tour10_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 11: Sicily & Aeolian Islands
  (tour_included38_id, tour11_id, 'Accommodation', '2025-04-15'),
  (tour_included39_id, tour11_id, 'In-tour transportation', '2025-04-15'),
  (tour_included40_id, tour11_id, 'Photo shoots', '2025-04-15'),
  (tour_included41_id, tour11_id, 'Photo workshops', '2025-04-15'),
  (tour_included42_id, tour11_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 12: Czechia Autumn
  (tour_included43_id, tour12_id, 'Accommodation', '2025-04-15'),
  (tour_included44_id, tour12_id, 'In-tour transportation', '2025-04-15'),
  (tour_included45_id, tour12_id, 'Photo shoots', '2025-04-15'),
  (tour_included46_id, tour12_id, 'Photo workshops', '2025-04-15'),
  (tour_included47_id, tour12_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 13: Scotland Highlands
  (tour_included48_id, tour13_id, 'Accommodation', '2025-04-15'),
  (tour_included49_id, tour13_id, 'In-tour transportation', '2025-04-15'),
  (tour_included50_id, tour13_id, 'Photo shoots', '2025-04-15'),
  (tour_included51_id, tour13_id, 'Photo workshops', '2025-04-15'),
  (tour_included52_id, tour13_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 14: Tuscany Autumn
  (tour_included53_id, tour14_id, 'Accommodation', '2025-04-15'),
  (tour_included54_id, tour14_id, 'In-tour transportation', '2025-04-15'),
  (tour_included55_id, tour14_id, 'Photo shoots', '2025-04-15'),
  (tour_included56_id, tour14_id, 'Photo workshops', '2025-04-15'),
  (tour_included57_id, tour14_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 15: Japan Cultural
  (tour_included58_id, tour15_id, 'Accommodation', '2025-04-15'),
  (tour_included59_id, tour15_id, 'In-tour transportation', '2025-04-15'),
  (tour_included60_id, tour15_id, 'Photo shoots', '2025-04-15'),
  (tour_included61_id, tour15_id, 'Photo workshops', '2025-04-15'),
  (tour_included62_id, tour15_id, 'Expert photo guide', '2025-04-15');

-- TOUR DATES
INSERT INTO tour_dates (id, tour_id, date_from, date_to, group_size, is_available)
VALUES
  -- Tour 1: Tuscany Spring (10-day tour)
  (tour_date1_id, tour1_id, '2025-04-15', '2025-04-24', 12, TRUE),
  (tour_date2_id, tour1_id, '2025-05-06', '2025-05-15', 10, TRUE),
  (tour_date3_id, tour1_id, '2025-09-20', '2025-09-29', 8, TRUE),
  
  -- Tour 2: Morocco (6-day tour)
  (tour_date4_id, tour2_id, '2025-03-15', '2025-03-20', 12, TRUE),
  (tour_date5_id, tour2_id, '2025-04-02', '2025-04-07', 10, TRUE),
  (tour_date6_id, tour2_id, '2025-10-10', '2025-10-15', 12, TRUE),
  (tour_date7_id, tour2_id, '2025-11-05', '2025-11-10', 10, TRUE),
  
  -- Tour 3: Venice Carnival (5-day tour)
  (tour_date8_id, tour3_id, '2025-02-15', '2025-02-19', 8, TRUE),
  (tour_date9_id, tour3_id, '2025-02-22', '2025-02-26', 6, TRUE),
  

  
  -- Tour 6: New Zealand (10-day tour)
  (tour_date16_id, tour6_id, '2025-05-20', '2025-05-26', 10, TRUE),
  (tour_date17_id, tour6_id, '2025-06-15', '2025-06-21', 12, TRUE),
  (tour_date18_id, tour6_id, '2025-09-10', '2025-09-16', 10, TRUE),
  (tour_date19_id, tour6_id, '2025-10-05', '2025-10-11', 8, TRUE),
  
  -- Tour 7: Japan Cherry Blossom (10-day tour)
  (tour_date20_id, tour7_id, '2025-03-25', '2025-04-03', 10, TRUE),
  (tour_date21_id, tour7_id, '2025-04-05', '2025-04-14', 8, TRUE),
  (tour_date22_id, tour7_id, '2025-04-15', '2025-04-24', 6, TRUE),
  
  -- Tour 8: Cyclades Sailing (7-day tour)
  (tour_date23_id, tour8_id, '2025-05-20', '2025-05-26', 10, TRUE),
  (tour_date24_id, tour8_id, '2025-06-15', '2025-06-21', 12, TRUE),
  (tour_date25_id, tour8_id, '2025-09-10', '2025-09-16', 10, TRUE),
  (tour_date26_id, tour8_id, '2025-10-05', '2025-10-11', 8, TRUE),
  
  -- Tour 9: Cinque-Terre & Umbria (10-day tour)
  (tour_date27_id, tour9_id, '2025-04-10', '2025-04-19', 10, TRUE),
  (tour_date28_id, tour9_id, '2025-05-15', '2025-05-24', 8, TRUE),
  (tour_date29_id, tour9_id, '2025-09-25', '2025-10-04', 10, TRUE),
  (tour_date30_id, tour9_id, '2025-10-15', '2025-10-24', 8, TRUE),
  
  -- Tour 10: Provence (10-day tour)
  (tour_date31_id, tour10_id, '2025-06-20', '2025-06-29', 12, TRUE),
  (tour_date32_id, tour10_id, '2025-07-10', '2025-07-19', 10, TRUE),
  (tour_date33_id, tour10_id, '2025-08-05', '2025-08-14', 10, TRUE),
  (tour_date34_id, tour10_id, '2025-09-01', '2025-09-10', 8, TRUE),
  
  -- Tour 11: Sicily & Aeolian Islands (10-day tour)
  (tour_date35_id, tour11_id, '2025-05-25', '2025-06-03', 10, TRUE),
  (tour_date36_id, tour11_id, '2025-06-20', '2025-06-29', 8, TRUE),
  (tour_date37_id, tour11_id, '2025-09-15', '2025-09-24', 10, TRUE),
  (tour_date38_id, tour11_id, '2025-10-10', '2025-10-19', 8, TRUE),
  
  -- Tour 12: Czechia Autumn (10-day tour)
  (tour_date39_id, tour12_id, '2025-09-20', '2025-09-29', 10, TRUE),
  (tour_date40_id, tour12_id, '2025-10-05', '2025-10-14', 8, TRUE),
  (tour_date41_id, tour12_id, '2025-10-25', '2025-11-03', 12, TRUE),
  (tour_date42_id, tour12_id, '2025-11-10', '2025-11-19', 8, TRUE),
  
  -- Tour 13: Scotland Highlands (10-day tour)
  (tour_date43_id, tour13_id, '2025-04-01', '2025-04-10', 10, TRUE),
  (tour_date44_id, tour13_id, '2025-05-15', '2025-05-24', 8, TRUE),
  (tour_date45_id, tour13_id, '2025-09-20', '2025-09-29', 10, TRUE),
  (tour_date46_id, tour13_id, '2025-10-01', '2025-10-10', 12, TRUE),
  
  -- Tour 14: Tuscany Autumn (10-day tour)
  (tour_date47_id, tour14_id, '2025-09-15', '2025-09-24', 10, TRUE),
  (tour_date48_id, tour14_id, '2025-10-05', '2025-10-14', 12, TRUE),
  (tour_date49_id, tour14_id, '2025-10-25', '2025-11-03', 8, TRUE),
  
  -- Tour 15: Japan Cultural (10-day tour)
  (tour_date50_id, tour15_id, '2025-03-20', '2025-03-29', 10, TRUE),
  (tour_date51_id, tour15_id, '2025-04-10', '2025-04-19', 8, TRUE),
  (tour_date52_id, tour15_id, '2025-05-05', '2025-05-14', 10, TRUE),
  (tour_date53_id, tour15_id, '2025-10-01', '2025-10-10', 12, TRUE),
  (tour_date54_id, tour15_id, '2025-11-15', '2025-11-24', 8, TRUE);

-- MATERIALS
INSERT INTO tour_materials (tour_id, title, url, type)
VALUES
  (tour1_id, 'Grand Canyon Trail Guide', 'https://example.com/grand-canyon-guide.pdf', 'PDF'),
  (tour1_id, 'Hiking Preparation Video', 'https://example.com/gc-prep-video.mp4', 'VIDEO'),
  (tour2_id, 'NYC Historical Map', 'https://example.com/nyc-history-map.pdf', 'PDF'),
  (tour2_id, 'Manhattan Walking Guide', 'https://example.com/manhattan-guide.pdf', 'PDF'),
  (tour3_id, 'Rafting Safety Manual', 'https://example.com/rafting-safety.pdf', 'PDF'),
  (tour3_id, 'Whitewater Training Video', 'https://example.com/rafting-training.mp4', 'VIDEO'),

  
  -- Tour 6: New Zealand Photography
  (tour6_id, 'New Zealand Landscape Photography Guide', 'https://example.com/new-zealand-photo-guide.pdf', 'PDF'),
  (tour6_id, 'Milford Sound Photography Tips', 'https://example.com/milford-sound-tips.pdf', 'PDF'),
  (tour6_id, 'New Zealand Photography Workshop Video', 'https://example.com/nz-photo-workshop.mp4', 'VIDEO'),
  
  -- Tour 7: Japan Cherry Blossom
  (tour7_id, 'Cherry Blossom Photography Guide', 'https://example.com/sakura-photo-guide.pdf', 'PDF'),
  (tour7_id, 'Japan Temple Photography Tips', 'https://example.com/japan-temple-tips.pdf', 'PDF'),
  (tour7_id, 'Sakura Season Photography Video', 'https://example.com/sakura-photo-video.mp4', 'VIDEO'),
  
  -- Tour 8: Cyclades Sailing
  (tour8_id, 'Greek Islands Sailing Guide', 'https://example.com/cyclades-sailing-guide.pdf', 'PDF'),
  (tour8_id, 'Santorini Photography Tips', 'https://example.com/santorini-photo-tips.pdf', 'PDF'),
  (tour8_id, 'Cyclades Sailing Adventure Video', 'https://example.com/cyclades-sailing.mp4', 'VIDEO'),
  
  -- Tour 9: Cinque-Terre & Umbria
  (tour9_id, 'Italian Coastal Photography Guide', 'https://example.com/cinque-terre-photo-guide.pdf', 'PDF'),
  (tour9_id, 'Umbria Hill Towns Photography', 'https://example.com/umbria-photo-tips.pdf', 'PDF'),
  (tour9_id, 'Cinque-Terre Photography Workshop Video', 'https://example.com/cinque-terre-workshop.mp4', 'VIDEO'),
  
  -- Tour 10: Provence
  (tour10_id, 'Provence Lavender Photography Guide', 'https://example.com/provence-lavender-guide.pdf', 'PDF'),
  (tour10_id, 'French Village Photography Tips', 'https://example.com/provence-villages-tips.pdf', 'PDF'),
  (tour10_id, 'Lavender Fields Photography Video', 'https://example.com/lavender-fields-video.mp4', 'VIDEO'),
  
  -- Tour 11: Sicily & Aeolian Islands
  (tour11_id, 'Sicily Volcanic Photography Guide', 'https://example.com/sicily-volcano-guide.pdf', 'PDF'),
  (tour11_id, 'Mediterranean Island Photography Tips', 'https://example.com/aeolian-islands-tips.pdf', 'PDF'),
  (tour11_id, 'Mount Etna Photography Video', 'https://example.com/mount-etna-video.mp4', 'VIDEO'),
  
  -- Tour 12: Czechia Autumn
  (tour12_id, 'Czechia Autumn Photography Guide', 'https://example.com/czechia-autumn-guide.pdf', 'PDF'),
  (tour12_id, 'Prague Gothic Architecture Photography', 'https://example.com/prague-gothic-tips.pdf', 'PDF'),
  (tour12_id, 'Bohemian Autumn Photography Video', 'https://example.com/bohemian-autumn.mp4', 'VIDEO'),
  
  -- Tour 13: Scotland Highlands
  (tour13_id, 'Scotland Highlands Photography Guide', 'https://example.com/scotland-highlands-guide.pdf', 'PDF'),
  (tour13_id, 'Scottish Castle Photography Tips', 'https://example.com/scottish-castles-tips.pdf', 'PDF'),
  (tour13_id, 'Isle of Skye Landscape Video', 'https://example.com/isle-of-skye-video.mp4', 'VIDEO'),
  
  -- Tour 14: Tuscany Autumn
  (tour14_id, 'Tuscany Autumn Photography Guide', 'https://example.com/tuscany-autumn-guide.pdf', 'PDF'),
  (tour14_id, 'Italian Wine Harvest Photography', 'https://example.com/tuscany-wine-harvest.pdf', 'PDF'),
  (tour14_id, 'Tuscany Golden Hour Video', 'https://example.com/tuscany-golden-hour.mp4', 'VIDEO'),
  
  -- Tour 15: Japan Cultural
  (tour15_id, 'Japan Cultural Photography Guide', 'https://example.com/japan-cultural-guide.pdf', 'PDF'),
  (tour15_id, 'Tokyo Street Photography Tips', 'https://example.com/tokyo-street-tips.pdf', 'PDF'),
  (tour15_id, 'Japan Cultural Experience Video', 'https://example.com/japan-cultural-video.mp4', 'VIDEO');

-- PHOTOS
INSERT INTO photos (tour_id, url, description)
VALUES
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886477/tuscan-spring__Untitled_Panorama2_114%D1%85249-200dpi_299-Edit_tebrjd.avif', 'Val d''Orcia sunrise over rolling hills'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__Untitled_Panorama1_65%D1%8587-200dpi_100-Edit_sprpmc.avif', 'Pienza medieval town at golden hour'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8829-1_86x56_x5eivl.avif', 'Cypress alley in morning mist'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif', 'Podere Belvedere iconic chapel'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__OSKIN_3950_fdilkc.avif', 'San Quirico d''Orcia historic center'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886475/tuscan-spring__OSKIN_218_43%D1%8572-200dpi_sy8xug.avif', 'Tuscan vineyard at harvest time'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMGP0277_68%D1%8593-200dpi-Edit_fful6e.avif', 'Madonna di Vitaleta chapel on hill'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__FUJI8847-Pano-Pano-Dehancer_copy_lgg7p7.avif', 'Poggio Covili historic estate at sunset'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMG_1698_69%D1%8546-200dpi_2_zsq3qn.avif', 'Crete Senesi countryside with oak trees'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring___IGP6527_Panorama-Edit_copy_a2einq.avif', 'Monteriggioni walled town at sunrise'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__AA8B2655_43%D1%8573-200dpi_113-Edit_lykwgv.avif', 'Val d''Orcia foggy morning landscape'),
  
  (tour2_id, 'https://example.com/morocco-photo1.jpg', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://example.com/morocco-photo2.jpg', 'Sahara desert golden dunes at sunset'),
  (tour3_id, 'https://example.com/venice-carnival-photo1.jpg', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://example.com/venice-carnival-photo2.jpg', 'Gondola photography at golden hour'),


   -- Tour 6: New Zealand Photography
   (tour6_id, 'https://example.com/new-zealand-photo1.jpg', 'Milford Sound sunrise with dramatic peaks'),
   (tour6_id, 'https://example.com/new-zealand-photo2.jpg', 'Lake Wakatipu reflections at Queenstown'),
   (tour6_id, 'https://example.com/new-zealand-photo3.jpg', 'That Wanaka Tree at golden hour'),
   (tour6_id, 'https://example.com/new-zealand-photo4.jpg', 'Aoraki/Mount Cook glacier landscapes'),
   (tour6_id, 'https://example.com/new-zealand-photo5.jpg', 'Church of the Good Shepherd at Lake Tekapo'),

   -- Tour 7: Japan Cherry Blossom
   (tour7_id, 'https://example.com/sakura-photo1.jpg', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour7_id, 'https://example.com/sakura-photo2.jpg', 'Mount Fuji framed by cherry blossoms'),
   (tour7_id, 'https://example.com/sakura-photo3.jpg', 'Kiyomizu-dera temple with sakura'),
   (tour7_id, 'https://example.com/sakura-photo4.jpg', 'Shinjuku Gyoen garden cherry blossoms'),
   (tour7_id, 'https://example.com/sakura-photo5.jpg', 'Osaka Castle surrounded by sakura trees'),

   -- Tour 8: Cyclades Sailing
   (tour8_id, 'https://example.com/cyclades-photo1.jpg', 'Oia village blue domes at sunset'),
   (tour8_id, 'https://example.com/cyclades-photo2.jpg', 'Sailing yacht in Santorini caldera'),
   (tour8_id, 'https://example.com/cyclades-photo3.jpg', 'Mykonos Little Venice windmills'),
   (tour8_id, 'https://example.com/cyclades-photo4.jpg', 'Delos ancient ruins at golden hour'),
   (tour8_id, 'https://example.com/cyclades-photo5.jpg', 'Naxos Portara Apollo temple ruins'),

   -- Tour 9: Cinque-Terre & Umbria
   (tour9_id, 'https://example.com/cinque-terre-photo1.jpg', 'Manarola colorful cliffside village'),
   (tour9_id, 'https://example.com/cinque-terre-photo2.jpg', 'Vernazza harbor at sunrise'),
   (tour9_id, 'https://example.com/cinque-terre-photo3.jpg', 'Corniglia village perched on cliffs'),
   (tour9_id, 'https://example.com/cinque-terre-photo4.jpg', 'Assisi medieval hill town at sunset'),
   (tour9_id, 'https://example.com/cinque-terre-photo5.jpg', 'Civita di Bagnoregio hill town'),

   -- Tour 10: Provence Lavender & Villages
   (tour10_id, 'https://example.com/provence-photo1.jpg', 'Valensole plateau endless lavender fields'),
   (tour10_id, 'https://example.com/provence-photo2.jpg', 'Sénanque Abbey surrounded by lavender'),
   (tour10_id, 'https://example.com/provence-photo3.jpg', 'Gordes hilltop village at golden hour'),
   (tour10_id, 'https://example.com/provence-photo4.jpg', 'Roussillon ochre trails and village'),
   (tour10_id, 'https://example.com/provence-photo5.jpg', 'Les Baux de Provence medieval fortress'),

   -- Tour 11: Sicily & Aeolian Islands
   (tour11_id, 'https://example.com/sicily-photo1.jpg', 'Mount Etna volcanic eruption at night'),
   (tour11_id, 'https://example.com/sicily-photo2.jpg', 'Taormina Greek theatre with sea views'),
   (tour11_id, 'https://example.com/sicily-photo3.jpg', 'Stromboli volcano nightly eruptions'),
   (tour11_id, 'https://example.com/sicily-photo4.jpg', 'Ortigia island Syracuse historic architecture'),
   (tour11_id, 'https://example.com/sicily-photo5.jpg', 'Lipari island coastal landscapes'),

   -- Tour 12: Czechia Autumn
   (tour12_id, 'https://example.com/czechia-photo1.jpg', 'Prague Castle autumn foliage at sunrise'),
   (tour12_id, 'https://example.com/czechia-photo2.jpg', 'Charles Bridge golden hour with fall colors'),
   (tour12_id, 'https://example.com/czechia-photo3.jpg', 'Český Krumlov medieval town in autumn'),
   (tour12_id, 'https://example.com/czechia-photo4.jpg', 'Kutná Hora Sedlec Ossuary Gothic architecture'),
   (tour12_id, 'https://example.com/czechia-photo5.jpg', 'Karlovy Vary spa town autumn colors'),

   -- Tour 13: Scotland Highlands
   (tour13_id, 'https://example.com/scotland-photo1.jpg', 'Eilean Donan Castle at sunrise'),
   (tour13_id, 'https://example.com/scotland-photo2.jpg', 'Isle of Skye Old Man of Storr'),
   (tour13_id, 'https://example.com/scotland-photo3.jpg', 'Glencoe Valley dramatic landscapes'),
   (tour13_id, 'https://example.com/scotland-photo4.jpg', 'Loch Ness misty morning views'),
   (tour13_id, 'https://example.com/scotland-photo5.jpg', 'Edinburgh Castle from Arthur''s Seat'),

   -- Tour 14: Tuscany Autumn
   (tour14_id, 'https://example.com/tuscany-autumn-photo1.jpg', 'Val d''Orcia rolling hills with autumn colors'),
   (tour14_id, 'https://example.com/tuscany-autumn-photo2.jpg', 'Pienza medieval town during harvest season'),
   (tour14_id, 'https://example.com/tuscany-autumn-photo3.jpg', 'Chianti vineyards golden autumn foliage'),
   (tour14_id, 'https://example.com/tuscany-autumn-photo4.jpg', 'Wine harvest in Brunello vineyards'),
   (tour14_id, 'https://example.com/tuscany-autumn-photo5.jpg', 'San Quirico d''Orcia autumn landscapes'),

   -- Tour 15: Japan Cultural Photography
   (tour15_id, 'https://example.com/japan-cultural-photo1.jpg', 'Tokyo Shibuya Crossing neon lights'),
   (tour15_id, 'https://example.com/japan-cultural-photo2.jpg', 'Fushimi Inari shrine endless torii gates'),
   (tour15_id, 'https://example.com/japan-cultural-photo3.jpg', 'Kyoto Gion geisha district at dusk'),
   (tour15_id, 'https://example.com/japan-cultural-photo4.jpg', 'Hiroshima Peace Memorial at sunset'),
   (tour15_id, 'https://example.com/japan-cultural-photo5.jpg', 'Osaka Dotonbori neon district reflections');

-- VIDEOS
INSERT INTO videos (tour_id, url, description)
VALUES
  -- Existing videos for tours 1-5
  (tour1_id, 'https://example.com/tuscany-video1.mp4', 'Tuscany spring photography workshop highlights'),
  (tour2_id, 'https://example.com/morocco-video1.mp4', 'Morocco Sahara desert and imperial cities tour'),
  (tour3_id, 'https://example.com/venice-carnival-video1.mp4', 'Venice Carnival masks and costumes photography'),

  
  -- Tour 2 (Morocco) - additional video
  (tour2_id, 'https://example.com/morocco-video2.mp4', 'Chefchaouen blue streets and Atlas Mountains adventure'),
  
  -- Tour 3 (Venice Carnival) - additional video
  (tour3_id, 'https://example.com/venice-carnival-video2.mp4', 'Venice gondola photography and hidden gems'),
  

   
  -- Tour 6: New Zealand
  (tour6_id, 'https://example.com/new-zealand-video1.mp4', 'New Zealand Milford Sound and landscapes'),
  (tour6_id, 'https://example.com/new-zealand-video2.mp4', 'Queenstown adventure and Mount Cook glacier exploration'),
  
  -- Tour 7: Japan Cherry Blossom
  (tour7_id, 'https://example.com/japan-cherry-blossom-video1.mp4', 'Japan cherry blossom season photography'),
  (tour7_id, 'https://example.com/japan-cherry-blossom-video2.mp4', 'Kyoto temples and traditional Japanese culture'),
  
  -- Tour 8: Cyclades Sailing
  (tour8_id, 'https://example.com/cyclades-sailing-video1.mp4', 'Greek islands sailing adventure and sunset photography'),
  (tour8_id, 'https://example.com/cyclades-sailing-video2.mp4', 'Santorini Oia village and traditional Greek island life'),
  
  -- Tour 9: Cinque-Terre & Umbria
  (tour9_id, 'https://example.com/cinque-terre-video1.mp4', 'Italian coastal villages and dramatic cliffside photography'),
  (tour9_id, 'https://example.com/cinque-terre-video2.mp4', 'Umbria medieval hill towns and authentic Italian culture'),
   
  -- Tour 10: Provence
  (tour10_id, 'https://example.com/provence-video1.mp4', 'Provence lavender fields and golden hour photography'),
  (tour10_id, 'https://example.com/provence-video2.mp4', 'French village life and Provençal countryside exploration'),
  
  -- Tour 11: Sicily & Aeolian Islands
  (tour11_id, 'https://example.com/sicily-video1.mp4', 'Mount Etna volcanic landscapes and Mediterranean seascapes'),
  (tour11_id, 'https://example.com/sicily-video2.mp4', 'Sicilian culture and Aeolian Islands sailing adventure'),
  
  -- Tour 12: Czechia Autumn
  (tour12_id, 'https://example.com/czechia-video1.mp4', 'Prague Gothic architecture and autumn foliage photography'),
  (tour12_id, 'https://example.com/czechia-video2.mp4', 'Bohemian countryside and medieval towns in golden autumn'),
  
  -- Tour 13: Scotland Highlands
  (tour13_id, 'https://example.com/scotland-video1.mp4', 'Scottish Highlands landscapes and dramatic coastline photography'),
  (tour13_id, 'https://example.com/scotland-video2.mp4', 'Isle of Skye exploration and ancient Scottish castles'),
   
  -- Tour 14: Tuscany Autumn
  (tour14_id, 'https://example.com/tuscany-autumn-video1.mp4', 'Tuscany autumn harvest and golden vineyard landscapes'),
  (tour14_id, 'https://example.com/tuscany-autumn-video2.mp4', 'Italian countryside photography and rural autumn traditions'),
  
  -- Tour 15: Japan Cultural
  (tour15_id, 'https://example.com/japan-cultural-video1.mp4', 'Japan traditional culture and modern Tokyo street photography'),
  (tour15_id, 'https://example.com/japan-cultural-video2.mp4', 'Kyoto temples and authentic Japanese cultural experiences');

-- TAGS
INSERT INTO tags (name) VALUES
  ('hiking'), ('nature'), ('city'), ('history'), ('culture'),
  ('adventure'), ('photography'), ('food'), ('wine'), ('rafting'),
  ('sailing'), ('beaches'), ('islands'), ('mediterranean'),
  ('cherry-blossom'), ('temples'), ('festivals'), ('street'),
  ('vineyards'), ('harvest'), ('autumn'), ('wine'),
  ('lavender'), ('villages'), ('countryside'), ('summer'),
  ('volcanoes'), ('coastal'), ('islands'), ('mediterranean'),
  ('autumn'), ('gothic'), ('architecture'), ('europe'),
  ('highlands'), ('castles'), ('lochs'), ('mountains'),
  ('sakura'), ('culture'), ('temples'), ('urban'),
  ('patagonia'), ('glaciers'), ('wilderness'), ('trekking'),
  ('techniques'), ('workshop'), ('portrait'), ('landscape')
ON CONFLICT (name) DO NOTHING;

-- TOUR TAGS
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour1_id FROM tags WHERE name IN ('landscape', 'nature', 'photography');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour2_id FROM tags WHERE name IN ('desert', 'culture', 'architecture');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour3_id FROM tags WHERE name IN ('festivals', 'portrait', 'culture');

INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour6_id FROM tags WHERE name IN ('landscape', 'nature', 'adventure');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour7_id FROM tags WHERE name IN ('cherry-blossom', 'temples', 'culture');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour8_id FROM tags WHERE name IN ('sailing', 'islands', 'mediterranean');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour9_id FROM tags WHERE name IN ('coastal', 'villages', 'landscape');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour10_id FROM tags WHERE name IN ('lavender', 'villages', 'summer');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour11_id FROM tags WHERE name IN ('volcanoes', 'coastal', 'islands');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour12_id FROM tags WHERE name IN ('autumn', 'gothic', 'architecture');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour13_id FROM tags WHERE name IN ('highlands', 'castles', 'mountains');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour14_id FROM tags WHERE name IN ('harvest', 'vineyards', 'autumn');
INSERT INTO tour_tags (tag_id, tour_id)
SELECT id, tour15_id FROM tags WHERE name IN ('sakura', 'culture', 'urban');

-- CATEGORIES
INSERT INTO categories (name) VALUES
  ('Outdoor'), ('Adventure'), ('Cultural'), ('Urban'), ('Food & Wine'), ('Photography'),
  ('Sailing'), ('Festivals'), ('Autumn'), ('Spring'), ('Summer')
ON CONFLICT (name) DO NOTHING;

-- TOUR CATEGORIES
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour1_id FROM categories WHERE name IN ('Photography', 'Spring');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour2_id FROM categories WHERE name IN ('Cultural', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour3_id FROM categories WHERE name IN ('Festivals', 'Photography');

INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour6_id FROM categories WHERE name IN ('Adventure', 'Photography');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour7_id FROM categories WHERE name IN ('Spring', 'Cultural');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour8_id FROM categories WHERE name IN ('Sailing', 'Summer');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour9_id FROM categories WHERE name IN ('Photography', 'Cultural');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour10_id FROM categories WHERE name IN ('Photography', 'Summer');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour11_id FROM categories WHERE name IN ('Adventure', 'Photography');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour12_id FROM categories WHERE name IN ('Autumn', 'Cultural');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour13_id FROM categories WHERE name IN ('Outdoor', 'Adventure');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour14_id FROM categories WHERE name IN ('Autumn', 'Food & Wine');
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour15_id FROM categories WHERE name IN ('Cultural', 'Photography');

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
  (tour3_id, user10_id, 5, 'Worth every penny. Cant wait to do it again!');

END $$;
