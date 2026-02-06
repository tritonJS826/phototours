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

    -- tuscany-spring-photo-tour
    tour1_id UUID := '33333333-3333-3333-3333-333333333301';
    -- morocco-photo-tour
    tour2_id UUID := '33333333-3333-3333-3333-333333333302';
    -- venice carnival  
    tour3_id UUID := '33333333-3333-3333-3333-333333333303';
    -- new-zealand-photo-tour
    tour4_id UUID := '33333333-3333-3333-3333-333333333304';
    -- cyclades-sailing-tour
    tour5_id UUID := '33333333-3333-3333-3333-333333333305';
    -- cinque-terre-umbria-tour
    tour6_id UUID := '33333333-3333-3333-3333-333333333306';
    -- provence-photography-tour
    tour7_id UUID := '33333333-3333-3333-3333-333333333307';
    -- sicily-aeolian-tour
    tour8_id UUID := '33333333-3333-3333-3333-333333333308';
    -- czechia-autumn-tour
    tour9_id UUID := '33333333-3333-3333-3333-333333333309';
    -- scotland-photography-tour
    tour10_id UUID := '33333333-3333-3333-3333-333333333310';
    -- tuscany-autumn-tour
    tour11_id UUID := '33333333-3333-3333-3333-333333333311';
    -- japan-autumn-tour
    tour12_id UUID := '33333333-3333-3333-3333-333333333312';
    -- iceland
    tour13_id UUID := '33333333-3333-3333-3333-333333333313';
    -- japan-spring
    tour14_id UUID := '33333333-3333-3333-3333-333333333314';

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
    tour_date10_id UUID := '44444444-4444-4444-4444-444444444410';
    tour_date11_id UUID := '44444444-4444-4444-4444-444444444411';
    tour_date12_id UUID := '44444444-4444-4444-4444-444444444412';
    tour_date13_id UUID := '44444444-4444-4444-4444-444444444413';
    tour_date14_id UUID := '44444444-4444-4444-4444-444444444414';
    tour_date15_id UUID := '44444444-4444-4444-4444-444444444415';
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
    tour_date58_id UUID := '44444444-4444-4444-4444-444444444458';
    tour_date59_id UUID := '44444444-4444-4444-4444-444444444459';
    tour_date60_id UUID := '44444444-4444-4444-4444-444444444460';
    tour_date61_id UUID := '44444444-4444-4444-4444-444444444461';
    tour_date62_id UUID := '44444444-4444-4444-4444-444444444462';
    tour_date63_id UUID := '44444444-4444-4444-4444-444444444463';
    tour_date64_id UUID := '44444444-4444-4444-4444-444444444464';
    tour_date65_id UUID := '44444444-4444-4444-4444-444444444465';


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
    tour_activity63_id UUID := '66666666-6666-6666-6666-666666666663';
    tour_activity64_id UUID := '66666666-6666-6666-6666-666666666664';
    tour_activity65_id UUID := '66666666-6666-6666-6666-666666666665';
    tour_activity66_id UUID := '66666666-6666-6666-6666-666666666666';
    tour_activity67_id UUID := '66666666-6666-6666-6666-666666666667';
    tour_activity68_id UUID := '66666666-6666-6666-6666-666666666668';
    tour_activity69_id UUID := '66666666-6666-6666-6666-666666666669';
    tour_activity70_id UUID := '66666666-6666-6666-6666-666666666670';
    tour_activity71_id UUID := '66666666-6666-6666-6666-666666666671';
    tour_activity72_id UUID := '66666666-6666-6666-6666-666666666672';

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
    tour_summary73_id UUID := '77777777-7777-7777-7777-777777777773';
    tour_summary74_id UUID := '77777777-7777-7777-7777-777777777774';
    tour_summary75_id UUID := '77777777-7777-7777-7777-777777777775';
    tour_summary76_id UUID := '77777777-7777-7777-7777-777777777776';
    tour_summary77_id UUID := '77777777-7777-7777-7777-777777777777';
    tour_summary78_id UUID := '77777777-7777-7777-7777-777777777778';
    tour_summary79_id UUID := '77777777-7777-7777-7777-777777777779';
    tour_summary80_id UUID := '77777777-7777-7777-7777-777777777780';
    tour_summary81_id UUID := '77777777-7777-7777-7777-777777777781';
    tour_summary82_id UUID := '77777777-7777-7777-7777-777777777782';
    tour_summary83_id UUID := '77777777-7777-7777-7777-777777777783';
    tour_summary84_id UUID := '77777777-7777-7777-7777-777777777784';
    tour_summary85_id UUID := '77777777-7777-7777-7777-777777777785';
    tour_summary86_id UUID := '77777777-7777-7777-7777-777777777786';


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
    tour_included63_id UUID := '88888888-8888-8888-8888-888888888863';
    tour_included64_id UUID := '88888888-8888-8888-8888-888888888864';
    tour_included65_id UUID := '88888888-8888-8888-8888-888888888865';
    tour_included66_id UUID := '88888888-8888-8888-8888-888888888866';
    tour_included67_id UUID := '88888888-8888-8888-8888-888888888867';
    tour_included68_id UUID := '88888888-8888-8888-8888-888888888868';
    tour_included69_id UUID := '88888888-8888-8888-8888-888888888869';
    tour_included70_id UUID := '88888888-8888-8888-8888-888888888870';
    tour_included71_id UUID := '88888888-8888-8888-8888-888888888871';
    tour_included72_id UUID := '88888888-8888-8888-8888-888888888872';
    tour_included73_id UUID := '88888888-8888-8888-8888-888888888873';
    tour_included74_id UUID := '88888888-8888-8888-8888-888888888874';
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
  id, slug, title,
  description,
  difficulty, price,
  program,
  faq,
  guide_id,
  cover_url, duration_days, end_location, start_location,
  available_months, languages, min_age, location, group_size, spots_left, subtitle
)
VALUES
(tour1_id, 'tuscany-spring-photo-tour', 'Spring Tuscany',
     'Capture the essence of Italy on our Spring Tuscany Photo Tour. Experience the iconic emerald hills of the Val d''Orcia, misty sunrises at Podere Belvedere, and the medieval charm of Pienza. This immersive landscape photography workshop features expert-led shoots, cypress alleys, and the hidden gems of the region. Limited to a small group for a 10-day tour. Book your photography adventure today!',
    'EASY', 3800.00,
    '{"days": [
      {
        "day": 1,
        "plan": "ARRIVAL & FIRST PHOTOGRAPHY SESSION",
        "description": "Meeting at Fiumicino Airport (Rome). To ensure smooth logistics for the group, we recommend arriving in the first half of the day. If you arrive a day early, we will gladly pick you up from your hotel in the morning.\n\nWe’ll begin our Tuscany photo adventure with a traditional Italian lunch at a local seaside restaurant on Lungomare di Salute. This hidden gem in Fiumicino is loved by locals for its authentic seafood, far from tourist crowds - a true Roman culinary experience.\n\nAfter lunch, we’ll drive into the heart of Tuscany and check into our base: the historic Poggio Covili estate. World-famous for its majestic cypress-lined avenue, this is one of the most iconic photography locations in the region. We’ll end the day with a relaxed sunset photography session on-site, capturing golden-hour light over the rolling hills.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"
      },
      {
        "day": 2,
        "plan": "PIENZA PANORAMAS & MADONNA DI VITALETA",
        "description": "At sunrise, we head to one of the most breathtaking viewpoints in Italy - the panoramic overlook of Pienza. This UNESCO-listed Val d’Orcia landscape offers the quintessential Tuscan view. If morning mist appears, you’ll capture truly ethereal, world-class images.\n\nPhotography Tip: Telephoto lenses (up to 400mm) are ideal here for compressing the rolling hills and emphasizing texture.\n\nAfter the shoot, we’ll enjoy a classic Italian breakfast - cappuccino and dolce - in Pienza’s central square. You’ll have time for a relaxed walk through the Renaissance town redesigned by Pope Pius II and the chance to taste the famous Pecorino di Pienza.\n\nFollowing a midday rest at our villa, the evening is dedicated to photographing the iconic Chapel of Madonna di Vitaleta. A scenic 10-minute walk through the fields brings us to the chapel for a sunset shoot. We’ll finish the day with a gourmet dinner and well-earned relaxation.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"
      },
      {
        "day": 3,
        "plan": "PODERE BELVEDERE & TUSCAN GASTRONOMY",
        "description": "We start the day at the most photographed location in Tuscany - Podere Belvedere. This legendary villa, often wrapped in morning fog, is best captured at sunrise when the valley glows with soft golden light.\n\nAfter the shoot, we’ll enjoy coffee in the medieval town of San Quirico d’Orcia before returning to the villa for a midday break.\n\nIn the evening, we revisit Madonna di Vitaleta to photograph the chapel from new perspectives. Working efficiently, we’ll explore both wide-angle compositions and telephoto details as the colors of the sky change.\n\nDinner is at Fonte Alla Vena, one of our favorite local trattorias. Expect a true Tuscan country soul: rustic interiors, homemade olive oil, seasonal vegetables, traditional pici pasta, and Cinta Senese pork prepared from family recipes shared by Luciano, the owner.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___2572_65%D1%85138-200dpi_202-Edit_bl1mdd.avif"
      },
      {
        "day": 4,
        "plan": "SAN GIMIGNANO & SIENA",
        "description": "Our earliest start brings us on a 1.5-hour drive to photograph sunrise over San Gimignano - the famous “Medieval Manhattan” with its iconic stone towers.\n\nAfter the shoot, we’ll stop at Marcella’s renowned chocolaterie for coffee and artisan dolci. We’ll then stroll through the historic streets, visit the Duomo with Ghirlandaio’s frescoes, and climb the Torre Municipale for sweeping views of the Elsa Valley.\n\nNext, we travel to Siena for lunch at the historic Taverna San Giuseppe, famous for its tagliolini with truffles. The afternoon is dedicated to exploring Siena’s medieval alleys and the magnificent Siena Duomo - one of the most striking Gothic cathedrals in Italy.\n\nWe’ll photograph the city from a panoramic terrace, relax at Piazza del Campo - home of the Palio horse race - and return to our villa for a quiet dinner at a local trattoria.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___1337705-Pano-Edit_142%D1%85109-200dpi-Edit_ivizwp.avif"
      },
      {
        "day": 5,
        "plan": "MACCIANO MIST & CETONA",
        "description": "Sunrise finds us in the valley near Macciano - rolling green fields, solitary farmhouses, and, if we’re lucky, atmospheric morning mist that defines springtime Tuscany.\n\nWe’ll photograph from several classic viewpoints, including the iconic zigzag cypress road at La Foce. Afterwards, we head to the non-touristic town of Cetona for coffee and street photography among its white stone streets.\n\nA special highlight may be a visit to the private gallery of renowned Tuscan artists Tazio Angellini and Fausta Ottolini, housed in a 10th-century cantina. If conditions allow, we may enjoy a glass of prosecco with Fausta.\n\nAfter lunch at the town’s best restaurant, we return to Podere Belvedere for a sunset shoot, capturing the estate in dramatically different light.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif"
      },
      {
        "day": 6,
        "plan": "MONTALCINO & BRUNELLO",
        "description": "We greet sunrise overlooking Montalcino, capturing panoramic views of Val d’Orcia bathed in warm morning light. This hilltop town is the birthplace of Brunello di Montalcino - the king of Italian red wines.\n\nAfter a walk through town, we’ll visit the medieval fortress La Fortezza for an exclusive tasting of top Brunellos curated by the local winemakers’ association.\n\nFollowing a midday rest, we explore the Abbey of Sant’Antimo, founded by Charlemagne. This Romanesque masterpiece offers exceptional architectural photography, and if we’re lucky, we may hear monks’ Gregorian chants.\n\nThe afternoon continues with visits to boutique wine producers before ending the day with a sunset photography session near Torrenieri.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif"
      },
      {
        "day": 7,
        "plan": "PITIGLIANO & SATURNIA",
        "description": "At sunrise, we photograph Pitigliano - a dramatic town rising directly from a massive tuff cliff. Its seamless blend of nature and medieval architecture makes it one of Italy’s most striking photographic subjects.\n\nAfterwards, we explore the town’s narrow streets, visit the Duomo, and descend into the Etruscan catacombs carved into volcanic rock. We’ll visit a local family’s underground chamber to taste artisanal salsa with regional cheeses.\n\nBy midday, we relax at the Saturnia Hot Springs (Cascate del Mulino), enjoying the turquoise thermal pools.\n\nAt sunset, we photograph the rugged town of Sorano, hanging above a deep ravine. Dinner follows at Sette di Vino in Pienza - a cozy osteria celebrated for its cheese-driven Tuscan cuisine.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886465/tuscan-spring___1337204-Edit_copy1_ft81tv.avif"
      },
      {
        "day": 8,
        "plan": "CRETE SENESI & PODERE BACCOLENO",
        "description": "We begin the day near the quiet village of Mucigliano, photographing sunrise among classic Tuscan landscapes still untouched by mass tourism.\n\nOn our return, we travel through the Crete Senesi, famous for its lunar-like clay hills and minimalist ridges. We’ll stop frequently to photograph soft curves, long horizons, and dramatic light.\n\nAfter a midday siesta, we head to one of Tuscany’s most iconic locations: Podere Baccoleno. At sunset, we’ll photograph the legendary S-shaped cypress road - a timeless symbol of the Tuscan countryside.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring___1337705_98x132_200dpi_217-Edit_zcc3nn.avif"
      },
      {
        "day": 9,
        "plan": "BAGNO VIGNONI & SAN GALGANO",
        "description": "We welcome sunrise in Bagno Vignoni, famous for its ancient thermal pool and beloved by Andrei Tarkovsky, who filmed scenes of *Nostalghia* here. Rising steam at dawn creates a dreamlike atmosphere for fine-art photography.\n\nAfter cappuccino overlooking the water, we visit Sarteano for a family-run olive oil tasting and Radicofani to photograph an original Andrea della Robbia majolica.\n\nLater, we relax at the white limestone hot springs of Bagni San Filippo. In the evening, we photograph the roofless Gothic abbey of San Galgano and see the legendary sword in the stone. We conclude with a grand farewell dinner at one of the region’s finest restaurants.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__180R1797_j6wetk.avif"
      },
      {
        "day": 10,
        "plan": "FINAL SUNRISE & DEPARTURE",
        "description": "For our final morning, we choose the sunrise location based on the latest weather forecast to capture the most dramatic closing shots of the journey.\n\nAfter the shoot and a final Tuscan breakfast, we drive to Rome, arriving at Fiumicino Airport around 12:00. We recommend booking return flights for the second half of the day.\n\nGuests extending their stay will be dropped off in central Rome to continue exploring the Eternal City at their own pace.",
        "imgUrl": "https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__400mm-f5_6-1s-iso200_ra1vyo.avif"
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Spring Tuscany Photo Tour? Can non-photographers participate?",
        "answer": "We welcome photographers of all skill levels to our spring photo expeditions in Tuscany — from absolute beginners to seasoned professionals — as well as non-photographers. Our tour leaders are experts dedicated to helping participants refine their skills regardless of their starting point. You are welcome to join the shooting sessions with a professional camera or simply a mobile phone.\n\nExperiencing spring in Tuscany and the Val d’Orcia through the eyes of a professional photographer — who meticulously plans every detail, including the exact arrival time at each location — is a unique experience for both photographers and travelers alike. In our spring photo expedition, you avoid the tourist crowds and witness the authentic beauty of a region famous for its rolling mists, world-class wines, and gastronomy."
      },
      {
        "question": "2. What should I bring with me for the Tuscany Photo Tour in spring?",
        "answer": "We always provide specific gear recommendations for our Tuscany tours. If you plan to bring a camera, we recommend having a tripod and a selection of lenses: 24-70mm and 70-200mm are essential, while a 100-400mm lens is highly recommended.\n\nAfter booking your spot, you will receive a comprehensive manual with a checklist of everything you need for the photo tours and workshops — from camera gear to appropriate clothing. You can also schedule a consultation with your tour leader to ensure you are fully prepared for the trip."
      },
      {
        "question": "3. What level of physical fitness is required for the Spring Tuscany Photo Tour?",
        "answer": "The Spring Tuscany tour is rated as ’Easy’ and is suitable for participants with even minimal physical preparation. If you have health restrictions or concerns about your fitness, you can always contact our manager, who will help you assess the requirements for this specific spring expedition."
      },
      {
        "question": "4. How many people are in the group for the Tuscany Photo Tour?",
        "answer": "We specialize in small groups and value an individual approach for every participant in our Tuscany photo tours and workshops. Our priority is to ensure you gain valuable experience, new knowledge, and vivid memories while bringing home trophy shots from the Val d’Orcia for your portfolio or social media.\n\nTypically, the maximum group size for the Spring Tuscany photo tour is 7 participants, though in exceptional cases, it may be increased to 8."
      },
      {
        "question": "5. Are flights included in the price of the Spring Tuscany tour and photo workshops?",
        "answer": "Airfare and visas are not included in the cost, as our participants join us from all over the world. The following is included in the price:\n\n- Accommodation: Stay at the legendary Poggio Covili villa (single rooms or double rooms for couples).\n- Local Logistics: Transfers to and from the airport in Rome and all ground transportation between towns in a comfortable Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, on-site mentoring, and masterclasses, including post-processing.\n\nFor information regarding additional expenses during the Tuscany tour, please contact our managers."
      },
      {
        "question": "6. What is included in the cost of the Spring Tuscany Photo Tour and workshops?",
        "answer": "The price of the spring photo expedition in Tuscany includes:\n\n- Accommodation: Lodging at the iconic Poggio Covili villa (offering single occupancy or double rooms for couples).\n- Local Logistics: Airport transfers (Rome) and all transportation throughout the region in a high-end Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, on-site mentoring, and masterclasses, including post-processing.\n\nDetailed information about any extra costs can be requested from our management team."
      }
    ]}',
    guide1_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['March','May'], ARRAY['English'], 16, 'Europe', 7, 4, 'About Our Tuscany Spring Photo Expedition'),

   (tour2_id, 'morocco-photo-tour', 'Morocco Photo Tour',
    'Experience the magic of Morocco on a visual journey from the blue-washed streets of Chefchaouen to the golden dunes of the Sahara Desert. Capture the vibrant souks of Marrakech, the ancient kasbahs of Ait Ben Haddou, and the majestic Atlas Mountains. This immersive photography workshop offers expert-led sunrise and sunset sessions in Morocco''s most iconic locations. Join our exclusive small group for an unforgettable adventure!',
    'EASY', 3200.00,
    '{"days":[
      {
        "day": 1,
        "plan": "CASABLANCA: ATLANTIC CONTRASTS & THE GREAT MOSQUE",
        "description": "Our Morocco photography tour begins in Casablanca-not a scripted Oriental fairy tale, but a vibrant, chaotic, and living modern metropolis. This city offers a stark, fascinating contrast to the ancient medinas of Fes or Marrakech.\n\nCasablanca is a city of layers, perfect for urban and street photography. Here, colonial Art Deco buildings stand alongside gritty concrete districts, and narrow alleys filled with the scent of spices and ocean salt tell the story of real African life. For a photographer, the appeal lies in the clash of eras: the exhaust of old Mercedes taxis against the backdrop of peeling plaster and intricate architectural details.\n\nThe highlight of our stay is the magnificent Hassan II Mosque. Perched on the very edge of the Atlantic Ocean, it impresses with its colossal scale and exquisite craftsmanship-zellige mosaics, delicate carvings, and arches that glow in the soft coastal light. We will dedicate both sunset and sunrise photography sessions to this iconic landmark, capturing the powerful moment where waves crash against the rocks under the golden hour sun.\n\nIn the city center, we’ll explore the spirit of colonial France through its wide boulevards and historic cafés. It is a premier location for candid street photography, capturing a mix of men in traditional djellabas, stylish youth, and the slow rhythm of local coffee culture. From the bustling port filled with blue fishing crates and swirling seagulls to the atmospheric Corniche waterfront, Casablanca offers raw, sharp, and authentic frames that define the spirit of modern Morocco."
      },
      {
        "day": 2,
        "plan": "ESSAOUIRA: THE WIND CITY & REFLECTIONS OF THE ATLANTIC",
        "description": "Our second day takes us to Essaouira (370 km, approx. 4 hours), a town with a rhythm entirely its own. Unlike the bustling energy of Casablanca, time flows slower here, shaped by the salt, the wind, and the unique Atlantic light. This blue-and-white coastal gem feels like a sun-faded watercolor-charming, authentic, and effortlessly photogenic.\n\nWe will capture the sunset from the Old Town medina, where the ancient fortifications turn a brilliant gold as the light hits the stone. From the waterfront, we’ll look for tide pool reflections-a fragile, mirror-like effect that perfectly captures the white walls, towers, and silhouettes of the ramparts against an orange-pink sky. As the gulls cry overhead and the last sails disappear on the horizon, you’ll find that Essaouira doesn’t just pose for a photo; it breathes.\n\nThis city is a treasure trove of textures and natural light. You can spend hours on street photography within the medina, capturing cracked blue shutters, local musicians, and the raw power of the ocean. There is no pretense here-just real life, which makes the sunrises and sunsets feel incredibly profound for any landscape or travel photographer."
      },
      {
        "day": 3,
        "plan": "ESSAOUIRA PORT: BLUE BOATS & MARITIME LIFE",
        "description": "Day three of our Morocco photography tour is dedicated to the slow, soulful rhythm of Essaouira. We begin with a sunrise photography session at the bustling fishing port. Long before the sun peaks, the harbor is alive with activity: fishermen mending nets, the cries of thousands of seagulls, and the mist rolling in from the Atlantic. The iconic deep-blue wooden boats glow against the morning haze, creating a perfect setting for cinematic storytelling. Whether it’s a weathered sailor or birds diving for the morning catch, the port offers endless opportunities for raw, powerful documentary photography.\n\nAs the morning mist lifts, the medina transforms under the bright Moroccan sun. The narrow streets-a labyrinth of white walls and vibrant blue shutters-become our stage for street and portrait photography. You’ll capture local artisans at work, from blacksmiths to carpenters, amidst a sea of ochre, indigo, and turquoise. The bustling markets, filled with spices and hand-woven carpets, provide a rich tapestry of colors and textures for your lens.\n\nAround midday, we visit the famous Essaouira fish market. It’s a sensory explosion where you can photograph the silver gleam of fresh sardines and rays before enjoying a traditional lunch of charcoal-grilled seafood right by the ocean. Afterward, we’ll walk the Portuguese ramparts, capturing high-angle views of the city and the crashing waves through ancient cannon embrasures.\n\nThe day concludes with a stroll along the vast, windy beach, where colorful kitesurfers provide dynamic silhouettes against the blue sky. Between shoots, we’ll embrace the local \"slow life\" with a glass of mint tea on a terrace, watching the vibrant street life of this Atlantic gem unfold."
      },
      {
        "day": 4,
        "plan": "MARRAKECH: THE KALEIDOSCOPE OF STREET PHOTOGRAPHY",
        "description": "Our Morocco photo tour moves to the legendary city of Marrakech (190 km, approx. 2.5 hours). For a street photographer, Marrakech is a living studio where every corner tells a story. This part of the journey serves as an intensive street-photography workshop, as the best frames are captured on the move amidst a whirlwind of colors, crowds, and exotic aromas.\n\nThe medina’s labyrinthine alleys offer a masterclass in light and shadow. Sunlight pierces through overhead awnings, creating dramatic high-contrast scenes that are perfect for black-and-white or saturated color photography. You’ll find yourself framing everything from spice merchants with pyramids of saffron to elderly men in traditional djellabas navigating ancient wooden doorways.\n\nThe heart of our session is the world-famous Jemaa el-Fnaa Square. From daytime acrobats and musicians to the evening’s electric atmosphere of grill smoke and lanterns, the square provides endless opportunities for capturing candid human moments and split-second emotions. We will also delve into the depths of the souk (market), practicing composition in tight, busy spaces filled with vibrant carpets, leather dyes, and copperware.\n\nIn Marrakech, we step off the tourist paths to find the \"photographic gold\": craftsmen in their workshops and locals in quiet teahouses. This isn’t just a tour; it’s a school of fast-paced urban photography, teaching you to be both invisible and attentive to the perfect moment."
      },
      {
        "day": 5,
        "plan": "AIT BEN HADDOU: CINEMATIC FORTRESS & RED CLAY HISTORY",
        "description": "On the fifth day of our Morocco photo tour, we journey to the ancient ksar of Ait Ben Haddou (185 km, approx. 3.5 hours). Rising dramatically from the red stone desert, this UNESCO World Heritage site looks like a mirage sculpted from the earth itself. The fortress, with its steep pathways and weathered clay walls, has famously served as a cinematic backdrop for legendary productions like Gladiator and Game of Thrones.\n\nFor a landscape and architectural photographer, Ait Ben Haddou is a masterclass in light and form. During the golden hour, the first rays illuminate the red-ochre walls, making the entire ksar glow from within. As the day progresses, sharp shadows create graphic, high-contrast compositions, while the sunset sets the entire landscape ablaze in fiery tones.\n\nBeyond the grand panoramas, the heart of the ksar offers intimate details for your lens: ancient archways, sun-drenched staircases, and textured wooden doors. Whether you are capturing a shepherd passing by the walls or the intricate play of light and shadow on the brickwork, you are photographing history itself. Ait Ben Haddou provides a silent, wind-swept sanctuary where you can step back in time and capture the raw essence of Morocco."
      },
      {
        "day": 6,
        "plan": "OUARZAZATE: THE GATEWAY TO THE SAHARA & TAOURIRT KASBAH",
        "description": "Our Morocco photography tour continues in Ouarzazate, the legendary \"Gateway to the Desert\". This city sits at the edge of rocky plains and golden dunes, offering a landscape that feels almost otherworldly. For photographers, the appeal lies in the pure, brilliant light and the cinematic backdrop of green oases contrasted against the jagged peaks of the Atlas Mountains.\n\nWe will explore why this region is a favorite for Hollywood directors, serving as the setting for masterpieces like Lawrence of Arabia, Gladiator, and Game of Thrones. Beyond the studios, the entire landscape feels like a vast film set where desert and architecture blend into one.\n\nThe highlight of the day is the Taourirt Kasbah, a masterpiece of earthen architecture and a labyrinth of clay walls and towers. Inside this fortress, we will practice interior photography, capturing soft light filtering through small windows into narrow hallways with painted ceilings. Every corner reveals a new play of light and shadow, allowing you to capture the rich textures of red-ochre walls against the deep blue Moroccan sky.\n\nPhotographing Ouarzazate and Taourirt is about capturing the authentic soul of Southern Morocco-an architecture born of the earth and sun, where beauty is shaped by the desert itself."
      },
      {
        "day": 7,
        "plan": "MERZOUGA: THE GOLDEN DUNES OF ERG CHEBBI",
        "description": "On the seventh day of our journey, we reach Merzouga (400 km, approx. 5.5 hours) - the true gateway to the Sahara Desert. Here, the civilization fades away, replaced by the endless sea of sand known as Erg Chebbi. These dunes are a living landscape; the wind constantly reshapes their ridges, and the light transforms the desert from silver to crimson and deep gold.\n\nFor a photographer, the Sahara is a masterclass in minimalist landscape photography. It is a world of vast open spaces, clean geometric lines, and the raw power of light.\n\nThe highlight is our sunrise shoot with a camel caravan. As the first rays of light crest the dunes, painting them in brilliant gold, a caravan of camels appears along the ridge. Their dark silhouettes against the glowing sand create the quintessential Sahara image-a scene that is impossible to replicate anywhere else in the world. With a herder in traditional dress leading the way, you will capture the mystical atmosphere of the desert awakening.\n\nAs the sun rises higher, the dunes take on a graphic, high-contrast look, perfect for capturing solitary silhouettes against the massive expanse of sand. Merzouga teaches you to find beauty in simplicity and the \"elegance of emptiness.\" This sunrise session in the heart of the Sahara is a bucket-list experience for every travel photographer."
      },
      {
        "day": 8,
        "plan": "SAHARA IMMERSION: LIGHT, SHADOW & ETERNAL SANDS",
        "description": "The eighth day of our signature Morocco photography tour begins with another sunrise amidst the vast Sahara dunes. This is a moment of pure magic, as the endless sea of sand transitions through soft shades of pink, orange, and gold. The silence is absolute, broken only by the whisper of the wind as it draws delicate, fleeting patterns across the dunes.\n\nWe dedicate the rest of the day to a deep exploration of the desert’s serene and ever-changing beauty. This is an ideal time for fine-art photography, focusing on the sculptural shapes and rhythmic curves carved by time and wind. As we walk among the massive waves of sand, you will have the opportunity to capture the powerful stillness of this eternal landscape.\n\nIn the shifting light of the desert, every dune tells its own story. Whether you are focusing on minimalist textures or wide-angle vistas, the Sahara offers a profound creative space to refine your composition and lighting techniques."
      },
      {
        "day": 9,
        "plan": "FEZ: MEDINA LABYRINTHS & THE LEGENDARY TANNERIES",
        "description": "On the ninth day of our Morocco photo tour, we journey toward Fez (460 km, approx. 6.5 hours), traveling through the scenic vistas of the Atlas Mountains. Fez is the soul of ancient Morocco-a sprawling, living labyrinth where time has stood still for centuries. The Medina of Fez, a UNESCO World Heritage site, offers a sensory overload of spice aromas, craft workshops, and bustling narrow streets perfect for candid street photography.\n\nThe highlight for every photographer is the city’s world-famous tanneries. From the surrounding balconies, you’ll capture a breathtaking scene: dozens of stone vats filled with vibrant dyes-from saffron yellow to deep indigo. This is a raw, authentic look at traditional craftsmanship, where workers treat hides by hand exactly as their ancestors did. The contrast between the bright pigments, the ancient vats, and the hardworking silhouettes provides some of the most powerful and iconic images of Morocco.\n\nBeyond the leather workshops, the entire city serves as a street photography masterclass. Dramatic beams of light pierce the dark, covered alleys, creating theatrical high-contrast scenes. Whether you are framing a shopkeeper in a tiny stall or an elderly man in a traditional djellaba, Fez allows you to capture Morocco without embellishment-real life and ancient artistry revealed through your lens."
      },
      {
        "day": 10,
        "plan": "THE MEDINA OF FEZ: A MASTERCLASS IN LIGHT & SHADOW",
        "description": "Walking through the Medina of Fez is like stepping back in time. In this labyrinth of thousands of alleyways, the modern world disappears, replaced by the rhythmic sounds of artisan workshops and the scents of mint, leather, and spices. For a street photographer, it is an absolute paradise where every corner offers a new story: from an elderly man in a traditional djellaba to vibrant textile shops.\n\nThe true magic of Fez lies in its light. In the narrow, sun-drenched passages, light breaks through from above in sharp, cinematic beams. These slices of brightness transform the chaotic medina into a series of graphic compositions. This is the perfect environment for minimalist street photography, where you can capture a lone silhouette frozen in a rectangle of light against the deep shadows of the ancient walls.\n\nA walk through the medina becomes a creative game: you move with the light, waiting for the perfect moment when the chaos of the city aligns into a perfectly composed frame. Fez is a city of contrasts-vibrant yet austere, chaotic yet rhythmic-offering a profound experience for any travel photographer."
      },
      {
        "day": 11,
        "plan": "CHEFCHAOUEN: THE BLUE PEARL OF THE RIF MOUNTAINS",
        "description": "On the eleventh day of our Morocco photography tour, we journey to the enchanting city of Chefchaouen (200 km, approx. 3.5 hours). Nestled deep in the Rif Mountains, this iconic \"Blue City\" is world-renowned for its striking azure-washed streets, walls, and doors. Life here moves at a tranquil, unhurried pace, making every alleyway feel like a meticulously composed frame.\n\nA walk through the Chefchaouen Medina is a masterclass in color and minimalist photography. The interplay of blue-and-white walls, vibrant flower pots, and ancient wooden doors provides endless inspiration for creative compositions. You will capture the city’s serene atmosphere through the soft play of sunlight and deep shadows, focusing on elegant details: a lone silhouette against an indigo backdrop, a cat resting on stone steps, or the bright splash of a basket of oranges.\n\nIn Chefchaouen, the shots find you. We will practice candid street photography, capturing local artisans at work and children playing in the winding stairways. This city is a perfect blend of harmony and visual therapy, ensuring that every corner you turn offers the potential for the highlight photo of your entire Morocco photo adventure."
      },
      {
        "day": 12,
        "plan": "FINAL JOURNEY TO CASABLANCA & DEPARTURE",
        "description": "On the twelfth and final day of our signature Morocco photo tour, we make our way back to Casablanca (330 km, approx. 4.5 hours). As we drive through the changing landscapes one last time, it’s a perfect opportunity to review your portfolio and share final insights with the group.\n\nUpon arrival in Casablanca, we will head directly to the airport for your journey home. To ensure a relaxed and stress-free departure, please book your return flights for the second half of the day.\n\nWe conclude our adventure where it all began, carrying home a wealth of memories, new friendships, and a professional-grade collection of Moroccan landscape and street photography."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What is the required photography level? Can non-photographers join the Morocco Photo Tour?",
        "answer": "We welcome everyone from absolute beginners to seasoned professionals, as well as non-photographers who wish to experience North Africa through a creative lens. Our tour leaders are expert mentors who adapt their guidance to your specific skill level. Whether you are shooting with a professional camera or a mobile phone, we ensure you leave with exceptional results.\n\nWitnessing the camels of the Sahara, the vibrant life of Casablanca and Marrakech, the iconic film sets of Ait Ben Haddou, the ancient tanneries of Fes, and the mesmerizing ’Blue City’ of Chefchaouen through a professional’s eyes offers a perspective that standard travel cannot match. On this expedition, you will bypass the typical tourist crowds to experience the authentic soul of Morocco — a land celebrated for its rich culture, safety, and legendary hospitality."
      },
      {
        "question": "2. What gear should I pack for the Morocco Photo Tour?",
        "answer": "To help you prepare, we provide specialized equipment recommendations for the diverse Moroccan landscapes. If you are bringing a professional camera, a tripod and lenses are essential.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical gear to comfortable clothing for the desert and cities alike. You can also book a personal consultation with your tour leader to finalize your preparations."
      },
      {
        "question": "3. What is the physical demand of the Morocco photo expedition?",
        "answer": "The Morocco Photo Tour is rated as ’Easy’ and is accessible to participants with a standard level of fitness. We prioritize your comfort throughout the journey. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements of the Moroccan itinerary with you directly."
      },
      {
        "question": "4. What is the typical group size for Morocco Photo Tours & Workshops?",
        "answer": "We believe in the power of intimacy and personalized attention. By keeping our groups small, we ensure that every participant receives direct mentoring and a truly immersive experience. Our goal is for you to return home not just with memories, but with a portfolio of ’trophy shots’ from the Sahara and beyond.\n\nThe group size for our Morocco tours is typically capped at 7 participants, though we occasionally host up to 8 in exceptional circumstances."
      },
      {
        "question": "5. Are flights included in the price of the Morocco tour and photo workshops?",
        "answer": "Since our community joins us from all over the world, airfare and visas are not included. The tour price covers your premium experience on the ground:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Casablanca) and all regional travel in a premium, air-conditioned Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, on-site mentoring, and masterclasses, including post-processing.\n\nFor details on any additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What is included in the cost of the Morocco Photo Tour and workshops?",
        "answer": "Your booking provides a comprehensive, stress-free expedition:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Casablanca) and all regional travel in a premium, air-conditioned Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, on-site mentoring, and masterclasses, including post-processing.\n\nDetailed information about any extra costs can be requested from our management team."
      }
    ]}',
    guide1_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429914/morocco___A8B2183_90x63-topaz-denoiseraw-sharpen-color_copy_d6h1s7.avif', 6, 'Casablanca', 'Casablanca',
    ARRAY['January','February'], ARRAY['English','French'], 16, 'North Africa', 12, 9, 'About Our Morocco Photo Expedition'),

   (tour3_id, 'venice-carnival-photo-tour', 'Venice Carnival',
     'Join our Venice Carnival Photo Tour for an unforgettable creative experience. Capture the elegance of Venetian masks and elaborate costumes against the backdrop of St. Mark''s Square. This photography workshop includes private shoots in historic palaces, gondola sessions, and hidden gems of Venice. Master your skills at sunrise and sunset. Limited small group tour. Book your photography adventure!',
     'EASY', 2500.00,
    '{"days": [
      {
        "day": 1,
        "plan": "ARRIVAL IN VENICE: MASKED ANTICIPATION & GOURMET TRADITION",
        "description": "The Venice Carnival, traditionally held in February, is a world-renowned celebration of opulent Venetian masks, elaborate costumes, and grand masquerade balls. With origins dating back to the 12th century, the festival transforms the city into a dazzling stage for art and culture. This is where our Venice photo adventure begins.\n\nAfter settling into our charming Venetian apartment, we will gather for an informal welcome meeting to discuss the exciting photography program ahead. To truly start our journey, we will head to a hidden gem far from the tourist crowds: Osteria Antico Giardinetto. This is not just a restaurant; it is a gastronomic sanctuary where the evening’s festive dinner becomes a highlight of the tour.\n\nOur host, Chef Virgilio-a culinary visionary-masterfully prepares the freshest seafood the lagoon has to offer. From scallops and cuttlefish to his signature pasta and sea bream, every dish is a poetic balance of simplicity and depth. The intimate atmosphere, with its soft lighting and historic brick walls, feels like dining in a private home. This evening of refined Italian cuisine is the perfect way to build anticipation for the magical days of shooting ahead."
      },
      {
        "day": 2,
        "plan": "SUNRISE AT SAN MARCO & THE COLORS OF MURANO",
        "description": "The magic of our Venice Carnival photography workshop truly begins at dawn. We start with a sunrise shoot at St. Mark’s Square (Piazza San Marco), where the soft golden light creates the perfect conditions for capturing the city’s most exquisite Venetian masks and costumes. Every morning brings new characters and ever more elaborate period looks, providing endless opportunities for portrait and travel photography.\n\nLater, we escape the main crowds and head to the island of Murano. Famous for its centuries-old glassmaking tradition, Murano offers a more authentic and tranquil atmosphere. Our photo walk here will focus on the island’s charming architecture, cozy waterfronts, and picturesque bridges, allowing for a slower, more contemplative creative process.\n\nIn the afternoon, you’ll have free time to explore the hidden calli (alleys) of Venice on your own. This is followed by a dedicated portfolio review, where you’ll receive professional feedback and technical insights to refine your vision. We conclude the day capturing the sunset from San Giorgio Maggiore. This island offers the most iconic panoramic views of the Venetian skyline, where we’ll continue working with carnival characters during the beautiful transition into the blue hour."
      },
      {
        "day": 3,
        "plan": "ST. MARK’S DAWN & THE VIBRANT COLORS OF BURANO",
        "description": "Our morning begins once again at St. Mark’s Square, taking advantage of the quiet hours before the city fully wakes. The ever-changing variety of Venetian Carnival costumes ensures that no two sunrise sessions are alike. The interplay of soft morning light and the boundless imagination of the participants provides a fresh canvas for your portrait photography every single day.\n\nNext, we board a water taxi to the island of Burano - a true sanctuary for photographers and a world-renowned destination for color-rich street photography. The island’s famously bright, multi-colored houses create bold geometric compositions, making it the perfect location to practice architectural and travel photography. We’ll spend ample time exploring Burano’s hidden corners, capturing the vivid reflections in its canals and the charming local lifestyle.\n\nAfter returning to Venice and enjoying some personal exploration time, we will gather for a sunset shoot at the Accademia Bridge (Ponte dell’Accademia). This vantage point offers the most picturesque view of the Grand Canal, where we’ll capture the historic palaces and passing gondolas bathed in the warm, golden glow of the Italian evening."
      },
      {
        "day": 4,
        "plan": "THE PRIVATE CARNIVAL: HIDDEN VENICE & ELITE MASKED CHARACTERS",
        "description": "Our final sunrise photography session at St. Mark’s Square offers one last opportunity to master the golden light and capture new, unexpected characters. Each morning of the Venice Carnival is a unique performance, and today we’ll focus on the most intricate details of the costumes that we might have missed earlier.\n\nAfter breakfast, we transition from the grand squares to the soul of the city. We’ll embark on a photo walk through Venice’s hidden gems and lesser-known sestieri. This is where the city sheds its tourist mask, revealing a surprisingly authentic and gritty side-perfect for documentary and street photography away from the crowds.\n\nThe highlight of the afternoon is an exclusive, private portfolio session. We will be granted access to a secret location shared only within a private circle of the most renowned carnival mask characters. These elite performers avoid the public bustle but enjoy posing for a select group of trusted photographers. This is a rare chance to capture fine-art portraits of the festival’s true icons in an intimate, controlled environment.\n\nWe will conclude our journey with a farewell dinner in a cozy Venetian setting, celebrating our best shots and the unforgettable connections made during this cinematic Venice photo tour."
      },
      {
        "day": 5,
        "plan": "FINAL SUNRISE & FAREWELL TO VENICE",
        "description": "For those who wish to make the most of their final moments in the lagoon, we offer an optional early-morning sunrise session at St. Mark’s Square. It is the perfect cinematic conclusion to your Venice Carnival photography journey, capturing the last golden rays over the historic gondolas before the city wakes.\n\nAfter our shoot, we’ll gather our belongings and prepare for departure, heading home with memory cards full of high-end images and hearts filled with the magic of the Adriatic.\n\nThroughout this entire experience, the Venice Carnival has served as more than just a backdrop-it has been our living studio. The kaleidoscope of opulent masks and exquisite costumes provided fresh inspiration, new characters, and diverse moods for your travel and portrait photography every single day.\n\nOur balanced itinerary-combining organized photoshoots, creative free time, and professional portfolio reviews-ensures that this tour is both a dynamic learning experience and a deeply personal adventure. You aren’t just leaving with photos; you are leaving with a refined vision and a unique collection of stories captured through your lens."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Venice Carnival Photo Tour? Can non-photographers participate?",
        "answer": "We welcome everyone from beginners to professionals, as well as non-photographers who wish to experience this centuries-old tradition away from the typical tourist crowds. Our tour leaders are expert mentors dedicated to helping you refine your skills, whether you are shooting with a professional camera or a smartphone.\n\nExperiencing the Venice Carnival through the eyes of a professional photographer — with a program meticulously planned for the best light and locations — is a transformative experience. On this expedition, you will bypass the usual crowds to capture the authentic soul of one of Europe’s most iconic cultural events, focusing on the intricate masks and atmospheric scenery."
      },
      {
        "question": "2. What gear should I pack for a photo tour during the Venice Carnival?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest bringing a tripod and a versatile lens kit: 24–70mm and 70–200mm zooms are essential, and a 35mm prime lens is highly recommended for environmental portraits and street photography.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from equipment to appropriate clothing for the Venetian winter. You can also schedule a personal consultation with your tour leader to ensure you are fully prepared for the workshop."
      },
      {
        "question": "3. What level of physical fitness is required for a photo tour during the Venice Carnival?",
        "answer": "The Venice Photo Tour is rated as ’Easy’ and is accessible to participants with a standard level of fitness. Most of our shooting involves walking through the historic center. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
      },
      {
        "question": "4. What is the typical group size for the Venice workshop?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach. By keeping our groups small, we ensure that every participant receives direct mentoring and plenty of space to shoot. Our goal is for you to return home with a portfolio of ’trophy shots’, including stunning portraits of costumed participants and evocative Venetian landscapes.\n\nThe group size for the Venice Carnival tour is typically capped at 7 participants, though we occasionally host up to 8 in exceptional circumstances."
      },
      {
        "question": "5. Are flights included in the cost of the Venice photo expedition?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour price focuses on your premium experience within the city:\n\n- Accommodation: Lodging in a historic Venetian loft (twin-share with your partner or another participant of the same gender).\n- Expert Mentoring: All guided shooting sessions, workshops, on-site mentoring, and post-processing masterclasses.\n\nFor details on any additional personal expenses during the carnival, please reach out to our management team."
      },
      {
        "question": "6. What exactly is covered in the Venice Carnival photo tour price?",
        "answer": "Your booking ensures a seamless and professional photography experience:\n\n- Accommodation: Lodging in a historic Venetian loft (twin-share with your partner or another participant of the same gender).\n- Expert Mentoring: All guided shooting sessions, workshops, on-site mentoring, and post-processing masterclasses.\n\nDetailed information about specific inclusions or extra costs can be requested from our managers."
      }
    ]}',
    guide2_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430346/venice__FUJI4667_Dehancer_ovjl23.avif', 5, 'Venice Marco Polo Airport (VCE)', 'Venice Marco Polo Airport (VCE)',
    ARRAY['February'], ARRAY['English'], 12, 'Europe', 7, 5, 'About Our Venice Carnival Photo Experience'),

   (tour4_id, 'new-zealand-photo-tour', 'New Zealand',
      'Discover the stunning landscapes of New Zealand from fjords to mountains. Capture the dramatic beauty of Milford Sound, the Southern Alps, and pristine lakes. This 10-day photography adventure features expert guidance, golden hour sessions, and diverse landscapes from glaciers to beaches. Small group ensures personalized instruction.',
     'EASY', 4100.00,
     '{"days":[
      {
        "day": "1–2",
        "plan": "THE NORTH ISLAND. AUCKLAND: THE CITY OF SAILS & MURIWAI COAST",
        "description": "Our New Zealand photography journey begins in Auckland, the country’s vibrant metropolitan heart. Known worldwide as the \"City of Sails\" due to the thousands of yachts dotting its harbors, Auckland is uniquely positioned on a narrow isthmus between the Tasman Sea and the Pacific Ocean.\n\nWe will spend two nights here to adjust to the new time zone and capture the urban landscape from the city’s premier viewpoints. For our first sunset session, we head north to Muriwai Regional Park. At Otakamiro Point, you will witness the breathtaking sight of a massive gannet colony perched above the crashing surf. As the sun sinks into the Tasman Sea-painting the sky in hues of gold, rose, and copper-these elegant birds provide an incredible subject for wildlife photography. Witnessing this pristine ecosystem in the soft, golden light is the perfect introduction to the natural wonders of your New Zealand photo tour."
      },
      {
        "day": "3",
        "plan": "THE NORTH ISLAND. HOBBITON AT SUNRISE & THE WAITOMO GLOWWORM CAVES",
        "description": "Day three of our New Zealand expedition begins with a scenic drive to the heart of the Waikato region. Our destination is the world-famous Hobbiton Movie Set. Unlike standard tourist groups, we prioritize private sunrise access, allowing you to capture the Shire in the softest morning light. Imagine the first rays of sun illuminating the rolling green hills and cozy Hobbit holes, with smoking chimneys and dew-covered garden gates creating a true cinematic masterpiece.\n\nIn the afternoon, we transition from the pastoral beauty of the Shire to the subterranean wonder of the Waitomo Glowworm Caves. We descend into a silent, pitch-black world where the ceiling suddenly ignites with thousands of tiny, bioluminescent blue lights. These New Zealand glowworms create a living \"starry sky\" beneath the earth, their glow reflecting off the still cave waters like a shimmering mirror. Surrounded by ancient stalactites, this alien-like world offers some of the most surreal and unique opportunities for your New Zealand photography portfolio."
      },
      {
        "day": "4",
        "plan": "THE NORTH ISLAND. COROMANDEL: CATHEDRAL COVE & THE CHAMPAGNE ROCK",
        "description": "A scenic two-hour drive brings us to the breathtaking Coromandel Peninsula. Our primary focus is the world-famous Cathedral Cove (Te Whanganui-o-Hei). This majestic, naturally carved limestone archway opens onto pristine white sands and emerald waters, serving as a dramatic natural frame for your coastal photography compositions.\n\nNearby, we explore the unique Hot Water Beach, where natural thermal springs bubble up through the sand, offering a fascinating contrast between the geothermal heat and the cool Pacific surf.\n\nFor our dedicated sunrise and sunset sessions, we head to Te Pare Point to capture the spectacular Champagne Rock. This striking sea stack rises from the turquoise sea like a solitary jewel. Whether you are shooting from the shore or utilizing a drone for aerial perspectives, it offers a perfect subject for long-exposure seascapes during the golden hour. The rhythmic flow of the waves against the rock creates the ethereal, misty effect that is a hallmark of a professional New Zealand photography workshop."
      },
      {
        "day": "5",
        "plan": "THE NORTH ISLAND. ROTORUA: THE VOLCANIC HEART OF AOTEAROA",
        "description": "Day five takes us deep into New Zealand’s volcanic zone-a place where the Earth is truly alive. In Rotorua, steam rises directly from the ground, waters are stained with surreal mineral hues, and ancient forests remain untouched by time. This is a premier destination for geothermal photography, and we have curated a selection of the region’s most iconic wonders (all park entry fees fully included):\n\nWai-O-Tapu & Champagne Pool: Famous for their vivid, neon mineral palettes and steaming craters, these locations offer an extraterrestrial landscape that defies the imagination.\n\nTe Puia (Whakarewarewa): A vibrant valley where powerful geysers and bubbling mud pools create a raw, primal atmosphere.\n\nWaimangu Volcanic Valley: A serene yet vast landscape of volcanic craters and uniquely colored lakes, showcasing the grand scale of geological time.\n\nRedwoods Forest (Whakarewarewa): A peaceful contrast to the geothermal heat. Walk beneath majestic giant sequoias and silver ferns, where soft, filtered light is perfect for capturing the lush textures of the New Zealand forest.\n\nTo end the day, we embark on an unforgettable adventure: a high-speed jet boat journey down the Manupirua River. After the adrenaline of weaving through narrow channels, we reach a hidden gem-remote natural hot springs where you can soak and unwind, finding perfect harmony in the wild."
      },
      {
        "day": "6–7",
        "plan": "THE NORTH ISLAND. TONGARIRO: THE VOLCANIC PEAKS & MOUNT RUAPEHU",
        "description": "On day six, we journey into the volcanic heart of the island: Tongariro National Park and the mighty Mount Ruapehu. This is one of New Zealand’s most visually powerful and cinematic regions - a raw world of volcanoes, wind, and vast open spaces.\n\nThe landscape here is a masterpiece of contrast: obsidian lava fields, ochre-colored slopes, and emerald alpine lakes. It is an alien environment where minimal vegetation allows the sheer scale and texture of the earth to take center stage. For those seeking the ultimate perspective, we offer two incredible options (weather permitting):\n\nThe Tongariro Alpine Crossing: A world-renowned 20 km trek through volcanic craters and past vivid sulfur lakes.\n\nScenic Photography Flight: Soar above the peaks in a small aircraft for a rare opportunity to capture top-down aerial shots of active vents and snow-capped summits.\n\nNote: These options are weather-dependent and not included in the tour price.\n\nOur primary focus will be Mount Ruapehu, the highest peak on the North Island. We will capture a spectacular sunrise shoot with a direct view of the volcano, where the first light hits the rugged, snow-dusted slopes. Its massive silhouette, often draped in dramatic clouds, creates a sense of being at the very edge of the world - a definitive highlight of our New Zealand photography expedition."
      },
      {
        "day": "8–9",
        "plan": "THE NORTH ISLAND. THE MAJESTY OF MOUNT TARANAKI: SYMMETRY & REFLECTIONS",
        "description": "On day eight, we journey 280 km to the western coast of the North Island to encounter one of New Zealand’s most photogenic landmarks: Mount Taranaki (Mount Egmont). Rising abruptly from the lush green plains, Taranaki is a near-perfect volcanic cone. Its symmetry is so flawless it almost appears surreal, dominating the landscape and drawing the eye from every direction.\n\nThe highlight of our visit is an overnight adventure: we will embark on the iconic Pouakai Tarns trek (a 3–4 hour hike). Our goal is to reach the tarns by dawn to capture the legendary reflection of Mount Taranaki in the still, alpine waters. This location is a holy grail for landscape photography, where the mountain’s slopes shift from soft morning hues to sharp, graphic shadows.\n\nSurrounding the volcano is Egmont National Park, a vibrant contrast of ancient \"goblin forests,\" lush ferns, and hidden waterfalls that stand against raw, dark lava flows. For those who seek pure form and the raw power of nature, this experience is often the emotional and visual pinnacle of our New Zealand photography expedition."
      },
      {
        "day": "10",
        "plan": "FAREWELL TO THE NORTH & CROSSING TO THE SOUTH ISLAND",
        "description": "Our final morning on the North Island begins with a spectacular sunrise photography session near Mount Taranaki, capturing the volcano’s iconic silhouette one last time. Afterward, we embark on the return journey to Auckland, concluding the first chapter of our New Zealand expedition.\n\nFor those continuing the adventure, we transition to the next phase of our journey. We will catch a domestic flight from Auckland to Christchurch - the historic gateway to the rugged beauty of the South Island."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the New Zealand Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from absolute beginners to seasoned professionals, as well as non-photographers who wish to experience the breathtaking landscapes of New Zealand. Our tour leaders are expert mentors dedicated to helping participants refine their skills through personalized on-site guidance. You are welcome to participate in all shooting sessions with a professional camera or a mobile phone.\n\nExperiencing the rolling hills of the North Island and the dramatic fjords of the South Island through the eyes of a professional photographer — who plans every detail for the perfect light — is a transformative experience. On this New Zealand photo tour, you will bypass the usual crowds to capture the authentic soul of the country, from ancient forests to glacial lakes."
      },
      {
        "question": "2. What gear should I pack for a photo tour in New Zealand?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a sturdy tripod and a versatile lens kit.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to essential layered clothing for the diverse Kiwi climate. You can also schedule a personal consultation with your expert photo guide, Pavel Oskin, to ensure you are fully prepared for the journey."
      },
      {
        "question": "3. What level of physical fitness is required for this expedition?",
        "answer": "The New Zealand photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. While the itinerary includes varied terrain, from geothermal parks to the Hobbiton movie set, we prioritize your comfort and ensure most locations are easily accessible. If you have any specific health concerns, our manager is available to discuss the requirements with you directly."
      }
    ]}',
    guide1_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429985/new-zealand___IGP8438-Pano-Dehancer_copy_3_ymdyii.avif', 10, 'Rome, Fiumicino Airport (FCO', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['April','December','January'], ARRAY['English'], 16, 'Oceania', 12, 3, 'About Our New Zealand Photo Expedition'),

   (tour5_id, 'cyclades-sailing-tour', 'Cyclades Sailing',
     'Set sail through the stunning Cyclades islands for a 7-day photography adventure. Capture the iconic white-washed villages of Santorini, ancient ruins of Delos, and hidden beaches accessible only by boat. Experience authentic Greek island life, golden hour sailing, and night photography under Mediterranean skies. Small group with expert photo guidance.',
     'EASY', 3200.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN ATHENS: SETTING SAIL FOR POROS",
        "description": "Your Cyclades sailing photo adventure begins with a seamless arrival. You will be met at Athens International Airport by an Executive-class Mercedes E-Class taxi for a comfortable transfer to Alimos Marina. We recommend arriving before 14:00 to make the most of our first day at sea. Your private catamaran will be fully provisioned in advance according to your personal preferences, allowing us to set sail without delay.\n\nOur first passage is a scenic 3-hour journey across the Saronic Gulf to the island of Poros. This hidden jewel of the Aegean Sea is the perfect introduction to the Greek islands, boasting lush greenery, secluded beaches, and a nostalgic, vintage atmosphere that is a dream for lifestyle and landscape photography.\n\nAs we approach, the island’s iconic clock tower perched on the hillside serves as our first major landmark. The town of Poros is widely considered one of the most picturesque hubs in the Aegean. We will spend the evening capturing the golden hour as the traditional seafront tavernas come alive, offering an authentic slice of Greek life to document through your lens. This is the perfect start to our luxury photography cruise."
      },
      {
        "day": "2",
        "plan": "KITHNOS: WILD LANDSCAPES & THE MIRACLE OF KOLONA BEACH",
        "description": "Our morning begins with a relaxed coffee on the promenade and a dip in the Aegean before we embark on a 6-hour sailing passage to the rugged island of Kithnos. This is where the true Cycladic aesthetic reveals itself-a mountainous landscape scented with wild oregano and thyme, dotted with stone windmills and 17th-century architecture.\n\nWe will explore Chora (Messaria), the island’s hilltop capital. With its whitewashed houses, blue shutters, and blooming gardens, it is a masterclass in traditional Greek street photography. We then move to the heart of the island to visit Dryopida, a town famous for its red-tiled roofs and the magnificent Katafiki Cave-one of the largest and most photogenic cavern systems in Greece.\n\nThe highlight of the day is a sunset session at Kolona Beach. This world-famous geographical marvel is a narrow strip of golden sand connecting Kithnos to the islet of Agios Loukas, creating two turquoise bays. Since it is difficult to reach by land, our private catamaran gives us exclusive access to this pristine landscape. Whether you are capturing wide-angle vistas or using drone photography to highlight the unique sandbar, Kolona offers a breathtaking, high-contrast palette of deep blues and gold."
      },
      {
        "day": "3",
        "plan": "MILOS: THE LUNAR LANDSCAPE & FISHERMEN’S SYRMATA",
        "description": "Today, we set sail for Milos, a volcanic masterpiece often called the most photogenic island in the Cyclades. Our 5-hour passage brings us to the birthplace of the Venus de Milo, where the coastline is a vibrant gallery of multicolored cliffs and over 75 unique beaches.\n\nOur photography workshop focuses on two iconic contrasts. At sunset, we will document the Syrmata-vibrant, colorful seaside houses carved into the rocks by local fishermen to shelter their boats. These traditional structures, with their bright doors reflecting in the crystal-clear water, are a dream for architectural and lifestyle photography.\n\nFor the following sunrise, we head to the legendary Sarakiniko Beach, the \"lunar landscape\" of Greece. This surreal expanse of bone-white volcanic rock, completely devoid of vegetation, creates a dramatic, high-contrast scene against the deep turquoise of the Aegean Sea. Capturing Sarakiniko at first light allows us to play with minimalist compositions and long exposures, creating images that feel truly out of this world.\n\nBeyond the coast, we will explore Plaka, the hilltop capital, to photograph its Venetian castle (Kastro) and whitewashed alleys. Milos is not just a destination; it’s a masterclass in landscape and fine-art photography, offering a raw, volcanic beauty that is unmatched in the Mediterranean."
      },
      {
        "day": "4",
        "plan": "SANTORINI: THE CROWN JEWEL OF THE CYCLADES",
        "description": "Today we reach the heart of our expedition: the legendary Santorini. While most travelers stay in crowded hotels, our private catamaran offers a truly elite experience. We will drop anchor directly beneath Oia, the most beautiful town on the island, spending the night on the water with a breathtaking view of the illuminated caldera.\n\nOur 5-6 hour sailing passage brings us to what many consider the world’s most photogenic destination. Oia (Panó Meriá) is a masterpiece of Cycladic architecture-a pedestrian-only labyrinth of whitewashed houses, vibrant bougainvillea, and those iconic blue-domed churches. For a travel photographer, this is a masterclass in composition and light.\n\nWe will go ashore to capture the most famous sunset in the world. From our unique vantage point, you will photograph the warm golden light hitting the historic windmills and the cascading white buildings of the old town. As the sky turns to shades of violet and pink, you’ll understand why Santorini tops every photographer’ bucket list. This is the ultimate golden hour session, blending luxury sailing with world-class landscape photography."
      },
      {
        "day": "5",
        "plan": "FOLEGANDROS: THE UNTOUCHED ELEGANCE OF REAL GREECE",
        "description": "On the fifth day of our Cyclades sailing adventure, we reach Folegandros-an island of profound natural beauty that remains blissfully untouched by mass tourism. Often described as the most \"Italian\" of the Greek islands due to its refined elegance, Folegandros offers a peaceful sanctuary for documentary and travel photography.\n\nOur 4-hour sailing passage leads us to the breathtaking Chora, widely considered the second most beautiful village in Greece after Oia. Built as a medieval settlement within the walls of a 13th-century Venetian Kastro, Chora’s white-washed houses are interconnected to form a defensive fortress. This unique architectural layout, combined with tree-shaded squares and narrow cobblestone alleys, provides a masterclass in architectural photography and minimalist composition.\n\nThe view from the cliffside Chora is legendary. Every corner of this \"untouched piece of real Greece\" offers postcard-perfect vistas of the deep blue Aegean. We will spend the golden hour capturing the timeless atmosphere of the Kastro and the winding paths leading to the Panagia church, where the silence and soft light allow for truly soulful landscape photography."
      },
      {
        "day": "6",
        "plan": "SIFNOS: THE CULINARY CAPITAL & CLIFFSIDE MONASTERIES",
        "description": "Our sailing photography journey brings us to Sifnos, an island celebrated for its sophisticated elegance and world-class gastronomy. Often called the culinary capital of the Cyclades, Sifnos offers a unique blend of lifestyle and architectural photography.\n\nThe highlight of our visit is the legendary Monastery of Chrysopigi, perched dramatically on a rocky cape split from the mainland. Capturing this white-washed sanctuary against the deep indigo of the Aegean at sunrise provides a sense of peace and harmony that is rare to find. We will also explore the medieval Kastro, a hilltop fortress where the ancient stone walls and narrow cobblestone alleys create a stunning high-contrast backdrop for street photography.\n\nAs the day winds down, we’ll visit the charming fishing harbors of Faros and Kamares. Here, the soft golden light illuminates traditional tavernas, where you can document the authentic soul of Greek hospitality. Sifnos is an island of beautiful contrasts-from rugged nature to refined architecture-making it a perfect stage for travel storytelling and capturing the \"slow life\" of the Aegean."
      },
      {
        "day": "7",
        "plan": "RETURN TO ATHENS: THE FINAL PASSAGE",
        "description": "On the final day of our Cyclades sailing photo adventure, we embark on our last major passage back to Alimos Marina in Athens (approx. 6 hours). This time on the water is perfect for a final portfolio review or simply relaxing on the deck of our private catamaran, soaking in the last views of the Saronic Gulf.\n\nUpon arrival, a seamless Executive-class taxi transfer will be waiting to take you directly to the airport. Alternatively, if you wish to extend your stay, we can arrange a drop-off at your hotel, allowing you a few more days to capture the ancient wonders of Athens through your lens.\n\nWe conclude our journey having mastered the Aegean light, returning home with a world-class collection of images from the most beautiful corners of the Greek islands."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Cyclades Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from beginners to professionals, as well as non-photographers who want to enjoy the catamaran life experience. Our expert photo guides provide personalized on-site mentoring, helping you refine your skills regardless of your starting point. You are welcome to participate with a professional camera or a mobile phone.\n\nExperiencing the Greek islands through the eyes of a professional photographer — who meticulously plans the route and timing for every location — is a unique experience. On this Cyclades photo tour, you will avoid the typical tourist crowds and capture the raw beauty of the Mediterranean from exclusive vantage points."
      },
      {
        "question": "2. What should I pack for a catamaran photo tour in the Cyclades?",
        "answer": "We provide specific technical recommendations for every participant. If you are bringing a camera, we suggest a versatile lens kit for both wide-angle seascapes and detailed cultural shots.\n\nOnce your spot is reserved, you will receive a comprehensive manual with a checklist of everything you need — from photography gear to appropriate sailing attire. You can also schedule a consultation with your expert photo guide to help you prepare for the unique conditions of sea-to-land landscape photography."
      },
      {
        "question": "3. What level of physical fitness is required?",
        "answer": "Our photo tours are generally rated as ’Easy’ and are suitable for participants with standard physical preparation. However, living on a catamaran requires a basic level of mobility. If you have health restrictions or concerns about your fitness, please contact our manager to discuss the specifics of life on board during the catamaran cruise."
      },
      {
        "question": "4. How many people are in a group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach. This allows us to ensure that every guest receives individual guidance and enough space for creative work.\n\nThe maximum group size for our Cyclades sailing photo tour is usually 11 participants. This size is perfectly balanced to provide a comfortable experience on the catamaran while fostering a vibrant creative community."
      },
      {
        "question": "5. Are flights included in the tour price?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. Your booking focuses on the premium experience provided once you arrive at the starting port:\n\n- Accommodation: Lodging on board the catamaran.\n- Logistics: All in-tour transportation and professional skipper & crew services, airport transfers (Athens) in a Mercedes E vehicle.\n- Education: Guided sunrise and sunset photo sessions, workshops, and post-processing lessons.\n\nFor details on additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What exactly is included in the cost?",
        "answer": "Your booking provides a comprehensive and stress-free Greek island photography expedition:\n\n- Accommodation & Sailing: Stay on the catamaran and professional maritime services.\n- Logistics: All in-tour transportation and professional skipper & crew services, airport transfers (Athens) in a Mercedes E vehicle.\n- Expert Mentoring: Daily photo shoots and professional workshops.\n- Creative Growth: Focused editing and post-processing sessions to help you bring home trophy shots.\n- Unique Experiences: A blend of cultural experiences and high-end travel photography."
      }
    ]}',
    guide4_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429871/cyclades__IMG_8808-Pano_copy_jkdqjj.avif', 7, 'Athens, Greece', 'Athens, Greece',
    ARRAY['May'], ARRAY['English'], 16, 'Mediterranean', 11, 6, 'Set sail through the stunning Cyclades islands'),

   (tour6_id, 'cinque-terre-umbria-tour', 'Cinque-Terre & Umbria',
     'Explore the colorful cliffside villages of Cinque-Terre and the medieval hill towns of Umbria. This 10-day journey captures the essence of coastal Italy and its rural heartland. Photograph dramatic seascapes, vineyards, ancient architecture, and authentic Italian life. Expert guidance in small group settings.',
     'EASY', 3500.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN FLORENCE & SUNSET IN MANAROLA",
        "description": "Our Italian photography adventure officially begins at noon at Florence Airport. We recommend all participants arrive before lunchtime, as our goal is to reach the coast in time for a spectacular Cinque Terre sunset. Since car traffic is strictly prohibited within these historic villages to preserve their charm, we will transition to the local rail system from Pisa to reach Manarola.\n\nThe two-hour train journey takes us away from the city bustle into a parallel world of medieval coastal villages, salty Mediterranean breezes, and shimmering sea views. For the next three days, Manarola will be our creative base. After checking into our hotel, we will head straight to the cliffs for our first golden hour session, capturing the iconic pastel-colored houses as they begin to glow against the evening sky. This is the perfect introduction to our Italian Riviera photography workshop."
      },
      {
        "day": "2",
        "plan": "MANAROLA DAWN & THE PATH OF LOVE TO RIOMAGGIORE",
        "description": "Our day begins before dawn in the enchanting town of Manarola. We will focus on the \"blue hour,\" capturing the magical transition as the warm streetlights fade and the first rays of the sun illuminate the iconic cliffside architecture. This is a prime opportunity for long-exposure photography and mastering delicate light balances.\n\nAfter a classic Italian breakfast, we’ll explore the narrow caruggi (alleys) or take a short train ride to the sandy shores of Monterosso al Mare for a coastal walk. Following a midday break to recharge, we will embark on a scenic journey along the world-famous Via dell’Amore (the \"Path of Love\"). This legendary coastal trail connects Manarola to Riomaggiore, offering breathtaking panoramic views of the Ligurian Sea.\n\nWe will spend the evening in Riomaggiore, positioning ourselves for a spectacular sunset shoot at the harbor. You’ll capture the vibrant, stacked houses of the village as they catch the final golden glow of the day. We’ll conclude our session with a celebratory dinner, enjoying local seafood and the timeless atmosphere of the Italian Riviera."
      },
      {
        "day": "3",
        "plan": "RIOMAGGIORE DAWN & THE VIBRANT SUNSET OF VERNAZZA",
        "description": "Experience the ultimate Cinque Terre magic with a day dedicated to the two most enchanting light transitions in the region. We begin our morning in Riomaggiore at sunrise, when the village awakens in a soft, ethereal glow. The vibrant, stacked houses reflect perfectly in the calm harbor waters, while the narrow streets remain blissfully empty. This is the ideal time for landscape photography, capturing a sense of profound tranquility and the gentle morning haze over the Ligurian coast.\n\nAs the day unfolds, we move to Vernazza, widely considered the most picturesque of the five villages. Our evening session focuses on the world-famous Vernazza sunset. Watch as the sun paints the pastel-colored buildings in deep shades of orange and pink, while the bobbing boats in the harbor create rhythmic, picturesque compositions.\n\nAs twilight descends, the village alleys fill with the soft, romantic glow of lanterns, offering a masterclass in low-light and street photography. These two moments-the quiet dawn in Riomaggiore and the dramatic dusk in Vernazza-are the highlights of our Italian Riviera photography workshop, designed to ensure every frame conveys the timeless beauty of Italy."
      },
      {
        "day": "4",
        "plan": "FAREWELL TO THE COAST & THE RENAISSANCE SKYLINE OF FLORENCE",
        "description": "We begin our final morning in the Riviera with a \"sunrise menu\" chosen by the group-one last chance to master the light in Manarola, Riomaggiore, or Vernazza. After breakfast, we leave the sea behind and head to Florence, the legendary cradle of the Renaissance. Our hotel is perfectly situated just a short walk from the historic center and the iconic Ponte Vecchio.\n\nOur creative focus for the evening is the world-famous Piazzale Michelangelo. This vantage point offers the most breathtaking panoramic view of the Florentine skyline. As the sun sets behind the distant mountains, the city’s architectural gems-the Duomo, the Palazzo Vecchio, and the Arno River-unfold before you like a living masterpiece.\n\nThis session is an ideal opportunity for cityscape photography. Be sure to have your telephoto lenses ready for dramatic, compressed shots of the historic towers, and your tripods for capturing the city’s lights during the blue hour. It is a spectacular transition from the rugged coast to the refined elegance of Tuscan culture."
      },
      {
        "day": "5",
        "plan": "UMBRIAN ROLLING HILLS: WINERIES & THE MEDIEVAL CHARM OF TODI",
        "description": "After a final optional sunrise session in the quiet, pre-dawn streets of Florence, we leave the Renaissance capital behind. From this point forward, our journey shifts to a comfortable road trip format. By midday, we arrive at our charming private estate, Casale Satriano, nestled in the heart of the Umbrian countryside.\n\nLocated on the prestigious Antonelli San Marco winery, our base is surrounded by vineyards producing the world-renowned Sagrantino wine. This is an incredible opportunity for food and lifestyle photography, as we’ll visit the winery’s restaurant to document the culinary artistry of Chef Giorgio.\n\nIn the late afternoon, we head to the hilltop town of Todi for a sunset session. Overlooking the Tiber Valley, Todi is a medieval masterpiece that feels virtually untouched by time. We will focus our lenses on Piazza del Popolo, one of Italy’s most harmonious squares, framed by 13th-century palaces and the Cathedral of San Fortunato. As the golden hour bathes the stone arches and rolling hills in a warm glow, you’ll find endless inspiration for architectural and fine-art photography. Todi isn’t just a location; it’s a living painting of old-world Italy."
      },
      {
        "day": "6",
        "plan": "THE FLOWERING PLAINS OF CASTELLUCCIO & THE MAJESTY OF ORVIETO",
        "description": "We depart early to witness a sunrise like no other in Castelluccio di Norcia. Nestled high in the Apennine Mountains within the Monti Sibillini National Park, this village overlooks the Great Plain (Piano Grande). From late spring to early summer, the plateau erupts in a world-famous floral display known as La Fioritura. Thousands of wildflowers blanket the fields in vibrant shades of ochre, purple, and red, creating an extraordinary canvas for landscape and macro photography.\n\nIn the afternoon, we transition from the wild mountains to the monumental hilltop town of Orvieto. Perched dramatically on a massive volcanic tuff cliff, Orvieto is a masterpiece of vertical architecture. Our primary focus is the Duomo di Orvieto, one of Italy’s greatest Gothic cathedrals. As the sun begins to set, the cathedral’s golden mosaics and intricate stone carvings ignite in the light, offering a sublime subject for architectural photography.\n\nBeyond the skyline, we’ll explore the town’s \"underground city\"-a labyrinth of ancient tunnels and the famous St. Patrick’s Well with its double spiral staircase, perfect for capturing atmospheric interiors. From Orvieto’s medieval walls, you’ll enjoy sweeping panoramas of the Umbrian vineyards and olive groves, making every shot a poetic tribute to the \"Green Heart of Italy.\""
      },
      {
        "day": "7",
        "plan": "PERUGIA: THE ETRUSCAN CAPITAL & THE SILHOUETTE OF TREVI",
        "description": "We greet the sunrise in the capital of the region, Perugia-an ancient city where layers of history are carved into every stone. From the monumental Etruscan gates to the refined Renaissance palaces, Perugia is a living film set. We will navigate its labyrinth of stone stairways and arches, capturing the rich textures and deep shadows that make this city a haven for street and black-and-white photography.\n\nOur morning focus will be Piazza IV Novembre, home to the magnificent Fontana Maggiore. This square, framed by the Palazzo dei Priori and the Cathedral of San Lorenzo, offers a masterclass in architectural photography. From the city’s elevated viewpoints, you’ll document the sweeping vistas of the \"Green Heart of Italy,\" where the Umbrian hills stretch toward the horizon in a soft, ethereal light.\n\nAs the day transitions to evening, we move to the iconic hill town of Trevi. Perched dramatically above the plains and surrounded by silver-green olive groves, Trevi’s silhouette is one of the most recognizable in central Italy. We will capture the sunset over the Tiber Valley, watching as the town’s stone walls ignite in a golden glow, providing a majestic conclusion to our creative exploration of Umbria."
      },
      {
        "day": "8",
        "plan": "THE \"DYING CITY\" OF CIVITA & THE SERENITY OF ASSISI",
        "description": "Our penultimate day begins with an early departure to witness one of Italy’s most surreal sights: Civita di Bagnoregio at sunrise. Perched precariously atop a crumbling tuff cliff and accessible only by a narrow pedestrian bridge, this \"City in the Clouds\" feels like a floating island in the morning mist. This is a dream for fine-art and landscape photography, as the first rays of light illuminate the gorge and the ancient stone gates, capturing the fragile beauty of a town that is slowly disappearing.\n\nIn the evening, we journey to Assisi, a UNESCO World Heritage Site and the birthplace of St. Francis. Spread across the verdant slopes of Mount Subasio, Assisi is one of the best-preserved medieval towns in the world. Its houses, built from unique white-and-pink Subasio stone, emit a soft, ethereal glow as the sun sets.\n\nOur creative focus will be the Basilica of Saint Francis, where the interplay of light and shadow on the Gothic arches provides a masterclass in architectural photography. From the town’s high terraces, we will capture panoramic vistas of the Umbrian valleys, blanketed in a golden evening light that has inspired artists for centuries."
      },
      {
        "day": "9",
        "plan": "SPELLO’S FLORAL LANES & THE ARTISTIC LIGHT OF THE UFFIZI",
        "description": "We begin our morning with a choice of a sunrise session in either Todi or Spoleto, followed by a wander through the enchanting town of Spello. Often called the \"Village of Flowers,\" Spello’s medieval stone streets are a dream for street photography, where vibrant floral displays contrast beautifully against ancient textures.\n\nBy afternoon, we return to Florence for an immersive visit to the Uffizi Gallery, one of the world’s most prestigious art museums. For a photographer, the Uffizi is more than a museum; it is a masterclass in light, shadows, and perspective. The 16th-century corridors designed by Vasari offer unique viewpoints, where arched windows frame the Arno River and the Ponte Vecchio in a way that feels like a living painting.\n\nInside, you’ll be surrounded by masterpieces from Botticelli, Leonardo da Vinci, and Raphael. Documenting the interplay of architectural harmony and timeless art provides a fresh creative perspective for our Florence photo tour. We will conclude the day at Piazzale Michelangelo, capturing the dramatic transition of the city skyline as it glows under the golden light of the setting sun."
      },
      {
        "day": "10",
        "plan": "THE GOLDEN DAWN OF PONTE VECCHIO & FAREWELL",
        "description": "Our final morning is dedicated to capturing the soul of Florence at its most peaceful. We head out before the city awakens to find the most compelling angles of the legendary Ponte Vecchio. This 14th-century stone bridge, famous for the artisan workshops and jewelry shops built directly into its structure, is a masterpiece of Renaissance architecture.\n\nAt dawn, the Arno River often mirrors the bridge in a perfect reflection, while the rising sun bathes the ancient facades in a soft, golden glow. This is a prime opportunity for fine-art and cityscape photography, allowing you to document the spirit of old Florence without the daytime crowds.\n\nAfter our shoot, we’ll take a quiet stroll through the empty, atmospheric streets, enjoying a final traditional cappuccino and dolce at a local café. As our Italian photography adventure comes to an end, you may choose to head to the airport or stay a few extra days to further explore the \"Cradle of the Renaissance.\" You leave with a heart full of memories and a portfolio enriched by the timeless beauty of Cinque Terre, Umbria, and Tuscany."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Cinque Terre and Umbria Photo Tour? Can non-photographers participate?",
        "answer": "We welcome photographers of all skill levels, from absolute beginners to seasoned professionals, as well as non-photographers who wish to experience the authentic Italian lifestyle. Our tour leaders are expert mentors who help participants refine their skills regardless of their starting point. You are welcome to join our shooting sessions with a professional camera or a mobile phone.\n\nExploring the vibrant coastal villages of Cinque Terre and the misty medieval towns of Umbria through the eyes of a professional photographer — who meticulously plans every detail and arrival time — is a transformative experience for both photographers and travelers. On this expedition, you will bypass the tourist crowds to capture the true beauty of these iconic Italian regions."
      },
      {
        "question": "2. What should I pack for the photo tour in Italy?",
        "answer": "We always provide specific technical recommendations for our Italy photo workshops. If you plan to bring a camera, we suggest having a tripod and a versatile lens kit.\n\nOnce your spot is reserved, you will receive a comprehensive manual with a checklist of everything you need for the expedition — from camera gear to appropriate clothing. You can also schedule a consultation with your expert photo guide to help you prepare for the trip."
      },
      {
        "question": "3. What level of physical fitness is required for this photo tour?",
        "answer": "The Cinque Terre and Umbria photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. While there is some walking through historic towns and coastal paths, the pace is relaxed and focused on photography. If you have specific health restrictions or concerns about your fitness, please contact our manager to discuss the itinerary in detail."
      },
      {
        "question": "4. How many people are in the group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is for you to return home with valuable new knowledge, vivid memories, and a portfolio of ’trophy shots’ from the heart of Italy.\n\nThe group size for our photo expeditions in Cinque Terre and Umbria is limited to 7 participants. This small group exclusivity ensures that everyone receives individual attention and dedicated mentoring during every session."
      },
      {
        "question": "5. Are international flights included in the 10-day Italy photo tour cost?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour officially starts and ends at Florence Airport (FLR). The following is included in the tour price:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Florence) and all regional travel in a Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing.\n\nFor information regarding additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What exactly is included in the Cinque Terre & Umbria photo tour?",
        "answer": "Your booking provides a comprehensive, stress-free photography experience:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Florence) and all regional travel in a Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing."
      }
    ]}',
    guide3_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429687/cinque-terre-umbria__OSKIN_4052_GenFill_copy_ytmtp1.avif', 10, 'Florence, Peretola Airport (FLR)', 'Florence, Peretola Airport (FLR)',
    ARRAY['June'], ARRAY['English'], 14, 'Europe', 14, 7, 'Discover the enchanting landscapes of Provence'),

   (tour7_id, 'provence-photography-tour', 'Provence Lavender & Villages',
     'Discover the enchanting landscapes of Provence during peak lavender season. Capture endless purple fields, medieval villages, and golden light. This 10-day photography workshop includes intimate knowledge of hidden locations, optimal timing for lavender bloom, and authentic Provençal experiences. Small group with personalized instruction.',
     'EASY', 3900.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN MARSEILLE & THE WILD CAMARGUE",
        "description": "We will meet you at Marseille Provence Airport (MRS) in the first half of the day. For those arriving a day early to explore the vibrant landmarks and museums of Marseille, we are happy to provide curated walking routes and recommendations. We will pick up our early-arrival guests from their hotels before heading to the airport to gather the full group. Once everyone is settled, our Provence photo expedition officially begins as we drive toward the Camargue Nature Reserve - our creative base for the first three nights.\n\nThe Camargue is a unique French sanctuary where nature remains raw and authentic. Vast salt flats, lagoons, and endless horizons create a landscape filled with ethereal light and space. This is a world apart: iconic white horses graze freely across coastal plains, while flocks of pink flamingos take flight over mirrored waters. For a photographer, the Camargue is a masterclass in harmony, offering a rare blend of wild elements and delicate southern light.\n\nAfter check-in and a relaxing lunch, we will head straight into the field. Our first session takes us to a renowned bird sanctuary, a prime location for wildlife photography. We will remain until the park closes to capture the flamingos and diverse birdlife of Southern France during the Golden Hour. The soft, evening light over the lagoons provides the perfect canvas for your first portfolio-ready shots of the tour."
      },
      {
        "day": "2",
        "plan": "ARLES & THE ICONIC HORSES OF THE CAMARGUE",
        "description": "Our morning is dedicated to the ancient city of Arles, a treasure trove of Roman history and artistic inspiration. We will explore the Romanesque Church of Saint-Trophime, the majestic white limestone Amphitheatre, and the Van Gogh Foundation, following the footsteps of the legendary painter. Beyond the landmarks, we’ll wander through sun-drenched medieval alleys, capturing the ’warm’ aesthetic of Provence.\n\nLunch is a curated experience at a local oyster bar. Enjoying fresh Mediterranean seafood paired with the famous Provençal rosé is more than just a meal - it’s an essential part of our cultural immersion. We believe that local gastronomy helps photographers connect with the land and capture its true soul.\n\nPrepare for the highlight of the tour: the white horses of Camargue galloping through the sea in the fiery glow of the setting sun. Supported by a professional team of riders (guardians), we will conduct a high-end action photography session across four distinct locations with varying light.\n\nTechnical Recommendations:\nTo capture these powerful moments, we recommend:\nLenses: A 70-200mm f/2.8 is essential; a 100-400mm lens is highly recommended for tighter action shots.\nGear & Clothing: Be prepared to get low and close to the water for the best angles. Wear comfortable clothing that you don’t mind getting wet or sandy as we follow the action into the surf."
      },
      {
        "day": "3",
        "plan": "STALLIONS AT SUNRISE & MEDIEVAL MARVELS",
        "description": "Prepare for what may become the most iconic shot in your portfolio: stallions at play at sunrise. This exclusive photography session captures the raw power and grace of the Camargue horses in the ethereal morning light. It is a rare, high-energy experience designed to stay in your memory - and your lens - for years to come.\n\nAfter the sunrise session, we explore the sun-drenched town of Saintes-Maries-de-la-Mer. At this hour, the town is a masterclass in soft light and long shadows. You’ll have the freedom to practice street photography among white-washed façades, terracotta rooftops, and narrow cobblestone alleys before the crowds arrive.\n\nFocus on Details: Capture the soul of Provence through carved shutters, wrought-iron balconies, and quiet, flower-filled courtyards bathed in gentle pastel tones.\n\nTake a break to recharge with a swim in the warm, inviting waters of the Mediterranean Sea. Following our swim, we’ll experience the landscape from a different perspective with a horseback ride through the Camargue marshes. This is followed by a traditional lunch and some well-deserved rest.\n\nIn the late afternoon, we depart for the stunning medieval fortress of Aigues-Mortes. Surrounded by remarkably preserved stone walls and overlooking the pink salt flats, this ’Dead Waters’ town offers incredible geometry and vibrant atmosphere for architectural and travel photography as the sun begins to set."
      },
      {
        "day": "4",
        "plan": "THE LAVENDER SEA OF VALENSOLE & HISTORIC AVIGNON",
        "description": "On our way to the plateau, we stop at the majestic city of Avignon, the historic seat of the Papal residence. We will capture the grandeur of the Palais des Papes (Palace of the Popes) and stroll along the legendary Pont d’Avignon. The city’s ancient stone architecture and winding streets offer a perfect contrast to the natural landscapes ahead.\n\nWe then set off for the Valensole Plateau - a true lavender wonderland. This is the heart of Provence, where in summer the land transforms into an endless sea of purple waves. Fields of lavender stretch to the horizon, shifting from soft lilac to deep violet, filling the air with a sweet, unforgettable fragrance.\n\nAfter settling into our second base, we head out for a sunset photography session. For a photographer, Valensole is an endless source of inspiration:\nLeading Lines: The narrow paths between perfectly manicured rows create a natural perspective for your compositions.\nFocal Points: Historic stone houses (cabanes) and solitary trees serve as striking subjects against the purple backdrop.\nAtmospheric Light: At sunset, the sky becomes a living canvas, casting a warm, golden glow over the deep violet fields.\n\nWhile we start with sunset, prepare for the ’magic hour’ tomorrow morning. As light mist settles over the valleys and the first golden rays touch the lavender tops, every stem seems to glow from within. It is a moment where the world holds its breath, and photographs seem to create themselves - a true Provençal fairy tale."
      },
      {
        "day": "5",
        "plan": "LAVENDER FIELDS",
        "description": "We will spend both sunrise and sunset among the endless lavender fields, which unfold like a sea of purple waves filled with delicate fragrance and soft light. This magical landscape ensures every photograph is infused with the spirit of Southern France - the blooming lavender plains create a fairytale backdrop for your images.\n\nRecommendation: We suggest that women bring light, flowy dresses to further highlight the harmony with this natural beauty in your photos.\n\nProvencal towns are famous for their lively open-air markets featuring local farmers and artisans, and we will certainly visit them. The most renowned markets are located in Apt and Lourmarin. These vibrant settings offer a perfect opportunity to capture the authentic atmosphere of Provence, its people, and its local crafts."
      },
      {
        "day": "6",
        "plan": "VERDON GORGE & VALENSOLE ICONIC SPOTS",
        "description": "On the sixth day of our Provence photo tour, we head to the breathtaking Verdon Gorge - the deepest canyon in Europe, reaching depths of up to 800 meters. We will navigate the winding switchbacks of the historic Route des Crêtes, climbing toward the clouds. If we are lucky, we will witness majestic eagles soaring below us, offering a visual experience you will never forget.\n\nAt sunset, we return to the vast lavender fields for another spectacular session. Having scouted the region extensively, we know all the best and most iconic photography spots in Valensole. We will be delighted to show you these hidden gems and classic vistas to ensure you capture the definitive images of the plateau."
      },
      {
        "day": "7",
        "plan": "DEPARTURE. MARSEILLE",
        "description": "On the final day of our photo tour, if the weather allows, we will capture the sunrise one last time to complete your portfolio. Afterward, we will depart for Marseille.\n\nWe recommend booking your return tickets for an afternoon flight to ensure a relaxed departure. We provide transfers directly to Marseille Provence Airport (MRS). If you wish to extend your stay, we can also drop you off in the city center to enjoy more of Marseille’s beautiful landmarks."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Provence Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from absolute beginners to seasoned professionals, as well as non-photographers who wish to experience the charm of Southern France. Our expert photo guides provide personalized on-site mentoring, helping you refine your craft whether you are shooting with a professional camera or a smartphone.\n\nExperiencing Provence through the eyes of a professional photographer — with a program meticulously planned for the best light and lavender blooms — is a transformative experience. On this expedition, you will bypass the typical tourist crowds to capture the authentic soul of the region, from the iconic purple fields to the wild spirit of the Camargue."
      },
      {
        "question": "2. What gear should I pack for a photo tour in Provence?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a tripod and a versatile lens kit.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to appropriate clothing. You can also schedule a personal consultation with your expert photo guide to ensure you are fully prepared for the workshop."
      },
      {
        "question": "3. What level of physical fitness is required for this expedition?",
        "answer": "The Provence photo tour is rated as ’Easy’ and is accessible to participants with a standard level of fitness. Most of our locations are easily reachable, allowing us to focus entirely on the creative process. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
      },
      {
        "question": "4. How many people are in the group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is to ensure you gain valuable experience and return home with a portfolio of ’trophy shots’ from the heart of Southern France.\n\nThe group size for our Provence photography workshop is capped at 7 participants. This small group exclusivity ensures that everyone receives individual attention during our intensive shooting sessions and editing workshops."
      },
      {
        "question": "5. Are international flights included in the tour cost?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour officially starts and ends at Marseille Airport (MRS). The following is included in the tour price:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Marseille) and all regional travel in a Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing.\n\nFor information regarding additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What exactly is included in the 7-day Provence photo tour?",
        "answer": "Your booking provides a comprehensive, stress-free photography and cultural experience:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Marseille) and all regional travel in a Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing."
      }
    ]}',
    guide5_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430058/provence___A8B4955_Topaz_copy_upigxu.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['June','July'], ARRAY['English'], 16, 'Europe', 16, 10, 'About Our Provence Photo Expedition'),

   (tour8_id, 'sicily-aeolian-tour', 'Sicily & Aeolian Islands',
     'Experience the dramatic beauty of Sicily and the volcanic Aeolian Islands. Capture Mount Etna''s power, ancient Greek ruins, and Stromboli''s nightly eruptions. This 10-day adventure combines Sicilian culture, volcanic landscapes, and Mediterranean seascapes with expert photo guidance in intimate small groups.',
     'MEDIUM', 3900.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN CATANIA: SAILING TO THE VOLCANIC ARCHIPELAGO",
        "description": "Your Aeolian Islands yacht photography adventure begins at Catania Airport, where we will meet you for a transfer to the Portorosa marina. After settling onto our private catamaran, we set sail immediately for Vulcano, the gateway to this legendary archipelago.\n\nThe Aeolian Islands are recognized as one of the natural wonders of the Mediterranean, and there is no better way to document their raw beauty than from the water. This breathtaking archipelago, located off the northeastern coast of Sicily, consists of seven distinct volcanic islands, each offering a unique landscape for fine-art and landscape photography.\n\nSteeped in myth, these volcanoes once glowed so brightly they served as natural lighthouses for ancient mariners, as immortalized in Virgil’s The Aeneid. Even today, their vivid volcanic activity continues to captivate travelers. This first passage is the perfect opportunity to capture the silhouette of the islands against the horizon, marking the start of our luxury sailing photography workshop."
      },
      {
        "day": "2",
        "plan": "VULCANO: ASCENDING THE GRAND CRATER & THERMAL SPRINGS",
        "description": "The island of Vulcano is raw elemental power in its purest form. Here, the earth breathes, the air carries a distinct scent of sulfur, and plumes of steam rise from the crater, creating a primordial atmosphere perfect for landscape and geothermal photography.\n\nOur creative journey begins with a sunrise shoot inside the caldera, surrounded by hissing fumaroles. The ascent to the summit of the Gran Cratere is a thrilling experience; standing on the edge of an active volcano at dawn reveals sweeping panoramas of the Tyrrhenian Sea and the silhouettes of neighboring islands floating in the mist. The hike is manageable, but proper trekking gear is recommended for capturing these high-altitude vistas.\n\nFor a photographer, Vulcano is a palette of striking contrasts: vibrant yellow sulfur crystals, deep reddish volcanic rock, and the endless azure of the sea meeting black-sand beaches. After the shoot, we’ll experience the island’s famous thermal mud baths. While the sulfur aroma is intense, the healing properties and unique visual textures of the mud springs are not to be missed. We will conclude the day with a relaxed exploration of the island, documenting the authentic connection between the locals and their fiery landscape."
      },
      {
        "day": "3",
        "plan": "SALINA & PANAREA: THE ESSENCE OF DOLCE VITA",
        "description": "Salina is an island that demands you slow down. Imagine narrow lanes lined with whitewashed houses, their shutters painted in colors so rich they practically beg to be captured on camera. From vineyards that cascade down to the turquoise sea to the lingering scent of jasmine and citrus, Salina is the heart of Mediterranean lifestyle photography.\n\nEvery corner of the island is a potential masterpiece: weathered village doors, vibrant blooming bougainvillea, and secluded coves where the water is so still it mirrors the clouds. As we wait for the golden hour, the island transforms; the sun paints the sky in shades of pink and gold, offering the perfect light for panoramic landscapes without the need for filters. Here, we embrace the true dolce vita, experimenting with compositions that capture the ’sweet life’ of Italy.\n\nIn the late afternoon, we set sail for Panarea, the most exclusive of the Aeolian Islands. While it shares Salina’s charm, Panarea offers a distinct, high-end atmosphere. We will explore its chic, car-free streets and white-walled architecture, documenting the first light hitting the harbor and the elegant, slow-paced rhythm of one of the Mediterranean’s most picturesque destinations."
      },
      {
        "day": "4",
        "plan": "STROMBOLI: CAPTURING THE LIGHTHOUSE OF THE MEDITERRANEAN",
        "description": "Today we set course for Stromboli, the legendary volcanic island often referred to as the ’Lighthouse of the Mediterranean.’ This nearly perfect triangular peak, rising 900 meters above the Tyrrhenian Sea, is one of the most active volcanoes on Earth and a crown jewel of our Aeolian sailing photo tour.\n\nStromboli is a study in raw power and dramatic contrast. A constant plume of smoke drifts from its craters, while the inhabited settlements of Stromboli town and the secluded Ginostra remain untouched by the lava flows. For a photographer, the island offers an unparalleled opportunity for long-exposure and night photography.\n\nAs darkness falls, we will position our catamaran to witness and capture the ’Sciara del Fuoco’-the spectacular fire slide where incandescent lava and stones erupt against the ink-black sky. This breathtaking volcanic spectacle, once described by Jules Verne, provides a rare chance to document the earth’s fiery heart from the safety of the water. It is a truly unforgettable experience that will be the centerpiece of your Italian photography portfolio."
      },
      {
        "day": "5",
        "plan": "STROMBOLI ASCENT: PHOTOGRAPHING THE FIRE AT TWILIGHT",
        "description": "We will spend the entire day immersed in the unique atmosphere of the island before embarking on the ultimate volcano trekking adventure. Stromboli is one of the few places on Earth where you can witness rhythmic eruptions up close in a safe, guided environment. This is the climax of our Aeolian photography workshop.\n\nLed by an experienced local guide, we will begin our ascent toward the 900-meter summit during the late afternoon. The trail offers breathtaking views of the shimmering sea and rugged cliffs, providing ample opportunities for golden hour photography. As we climb, the soft evening sun illuminates the path, creating a sense of anticipation as we approach the fiery heart of the volcano.\n\nWe reach the summit just as day turns to night. In the deepening twilight, the lava pulses with vivid bursts of fire, casting a primal glow against the darkening sky. Capturing these lava explosions requires precision and patience, offering a masterclass in night and long-exposure photography. Standing on the edge of a living volcano as the sun sets over the Tyrrhenian Sea is more than a photo opportunity-it is a profound connection to the earth’s energy that will stay with you forever."
      },
      {
        "day": "6",
        "plan": "SAILING TO PORTOROSA: SEAFOOD & HIDDEN BAYS",
        "description": "We enjoy an unhurried return voyage toward Portorosa. Along the way, we’ll stop at any island that catches our eye-perfect for an impromptu travel photography session or a scenic lunch. We’ll make a point to savor authentic Sicilian delicacies once more, from marinated red prawns and crudi antipasti to the freshest swordfish or tuna steaks. We know the most authentic local haunts and will gladly take you there.\n\nThroughout the journey, we will drop anchor to swim in the archipelago’s most beautiful, secluded bays. In one of these hidden coves, I’ll introduce you to a real-life ’Robinson Crusoe’. For those who want to learn the art of sailing, this day provides plenty of hands-on opportunities to work with the sails on our private catamaran."
      },
      {
        "day": "7",
        "plan": "THE GOLDEN HOUR IN NOTO: THE PINNACLE OF SICILIAN BAROQUE",
        "description": "We head toward the southeast of Sicily to establish our base for the next stage of our island exploration. Our destination for the evening is the magnificent town of Noto, widely considered the pinnacle of late Baroque urban design and architecture.\n\nRebuilt entirely from scratch following the devastating earthquake of 1693, Noto was designed to align with strict Baroque ideals. Under the vision of architects Labisi, Sinatra, and Gagliardi, the city was planned with perfect proportions and parallel streets that open into endless, dramatic perspectives. For a photographer, the town’s layout offers a masterclass in architectural composition and symmetry.\n\nThe true magic of Noto lies in its primary building material-a local, dense limestone that absorbs the Mediterranean sun. As the day ends, the stone transforms, radiating a soft, honey-colored glow. Capturing the Noto sunset is a mesmerizing experience, as the golden light illuminates the intricate facades of palaces and churches, making it a highlight of our Sicily photography workshop."
      },
      {
        "day": "8",
        "plan": "RAGUSA IBLA & MODICA: STONE, LIGHT, AND BAROQUE CHARM",
        "description": "We continue our journey through the Val di Noto, beginning in Ragusa, a city where time seems to stand still. The narrow streets of the old town, Ragusa Ibla, feel as if they are woven from stone and light. For a photographer, every staircase and hidden courtyard reveals a new scene: ancient doors, sun-drenched balconies, and quiet cafés that perfectly capture the slow-paced Sicilian atmosphere. From the city’s elevated viewpoints, you’ll find sweeping panoramas across the deep valleys-ideal for landscape and cityscape photography.\n\nNext, we explore Modica, a town that greets you with the sweet aroma of its world-famous ancient chocolate and the grandeur of Baroque architecture. The buildings here shimmer in the sunlight, their façades adorned with the intricate stone carvings typical of the region. Walking through Modica, you’ll find endless inspiration for street photography, capturing spontaneous moments like local musicians in the squares or the dramatic play of light and shadow on the limestone walls.\n\nFor a photographer, Ragusa and Modica are a treasure trove of textures and storylines. Whether you are focusing on the macro details of architectural carvings or the golden light reflecting in old windows, these two cities represent the soul of Sicily that you will want to capture and share again and again."
      },
      {
        "day": "9",
        "plan": "ORTIGIA’S MORNING MARKET & THE CINEMATIC CHARM OF SAVOCA",
        "description": "Sunrise in Syracuse is a true gift for the lens. As we arrive on the island of Ortigia, the city is still asleep, and the narrow medieval streets begin to glow in soft golden and rosy tones. Our primary focus is the Ortigia market. While vendors set up their stalls, the air fills with the aroma of fresh seafood and spices. This is an elite location for candid street photography: glistening fish, vibrant citrus, and the natural movement of early morning life provide endless, vivid compositions.\n\nAfter exploring the quiet archways and sun-drenched balconies of Syracuse, we head to the hilltop village of Savoca. Famous worldwide as the filming location for Francis Ford Coppola’s The Godfather, Savoca offers a step back in time. We will walk the same paths as Michael Corleone, visit the historic church from the wedding scene, and capture the rugged, cinematic beauty of this ’silent’ Sicilian village before enjoying a traditional siesta.\n\nWe conclude the day in Marzamemi, arguably the most authentic fishing village in Sicily. At sunset, the old stone tuna fishery (tonnara) and the central square transform into a movie set. The sea catches the pink light, boats rest on the shore, and golden lanterns illuminate tables set for an evening glass of wine. A Marzamemi sunset is about pure atmosphere-capturing the ’living’ Sicily that defines the heart of our Italian photography journey."
      },
      {
        "day": "10",
        "plan": "TAORMINA DAWN & FAREWELL TO SICILY",
        "description": "Morning in Taormina is pure magic. Before the crowds arrive, the air is filled with soft light and a gentle Mediterranean breeze. The narrow cobblestone streets of the old town feel frozen in time, offering a rare sense of tranquility. White façades adorned with wrought-iron balconies and fresh flowers catch the first rays of sunlight, creating a perfect setting for fine-art and street photography.\n\nFrom the town’s elevated terraces, sweeping panoramas unfold: the azure sea, rugged cliffs, and the dramatic coastline below. Your camera will find endless inspiration in the architectural details-ancient doors, hidden stairways, and ornate railings that serve as strong compositional leading lines. At sunrise, Taormina reveals its soul, proving why it has been a muse for artists and photographers for centuries.\n\nAfter our final morning session and a quiet coffee in the square, we will provide a transfer to Catania Airport. Please book your return flight for the afternoon to ensure you have time to soak in the last moments of this incredible Sicily & Aeolian Islands photography workshop. You leave with a heart full of memories and a memory card brimming with the fiery spirit and Baroque elegance of Italy’s greatest island."
      }
    ]}',
    '{"questions": [
    ]}',
    guide4_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430152/sicily__IMG_0599_dmi5yb.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['June','July'], ARRAY['English'], 16, 'Mediterranean', 16, 12, 'About Our Sicily & Aeolian Islands Photo Adventure'),

 (tour9_id, 'czechia-autumn-tour', 'Czechia Autumn',
     'Capture the golden beauty of Czechia during peak autumn season. From Prague''s Gothic splendor to Bohemian castles and medieval towns, this 10-day journey showcases Central Europe''s finest fall colors. Expert guidance in small groups ensures optimal timing for golden hour and autumn foliage photography.',
     'EASY', 2900.00,
     '{"days":[
      {
        "day": "1",
        "plan": "ARRIVAL IN PRAGUE: MONASTERIES & THE PANORAMIC GOLDEN HOUR",
        "description": "Your Czechia photography adventure begins with a midday arrival at Prague Airport, followed by a transfer to our hotel. We’ll kick off our journey with lunch at the historic Strahov Monastery, where you can savor traditional Czech cuisine and world-class craft beer. Afterward, we’ll explore the monastery’s library-renowned as one of the most beautiful in the world-and visit the majestic Prague Castle, including St. Vitus Cathedral and the charming Golden Lane.\n\nOur first official shoot takes place at sunset from the Hanavský Pavilion, offering arguably the most spectacular view of the city. From this terrace above the Vltava River, the bridges of Prague line up in a perfect chain, and the red-tiled roofs of the Old Town begin to glow in watercolor shades of gold and pink.\n\nFor a photographer, this vantage point is a treasure trove of cityscape photography opportunities. You can capture wide-angle panoramas of the river or use your telephoto lens to isolate the cathedral spires and the first glimmer of the streetlights. As the sun sets behind Petřín Hill, the ’City of a Hundred Spires’ truly ignites. We’ll conclude this inspiring first day with an authentic dinner at the legendary U Fleků brewery, experiencing the heart of Czech culture."
      },
      {
        "day": "2",
        "plan": "PRAGUE: DAWN ON CHARLES BRIDGE & HISTORIC SQUARES",
        "description": "Experiencing sunrise on Charles Bridge is the kind of magic that makes an early wake-up call truly rewarding. We arrive in the pre-dawn darkness when the bridge is still and mysterious, illuminated only by the warm glow of historic lanterns. The quiet is absolute, broken only by the gentle flow of the Vltava River below.\n\nAs the sky transitions from deep blue to soft pink and orange, the first rays of light break through the spires of the Old Town. This is a premier opportunity for fine-art and architectural photography: the statues along the bridge come to life in the morning glow, while the silhouettes of Prague Castle and St. Vitus Cathedral emerge from the morning mist. With the bridge almost entirely to ourselves, you’ll have the space to capture perfect reflections on the cobblestones and moody river vistas without the crowds.\n\nAfter our sunrise session and a hearty breakfast, we’ll continue our Prague walking photo tour. Our route covers the city’s architectural evolution, including Old Town Square, Wenceslas Square, the modern Dancing House, and the historic fortress of Vyšehrad. We’ll conclude the day with a traditional dinner at Potrefená Husa, famous for its exclusive, velvety craft beer-the perfect way to celebrate a day of creative discovery."
      },
      {
        "day": "3",
        "plan": "KONOPIŠTĚ CASTLE & THE HEART OF SOUTH MORAVIA",
        "description": "In the morning, we depart the capital and head toward the rolling landscapes of South Moravia. Our first stop is the enchanting Konopiště Castle, a fortress steeped in a romantic and tragic history. Once the final residence of Archduke Franz Ferdinand, the castle is famous for its fairytale architecture-white walls, red-roofed towers, and a lush park that feels hidden from the world.\n\nFor a photographer, Konopiště offers a masterclass in architectural and landscape photography. We will document its wonderfully preserved interiors, extensive weapon collections, and the serene moat that surrounds the castle. The soft, dappled light filtering through the surrounding forest provides a perfect backdrop for capturing the moody, historic soul of this Bohemian landmark.\n\nBy afternoon, we arrive at our creative base: an elegant boutique hotel owned by a local winemaking family, situated directly within the legendary Moravian fields. This region, often called the ’Moravian Tuscany,’ is a dream for landscape photography. We’ll conclude our day by heading into the hills to capture our first Moravian sunset, where the undulating green waves of the earth create mesmerizing patterns of light and shadow."
      },
      {
        "day": "4-6",
        "plan": "THE MORAVIAN FIELDS: ROLLING WAVES & BAROQUE ESTATES",
        "description": "We immerse ourselves in the heart of the South Moravian fields, a region that feels warm and alive, where the landscape breathes and changes with every passing cloud. For a photographer, these days are a masterclass in landscape composition. Every curve of the road and every undulating meadow hides a new frame waiting to be discovered-from the famous ’Moravian waves’ to lone trees standing against the horizon.\n\nOur midday explorations take us to the architectural jewels of the region. We will document the grand Lednice Castle, a Neo-Gothic masterpiece and UNESCO World Heritage site, and the elegant Buchlovice Castle, inspired by Italian Baroque villas. A scenic walk through the Čejkovice vineyards provides the perfect opportunity for lifestyle photography, capturing the golden autumn light filtering through the vines.\n\nThe experience is enriched by the flavors of the region. Autumn in Moravia is a celebration for gourmets, featuring traditional roasted goose and game dishes. We will arrange exclusive local wine tastings and dinners at the region’s finest restaurants, allowing you to capture the authentic spirit of Czech hospitality while refining your portfolio in one of Europe’s most photogenic landscapes."
      },
      {
        "day": "7",
        "plan": "ČESKÝ KRUMLOV: A MEDIEVAL FAIRY TALE ON THE VLTAVA",
        "description": "We travel to what is arguably the most beautiful town in the Czech Republic - Český Krumlov. Once the ancestral residence of the noble Rosenberg and Schwarzenberg families, this UNESCO World Heritage site has remained virtually unchanged since the 15th century. Here, the Vltava River forms a perfect, picturesque bend, with the medieval town nestled right in its heart.\n\nČeský Krumlov feels like stepping into a living fairy tale. Narrow cobblestone streets, vibrant red-tiled roofs, and small stone bridges create a charming atmosphere that is a joy to document. The majestic Krumlov Castle rises above the town, providing a powerful focal point for your architectural photography, no matter where you stand in the old center.\n\nMorning in Krumlov is pure enchantment. Mist often drifts above the river as the town wakes up, offering a serene environment for landscape and street photography without the daytime crowds. In the evening, as historic lanterns ignite and a warm glow spills from the windows, the town transforms into a glowing stage set. Watching the reflections dance on the Vltava, you’ll realize why this town is considered a ’must-shoot’ location for any Czechia photography workshop."
      },
      {
        "day": "8",
        "plan": "ČESKÝ KRUMLOV: THE JEWEL OF SOUTH BOHEMIA",
        "description": "We will spend the entire day exploring the town and photographing it from the best sunrise and sunset viewpoints. We will enjoy local cuisine in traditional restaurants and try beer from a regional brewery.\n\nČeský Krumlov is the jewel of South Bohemia and one of the most picturesque towns in Europe, listed as a UNESCO World Heritage Site. Its narrow cobblestone streets, Gothic and Renaissance facades, and historic castle with a Baroque theatre create the atmosphere of a true fairy tale. The sweeping views of the winding Vltava River and the town’s movie-set feel make photographing this location a pure delight for any photographer."
      },
      {
        "day": "9",
        "plan": "BOHEMIAN CASTLES: FROM NEO-GOTHIC ELEGANCE TO MEDIEVAL MIGHT",
        "description": "On our way back to Prague, we will visit two magnificent castles that showcase the architectural diversity of the region: Hluboká nad Vltavou and Zvíkov.\n\nHluboká, a Neo-Gothic masterpiece inspired by England’s Windsor Castle, is widely considered one of the most beautiful castles in the Czech Republic. Its intricate white facades and ornate towers provide endless opportunities for architectural photography. In contrast, Zvíkov Castle, dramatically situated at the confluence of the Vltava and Otava rivers, impresses with its powerful Gothic architecture and authentic medieval atmosphere. The rugged stone walls and defensive structures offer a moody, historic backdrop for your portfolio.\n\nIn the evening, we arrive in Prague and check into our hotel. We’ll celebrate the conclusion of our journey with a farewell dinner at Ambiente Brasileiro, one of the city’s finest restaurants. The exceptional cuisine and vibrant atmosphere provide the perfect finale to our unforgettable Czechia photography tour."
      },
      {
        "day": "10",
        "plan": "DEPARTURE: THE LAST GOLDEN LIGHT OVER PRAGUE",
        "description": "We will greet our final sunrise from the viewpoint near Strahov Monastery, one of the premier panoramic spots in the city. From this elevated vantage point, the ’City of a Hundred Spires’ unfolds beneath us, offering a spectacular opportunity for cityscape photography as the morning light hits the red-tiled roofs and distant bridges.\n\nAfter our morning photo session and a final breakfast at the hotel, a transfer to Prague Airport awaits. For those wishing to stay in Prague a little longer, we will be happy to assist with arranging additional tours and activities to further explore the Gothic and Baroque wonders of the Czech capital. This concludes our Czechia autumn photo tour, leaving you with a portfolio of golden landscapes and medieval masterpieces."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Czechia Autumn Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from beginners to professionals, as well as non-photographers who wish to experience the beauty of Central Europe in autumn. Our tour leaders are experts dedicated to helping participants refine their skills through personalized on-site mentoring. You are welcome to join our shooting sessions with a professional camera or a mobile phone.\n\nExperiencing Prague and the rolling hills of South Moravia through the eyes of a professional photographer — who plans every detail for the best autumn light — is a transformative experience. On this Czechia photo tour, you will avoid the typical tourist crowds to capture the authentic soul of the region, from medieval architecture to misty vineyard landscapes."
      },
      {
        "question": "2. What gear should I pack for an autumn photo tour in Czechia?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a tripod and a versatile lens kit: a wide-angle lens for Prague’s gothic streets and a telephoto lens (such as 70–200mm or 100–400mm) to capture the famous ’Moravian Tuscany’ waves.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to appropriate layered clothing for the crisp autumn air. You can also schedule a personal consultation with your expert photo guide to ensure you are fully prepared."
      },
      {
        "question": "3. What level of physical fitness is required for this expedition?",
        "answer": "The Czechia autumn photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. Most locations are easily accessible, allowing us to focus entirely on the creative process. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
      },
      {
        "question": "4. How many people are in the group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is to ensure you gain valuable experience and return home with a portfolio of ’trophy shots’ from the most cinematic corners of the Czech Republic.\n\nThe group size for our Czechia photography workshop is capped at 7 participants. This small group exclusivity ensures that everyone receives individual attention during our intensive shooting sessions and editing workshops."
      },
      {
        "question": "5. Are international flights included in the tour cost?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour officially starts and ends at Prague Airport (PRG). The following is included in the tour price:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Prague) and all regional travel in a premium Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing.\n\nFor information regarding additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What exactly is included in the 10-day Czechia photo tour?",
        "answer": "Your booking provides a comprehensive, stress-free photography and cultural experience:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers (Prague) and all regional travel in a premium Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing."
      }
    ]}',
    guide2_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429592/czech-fall___IGP2024_93x69_200dpi-Dehancer_120x90_PRINT_2017_copy_jssztz.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['October'], ARRAY['English'], 14, 'Europe', 14, 8, 'About Our Czechia Autumn Photo Expedition'),

 (tour10_id, 'scotland-photography-tour', 'Scotland Highlands & Islands',
   'Journey through the mystical Scottish Highlands and dramatic coastline. Capture lochs, castles, and the raw beauty of the Isle of Skye. This 10-day photography adventure includes remote landscapes, historic sites, and authentic Highland culture. Expert guidance in small groups ensures intimate shooting experiences.',
     'EASY', 3600.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN EDINBURGH: THE CINEMATIC HEART OF SCOTLAND",
        "description": "Your Scotland photography adventure begins in its captivating capital - historic Edinburgh. This city, guarded by ancient fortresses that once ruled the land, feels like a medieval fairy tale seamlessly blended with a vibrant modern soul. For a photography tour, Edinburgh is perfection; everywhere you turn, a perfectly composed frame awaits your lens.\n\nWe begin our exploration along the Royal Mile, a narrow cobblestone thoroughfare stretching from the castle to the palace. Here, you will find stone houses with weathered tiled roofs, hidden closes, and ancient archways steeped in centuries of history. The way the Scottish sunlight breaks between the buildings and falls onto the grey masonry creates a living, breathing atmosphere that is a joy to capture.\n\nNext, we ascend to Edinburgh Castle. From this iconic vantage point, the city unfolds beneath you: church spires, rolling green hills, and the distant sea. For cityscape photography, this is a must-shoot location that instantly explains why Scotland is so legendary in cinema.\n\nWe will then wander through the city’s labyrinth of narrow closes - winding lanes filled with old lanterns and dramatic light and shadow. To conclude the day, we’ll climb Calton Hill for a sunset session. From here, the city looks like a masterpiece in oil: golden light, stone silhouettes, and the majestic castle rising above the skyline. Every square and street in Edinburgh is a new chapter in your Scottish photography portfolio."
      },
      {
        "day": "2",
        "plan": "GLENCOE & GLEN ETIVE: THE DRAMATIC HIGHLANDS",
        "description": "The true soul of Scotland lies in its untamed landscapes. Today, we journey into the heart of the Scottish Highlands toward Glencoe, traveling along the legendary road through Glen Etive. This twelve-mile stretch offers some of the most magnificent scenery in the country, from expansive heather moorlands and imposing mountain peaks to crystal-clear lochs and deep, breathtaking valleys.\n\nThis route is not only a dream for landscape photography but also a piece of cinematic history. Glen Etive served as the iconic filming location for the James Bond masterpiece ’Skyfall.’ It is a place of deep personal connection to the 007 legacy, as Ian Fleming once owned a lodge here. Capturing the rugged road winding through the mist-covered mountains provides an unparalleled opportunity for moody, atmospheric photography.\n\nOur primary destination is the Etive Mòr waterfall. This is one of the most famous and dramatic photography spots in Scotland, where the rushing water contrasts beautifully with the sharp silhouette of Buachaille Etive Mòr in the background. Whether you are focusing on long-exposure water textures or grand mountain vistas, this corner of the Highlands leaves every photographer inspired. It is a cornerstone of any Highlands photography workshop."
      },
      {
        "day": "3",
        "plan": "FORT WILLIAM & THE MAGIC OF GLENFINNAN",
        "description": "Fort William serves as the true gateway to the wild and rugged Scottish Highlands. Sitting at the base of Ben Nevis, the highest peak in the British Isles, this town offers a dramatic change in atmosphere from Edinburgh. Here, the landscape is raw and alive-a world of shifting colours where mountain slopes turn from vibrant green to deep charcoal as low clouds sweep across the lochs. It is the perfect base for capturing the untamed essence of the North.\n\nA short drive away lies one of Scotland’s most legendary landmarks: the Glenfinnan Viaduct. Famous globally as the bridge crossed by the Hogwarts Express in the Harry Potter films, the viaduct is an architectural marvel set within a breathtaking valley. For a photographer, the constantly changing light-from bright sun illuminating the stone arches to a mysterious Highland mist-offers endless opportunities for landscape and cinematic photography.\n\nThe highlight of the day is capturing the Jacobite steam train as it crosses the curve of the viaduct, billowing plumes of white smoke into the mountain air. This scene is a ’must-shoot’ for any Scotland photography workshop, perfectly blending historic engineering with natural beauty. Even in silence, the viaduct at sunset provides a warm, soft glow that makes for an iconic addition to your Highlands portfolio."
      },
      {
        "day": "4",
        "plan": "EILEAN DONAN: THE ICONIC CELTIC FORTRESS",
        "description": "Eilean Donan is arguably the most ’postcard-perfect’ castle in Scotland-the definitive image of an ancient Celtic fortress. Dramatically situated on a tiny island at the confluence of three sea lochs, it feels as if it were designed specifically for the lens. With its iconic stone bridge, towering grey walls, and a backdrop of rugged mountains, it provides a perfectly composed frame for any Scottish photography portfolio.\n\nThe castle’s character shifts with the unpredictable Highland weather. Under overcast skies, it appears stoic and powerful against the crashing waves and wind. However, when the clouds break, the stone walls glow with warm, golden tones. At sunset, Eilean Donan becomes truly magical; as the sky turns shades of pink and orange, the fortress seems to float between the sky and its own reflection in the water.\n\nThis location is a premier spot for practicing diverse techniques, from long-exposure waterscapes to dramatic, moody architectural shots. It is here that you will truly feel the mystical soul of Scotland-rugged, timeless, and hauntingly beautiful. Capturing this landmark is a highlight of our Highlands landscape photography workshop."
      },
      {
        "day": "5",
        "plan": "ISLE OF SKYE: THE EDGE OF THE WORLD & NEIST POINT",
        "description": "We begin two full days of exploration on the Isle of Skye, perhaps the wildest and most cinematic destination in Scotland. The landscapes here look as if they were drawn for an ancient myth: rolling emerald hills, sheer basalt cliffs, and mist curling at your feet. For a landscape photography workshop, Skye is unparalleled; every hour brings a new spectacle of light and shadow, with the sun suddenly igniting the valleys in golden tones before the low clouds descend once more.\n\nThe highlight of our journey is Neist Point, a dramatic headland where a historic lighthouse sits perched at the very edge of the world. At sunset, this location becomes a masterpiece of nature. As the sun sinks into the Atlantic, painting the sky in vibrant shades of pink and orange, the dark cliffs below are battered by the powerful waves. The wind is fresh and constant here, adding a raw, adventurous energy to every shot you take.\n\nFor a photographer, Neist Point offers a moment of absolute creative focus. With perfect horizon lines, dramatic natural light, and the lighthouse providing a striking focal point, you will capture the full power of the ocean. Even beyond the lens, a walk along these cliffs feels like touching something timeless and real-the ultimate Scottish Highlands photography experience."
      },
      {
        "day": "6",
        "plan": "THE PEAKS OF SKYE: STORR, KILT ROCK & THE QUIRAING",
        "description": "The Isle of Skye is a truly magical destination. As the largest island of the Inner Hebrides, it holds the most iconic landscapes in all of Scotland. Today is about the raw effort that goes into professional landscape photography-where every shot is earned through adventure and perseverance.\n\nOur day begins in the pre-dawn darkness with a hike to the Old Man of Storr. Under the glow of headlamps and against the biting Highland wind, we ascend the slippery trails to reach the base of this famous stone pinnacle. As the first rays of sunlight break through the clouds, the rugged landscape ignites in golden light. The ’Old Man’ becomes the center of a breathtaking universe, providing a world-class opportunity for dramatic mountain photography.\n\nNext, we visit Kilt Rock Waterfall, a location of immense power where water plunges directly from a sheer cliff into the churning sea below. This is an ideal spot for practicing long-exposure photography, capturing the water as a soft veil against the dark basalt columns.\n\nWe conclude our exploration at The Quiraing-a landscape so otherworldly it feels like another planet. With its fractured cliffs and mist-covered green slopes, the Quiraing offers an endless array of graphic compositions. Using a wide-angle lens, we will document this shifting theater of light and shadow, where the low clouds act as a curtain over one of Scotland’s most dramatic vistas. This is the heart of our Isle of Skye photography workshop, where the wind and fatigue are rewarded with images that look almost unreal."
      },
      {
        "day": "7",
        "plan": "CAIRNGORMS NATIONAL PARK",
        "description": "Our intensive photo tour continues with a visit to Cairngorms National Park - a truly breathtaking place that embodies the very essence and outstanding beauty of Scotland. Here lies the impressive Cairngorm mountain range and the vast surrounding territory within the park. We will explore the best viewpoints of this unique natural landscape."
      },
      {
        "day": "8",
        "plan": "EDINBURGH & DEPARTURE",
        "description": "Edinburgh. Departure. The end of our photography tour in Scotland. We will arrive at the airport around midday, so please make sure your return flight is scheduled for the second half of the day."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Scotland Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from beginners to professionals, as well as non-photographers who wish to experience the dramatic beauty of the Highlands. Our tour leaders are experts dedicated to helping participants refine their skills through personalized on-site mentoring. You are welcome to join our shooting sessions with a professional camera or a mobile phone.\n\nExperiencing the Isle of Skye and Glencoe through the eyes of a professional photographer — who plans every detail for the most atmospheric light — is a transformative experience. On this Scotland photo tour, you will avoid the typical tourist crowds to capture the authentic soul of the region, from ancient castles to rugged mountain vistas."
      },
      {
        "question": "2. What gear should I pack for a photo tour in Scotland?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a tripod and a versatile lens kit.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to essential waterproof layered clothing for the unpredictable Highland weather. You can also schedule a personal consultation with your expert photo guide to ensure you are fully prepared."
      },
      {
        "question": "3. What level of physical fitness is required for this expedition?",
        "answer": "The Scotland photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. Most iconic locations are easily accessible, though some light trekking may be involved to reach the best vantage points. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
      },
      {
        "question": "4. How many people are in the group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is to ensure you gain valuable experience and return home with a portfolio of ’trophy shots’ from the most cinematic corners of the British Isles.\n\nThe group size for our Scotland photography workshop is capped at 7 participants. This small group exclusivity ensures that everyone receives individual attention during our intensive shooting sessions and editing workshops."
      },
      {
        "question": "5. Are international flights included in the tour cost?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The following is included in the tour price:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers and all regional travel in a premium vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing."
      },
      {
        "question": "6. What exactly is included in the Scotland photo tour?",
        "answer": "Your booking provides a comprehensive, stress-free photography and cultural experience:\n\n- Accommodation: Twin-share rooms in high-quality hotels with your partner or another participant of the same gender.\n- Logistics: Airport transfers and all regional travel in a premium vehicle.\n- Expert Mentoring: All shooting sessions, workshops, on-site mentoring, and masterclasses, including post-processing."
      }
    ]}',
    guide1_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430128/scotland__IMGP3471_Panorama-Dehancer_copy_mpyxma.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['October'], ARRAY['English'], 16, 'Europe', 16, 10, 'About Our Scotland Highlands & Islands Photo Expedition'),

