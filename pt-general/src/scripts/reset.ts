import {DifficultyLevel, Prisma, PrismaClient, Role} from 'src/generated/prisma';
import {logger} from 'src/utils/logger';
import {faker} from '@faker-js/faker';

const prisma = new PrismaClient();

async function clearDatabase() {
  await prisma.payment.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.review.deleteMany();
  await prisma.tourMaterial.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.video.deleteMany();
  await prisma.tourDate.deleteMany();
  await prisma.tour.deleteMany();
  await prisma.guide.deleteMany();
  await prisma.userProcessedPhoto.deleteMany();
  await prisma.photoDiary.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.promoCode.deleteMany();
}

const DEFAULT_TOUR_DAYS = 3;
const INCLUSIVE_OFFSET = 1;

const START_HOUR_MIN = 9;
const START_HOUR_MAX_OFFSET = 4;
const END_HOUR_MIN = 17;
const END_HOUR_MAX_OFFSET = 3;

const FIRST_DAY_INDEX = 1;

const NUMBER_OF_CLIENTS = 15;
const NUMBER_OF_GUIDES = 5;

const MIN_EXPERIENCE_YEARS = 2;
const MAX_ADDITIONAL_EXPERIENCE_YEARS = 5;

const PRICE_MIN = 1000;
const PRICE_MAX = 5000;

const TOURS_COUNT = 20;
const TOUR_PROGRAM_DAYS = 5;
const DATE_SOON_1 = 30;
const DATE_SOON_2 = 60;
const DATE_AVAILABILITY_PROB = 0.5;

type ProgramDay = {
  day: number;
  title: string;
  description: string;
  photos: string[];
};

type ProgramPayload = {
  days: ProgramDay[];
  included: string[];
  activities: string[];
};

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomPrice(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + INCLUSIVE_OFFSET)) + min;
}

function generateProgram(daysCount = DEFAULT_TOUR_DAYS): ProgramPayload {
  const activities = [
    'mountain hiking',
    'historical site tour',
    'kayaking',
    'local market visit',
    'cultural workshop',
    'sunset photoshoot',
    'city bike tour',
    'local cuisine tasting',
  ];

  const days: ProgramDay[] = [];

  for (let i = FIRST_DAY_INDEX; i <= daysCount; i++) {
    const startHour = START_HOUR_MIN + Math.floor(Math.random() * START_HOUR_MAX_OFFSET);
    const endHour = END_HOUR_MIN + Math.floor(Math.random() * END_HOUR_MAX_OFFSET);
    const time = `${startHour}:00 - ${endHour}:00`;

    days.push({
      day: i,
      title: `Day ${i}`,
      description: `${getRandomItem(activities)} (${time})`,
      photos: [],
    });
  }

  return {
    days,
    included: ['Guide', 'Transportation'],
    activities: ['Photo spots', 'Local food'],
  };
}

function capitalizeFirstLetter(str: string) {
  const FIRST_CHAR_INDEX = 0;
  const SECOND_CHAR_INDEX = 1;

  return str.charAt(FIRST_CHAR_INDEX).toUpperCase() + str.slice(SECOND_CHAR_INDEX);
}

async function seedDatabase() {
  logger.info('Seeding database...');

  await clearDatabase();

  const categories = await Promise.all([
    prisma.category.create({data: {name: 'Nature'}}),
    prisma.category.create({data: {name: 'City'}}),
    prisma.category.create({data: {name: 'Culture'}}),
    prisma.category.create({data: {name: 'Adventure'}}),
    prisma.category.create({data: {name: 'Photography'}}),
  ]);

  const tags = await Promise.all([
    prisma.tag.create({data: {name: 'Sunset'}}),
    prisma.tag.create({data: {name: 'Wildlife'}}),
    prisma.tag.create({data: {name: 'Culture'}}),
    prisma.tag.create({data: {name: 'Adventure'}}),
    prisma.tag.create({data: {name: 'Photography'}}),
  ]);

  const clientPromises: Promise<unknown>[] = [];
  for (let i = 0; i < NUMBER_OF_CLIENTS; i++) {
    clientPromises.push(
      prisma.user.create({
        data: {
          email: faker.internet.email(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          password: 'hashedpassword',
          role: Role.CLIENT,
        },
      }),
    );
  }
  await Promise.all(clientPromises);

  const guideUsers: Array<{id: number}> = [];
  for (let i = 0; i < NUMBER_OF_GUIDES; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: 'hashedpassword',
        role: Role.GUIDE,
      },
    });
    guideUsers.push(user);
  }

  const guides: Array<{id: number}> = [];
  for (const user of guideUsers) {
    const guide = await prisma.guide.create({
      data: {
        userId: user.id,
        experience: `${MIN_EXPERIENCE_YEARS + Math.floor(Math.random() * MAX_ADDITIONAL_EXPERIENCE_YEARS)} years guiding tours`,
        specializations: [getRandomItem(categories).name, getRandomItem(categories).name],
      },
    });
    guides.push(guide);
  }

  const difficultyLevels = [
    DifficultyLevel.BEGINNER,
    DifficultyLevel.PRO,
    DifficultyLevel.EXPERIENCED,
  ];

  const tourPromises: Promise<unknown>[] = [];
  for (let i = 0; i < TOURS_COUNT; i++) {
    const guide = getRandomItem(guides);
    const category = getRandomItem(categories);
    const tag = getRandomItem(tags);

    const adjective = capitalizeFirstLetter(faker.word.adjective({length: {min: 5, max: 10}}));
    const titleTemplates = [
      `${adjective} ${category.name}`,
      `${adjective} ${category.name} Journey`,
      `${adjective} ${category.name} Experience`,
    ];

    const programPayload = generateProgram(TOUR_PROGRAM_DAYS) as unknown as Prisma.InputJsonValue;

    tourPromises.push(
      prisma.tour.create({
        data: {
          slug: faker.lorem.slug(),
          title: getRandomItem(titleTemplates),
          description: faker.lorem.paragraphs({min: 2, max: 4}),
          price: getRandomPrice(PRICE_MIN, PRICE_MAX),
          difficulty: getRandomItem(difficultyLevels),
          startLocation: faker.location.city(),
          endLocation: faker.location.city(),
          coverUrl: faker.image.urlPicsumPhotos(),
          program: programPayload,
          guideId: guide.id,
          categories: {connect: [{id: category.id}]},
          tags: {connect: [{id: tag.id}]},
          dates: {
            create: [
              {date: faker.date.soon({days: DATE_SOON_1}), isAvailable: true},
              {date: faker.date.soon({days: DATE_SOON_2}), isAvailable: Math.random() > DATE_AVAILABILITY_PROB},
            ],
          },
        },
      }),
    );
  }

  await Promise.all(tourPromises);

  logger.info('Database has been seeded with realistic tours!');
  await prisma.$disconnect();
}

const EXIT_ERROR_CODE = 1;

seedDatabase().catch((e) => {
  logger.error('Error during database reset:', e);
  prisma.$disconnect();
  process.exit(EXIT_ERROR_CODE);
});
