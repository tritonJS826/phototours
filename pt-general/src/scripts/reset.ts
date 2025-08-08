import {DifficultyLevel, PrismaClient, Role} from 'src/generated/prisma';
/* eslint-disable no-console */

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

async function seedDatabase() {
  console.log('🌱 Seeding database...');

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

  await Promise.all([
    prisma.user.create({
      data: {
        email: 'client1@example.com',
        firstName: 'Client',
        lastName: 'One',
        password: 'hashedpassword',
        role: Role.CLIENT,
      },
    }),
    prisma.user.create({
      data: {
        email: 'client2@example.com',
        firstName: 'Client',
        lastName: 'Two',
        password: 'hashedpassword',
        role: Role.CLIENT,
      },
    }),
  ]);

  const guideUser = await prisma.user.create({
    data: {
      email: 'guide@example.com',
      firstName: 'Guide',
      lastName: 'Person',
      password: 'hashedpassword',
      role: Role.GUIDE,
    },
  });

  const guideUser2 = await prisma.user.create({
    data: {
      email: 'secondguide@example.com',
      firstName: 'Second',
      lastName: 'Guide',
      password: 'hashedpassword2', // Лучше сгенерировать хеш настоящего пароля
      role: Role.GUIDE,
    },
  });

  const guide2 = await prisma.guide.create({
    data: {
      userId: guideUser2.id,
      experience: '3 years guiding city tours',
      specializations: ['City', 'Culture'],
    },
  });

  const guide = await prisma.guide.create({
    data: {
      userId: guideUser.id,
      experience: '5 years guiding mountain tours',
      specializations: ['Nature', 'Mountains'],
    },
  });

  const [natureCategory, cityCategory] = categories;
  const [sunsetTag, wildlifeTag] = tags;

  await prisma.tour.create({
    data: {
      title: 'Mountain Adventure',
      description: 'Exciting mountain hiking tour',
      region: 'Alps',
      difficulty: DifficultyLevel.BEGINNER,
      price: 250,
      program: {days: ['Day 1: Arrival', 'Day 2: Hiking']},
      guideId: guide.id,
      categories: {connect: [{id: natureCategory.id}]},
      tags: {connect: [{id: sunsetTag.id}]},
      dates: {
        create: [
          {date: new Date('2025-08-15'), isAvailable: true},
          {date: new Date('2025-09-15'), isAvailable: false},
        ],
      },
    },
  });

  await prisma.tour.create({
    data: {
      title: 'City Exploration',
      description: 'Explore the best parts of the city',
      region: 'Paris',
      difficulty: DifficultyLevel.EXPERIENCED,
      price: 150,
      program: {days: ['Day 1: Museum visit', 'Day 2: City walk']},
      guideId: guide2.id,
      categories: {connect: [{id: cityCategory.id}]},
      tags: {connect: [{id: wildlifeTag.id}]},
      dates: {
        create: [
          {date: new Date('2025-08-20'), isAvailable: true},
          {date: new Date('2025-09-10'), isAvailable: true},
        ],
      },
    },
  });

  console.log('✅ Database has been seeded.');
  await prisma.$disconnect();
}

const EXIT_ERROR_CODE = 1;

seedDatabase().catch(e => {
  console.error(e);
  prisma.$disconnect();
  process.exit(EXIT_ERROR_CODE);
});