(tour11_id, 'tuscany-autumn-tour', 'Tuscany Autumn',
     'Experience Tuscany''s golden autumn season when vineyards turn gold and harvest creates authentic rural scenes. From rolling hills to medieval hill towns, capture the essence of Italian autumn culture. This 10-day workshop features wine harvest photography, truffle hunting, and golden light across iconic landscapes.',
     'EASY', 3800.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL: ROMAN SEAFOOD & THE CYPRESS ALLEYS OF POGGIO COVILI",
        "description": "Our autumn photography tour in Tuscany begins with a meeting at Rome Fiumicino Airport. We recommend arriving in the first half of the day (or the day before, in which case we will collect you from your hotel in the morning). We’ll start our journey with a traditional lunch on the Lungomare di Salute, famous for its exceptional seafood restaurants. After lunch, we drive north to check in at Podere Poggio Covili estate. Our first session will be a sunset shoot of the estate’s iconic cypress-lined driveway."
      },
      {
        "day": "2",
        "plan": "PIENZA DAWN & THE VITALETA CHAPEL",
        "description": "At sunrise, we head to the panoramic viewpoint of Pienza, capturing the essence of Val d’Orcia and its rolling fog if present. Use long lenses up to 400mm for hill compression and distant villas. Afterward, enjoy cappuccino and dolce in Pienza’s central square, and stroll through its historic streets sampling local Pecorino. In the evening, we photograph the iconic Chapel of Madonna di Vitaleta before a Tuscan dinner at our estate."
      },
      {
        "day": "3",
        "plan": "PODERE BELVEDERE & THE RUSTIC SOUL OF TUSCANY",
        "description": "Sunrise at Podere Belvedere provides an iconic landscape opportunity. After coffee in San Quirico d’Orcia and a midday rest, we return for evening photography at Madonna di Vitaleta, capturing it from various perspectives. Dinner will be at Fonte Alla Vena, a cozy trattoria offering traditional Tuscan cuisine and local wines."
      },
      {
        "day": "4",
        "plan": "MEDIEVAL TOWERS & THE MAJESTY OF SIENA",
        "description": "We start with sunrise over San Gimignano, photographing its 13 medieval towers. After coffee and sweets at Marcella’s, explore the town’s Duomo and climb Torre Municipale. Journey to Siena for lunch at Taverna San Giuseppe, explore the Duomo, ascend the viewing terrace for skyline shots, and visit Piazza del Campo. Evening return to our base with a quiet dinner."
      },
      {
        "day": "5",
        "plan": "THE MISTS OF MACCIANO & THE ARTISTS OF CETONA",
        "description": "Sunrise in the Macciano valley captures rolling fields and morning fog. Visit additional viewpoints including La Foce, then explore Cetona’s streets and the private gallery of Tazio Angelini and Fausta Ottolini. After lunch, return to the valley for a sunset shoot at Podere Belvedere."
      },
      {
        "day": "6",
        "plan": "MONTALCINO: THE KING OF WINES & ANCIENT ABBEYS",
        "description": "Sunrise photography over Val d’Orcia from Montalcino. Visit Montalcino Fortress for Brunello wine tasting, then explore the Abbey of Sant’Antimo and experience Gregorian chants. Afternoon dedicated to local boutique wine tastings, concluding with a sunset session in the rolling fields near Torrenieri."
      },
      {
        "day": "7",
        "plan": "TUFF CITIES & THERMAL SPRINGS: PITIGLIANO, SATURNIA & SORANO",
        "description": "Early visit to Pitigliano for street photography, local Duomo, and Etruscan catacombs. Explore private Etruscan cellars. Head to Cascate di Saturnia for midday relaxation in thermal pools. Sunset session in Sorano for dramatic tuff-rock landscapes, ending with dinner at Sette di Vino in Pienza."
      },
      {
        "day": "8",
        "plan": "CRETE SENESI: THE HIDDEN VALLEYS & PODERE BACCOLENO",
        "description": "Sunrise near Mucigliano to photograph off-the-beaten-path Tuscan landscapes. Journey along Crete Senesi for scenic stops and photography. After a midday rest, sunset shoot at Podere Baccoleno, capturing the whimsical cypress-lined road."
      },
      {
        "day": "9",
        "plan": "THERMAL MISTS & THE ROOFLESS ABBEY",
        "description": "Sunrise in Bagno Vignoni with views of the ancient thermal pool. Visit Sarteano for olive oil tasting and Radicofani for Andrea della Robbia artwork. Relax at Bagni San Filippo hot springs. Final evening session at the roofless Abbey of San Galgano, photographing Gothic arches and nearby chapel, concluding with a farewell dinner."
      },
      {
        "day": "10",
        "plan": "FINAL LIGHT OVER TUSCANY & DEPARTURE",
        "description": "Last sunrise photography location selected based on weather. Drive back to Rome Fiumicino Airport, arriving around 12:00. Return flights should be scheduled for the afternoon. Optionally, extend stay in Rome city center for further exploration."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What is the required photography level? Can non-photographers join the Autumn Tuscany Photo Tour?",
        "answer": "We welcome everyone from absolute beginners to seasoned professionals, as well as non-photographers who simply wish to experience Italy and Tuscany in a new way. Our tour leaders are dedicated mentors who adapt their guidance to your specific skill level. Whether you are shooting with a professional camera or a mobile phone, we ensure you leave with incredible results.\n\nExperiencing the Val d’Orcia in autumn through the lens of a professional — with every arrival timed perfectly for the best light — offers a perspective that standard travel simply cannot match. On this expedition, you will bypass the typical tourist routes to witness the authentic soul of Tuscany, famous for its golden vineyards, seasonal harvests, and world-class gastronomy."
      },
      {
        "question": "2. What gear should I pack for photo expedition in Tuscany in autumn?",
        "answer": "To help you prepare, we provide a specialized equipment guide for the Tuscan landscape. For those bringing dedicated camera gear, a tripod is essential. We recommend a lens kit including 24-70mm and 70-200mm optics; a 100-400mm lens is particularly valuable for capturing the layered depth of the rolling hills.\n\nOnce your spot is reserved, you’ll receive a detailed manual covering everything from technical gear to comfortable layered clothing for the crisp autumn mornings. You can also book a personal consultation with your tour leader to finalize your preparations."
      },
      {
        "question": "3. What is the physical demand of the Autumn Tuscany Photo Tour?",
        "answer": "This tour is rated as ’Easy’, making it accessible to anyone with a standard level of fitness. We prioritize comfort and accessibility. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements of this autumn itinerary with you directly."
      },
      {
        "question": "4. What is the typical group size for the Tuscany Photo Tour in autumn?",
        "answer": "We believe in the power of intimacy and personalized attention. By keeping our groups small, we ensure that every participant receives direct mentoring and a meaningful experience. Our goal is for you to return home not just with memories, but with a portfolio of ’trophy shots’ from the Val d’Orcia.\n\nThe group size for our Tuscany autumn photo tours is usually capped at 7 participants, though we occasionally host up to 8 in exceptional circumstances."
      },
      {
        "question": "5. Are flights included in the price of the Autumn Tuscany tour and photo workshops?",
        "answer": "Since our community joins us from all corners of the globe, airfare and visas are not included. The tour price covers your premium experience on the ground:\n\n- Accommodation: Lodging at the legendary Poggio Covili villa (available as single occupancy or double rooms for couples).\n- Logistics: All airport transfers (Rome) and regional travel in a high-comfort Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, photo workshops, on-site mentoring, and masterclasses, including post-processing.\n\nFor details on any additional personal expenses, please reach out to our management team."
      },
      {
        "question": "6. What is included in the cost of the Autumn Tuscany Photo Tour and workshops?",
        "answer": "Your booking provides a comprehensive, stress-free experience:\n\n- Accommodation: Lodging at the legendary Poggio Covili villa (available as single occupancy or double rooms for couples).\n- Logistics: All airport transfers (Rome) and regional travel in a high-comfort Mercedes vehicle.\n- Expert Mentoring: All shooting sessions, photo workshops, on-site mentoring, and masterclasses, including post-processing.\n\nDetailed information about any extra costs can be requested from our management team."
      }
    ]}',
    guide3_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430222/tuscany-fall___IMG7020-Pano-1_1-Dechancer_copy_g90yjy.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['October','November'], ARRAY['English'], 16, 'Europe', 11, 5, 'Journey through the mystical Scottish Highlands'),

  (tour12_id, 'japan-atumn-tour', 'Japan Autumn',
    'Immerse yourself in Japan''s rich cultural heritage and modern innovation. From ancient temples in Kyoto to neon-lit Tokyo streets, capture the fascinating contrast of traditional and contemporary Japan. This 10-day photography workshop includes expert guidance, cultural experiences, and optimal timing for seasonal beauty.',
    'EASY', 4500.00,
    '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN TOKYO: FUTURISTIC IMMERSION",
        "description": "Arrival at Haneda Airport. Acclimatization and personal time. Visit teamLab Borderless Tokyo for immersive digital art photography, capturing luminous corridors, glowing projections, and infinite reflections."
      },
      {
        "day": "2",
        "plan": "TOKYO’S AUTUMN PARKS: THE COLORS OF MOMIJI",
        "description": "Explore Ueno, Shinjuku Gyoen, and Yoyogi Parks to capture autumn foliage. Ueno offers energetic ginkgo and maple photography; Shinjuku Gyoen provides serene reflections; Yoyogi Park captures lifestyle and candid portraits in golden autumn light."
      },
      {
        "day": "3",
        "plan": "KYOTO: THE CRIMSON PATHS OF FUSHIMI INARI",
        "description": "Travel to Kyoto for sunrise at Fushimi Inari Shrine. Photograph thousands of red torii gates, moss-covered lanterns, and Kitsune statues. Capture panoramic views of Kyoto rooftops and the mystical crimson corridors."
      },
      {
        "day": "4",
        "plan": "KYOTO: BAMBOO GROVES, GOLDEN PAVILIONS & GEISHA TRADITIONS",
        "description": "Sunrise photoshoot in Arashiyama and Bamboo Grove. Visit Kiyomizu-dera and Kinkaku-ji (Golden Pavilion) for architectural and landscape photography. Evening in Gion district to photograph Geiko and Maiko in traditional attire along Hanami-koji lanes."
      },
      {
        "day": "5-6",
        "plan": "JIGOKUDANI MONKEY PARK: WILDLIFE & WELLNESS",
        "description": "Two nights in Jigokudani region. Sunrise and sunset wildlife photography with Japanese macaques in natural hot springs. Free time to enjoy mountain walks and thermal spas. Capture emotive animal behavior and serene landscapes."
      },
      {
        "day": "7",
        "plan": "MATSUMOTO: THE CROW CASTLE & THE WORLD OF YAYOI KUSAMA",
        "description": "Photograph Matsumoto Castle (Crow Castle) and its autumn garden reflections. Explore castle interiors with samurai armor. Visit Matsumoto City Museum of Art, featuring Yayoi Kusama’s installations, including infinity mirror rooms and signature dot environments."
      },
      {
        "day": "8",
        "plan": "MOUNT FUJI: THE MOMIJI CORRIDOR & LAKE KAWAGUCHIKO",
        "description": "Travel to Lake Kawaguchiko for sunrise photography of Mount Fuji framed by autumn maple leaves. Capture reflections on the lake, the Maple Corridor, and sunset transitions with vivid skies. Focus on landscape composition and seasonal color contrasts."
      },
      {
        "day": "9",
        "plan": "CHUREITO PAGODA: THE ICONIC SUNRISE",
        "description": "Ascend 398 steps to Chureito Pagoda in Arakurayama Sengen Park for sunrise. Capture the red pagoda with Mount Fuji in the background, framed by vibrant Momiji foliage. Focus on architectural harmony and natural scenic beauty."
      },
      {
        "day": "10",
        "plan": "RETURN TO TOKYO & DEPARTURE",
        "description": "Return to Tokyo. Depart from Haneda or Narita Airport in the afternoon. Optional city drop-offs for those extending their stay. End of Japan photography tour with a world-class portfolio of landscapes, wildlife, and cultural experiences."
      }
    ]}',
    '{"questions": [
      {
        "question": "1. What photography level is required for the Japan Autumn Photo Tour? Can non-photographers join?",
        "answer": "We welcome photographers of all skill levels, from beginners to professionals, as well as non-photographers who wish to experience the vibrant colors of Japan’s autumn. Our tour leaders are experts dedicated to helping participants refine their skills through personalized on-site mentoring. You are welcome to join our shooting sessions with a professional camera or a mobile phone.\n\nExperiencing Tokyo, the serene shrines, and the legendary landscapes through the eyes of a professional photographer — who plans every detail for the best light — is a transformative experience. On this Japan autumn photo tour, you will avoid the typical tourist crowds to capture the authentic soul of the country, from bustling street scenes to the tranquility of ancient gardens."
      },
      {
        "question": "2. What gear should I pack for an autumn photo tour in Japan?",
        "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a tripod and a versatile lens kit: a wide-angle lens for urban Tokyo architecture and a telephoto lens (such as 70–200mm) to capture the unique details of the Jigokudani Monkey Park.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to appropriate clothing for the Japanese autumn. You can also schedule a personal consultation with your expert photo guide to ensure you are fully prepared."
      },
      {
        "question": "3. What level of physical fitness is required for this expedition?",
        "answer": "The Japan autumn photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. Most iconic locations are easily accessible, allowing us to focus entirely on the creative process. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
      },
      {
        "question": "4. How many people are in the group?",
        "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is to ensure you gain valuable experience and return home with a portfolio of ’trophy shots’ from the most cinematic corners of Japan.\n\nThe group size for our Japan photography workshop is limited to 10 participants. This size ensures that everyone receives individual attention during our shooting sessions and editing workshops."
      },
      {
        "question": "5. Are international flights included in the tour cost?",
        "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour officially starts and ends in Tokyo. The following is included in the tour price:\n\n- Accommodation: 10 days of high-quality lodging, including an Authentic Ryokan (special overnight stay).\n- Logistics: Airport transfers (Haneda) and all regional travel within the tour.\n- Meals: Daily breakfasts are included.\n- Expert Mentoring: All sunrise and sunset photo sessions, workshops, and on-site guidance.\n- Education: Dedicated editing and post-processing sessions."
      },
      {
        "question": "6. What exactly is included in the 10-day Japan photo tour?",
        "answer": "Your booking provides a comprehensive, stress-free photography and cultural experience:\n\n- Professional Guidance: Daily shoots and workshops led by an expert photo guide.\n- Unique Cultural Stays: An immersive Ryokan experience and visits to the Jigokudani Monkey Park.\n- Creative Growth: In-depth editing and post-processing sessions to refine your portfolio.\n- Logistics: All transportation, accommodation, and breakfasts throughout the 10-day itinerary."
      }
    ]}',
    guide5_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128122/japan_fall_1_IMG3488-Pano-Edit-Cover_2_2_lusnab.avif', 10, 'Rome, Fiumicino Airport (FCO)', 'Rome, Fiumicino Airport (FCO)',
    ARRAY['March','April','November','December'], ARRAY['English'], 14, 'Japan', 14, 3, 'Immerse yourself in Japan''s rich cultural heritage'),

  (tour13_id, 'iceland-tour', 'Iceland',
     'Join our exclusive Iceland Off-Road Photo Expedition for the ultimate wilderness experience. Venture deep into the rugged interior and the heart of the Highlands, accessible only by specialized 4x4 vehicles. From the volcanic landscapes to hidden glaciers and obsidian deserts, master your landscape photography in Europe’s last great wilderness. Start your adventure with us!',
     'EASY', 4450.00,
     '{"days": [
        {
          "day": "1",
          "plan": "ARRIVAL IN REYKJAVIK: SCANDINAVIAN VIBES",
          "description": "Arrival at Keflavik Airport. Acclimatization and exploration of Reykjavik: Hallgrímskirkja Church, Harpa Concert Hall, harbor houses. Sunset session at Sun Voyager monument. Overnight at Reykjavik campsite in off-road caravans."
        },
        {
          "day": "2",
          "plan": "THE SOUTH COAST: HIDDEN FALLS & VOLCANIC SANDS",
          "description": "Drive south toward Vík. Photograph Gljúfrabúi, Seljalandsfoss (walk behind the falls), and Reynisfjara black sand beach with basalt columns and Reynisdrangar sea stacks. Opportunities to photograph Atlantic Puffins. Overnight at coastal campsite."
        },
        {
          "day": "3",
          "plan": "FROM CLIFFSIDE SUNRISES TO THE ICE LAGOON",
          "description": "Sunrise at Dyrhólaey promontory capturing stone arch, black sands, and puffins. Visit Skógafoss and Kvernufoss waterfalls. Hike Fjaðrárgljúfur Canyon. Sunset session at Jökulsárlón Glacier Lagoon photographing blue icebergs."
        },
        {
          "day": "4",
          "plan": "DIAMOND BEACH & THE BASALT CROWNS OF SVARTIFOSS",
          "description": "Sunrise photography at Diamond Beach with glistening ice on black sands. Afternoon walk on Svínafellsjökull glacier. Evening shoot at Svartifoss waterfall framed by basalt columns for long-exposure compositions."
        },
        {
          "day": "5",
          "plan": "THE NORTHERN FRONTIER: GEOTHERMAL MÝVATN & HVERIR",
          "description": "Drive north to Lake Mývatn (5 hours). Explore Hverir geothermal fields with steaming mud pots and multicolored mineral deposits. Evening relaxation in intimate local thermal lagoon for recovery before northern landscapes."
        },
        {
          "day": "6",
          "plan": "NORTHERN GIANTS: DETTIFOSS, WHALES & LEGENDS",
          "description": "Morning at Dettifoss and Selfoss waterfalls for dramatic landscapes. Whale-watching expedition from Húsavík with opportunities to photograph humpback whales. Evening visit to Grjótagjá cave and sunset session at Goðafoss waterfall."
        },
        {
          "day": "7",
          "plan": "THE NORTHWEST FRONTIER: SEALS OF HVAMMSTANGI",
          "description": "Travel to Hvammstangi for seal-watching photography. Capture harbor and grey seals in golden evening light along rugged bays and rocky shores. Overnight at local campsite."
        },
        {
          "day": "8",
          "plan": "THE SHAPES OF WEST ICELAND: HVÍTSERKUR & KIRKJUFELL",
          "description": "Sunrise photography at Hvítserkur basalt stack. Journey to Snæfellsnes Peninsula, exploring lava fields and coastal villages. Sunset session at Mount Kirkjufell with cascading waterfalls."
        },
        {
          "day": "9",
          "plan": "THE WESTERN WONDERS: ARNARSTAPI, LAVA FALLS & GEYSIR",
          "description": "Explore Arnarstapi-Hellnar coastline for long-exposure photography. Photograph Hraunfossar lava waterfalls. Evening session in Haukadalur Valley capturing Strokkur geyser eruptions."
        },
        {
          "day": "10",
          "plan": "THE LAST ERUPTION & RETURN TO REYKJAVIK",
          "description": "Early morning sunrise session at Strokkur geyser. Break camp and return to Reykjavik for final campsite setup. Optional late flight from Keflavik or extra night in Reykjavik. Conclusion of Iceland off-road caravan photography tour."
        }
      ]}',
      '{"questions": [
        {
          "question": "1. What photography level is required for the Iceland Photo Tour? Can non-photographers join?",
          "answer": "We welcome photographers of all skill levels, from beginners to professionals, as well as non-photographers who wish to experience the raw, ethereal beauty of the North. Our tour leaders are experts dedicated to helping participants refine their skills through personalized on-site mentoring. You are welcome to join our shooting sessions with a professional camera or a mobile phone.\n\nExperiencing the dramatic coastline of Vik, the crystalline ice of Diamond Beach, and the majestic waterfalls through the eyes of a professional photographer — who plans every detail for the most atmospheric light — is a transformative experience. On this Iceland photo tour, you will bypass the typical tourist crowds to capture the authentic soul of the land of fire and ice."
        },
        {
          "question": "2. What gear should I pack for a photo tour in Iceland?",
          "answer": "We provide specific technical recommendations for every participant. If you are joining with a camera, we suggest a sturdy tripod and a versatile lens kit.\n\nOnce your spot is reserved, you will receive a comprehensive manual covering everything from technical equipment to essential windproof and waterproof layered clothing. You can also schedule a personal consultation with your expert photo guide to ensure you are fully prepared for the Icelandic elements."
        },
        {
          "question": "3. What level of physical fitness is required for this expedition?",
          "answer": "The Iceland photo tour is rated as ’Easy’ and is suitable for participants with standard physical preparation. While most iconic locations are easily accessible, we prioritize safety and comfort in the field. If you have any specific health concerns or questions about the pace of the trip, our manager is available to discuss the requirements with you directly."
        },
        {
          "question": "4. How many people are in the group?",
          "answer": "We prioritize an intimate atmosphere and a personalized approach for every participant. Our goal is to ensure you gain valuable experience and return home with a portfolio of ’trophy shots’ from the most cinematic corners of the North Atlantic.\n\nThe group size for our Iceland photography workshop is capped at 6 participants. This small group exclusivity ensures that everyone receives individual attention during our intensive shooting sessions and editing workshops."
        },
        {
          "question": "5. Are international flights included in the tour cost?",
          "answer": "Since our participants join us from all over the world, airfare and visas are not included. The tour officially starts and ends at Keflavík Airport (KEF). The following is included in the tour price:\n\n- Accommodation: 10 days of accommodation in a specialized camper trailer, allowing us to stay in close proximity to key shooting locations.\n- Logistics: Airport transfers (Keflavík) and all regional travel in a specialized vehicle.\n- Expert Mentoring: All sunrise and sunset photo sessions, workshops, and on-site guidance.\n- Education: Dedicated editing and post-processing sessions.\n\nFor information regarding additional personal expenses, please reach out to our management team."
        },
        {
          "question": "6. What exactly is included in the 10-day Iceland photo tour?",
          "answer": "Your booking provides a comprehensive, stress-free photography and cultural experience:\n\n- Accommodation: 10 days of accommodation in a specialized camper trailer, allowing us to stay in close proximity to key shooting locations.\n- Logistics: Airport transfers (Keflavík) and all regional travel in a specialized vehicle.\n- Expert Mentoring: All sunrise and sunset photo sessions, workshops, and on-site guidance.\n- Education: Dedicated editing and post-processing sessions."
        }
      ]}',
      guide5_id,
      'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777171/iceland_1_IGP4228-Pano_109x162_200dpi_topaz_copy_lt6mdc.avif', 10, 'Keflavík Airport (KEF)', 'Keflavík Airport (KEF)',
      ARRAY['July','August','September'], ARRAY['English'], 14, 'Iceland', 14, 3, 'About Our Iceland Photo Expedition'),

  (tour14_id, 'japan-spring-tour', 'Japan Spring',
     'Embark on our Japan Autumn Photo Tour to document the breathtaking Momiji season. From the neon streets of Tokyo and the iconic reflection of Mount Fuji to the serene zen gardens and hidden temples of Kyoto. This landscape photography workshop offers expert guidance in capturing the vibrant red maples and timeless spirit of Japan. Limited spots available — join us now!',
     'EASY', 4500.00,
     '{"days": [
      {
        "day": "1",
        "plan": "ARRIVAL IN TOKYO: FUTURISTIC IMMERSION",
        "description": "Arrival at Haneda Airport. Acclimatization and personal time. Visit teamLab Borderless Tokyo for immersive digital art photography, capturing luminous corridors, glowing projections, and infinite reflections."
      },
      {
        "day": "2",
        "plan": "TOKYO’S AUTUMN PARKS: THE COLORS OF MOMIJI",
        "description": "Explore Ueno, Shinjuku Gyoen, and Yoyogi Parks to capture autumn foliage. Ueno offers energetic ginkgo and maple photography; Shinjuku Gyoen provides serene reflections; Yoyogi Park captures lifestyle and candid portraits in golden autumn light."
      },
      {
        "day": "3",
        "plan": "KYOTO: THE CRIMSON PATHS OF FUSHIMI INARI",
        "description": "Travel to Kyoto for sunrise at Fushimi Inari Shrine. Photograph thousands of red torii gates, moss-covered lanterns, and Kitsune statues. Capture panoramic views of Kyoto rooftops and the mystical crimson corridors."
      },
      {
        "day": "4",
        "plan": "KYOTO: BAMBOO GROVES, GOLDEN PAVILIONS & GEISHA TRADITIONS",
        "description": "Sunrise photoshoot in Arashiyama and Bamboo Grove. Visit Kiyomizu-dera and Kinkaku-ji (Golden Pavilion) for architectural and landscape photography. Evening in Gion district to photograph Geiko and Maiko in traditional attire along Hanami-koji lanes."
      },
      {
        "day": "5-6",
        "plan": "JIGOKUDANI MONKEY PARK: WILDLIFE & WELLNESS",
        "description": "Two nights in Jigokudani region. Sunrise and sunset wildlife photography with Japanese macaques in natural hot springs. Free time to enjoy mountain walks and thermal spas. Capture emotive animal behavior and serene landscapes."
      },
      {
        "day": "7",
        "plan": "MATSUMOTO: THE CROW CASTLE & THE WORLD OF YAYOI KUSAMA",
        "description": "Photograph Matsumoto Castle (Crow Castle) and its autumn garden reflections. Explore castle interiors with samurai armor. Visit Matsumoto City Museum of Art, featuring Yayoi Kusama’s installations, including infinity mirror rooms and signature dot environments."
      },
      {
        "day": "8",
        "plan": "MOUNT FUJI: THE MOMIJI CORRIDOR & LAKE KAWAGUCHIKO",
        "description": "Travel to Lake Kawaguchiko for sunrise photography of Mount Fuji framed by autumn maple leaves. Capture reflections on the lake, the Maple Corridor, and sunset transitions with vivid skies. Focus on landscape composition and seasonal color contrasts."
      },
      {
        "day": "9",
        "plan": "CHUREITO PAGODA: THE ICONIC SUNRISE",
        "description": "Ascend 398 steps to Chureito Pagoda in Arakurayama Sengen Park for sunrise. Capture the red pagoda with Mount Fuji in the background, framed by vibrant Momiji foliage. Focus on architectural harmony and natural scenic beauty."
      },
      {
        "day": "10",
        "plan": "RETURN TO TOKYO & DEPARTURE",
        "description": "Return to Tokyo. Depart from Haneda or Narita Airport in the afternoon. Optional city drop-offs for those extending their stay. End of Japan photography tour with a world-class portfolio of landscapes, wildlife, and cultural experiences."
      }
    ]}',
    '{"questions": [
    ]}',
    guide5_id,
    'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429835/japan-spring__P1040001-Edit_imq7un.avif', 10, 'Tokyo', 'Tokyo',
    ARRAY['March','April'], ARRAY['English'], 14, 'Japan', 14, 3, 'About Our Japan Autumn Photo Expedition');



-- TOUR ACTIVITIES
INSERT INTO tour_activities (id, tour_id, activity, created_at)
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
  
  -- Tour 4: New Zealand
  (tour_activity16_id, tour4_id, 'Sunrise photo sessions', '2025-04-15'),
  (tour_activity17_id, tour4_id, 'Sunset photo sessions', '2025-04-15'),
  (tour_activity18_id, tour4_id, 'Photography workshops', '2025-04-15'),
  (tour_activity19_id, tour4_id, 'Editing & post-processing sessions', '2025-04-15'),
  (tour_activity20_id, tour4_id, 'Cultural experiences', '2025-04-15'),
  
   -- Tour 5: Cyclades
   (tour_activity21_id, tour5_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity22_id, tour5_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity23_id, tour5_id, 'Photography workshops', '2025-04-15'),
   (tour_activity24_id, tour5_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity25_id, tour5_id, 'The catamaran life experience', '2025-04-15'),
   (tour_activity26_id, tour5_id, 'Sea-to-Land landscape photography', '2025-04-15'),
   (tour_activity27_id, tour5_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 6: Cinque-Terre & Umbria
   (tour_activity28_id, tour6_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity29_id, tour6_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity30_id, tour6_id, 'Photography workshops', '2025-04-15'),
   (tour_activity31_id, tour6_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity32_id, tour6_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 7: Provence
   (tour_activity33_id, tour7_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity34_id, tour7_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity35_id, tour7_id, 'Photography workshops', '2025-04-15'),
   (tour_activity36_id, tour7_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity37_id, tour7_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 8: Sicily and Aeolian Islands
   (tour_activity38_id, tour8_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity39_id, tour8_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity40_id, tour8_id, 'Photography workshops', '2025-04-15'),
   (tour_activity41_id, tour8_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity42_id, tour8_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 9: Czechia (autumn)
   (tour_activity43_id, tour9_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity44_id, tour9_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity45_id, tour9_id, 'Photography workshops', '2025-04-15'),
   (tour_activity46_id, tour9_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity47_id, tour9_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 10: Scotland
   (tour_activity48_id, tour10_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity49_id, tour10_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity50_id, tour10_id, 'Photography workshops', '2025-04-15'),
   (tour_activity51_id, tour10_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity52_id, tour10_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 11: Tuscany autumn
   (tour_activity53_id, tour11_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity54_id, tour11_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity55_id, tour11_id, 'Photography workshops', '2025-04-15'),
   (tour_activity56_id, tour11_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity57_id, tour11_id, 'Cultural experiences', '2025-04-15'),
   
   -- Tour 12: Japan autumn
   (tour_activity58_id, tour12_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity59_id, tour12_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity60_id, tour12_id, 'Photography workshops', '2025-04-15'),
   (tour_activity61_id, tour12_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity62_id, tour12_id, 'Cultural experiences', '2025-04-15'),

   -- Tour 13: Iceland
   (tour_activity63_id, tour13_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity64_id, tour13_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity65_id, tour13_id, 'Photography workshops', '2025-04-15'),
   (tour_activity66_id, tour13_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity67_id, tour13_id, 'Cultural experiences', '2025-04-15'),

   -- Tour 14: japan-spring
   (tour_activity68_id, tour14_id, 'Sunrise photo sessions', '2025-04-15'),
   (tour_activity69_id, tour14_id, 'Sunset photo sessions', '2025-04-15'),
   (tour_activity70_id, tour14_id, 'Photography workshops', '2025-04-15'),
   (tour_activity71_id, tour14_id, 'Editing & post-processing sessions', '2025-04-15'),
   (tour_activity72_id, tour14_id, 'Cultural experiences', '2025-04-15');


 -- TOUR SUMMARY
INSERT INTO tour_summary (id, tour_id, name, value, created_at)
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
  
  -- Tour 4: New Zealand
  (tour_summary19_id, tour4_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary20_id, tour4_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary21_id, tour4_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary22_id, tour4_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary23_id, tour4_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary24_id, tour4_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 5: Cyclades
  (tour_summary25_id, tour5_id, 'Duration', '7 days', '2025-04-15'),
  (tour_summary26_id, tour5_id, 'Group Size', '11 participants', '2025-04-15'),
  (tour_summary27_id, tour5_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary28_id, tour5_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary29_id, tour5_id, 'Tour starts', 'Athens International Airport (ATH)', '2025-04-15'),
  (tour_summary30_id, tour5_id, 'Ending place', 'Athens International Airport (ATH)', '2025-04-15'),
  
  -- Tour 6: Cinque-Terre & Umbria
  (tour_summary31_id, tour6_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary32_id, tour6_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary33_id, tour6_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary34_id, tour6_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary35_id, tour6_id, 'Tour starts', 'Florence Airport (FLR)', '2025-04-15'),
  (tour_summary36_id, tour6_id, 'Ending place', 'Florence Airport (FLR)', '2025-04-15'),
  
  -- Tour 7: Provence
  (tour_summary37_id, tour7_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary38_id, tour7_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary39_id, tour7_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary40_id, tour7_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary41_id, tour7_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary42_id, tour7_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 8: Sicily & Aeolian Islands
  (tour_summary43_id, tour8_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary44_id, tour8_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary45_id, tour8_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary46_id, tour8_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary47_id, tour8_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary48_id, tour8_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 9: Czechia Autumn
  (tour_summary49_id, tour9_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary50_id, tour9_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary51_id, tour9_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary52_id, tour9_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary53_id, tour9_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary54_id, tour9_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 10: Scotland Highlands
  (tour_summary55_id, tour10_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary56_id, tour10_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary57_id, tour10_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary58_id, tour10_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary59_id, tour10_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary60_id, tour10_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 11: Tuscany Autumn
  (tour_summary61_id, tour11_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary62_id, tour11_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary63_id, tour11_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary64_id, tour11_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary65_id, tour11_id, 'Tour starts', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  (tour_summary66_id, tour11_id, 'Ending place', 'Rome, Fiumicino Airport (FCO)', '2025-04-15'),
  
  -- Tour 12: Japan autumn
  (tour_summary67_id, tour12_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary68_id, tour12_id, 'Group Size', '10 participants', '2025-04-15'),
  (tour_summary69_id, tour12_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary70_id, tour12_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary71_id, tour12_id, 'Tour starts', 'Tokyo, Haneda Airport (HND)', '2025-04-15'),
  (tour_summary72_id, tour12_id, 'Ending place', 'Tokyo, Haneda Airport (HND)', '2025-04-15'),

  -- Tour 13: iceland
  (tour_summary74_id, tour13_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary75_id, tour13_id, 'Group Size', '6 participants', '2025-04-15'),
  (tour_summary76_id, tour13_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary77_id, tour13_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary78_id, tour13_id, 'Tour starts', 'Keflavík Airport (KEF)', '2025-04-15'),
  (tour_summary79_id, tour13_id, 'Ending place', 'Keflavík Airport (KEF)', '2025-04-15'),
  
  -- Tour 14: japan-spring
  (tour_summary80_id, tour14_id, 'replace me', '10 days', '2025-04-15'),
  (tour_summary81_id, tour14_id, 'Duration', '10 days', '2025-04-15'),
  (tour_summary82_id, tour14_id, 'Group Size', '7 participants', '2025-04-15'),
  (tour_summary83_id, tour14_id, 'Languages', 'English', '2025-04-15'),
  (tour_summary84_id, tour14_id, 'Difficulty', 'Easy', '2025-04-15'),
  (tour_summary85_id, tour14_id, 'Tour starts', 'Tokyo, Haneda Airport (HND)', '2025-04-15'),
  (tour_summary86_id, tour14_id, 'Ending place', 'Tokyo, Haneda Airport (HND)', '2025-04-15');

 -- TOUR INCLUDED
INSERT INTO tour_included (id, tour_id, included, created_at)
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
  
  -- Tour 4: New Zealand
  (tour_included16_id, tour4_id, 'Accommodation', '2025-04-15'),
  (tour_included17_id, tour4_id, 'In-tour transportation', '2025-04-15'),
  (tour_included18_id, tour4_id, 'Photo shoots', '2025-04-15'),
  (tour_included19_id, tour4_id, 'Photo workshops', '2025-04-15'),
  (tour_included20_id, tour4_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 5: Cyclades
  (tour_included21_id, tour5_id, 'Accommodation', '2025-04-15'),
  (tour_included22_id, tour5_id, 'In-tour transportation', '2025-04-15'),
  (tour_included23_id, tour5_id, 'Photo shoots', '2025-04-15'),
  (tour_included24_id, tour5_id, 'Photo workshops', '2025-04-15'),
  (tour_included25_id, tour5_id, 'Expert photo guide', '2025-04-15'),
  (tour_included26_id, tour5_id, 'Professional skipper & crew services', '2025-04-15'),
  (tour_included27_id, tour5_id, 'Catamaran cruise', '2025-04-15'),
  
  -- Tour 6: Cinque-Terre & Umbria
  (tour_included28_id, tour6_id, 'Accommodation', '2025-04-15'),
  (tour_included29_id, tour6_id, 'In-tour transportation', '2025-04-15'),
  (tour_included30_id, tour6_id, 'Photo shoots', '2025-04-15'),
  (tour_included31_id, tour6_id, 'Photo workshops', '2025-04-15'),
  (tour_included32_id, tour6_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 7: Provence
  (tour_included33_id, tour7_id, 'Accommodation', '2025-04-15'),
  (tour_included34_id, tour7_id, 'In-tour transportation', '2025-04-15'),
  (tour_included35_id, tour7_id, 'Photo shoots', '2025-04-15'),
  (tour_included36_id, tour7_id, 'Photo workshops', '2025-04-15'),
  (tour_included37_id, tour7_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 8: Sicily & Aeolian Islands
  (tour_included38_id, tour8_id, 'Accommodation', '2025-04-15'),
  (tour_included39_id, tour8_id, 'In-tour transportation', '2025-04-15'),
  (tour_included40_id, tour8_id, 'Photo shoots', '2025-04-15'),
  (tour_included41_id, tour8_id, 'Photo workshops', '2025-04-15'),
  (tour_included42_id, tour8_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 9: Czechia Autumn
  (tour_included43_id, tour9_id, 'Accommodation', '2025-04-15'),
  (tour_included44_id, tour9_id, 'In-tour transportation', '2025-04-15'),
  (tour_included45_id, tour9_id, 'Photo shoots', '2025-04-15'),
  (tour_included46_id, tour9_id, 'Photo workshops', '2025-04-15'),
  (tour_included47_id, tour9_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 10: Scotland Highlands
  (tour_included48_id, tour10_id, 'Accommodation', '2025-04-15'),
  (tour_included49_id, tour10_id, 'In-tour transportation', '2025-04-15'),
  (tour_included50_id, tour10_id, 'Photo shoots', '2025-04-15'),
  (tour_included51_id, tour10_id, 'Photo workshops', '2025-04-15'),
  (tour_included52_id, tour10_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 11: Tuscany Autumn
  (tour_included53_id, tour11_id, 'Accommodation', '2025-04-15'),
  (tour_included54_id, tour11_id, 'In-tour transportation', '2025-04-15'),
  (tour_included55_id, tour11_id, 'Photo shoots', '2025-04-15'),
  (tour_included56_id, tour11_id, 'Photo workshops', '2025-04-15'),
  (tour_included57_id, tour11_id, 'Expert photo guide', '2025-04-15'),
  
  -- Tour 12: Japan autumn
  (tour_included58_id, tour12_id, 'Accommodation', '2025-04-15'),
  (tour_included59_id, tour12_id, 'In-tour transportation', '2025-04-15'),
  (tour_included60_id, tour12_id, 'Photo shoots', '2025-04-15'),
  (tour_included61_id, tour12_id, 'Photo workshops', '2025-04-15'),
  (tour_included62_id, tour12_id, 'Expert photo guide', '2025-04-15'),

  -- Tour 13: iceland
  (tour_included63_id, tour13_id, 'Accommodation', '2025-04-15'),
  (tour_included64_id, tour13_id, 'In-tour transportation', '2025-04-15'),
  (tour_included65_id, tour13_id, 'Photo shoots', '2025-04-15'),
  (tour_included66_id, tour13_id, 'Photo workshops', '2025-04-15'),
  (tour_included67_id, tour13_id, 'Expert photo guide', '2025-04-15'),

  -- Tour 14: Japan autumn
  (tour_included68_id, tour14_id, 'Accommodation', '2025-04-15'),
  (tour_included69_id, tour14_id, 'In-tour transportation', '2025-04-15'),
  (tour_included70_id, tour14_id, 'Photo shoots', '2025-04-15'),
  (tour_included71_id, tour14_id, 'Photo workshops', '2025-04-15'),
  (tour_included72_id, tour14_id, 'Expert photo guide', '2025-04-15');

-- TOUR DATES
INSERT INTO tour_dates (id, tour_id, date_from, date_to, group_size, is_available)
VALUES
  -- Tour 1: Tuscany Spring
  (tour_date1_id, tour1_id, '2026-03-09', '2026-03-18', 2, TRUE),
  (tour_date2_id, tour1_id, '2026-03-20', '2026-03-29', 6, TRUE),
  (tour_date3_id, tour1_id, '2027-03-05', '2027-03-14', 6, TRUE),
  
  -- Tour 2: Morocco
  (tour_date4_id, tour2_id, '2026-01-30', '2026-02-10', 0, TRUE),
  (tour_date5_id, tour2_id, '2027-02-12', '2027-02-21', 7, TRUE),
  
  -- Tour 3: Venice Carnival
  (tour_date6_id, tour3_id, '2026-02-13', '2026-02-17', 0, TRUE),
  (tour_date7_id, tour3_id, '2027-02-05', '2027-02-09', 7, TRUE),
  
  -- Tour 4: New Zealand North Island (10-day tour)
  (tour_date8_id, tour4_id, '2026-04-06', '2026-04-15', 6, TRUE),
  (tour_date9_id, tour4_id, '2026-12-25', '2027-01-03', 0, TRUE),
  (tour_date10_id, tour4_id, '2027-01-25', '2027-02-03', 8, TRUE),
  (tour_date11_id, tour4_id, '2027-04-08', '2027-04-17', 8, TRUE),
  (tour_date12_id, tour4_id, '2027-12-03', '2027-12-12', 11, TRUE),
  (tour_date13_id, tour4_id, '2028-01-04', '2028-01-14', 11, TRUE),
  -- Tour 4: New Zealand South Island (11-day tour)
  (tour_date14_id, tour4_id, '2026-04-16', '2026-04-26', 6, TRUE),
  (tour_date15_id, tour4_id, '2027-01-04', '2027-01-14', 0, TRUE),
  (tour_date16_id, tour4_id, '2027-01-14', '2027-01-24', 8, TRUE),
  (tour_date17_id, tour4_id, '2027-04-18', '2027-04-28', 8, TRUE),
  (tour_date18_id, tour4_id, '2027-12-13', '2027-12-23', 11, TRUE),
  (tour_date19_id, tour4_id, '2027-12-24', '2028-01-03', 11, TRUE),
  
  -- Tour 5: Cyclades by Catamaran (8-day tour)
  (tour_date20_id, tour5_id, '2026-05-02', '2026-05-09', 8, TRUE),
  (tour_date21_id, tour5_id, '2027-05-01', '2027-05-08', 19, TRUE),

  -- Tour 6: Cinque Terre & Umbria (10-day tour)
  (tour_date22_id, tour6_id, '2026-06-05', '2026-06-14', 3, TRUE),
  (tour_date23_id, tour6_id, '2027-06-04', '2027-06-13', 7, TRUE),
  
  -- Tour 7: Provence (7-day tour)
  (tour_date24_id, tour7_id, '2026-06-22', '2026-06-28', 3, TRUE),
  (tour_date25_id, tour7_id, '2027-06-28', '2027-07-04', 6, TRUE),
  
  -- Tour 8: Sicily & Aeolian Islands (11-day tour)
  (tour_date26_id, tour8_id, '2026-07-08', '2026-07-18', 3, TRUE),
  (tour_date27_id, tour8_id, '2027-06-16', '2027-06-26', 7, TRUE),

  -- Tour 9: Czechia Autumn (10-day tour)
  (tour_date28_id, tour9_id, '2026-10-09', '2026-10-18', 7, TRUE),
  (tour_date29_id, tour9_id, '2027-10-15', '2027-10-24', 7, TRUE),
  
  -- Tour 10: Scotland (8-day tour)
  (tour_date30_id, tour10_id, '2026-10-17', '2026-10-24', 7, TRUE),
  (tour_date31_id, tour10_id, '2027-10-17', '2027-10-24', 7, TRUE),
  
  -- Tour 11: Tuscany Autumn (10-day tour)
  (tour_date32_id, tour11_id, '2026-10-30', '2026-11-08', 7, TRUE),
  (tour_date33_id, tour11_id, '2026-11-08', '2026-11-17', 7, TRUE),
  (tour_date34_id, tour11_id, '2027-10-22', '2027-10-31', 7, TRUE),
  (tour_date35_id, tour11_id, '2027-10-31', '2027-11-09', 7, TRUE),
  (tour_date36_id, tour11_id, '2027-11-09', '2027-11-18', 7, TRUE),
  (tour_date37_id, tour11_id, '2027-11-19', '2027-11-28', 7, TRUE),
  
  -- Tour 12: Japan Autumn (10-day tour)
  (tour_date38_id, tour12_id, '2026-11-20', '2026-11-29', 6, TRUE),
  (tour_date39_id, tour12_id, '2026-11-22', '2026-12-01', 6, TRUE),
  (tour_date40_id, tour12_id, '2027-11-20', '2027-11-29', 9, TRUE),
  (tour_date41_id, tour12_id, '2027-11-22', '2027-12-01', 9, TRUE),

  -- Tour 13: Iceland Offroad Caravan (10-day tour)
  (tour_date42_id, tour13_id, '2026-08-07', '2026-08-16', 3, TRUE),
  (tour_date43_id, tour13_id, '2026-08-18', '2026-08-27', 5, TRUE),
  (tour_date44_id, tour13_id, '2026-08-29', '2026-09-07', 5, TRUE),
  (tour_date45_id, tour13_id, '2026-09-09', '2026-09-18', 5, TRUE),
  (tour_date46_id, tour13_id, '2026-09-20', '2026-09-29', 5, TRUE),
  (tour_date47_id, tour13_id, '2027-07-09', '2027-07-18', 5, TRUE),
  (tour_date48_id, tour13_id, '2027-07-20', '2027-07-29', 5, TRUE),
  (tour_date49_id, tour13_id, '2027-07-30', '2027-08-08', 5, TRUE),
  (tour_date50_id, tour13_id, '2027-08-10', '2027-08-19', 5, TRUE),
  (tour_date51_id, tour13_id, '2027-08-20', '2027-08-29', 5, TRUE),
  (tour_date52_id, tour13_id, '2027-08-31', '2027-09-09', 5, TRUE),
  (tour_date53_id, tour13_id, '2027-09-10', '2027-09-19', 5, TRUE),
  (tour_date54_id, tour13_id, '2027-09-21', '2027-09-30', 5, TRUE),
  
  -- Tour 14: Japan Spring (10-day tour)
  (tour_date55_id, tour14_id, '2026-03-25', '2026-04-03', 0, TRUE),
  (tour_date56_id, tour14_id, '2027-03-26', '2027-04-04', 10, TRUE),
  (tour_date57_id, tour14_id, '2027-03-28', '2027-04-06', 10, TRUE);
  
  -- Tour 1: Tuscany Poppy Season (10-day tour)
  -- (tour_date30_id, tour1_id, '2026-05-10', '2026-05-19', 3, TRUE),
  -- (tour_date31_id, tour1_id, '2027-05-14', '2027-05-23', 5, TRUE),
  -- (tour_date32_id, tour1_id, '2027-05-24', '2027-06-02', 5, TRUE),
  
  
  

-- MATERIALS (not used on front)
INSERT INTO tour_materials (tour_id, title, url, type)
VALUES
  -- Tour 1: Tuscany Spring
  (tour1_id, 'Grand Canyon Trail Guide', 'https://example.com/grand-canyon-guide.pdf', 'PDF'),
  (tour1_id, 'Hiking Preparation Video', 'https://example.com/gc-prep-video.mp4', 'VIDEO'),
  
  -- Tour 2: Morocco (6-day tour)
  (tour2_id, 'NYC Historical Map', 'https://example.com/nyc-history-map.pdf', 'PDF'),
  
  -- Tour 3: Venice Carnival (5-day tour)
  (tour3_id, 'Rafting Safety Manual', 'https://example.com/rafting-safety.pdf', 'PDF'),

  -- Tour 4: New Zealand Photography
  (tour4_id, 'New Zealand Landscape Photography Guide', 'https://example.com/new-zealand-photo-guide.pdf', 'PDF'),
  
  -- Tour 5: Cyclades Sailing
  (tour5_id, 'Cherry Blossom Photography Guide', 'https://example.com/sakura-photo-guide.pdf', 'PDF'),
  
  -- Tour 6: Cinque-Terre & Umbria
  (tour6_id, 'Greek Islands Sailing Guide', 'https://example.com/cyclades-sailing-guide.pdf', 'PDF'),
  
  -- Tour 7: Provence Lavender & Villages
  (tour7_id, 'Italian Coastal Photography Guide', 'https://example.com/cinque-terre-photo-guide.pdf', 'PDF'),
  
  -- Tour 8: Sicily & Aeolian Islands
  (tour8_id, 'Provence Lavender Photography Guide', 'https://example.com/provence-lavender-guide.pdf', 'PDF'),
  
  -- Tour 9: Czechia Autumn
  (tour9_id, 'Sicily Volcanic Photography Guide', 'https://example.com/sicily-volcano-guide.pdf', 'PDF'),
  
  -- Tour 10: Scotland Highlands
  (tour10_id, 'Czechia Autumn Photography Guide', 'https://example.com/czechia-autumn-guide.pdf', 'PDF'),
  
  -- Tour 11: Tuscany Autumn
  (tour11_id, 'Scotland Highlands Photography Guide', 'https://example.com/scotland-highlands-guide.pdf', 'PDF'),
  
  -- Tour 12: japan autumn
  (tour12_id, 'Tuscany Autumn Photography Guide', 'https://example.com/tuscany-autumn-guide.pdf', 'PDF'),
  
  -- Tour 13: iceland
  (tour13_id, 'Japan Cultural Photography Guide', 'https://example.com/japan-cultural-guide.pdf', 'PDF'),
  
  -- Tour 14: japan-spring
  (tour14_id, 'Japan Cultural Photography Guide', 'https://example.com/japan-cultural-guide.pdf', 'PDF');


-- PHOTOS
INSERT INTO photos (tour_id, url, description)
VALUES
  -- Tour 1: Tuscany Spring
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif', 'Val d''Orcia sunrise over rolling hills'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8829-1_86x56_x5eivl.avif', 'Pienza medieval town at golden hour'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__IMGP8844obr_146x110_topaz_PRINT_yvqehs.avif', 'Cypress alley in morning mist'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886468/tuscan-spring___IGP1687-Edit_copy_eorjiy.avif', 'Podere Belvedere iconic chapel'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__OSKIN_3950_fdilkc.avif', 'San Quirico d''Orcia historic center'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMG_1698_69%D1%8546-200dpi_2_zsq3qn.avif', 'Tuscan vineyard at harvest time'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886476/tuscan-spring__Untitled_Panorama1_65%D1%8587-200dpi_100-Edit_sprpmc.avif', 'Madonna di Vitaleta chapel on hill'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___1337705-Pano-Edit_142%D1%85109-200dpi-Edit_ivizwp.avif', 'Poggio Covili historic estate at sunset'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__AA8B2655_43%D1%8573-200dpi_113-Edit_lykwgv.avif', 'Crete Senesi countryside with oak trees'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif', 'Monteriggioni walled town at sunrise'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring__IMGP0277_68%D1%8593-200dpi-Edit_fful6e.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886477/tuscan-spring__Untitled_Panorama2_114%D1%85249-200dpi_299-Edit_tebrjd.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886469/tuscan-spring__FUJI8847-Pano-Pano-Dehancer_copy_lgg7p7.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886464/tuscan-spring__180R1797_j6wetk.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__08_6457792-Pano_150x110_Print_Dechancer_2022_copy-Edit_i3ogsp.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886470/tuscan-spring___IGP6527_Panorama-Edit_copy_a2einq.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___A8B9644_49%D1%8573-200dpi_105-Edit_ebbyoe.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring__400mm-f8-1slash60-iso100_wnjtxa.avif', 'Val d''Orcia foggy morning landscape'),
  (tour1_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1768886466/tuscan-spring___2572_65%D1%85138-200dpi_202-Edit_bl1mdd.avif', 'Val d''Orcia foggy morning landscape'),
  
  -- Tour 2: Morocco (6-day tour)
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429914/morocco___A8B2183_90x63-topaz-denoiseraw-sharpen-color_copy_d6h1s7.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429900/morocco___1469265_k8qh6j.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429924/morocco__645Z6336-Edit_copy_fwee3y.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429942/morocco__IMGP9399_ylg6d0.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429938/morocco__IMG_9802_lsrz52.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429938/morocco__IMG_3732-Pano-Edit_copy_l3a8wb.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429929/morocco__6905_zhxcly.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429923/morocco__645Z4268-Edit_copy_va45m7.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429901/morocco___1494604-Edit_copy_e9grwr.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429898/morocco___1469734-Edit_copy_ytftnz.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429903/morocco___1495165_thkcbm.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429934/morocco__IMG_3709-165x110_Topaz_Dehancer_iuztse.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429898/morocco___1471200_awdzor.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429945/morocco__Marrakesh_copy_umpf88.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429943/morocco__IMG_4155_spk7it.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429921/morocco___A8B4072_p4fiaz.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429919/morocco___1518289_Topaz-Edit_ygonku.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429924/morocco__645Z5406-HDR-Pano-Edit_cuted-Edit_copy_ix0xfj.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429908/morocco___1470142-Edit_copy_w344ih.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429945/morocco__IMG_4141_bwnchg.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429904/morocco___1505864_copy_penhh1.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429914/morocco___1506791-Edit_copy_qfpygh.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429903/morocco___1493817-Edit_copy_jra9yo.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429919/morocco___A8B3357_uqp2wm.avif', 'Blue-washed streets of Chefchaouen'),
  (tour2_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429935/morocco__IMG_2787_z6nyqe.avif', 'Blue-washed streets of Chefchaouen'),
  
  -- Tour 3: Venice Carnival (5-day tour)
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430346/venice__FUJI4667_Dehancer_ovjl23.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430375/venice__IMG_4984-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_r9ida1.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430351/venice__FUJI5512-Edit_Dehancer-Edit_sibg4y.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430330/venice___IMG6628-Dehancer_copy-Edit_oil1zz.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430375/venice__P1016183_pzbb2t.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430357/venice__IMG_4845-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_rdydpz.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430330/venice___IMG7297-Dehancer_copy_lnrur0.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430377/venice__P1016222-Edit_copy_2_g9futk.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430348/venice__FUJI4937-Edit-Edit_ukgboi.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430379/venice__P1018325-Edit_copy_u9gjtu.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430361/venice__IMG_4965-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_hijw5u.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430336/venice___IMG7354-Dehancer_copy_uvdbih.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430361/venice__IMG_4912-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_zed7mj.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430364/venice__IMGP1629-EditLightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_d1x4r2.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430373/venice__IMGP4380-Dehancer-Edit_aima42.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430341/venice___IMG9638-HDR-Pano-2-Edit_copy_e2puy5.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430351/venice__FUJI4954-Edit-Edit_cgpynq.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430358/venice__IMG_4889-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_qmk1xl.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430336/venice__AA8B0015-Editightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_copy_f8m2ls.avif', 'Venice Carnival masks and costumes'),
  (tour3_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430365/venice__IMGP1536-Edit-Lightroom_sky_Topaz_snow_78_Dehancer_snow_85_Yellow_65_vaskzy.avif', 'Venice Carnival masks and costumes'),

   -- Tour 4: New Zealand Photography
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429985/new-zealand___IGP8438-Pano-Dehancer_copy_3_ymdyii.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430000/new-zealand__IMG_0003-Edit_copy_3_toqaij.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429979/new-zealand___IGP8045-Pano-Dehancer_copy_3_lugbli.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429983/new-zealand___IGP7576-Dehancer_copy_3_xxzacq.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429997/new-zealand__IMG_1881-Dehancer_copy_3_hfdlkw.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429998/new-zealand__IMG_1122_obr-Dehancer_copy_3_rfpp8r.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430004/new-zealand__IMG_1236-Dehancer_copy_3_ncthb6.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429998/new-zealand__IMG_1171-Pano-Edit_copy_3_peyhgs.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429986/new-zealand__IMG_0961_Panorama_Dehancer_copy_3_qhvfww.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429980/new-zealand___IGP7623-Edit_copy_3_dvazi2.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430001/new-zealand__IMG_6422-Dehancer_copy_3_wkzjyu.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430001/new-zealand__IMG_2673-HDR-Dehancer_copy_3_vwuar6.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429968/new-zealand___IGP7469-Edit_copy_3_fjkyhh.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429975/new-zealand___IGP7992-Pano-Edit_copy_3_q45iqu.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429989/new-zealand__IMG_0727-Dehancer_copy_3_hkjn1k.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429991/new-zealand__IMG_0331-Dehancer_copy_3_clib1p.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429975/new-zealand___IGP7593-Edit_copy_3_xfb5mg.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429981/new-zealand__1Y0A9662_copy_3_ebxx2n.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429965/new-zealand___IGP7394-Pano-Dehancer_copy_3_vpdovr.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429975/new-zealand___IGP7470-Pano-Edit_copy_3_shlyc9.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430004/new-zealand__IMGP6956-Dehancer_copy_3_woeb1o.avif', 'Milford Sound sunrise with dramatic peaks'),
   (tour4_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429971/new-zealand___IGP7525-Dehancer_copy_3_wsey44.avif', 'Milford Sound sunrise with dramatic peaks'),

   -- Tour 5: Cyclades Sailing
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429871/cyclades__IMG_8808-Pano_copy_jkdqjj.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429870/cyclades__IMG_0495-Edit-Edit_nrbuik.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429890/cyclades__IMGP9999-Pano-Edit_copy_emhqaa.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429860/cyclades__IMG_0829-Edit_copy_mrwjua.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429847/cyclades__AA8B0363-Pano-Edit_copy_bebkwe.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429890/cyclades__IMG_1123-Sky_copy_iippdr.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429886/cyclades__IMGP9208_copy_fuxnrj.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429880/cyclades__IMGP9651-Pano-Edit_copy_miyrr5.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429883/cyclades__IMGP9849-Edit_copy_g39eei.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429842/cyclades___A8B1487-Edit_copy_sf62cs.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429840/cyclades___A8B1472-Pano-Edit_copy_yrcbq6.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429877/cyclades__IMGP8280_copy_g6amjy.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429850/cyclades__IMG_1022_93x62-Edit_copy_riyudk.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429889/cyclades__IMGP8288-Edit_ths8e1.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429850/cyclades___A8B1504-Edit_copy_kosl4x.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429878/cyclades__IMG_1641_copy_j5b61v.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429862/cyclades__IMG_0361_copy_nlolgq.avif', 'Naxos Portara Apollo temple ruins'),
   (tour5_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429847/cyclades__AA8B0363-Pano-Edit_copy_bebkwe.avif', 'Naxos Portara Apollo temple ruins'),

   -- Tour 6: Cinque-Terre & Umbria
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429687/cinque-terre-umbria__OSKIN_4052_GenFill_copy_ytmtp1.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429649/cinque-terre-umbria__IMG_5988_svdxwt.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429665/cinque-terre-umbria__IMGP0566_copy_i4lpse.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429681/cinque-terre-umbria__IMGP2217_copy_sazhxx.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429682/cinque-terre-umbria__IMGP1845-Pano-2-Dehancer_copy_kovizs.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429684/cinque-terre-umbria__IMGP4429-2-Dehancer_copy_mcai9n.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429688/cinque-terre-umbria__IMGP4584-2_y2u0dp.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429670/cinque-terre-umbria__IMGP0755-Pano-Edit_ri1ucl.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429664/cinque-terre-umbria__IMGP0645-Dehancer_copy_jabbb1.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429675/cinque-terre-umbria__IMGP0854-Pano_copy_xpe28c.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429673/cinque-terre-umbria__IMGP1009-Pano-Edit-1_copy_u2vphi.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429658/cinque-terre-umbria__IMG_9390-Dehancer_copy-Edit_zs7gyu.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429665/cinque-terre-umbria__IMG_1786_copy_kajfdl.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429675/cinque-terre-umbria__IMGP1131-Edit_copy_zqxvdn.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429674/cinque-terre-umbria__IMGP0854-Pano_copy2_mwii2q.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429678/cinque-terre-umbria__IMGP1312-Pano-Dehancer_copy_jyboix.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429651/cinque-terre-umbria__IMG_6021_copy_awmcmc.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429671/cinque-terre-umbria__IMGP0567-Pano-Edit_kd4wuf.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429659/cinque-terre-umbria__IMG_5364-Pano-68x164-Topaz_Dehancer-Edit_h5zenn.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429656/cinque-terre-umbria___1646754-Edit_yxfkec.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429687/cinque-terre-umbria__IMGP1674-Dehancer_copy_il0bkz.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429687/cinque-terre-umbria__IMGP1539-Pano-Sky_copy_johssh.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429661/cinque-terre-umbria__IMG_5124-Pano-Edit_copy_hksmqx.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429674/cinque-terre-umbria__IMGP0686-Pano_254x129_PRINT-Dehancer_copy_mxtktz.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429686/cinque-terre-umbria__PAVEL_OSKIN_1417-Dehancer_copy_np6a6t.avif', 'Manarola colorful cliffside village'),
   (tour6_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429675/cinque-terre-umbria__IMGP1131-Edit_copy_zqxvdn.avif', 'Manarola colorful cliffside village'),

   -- Tour 7: Provence Lavender & Villages
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430058/provence___A8B4955_Topaz_copy_upigxu.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430071/provence__Untitled_Panorama1_sqjxhe.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430065/provence__645Z8680-Sky-levels-Dehancer_copy_enhdao.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430055/provence___A8B5651-1_nf6hbi.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430062/provence__331A4608_copy_mlh8uh.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430070/provence__P1171450-Edit_copy_j9vdyv.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430071/provence__P1160424-Edit_copy_s8d3r8.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430035/provence___A8B4321-Edit_copy_yvb1fb.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430058/provence___A8B7664-1_uvrqhf.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430018/provence___A8B1576-Edit_copy_cr7kwr.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430068/provence__Gordes_copy_mre3jg.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430011/provence___A8B3410_uho2sb.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430065/provence__645Z9091-HDR-Stiched-Dehancer_copy_jbhbtx.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430017/provence___A8B3335_zxdiuq.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430008/provence___A8B1426-Edit_copy_dmnpzu.avif', 'Valensole plateau endless lavender fields'),
   (tour7_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430039/provence___A8B4760_uc2bt0.avif', 'Valensole plateau endless lavender fields'),

   -- Tour 8: Sicily & Aeolian Islands
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430152/sicily__IMG_0599_dmi5yb.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430168/sicily__IslandsAeoleanDJI_0586-HDR-Pano-Edit_clarity_Dehancer_vvcjdt.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430149/sicily__AeoleanPANO_stromboli-Dechancer_copy_zkifet.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430146/sicily___1695197-Edit_copy_rnakcr.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430151/sicily___1695355-Dehancer_copy_cfjtjq.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430151/sicily__645Z8439-Edit_copy_cb0zbm.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430162/sicily__IMGP8758_bvaf5w.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430151/sicily___1695355-Dehancer_copy_cfjtjq.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430161/sicily__IMG_1468-Pano-Edit_copy_baq6t3.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430159/sicily__IMG_0630_da5cwh.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430146/sicily__326054323_891450478768457_981251162749570418_n_cbgxpu.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430160/sicily___1695375_fapep0.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430165/sicily__IMGP9670_vipa3l.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430166/sicily__IMGP9724_jlmgfq.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430168/sicily__P1160094-Edit_copy_s5ybyu.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430162/sicily__IMG_0700_wkrudt.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430168/sicily__IMGP8994_vz0jd4.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430161/sicily__IMGP8734_copy_ppv0sr.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430171/sicily__IMGP9067_kdsbx3.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430169/sicily__StromboliIMG_0590_bye4pf.avif', 'Mount Etna volcanic eruption at night'),
   (tour8_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430167/sicily__PAVEL_OSKIN_2503_qymcry.avif', 'Mount Etna volcanic eruption at night'),

   -- Tour 9: Czechia Autumn
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429592/czech-fall___IGP2024_93x69_200dpi-Dehancer_120x90_PRINT_2017_copy_jssztz.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429635/czech-fall__IMG_4250_Dehancer_113x60_PRINT_2015_copy_btx6nd.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429600/czech-fall___IMG8087-Pano-Edit-GL_148x105_odehuc.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429635/czech-fall__IMG_4462-Pano-Dehancer-2-part1_y0nncg.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429585/czech-fall___6455425-Pano-Edit-Topaz-Dehancer_275x90_PRINT_2022_copy_dsqso5.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429625/czech-fall__DJI_0497-Pano-Edit_copy_n53ct8.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429602/czech-fall__645Z8177-HDR-Pano-Topaz_v2ripe.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429603/czech-fall__645Z0456-Pano_medium_Dechancer_221x90_PRINT_2023_opokxn.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429610/czech-fall__645Z1357-Pano-Edit-Topoaz-Dehancer_copy_clwuql.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429582/czech-fall___A8B4862-Pano-Dehan%D1%81er_261x90_PRINT_2017_copy_as7f63.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429595/czech-fall___IMG6226-Pano-PRINT_226x133_topaz_autumn_f6bc1f.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429617/czech-fall__DJI_0470-HDR-Dehancer_copy_r61tub.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429580/czech-fall___6456288-Pano-Edit_copy_yzhcp6.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429645/czech-fall__IMG_9794-Pano-1_Topaz-Dehancer_273x90_PRINT_2016_copy_q0btks.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429634/czech-fall__IMG_5610-Pano-Edit_copy_mwu4hm.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429599/czech-fall__331A1006-Topaz-Dehancer_90x60_PRINT_2016_copy_plpd87.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429646/czech-fall__P1014918-Edit_copy_uqzup4.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429591/czech-fall___IMG0933-HDR-Pano-Dehancer_copy_o7hl8d.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429594/czech-fall___IMG5638-Pano_copy_v1zhte.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429627/czech-fall__DSC_4707_d9ukad.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429584/czech-fall___645550_Dehancer_153x90_PRINT_2022_copy_kxqjgw.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429584/czech-fall___6455649-Dehancer_155x110_PRINT_2022_ajcq2m.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429608/czech-fall__742-PANO0001-Pano-Dehancer_ilgp2f.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429587/czech-fall___IGP1966_PRINT_124x93_copy_bzhrny.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429585/czech-fall___6454914-97x97_Print_copy_yaw2yc.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429586/czech-fall___1098135-Pano-Edit-Dechancer_244x90_PRINT_2022_copy_yjrja6.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429593/czech-fall___6456065-Pano_253x103_Print_copy_f6g0ej.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429614/czech-fall__AA8B9233_Dehancer_90x60_PRINT_2016-2_xgdehb.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429603/czech-fall__645Z0837-HDR-Pano-Topaz-Dehancer_copy_2_jdvvdt.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429634/czech-fall__IMG_5115_Panorama_copy_fhr59g.avif', 'Eilean Donan Castle at sunrise'),
   (tour9_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429644/czech-fall__IMGP9970-Dehancer_233x90_PRINT_2016_copy_hxj6w2.avif', 'Eilean Donan Castle at sunrise'),


   -- Tour 10: Scotland Highlands
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430128/scotland__IMGP3471_Panorama-Dehancer_copy_mpyxma.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430135/scotland__IMGP3684_Panorama-Edit_copy_zcebv1.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430130/scotland__IMGP2829-Pano-Edit_copy_o2rkky.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430136/scotland__IMGP3519_Panorama-cover_shguxp.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430127/scotland__IMGP3415-Panorama_udpgny.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430080/scotland___A8B0373-Pano-Dehancer_njp00i.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430122/scotland__FUJI2575-Pano-Edit_copy_hrt4uu.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430136/scotland__IMGP3519_Panorama-cover_shguxp.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430137/scotland__IMGP3841-Dehancer_copy_suslxa.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430101/scotland___IMG0286-Pano-CloseUp-Dehancer_copy_n8jpdz.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430079/scotland___1812205_afpufd.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430101/scotland___IMG9183-Pano-Edit_rzs93g.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430125/scotland__FUJI2167-Edit_copy_nh8ez7.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430087/scotland___A8B2256_o8buod.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430100/scotland___A8B2388-Pano_oepdsk.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430106/scotland___IMG9401-HDR-Pano-137x83_PRINT-Dehancer_copy_fo0cfk.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430086/scotland___A8B2081_qukyee.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430109/scotland___IMG0410-Pano-Dehancer_copy_tt3hyp.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430113/scotland___IMG9830_105x78_200dpi_js7pf5.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430135/scotland__IMGP3684_Panorama-Edit_copy_zcebv1.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430084/scotland___A8B1370-Pano-Edit_bnrwf5.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430110/scotland___IMG9474-HDR-Pano-414x185_PRINT-Dehancer_copy_vdoz6g.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430117/scotland__DJI_0207_edbb7d.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430134/scotland__IMGP3882-Panorama_o9ovj7.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430100/scotland___IGP5738-Pano_285x115_PRINT-cover_gv8ill.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430080/scotland___A8B0373-Pano-Dehancer_njp00i.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430117/scotland__DJI_20251019125653_0116_D-HDR-Pano-Edit_copy_yf8oo7.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430120/scotland__DJI_20251022110052_0123_D-Edit_copy_jnmsph.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430119/scotland__FUJI2056-HDR-Dehancer_copy_gnlcvi.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430113/scotland___IMG9915-Pano_eklkiy.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430097/scotland___IGP1873-Pano-Edit-Dehancer_copy_knxinz.avif', 'Eilean Donan Castle at sunrise'),
   (tour10_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430084/scotland___A8B1880_ahl55x.avif', 'Eilean Donan Castle at sunrise'),
   

   -- Tour 11: Tuscany Autumn
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430222/tuscany-fall___IMG7020-Pano-1_1-Dechancer_copy_g90yjy.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430186/tuscany-fall___A8B9468-Pano-Edit_txjcxf.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430220/tuscany-fall__03_IGP2536-Pano_78%D1%8593-140dpi_PRINT_Dehancer-gigapixel-standard-scale-2_00x_copy_gistfe.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430265/tuscany-fall__IMG_0016_69%D1%8546-200dpi_copy_gl3m8f.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430179/tuscany-fall___6457517-Pano-1_Dechancer_copy_skb6ar.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430193/tuscany-fall___IGP2470-1_gr0fru.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430188/tuscany-fall___IGP0818-Pano_vehnrk.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430300/tuscany-fall__IMG_9480_mgim5z.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430223/tuscany-fall__09_1110303_165x110_PRINT_n_Dechancer_copy-Edit_uj1ofr.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430222/tuscany-fall__10_1110269_141x111_PRINT_Dechancer_copy-Edit_ehkoaq.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430229/tuscany-fall__11_IMG8365-Pano_Dechancer_246x138_copy-Edit_xjlmdm.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430309/tuscany-fall__IMG_8760-Pano_129%D1%8570-200dpi_283-Edit_nvcebs.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430230/tuscany-fall__15_File061-HDR-Pano-207%D1%87110_Print_Dehancer_copy-Edit_nybajl.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430230/tuscany-fall__21_IMG6757-Pano-2-Edit_PRINT_150x241_Dehancer-Edit-2_qex95z.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430235/tuscany-fall__25_IMG_0018-Pano_255x110_PRINT_Dehancer-Edit_chetav.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430233/tuscany-fall__26_IGP2470-146x110_PRINT_Dehancer-gigapixel-standard-scale-2_00x-Edit_ufo2mm.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430294/tuscany-fall__IMG_0281_39%D1%8569-200dpi-Edit_ta2tud.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430261/tuscany-fall__DJI_20241116154958_0002_D-Edit_copy_wfzmbv.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430249/tuscany-fall__DJI_20241123074034_0125_D-Dehancer_copy_xxlrps.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430244/tuscany-fall__645Z7350-Pano-Edit-Edit_copy_vehkdf.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430255/tuscany-fall__AA8B2425-PanoRPP_72%D1%85137-200dpi-Edit_ptc17e.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430293/tuscany-fall__IMG_6586_42%D1%8569-200dpi_156-Edit_akyfei.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430278/tuscany-fall__IMG_0327_Panorama_73x238_200dpi_276-Edit_cnkaz6.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430206/tuscany-fall___IGP3048_Panorama_ret_84%D1%85183-200dpi_251-Edit_copy_iimlup.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430321/tuscany-fall__Pavel_Oskin_1453_127x110_Print_copy_gf9txf.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430312/tuscany-fall__IMG_9184_69%D1%8546-200dpi_164-Edit_wmmpqo.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430309/tuscany-fall__IMGP6211_topaz_146x110_PRINT_Dehancer_copy-Edit_xrxehg.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430200/tuscany-fall___IGP2436-Pano-2_copy_nrghbe.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430316/tuscany-fall__IMGP9514_146x110_PRINT_nz6xcl.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430267/tuscany-fall__DJI_20251110080253_0199_D-Edit_copy_a4ff5b.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430290/tuscany-fall__IMG_0175_65%D1%8533-200dpi_128-Edit_drlbp4.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430284/tuscany-fall__IMG_6549_41%D1%8564-200dpi-Edit_neshyd.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430314/tuscany-fall__IMGP0228-Pano_67x104_200dpi_284-Edit_ihfssd.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430292/tuscany-fall__IMG_6589_38%D1%8561-200dpi_157-Edit_ytrkni.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430273/tuscany-fall__IMG_1631-Pano-Dehancer_copy_bvlmom.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430275/tuscany-fall__FUJI8662-Pano-Dehancer_g8x3v9.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430183/tuscany-fall___IGP1507-Pano-Topaz_174x110_PRINT_DEHANCER-Edit_zq02wq.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430310/tuscany-fall__IMGP4178_152x110_PRINT_Dehancer-Edit_fqyqph.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour11_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769430194/tuscany-fall___IGP2521_atdj1w.avif', 'Val d''Orcia rolling hills with autumn colors'),

   -- Tour 12: japan autumn
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128122/japan_fall_1_IMG3488-Pano-Edit-Cover_2_2_lusnab.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128148/japan_fall_2_FUJI7847-Pano-Edit_copy_l8kecb.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128148/japan_fall_2_FUJI7847-Pano-Edit_copy_l8kecb.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128173/japan_fall_FUJI8019-Dehancer_copy_tbogc6.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128149/japan_fall_5_1827923-Edit_x1heje.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128148/japan_fall_6_PLUM3236_copy_k9j40i.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128142/japan_fall_7_PLUM0520_copy_vk95qr.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128148/japan_fall_8_FUJI6050-HDR-Edit_copy_ye7kjz.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128170/japan_fall_9_FUJI8278-Dehancer_copy_miuk0t.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128157/japan_fall_10_A8B9746_cv8ocl.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128130/japan_fall__IMG2512-Edit_copy_qqrfi9.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128197/japan_fall_FUJI8504-Dehancer_copy_y5ll2z.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128122/japan_fall__1828304-cover_k269sd.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128185/japan_fall_IMG_4886-Edit_copy_anlhrt.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128194/japan_fall_PLUM3970-Dehancer_copy_oh3iv5.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128192/japan_fall_PLUM2027-Edit_copy_i7ycbh.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128165/japan_fall_FUJI7890-Momiji_copy_dy1wn9.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128132/japan_fall__IMG1454_x5kxrx.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128196/japan_fall_PLUM0568-Edit_copy_unm1u6.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128179/japan_fall_FUJI7972-Dehancer_copy_pxd6tl.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128185/japan_fall_FUJI8433-Edit_copy_ayjlkz.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128137/japan_fall_4_FUJI8053-HDR-Edit_copy_r35kjz.avif', 'Val d''Orcia rolling hills with autumn colors'),
   (tour12_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1770128199/japan_fall_PLUM4043-Dehancer_copy_ajvhng.avif', 'Val d''Orcia rolling hills with autumn colors'),

   -- Tour 13: iceland
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777171/iceland_1_IGP4228-Pano_109x162_200dpi_topaz_copy_lt6mdc.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777185/iceland_645Z3212-Edit_bqcuvd.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777216/iceland_645Z6169-HDR-Pano-Dehancer_uaao9y.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777172/iceland_11_IMG8365-Pano_Dechancer_246x138_copy-Edit_copy_q84w7b.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777458/iceland_DJI_20240813205653_0041_D-Pano-2-Clarity_65_Dehancer_75_yellow_50_copy_oecvqz.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777551/iceland_IMGP9746_146x110_PRINT_Dehancer_ppkjrv.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777526/iceland_DJI_20250813053458_0060_D-Pano-Edit_copy_rkgz8n.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777147/iceland__IMG2517-Pano-Edit-Edit_copy_cfvjbw.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777195/iceland_645Z2972_aovm5y.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777196/iceland_645Z4740-Pano_Labsat_Dehancer_copy_altom9.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777355/iceland_AA8B5429_164x110_PRINT_Topaz_Dehancer_rw9svw.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777323/iceland_AA8B0579_lpkgbz.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777131/iceland__A8B9065-Dehancer_copy_hgqkrc.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777561/iceland_P1090263_s42teo.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777582/iceland_P1189383-Pano_107x186_200dpi_topaz_cgfckg.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777448/iceland_DJI_20240814074535_0057_D-HDR_jtttmx.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777334/iceland_AA8B0969_e6rt78.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777310/iceland_AA8B0334-gigapixel_165x110_PRINT_mhmxdt.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777347/iceland_AA8B1225_fm8qkm.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777419/iceland_DJI_20240808195545_0046_D-Pano-Dechancer_copy_j2fyvv.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777333/iceland_AA8B2127_roqsal.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777438/iceland_DJI_20240813092732_0111_D-Pano_copy_l904bc.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777260/iceland_AA8B0282_tswyat.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777394/iceland_big_%D0%9F%D0%B0%D0%BB%D0%B8%D1%82%D1%80%D0%B0-%D0%9B%D0%B5%D0%B4%D0%BE%D0%B2%D0%BE%D0%B8%CC%86-%D0%9B%D0%B0%D0%B3%D1%83%D0%BD%D1%8B.%D0%98%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F.Colours-of-Jolulsarlon.Iceland-TOP10_j0h05m.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777196/iceland_645Z4740-Pano_Labsat_Dehancer_copy_altom9.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777480/iceland_DJI_20250801140159_0081_D-Edit_copy_ekrvwo.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777053/iceland__A8B7963_45x72_200dpi-TOP10_hncp4n.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777518/iceland_Iceland_drone-16-Edit_copy_mghrr1.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777033/iceland__A8B2266_t8lciy.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777448/iceland_DJI_20240811162246_0001_D-Pano-Dehancer_labsat_ortob-142x110_2024_bvnhqx.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777370/iceland_AA8B8808-Pano_115x237_200dpi_pv36kx.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777331/iceland_AA8B1400_b6hqk6.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777304/iceland_AA8B0703_zkshdp.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777360/iceland_AA8B9356_sky_kaggmi.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777563/iceland_IMGP7904GOTOV_u1zhcd.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777493/iceland_DJI_20250801161740_0008_D-Pano-153x110_Dechancer_Rollei_copy_ltcd69.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777143/iceland__IMG3178-Edit_Dehancer_kg2ups.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769776983/iceland__1844568_50x60_200dpi_fj5zat.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777117/iceland__A8B8661_hnr6d4.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777002/iceland__6458662_204x110_PRINT_topaz_Dehancer_y7cdbw.avif', 'Prague Castle autumn foliage at sunrise'),
   (tour13_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769777087/iceland__A8B7555_main_WB-164x110_PRINT_topaz_Dehancer_copy_p3talb.avif', 'Prague Castle autumn foliage at sunrise'),

   -- Tour 14: japan-spring
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429835/japan-spring__P1040001-Edit_imq7un.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429835/japan-spring__P1040001-Edit_imq7un.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429756/japan-spring___IMG1972_ihxist.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429741/japan-spring___IMG1454_ytwzbv.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429820/japan-spring__IMG_7856-Edit_copy_mmguih.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429700/japan-spring___1824960_etegje.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429729/japan-spring___A8B9230_qcqyle.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429814/japan-spring__IMG_7088-Edit_copy_jmjb1w.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429726/japan-spring___A8B8512-Edit_woxvlh.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429749/japan-spring___A8B9923_lgibyy.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429828/japan-spring__P1040398-Edit_x4p5iq.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429804/japan-spring__IMG_4845_l33mxc.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429712/japan-spring___A8B7752_jcd7sv.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429762/japan-spring___IMG2393-Edit_copy_biaipg.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429703/japan-spring___1825037_vzoxgy.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429703/japan-spring___1827029-Pano_lgecpg.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429764/japan-spring___IMG2241_fbgslx.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429825/japan-spring__IMG_8944-Edit_copy_j6ulee.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429741/japan-spring___A8B9292-Pano_kgzfq0.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429811/japan-spring__IMG_5548_cyo3n4.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429729/japan-spring___A8B8673-Edit_okewev.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429725/japan-spring___A8B9101_v3cbqt.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429723/japan-spring___A8B8452-Edit_axgu8c.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429719/japan-spring___A8B8435_m43wcg.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429798/japan-spring___IMG2554_tnec8m.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429703/japan-spring___A8B0764-Edit_copy_vexdrw.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429798/japan-spring___IMG2449_slc8ai.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429725/japan-spring___A8B9136-Edit_zi2sp5.avif', 'Cherry blossoms at Philosopher''s Path Kyoto'),
   (tour14_id, 'https://res.cloudinary.com/dxqcrv4gf/image/upload/v1769429748/japan-spring___IMG1919_oq6gap.avif', 'Cherry blossoms at Philosopher''s Path Kyoto');



-- VIDEOS
INSERT INTO videos (tour_id, url, description)
VALUES
  -- Existing videos for tours 1-2
  (tour1_id, 'https://example.com/tuscany-video1.mp4', 'Tuscany spring photography workshop highlights'),
  (tour2_id, 'https://example.com/morocco-video1.mp4', 'Morocco Sahara desert and imperial cities tour');

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
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour3_id FROM tags WHERE name IN ('festivals', 'portrait', 'culture');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour4_id FROM tags WHERE name IN ('landscape', 'nature', 'adventure');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour5_id FROM tags WHERE name IN ('cherry-blossom', 'temples', 'culture');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour6_id FROM tags WHERE name IN ('sailing', 'islands', 'mediterranean');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour7_id FROM tags WHERE name IN ('coastal', 'villages', 'landscape');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour10_id FROM tags WHERE name IN ('lavender', 'villages', 'summer');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour11_id FROM tags WHERE name IN ('volcanoes', 'coastal', 'islands');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour12_id FROM tags WHERE name IN ('autumn', 'gothic', 'architecture');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour13_id FROM tags WHERE name IN ('highlands', 'castles', 'mountains');
-- INSERT INTO tour_tags (tag_id, tour_id)
-- SELECT id, tour14_id FROM tags WHERE name IN ('harvest', 'vineyards', 'autumn');

-- CATEGORIES
INSERT INTO categories (name) VALUES
  ('Outdoor'), ('Adventure'), ('Cultural'), ('Urban'), ('Food & Wine'), ('Photography'),
  ('Sailing'), ('Festivals'), ('Autumn'), ('Spring'), ('Summer')
ON CONFLICT (name) DO NOTHING;

-- TOUR CATEGORIES
INSERT INTO tour_categories (category_id, tour_id)
SELECT id, tour1_id FROM categories WHERE name IN ('Photography', 'Spring');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour2_id FROM categories WHERE name IN ('Cultural', 'Adventure');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour3_id FROM categories WHERE name IN ('Festivals', 'Photography');

-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour4_id FROM categories WHERE name IN ('Adventure', 'Photography');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour5_id FROM categories WHERE name IN ('Spring', 'Cultural');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour6_id FROM categories WHERE name IN ('Sailing', 'Summer');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour7_id FROM categories WHERE name IN ('Photography', 'Cultural');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour10_id FROM categories WHERE name IN ('Photography', 'Summer');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour11_id FROM categories WHERE name IN ('Adventure', 'Photography');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour12_id FROM categories WHERE name IN ('Autumn', 'Cultural');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour13_id FROM categories WHERE name IN ('Outdoor', 'Adventure');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour14_id FROM categories WHERE name IN ('Autumn', 'Food & Wine');
-- INSERT INTO tour_categories (category_id, tour_id)
-- SELECT id, tour15_id FROM categories WHERE name IN ('Cultural', 'Photography');

-- BOOKINGS
INSERT INTO bookings (id, tour_date_id, user_id, status, participants, total_price)
VALUES
  -- (booking1_id, tour_date1_id, user3_id, 'CONFIRMED', 2, 2500.00),
  -- (booking2_id, tour_date3_id, user4_id, 'PENDING', 1, 180.00),
  -- (booking3_id, tour_date4_id, user7_id, 'CONFIRMED', 3, 1950.00),
  -- (booking4_id, tour_date5_id, user8_id, 'CANCELLED', 2, 3600.00),
  (booking5_id, tour_date5_id, user10_id, 'CONFIRMED', 1, 950.00);

-- PAYMENTS
INSERT INTO payments (booking_id, amount, payment_method, status, transaction_id)
VALUES
  -- (booking1_id, 2500.00, 'CARD', 'COMPLETED', 'TXN123ABC'),
  -- (booking2_id, 180.00, 'PAYPAL', 'PENDING', 'TXN987XYZ'),
  -- (booking3_id, 1950.00, 'BANK_TRANSFER', 'COMPLETED', 'TXN654QWE'),
  -- (booking4_id, 3600.00, 'CARD', 'REFUNDED', 'TXN444RTY'),
  (booking5_id, 950.00, 'CARD', 'COMPLETED', 'TXN999BNM');

-- REVIEWS
INSERT INTO reviews (tour_id, user_id, rating, comment, user_name, link, image)
VALUES
  -- Tour 1:
  (tour1_id, user3_id, 5, 'Absolutely breathtaking views! John was an amazing guide.', '', '', ''),
  (tour1_id, user4_id, 4, 'Great experience, though the hike was more challenging than expected.', '', '', ''),
  (tour1_id, user7_id, 5, 'Best hiking trip of my life. Highly recommend!', '', '', ''),

  -- Tour 2:
  (tour2_id, user3_id, 4, 'Sarah knows so much about NYC history. Learned a lot!', '', '', ''),
  (tour2_id, user10_id, 5, 'Perfect tour for history lovers. Well organized.', '', '', ''),

  -- Tour 3:
  (tour3_id, user4_id, 5, 'Adrenaline rush! The rapids were incredible.', '', '', ''),
  (tour3_id, user7_id, 5, 'Professional guides and top-notch safety equipment.', '', '', ''),
  (tour3_id, user8_id, 4, 'Amazing adventure, but bring waterproof bags for your stuff.', '', '', ''),
  (tour3_id, user10_id, 5, 'Worth every penny. Cant wait to do it again!', '', '', '');

END $$;
