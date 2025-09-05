/* eslint-disable max-len */
import 'dotenv/config';
import {PrismaClient} from 'src/generated/prisma';
import {v2 as cloudinary} from 'cloudinary';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const prisma = new PrismaClient();
const EXIT_OK = 0;
const EXIT_ERR = 1;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

function mustHaveCloudinary(): void {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Cloudinary is not configured');
  }
}

function here(...p: string[]): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return path.join(__dirname, '..', 'assets', 'articles', ...p);
}

async function uploadCover(localName: string): Promise<string> {
  if (/^https?:\/\//i.test(localName)) {
    return localName;
  }
  mustHaveCloudinary();
  const abs = path.isAbsolute(localName) ? localName : here(localName);
  if (!fs.existsSync(abs)) {
    throw new Error(`Local cover not found: ${abs}`);
  }
  const folder = process.env.CLOUDINARY_UPLOAD_FOLDER || 'phototours';
  const res = await cloudinary.uploader.upload(abs, {
    folder: `${folder}/articles`,
    resource_type: 'image',
    overwrite: true,
  });

  return res.secure_url;
}

async function main() {
  const now = new Date();

  const seed = [
    {
      slug: 'aurora-guide-featured',
      title: 'The Ultimate Guide to Photographing the Aurora in Iceland',
      excerpt:
        'There is nothing quite as enigmatic as the slow-dance of the Aurora Borealis (more commonly known as the Northern Lights), quietly undulating across the night sky. For many photographers, witnessing these ethereal colours in the atmosphere is quite literally a dream come true.',
      coverLocal: 'first.avif',
      alt: 'Northern Lights over Icelandic landscape at dusk',
      author: 'Editor',
      featured: true,
      content:
        '<p>There is nothing quite as enigmatic as the slow-dance of the Aurora Borealis, quietly undulating across the night sky. This guide covers when to go, how to read forecasts, where to escape light pollution, and which camera settings consistently work in Icelandic conditions. Pack layers, a sturdy tripod, a fast wide-angle lens, spare batteries, and patience — then let the sky do the rest.</p>',
      publishedAt: now,
    },
    {
      slug: 'aurora-guide-card-1',
      title: 'The Ultimate Guide to Photographing the Aurora in Iceland',
      excerpt:
        'There is nothing quite as enigmatic as the slow-dance of the Aurora Borealis (more commonly known as the Northern Lights), quietly undulating across the night sky. For many photographers, witnessing these ethereal colours in the atmosphere is quite literally a dream come true.',
      coverLocal: 'second.avif',
      alt: 'Golden hills under evening sky',
      author: 'Editor',
      featured: false,
      content:
        '<p>Plan around darkness and clear skies. Use a fast aperture (f/1.8–f/2.8), ISO 1600–3200, and 4–12s exposures. Focus manually at infinity and bracket if the aurora brightens. Compose with foreground shapes — ridgelines, snow, or water — to give scale and depth.</p>',
      publishedAt: now,
    },
    {
      slug: 'aurora-guide-card-2',
      title: 'The Ultimate Guide to Photographing the Aurora in Iceland',
      excerpt:
        'There is nothing quite as enigmatic as the slow-dance of the Aurora Borealis (more commonly known as the Northern Lights), quietly undulating across the night sky. For many photographers, witnessing these ethereal colours in the atmosphere is quite literally a dream come true.',
      coverLocal: 'third.avif',
      alt: 'Dunes and pastel sky at sunrise',
      author: 'Editor',
      featured: false,
      content:
        '<p>Scout locations by day, then return after dark. Keep your histogram in check, shoot RAW, and protect your gear from wind and salt. A headlamp with red mode preserves night vision while you fine-tune focus and framing.</p>',
      publishedAt: now,
    },
    {
      slug: 'aurora-guide-card-3',
      title: 'The Ultimate Guide to Photographing the Aurora in Iceland',
      excerpt:
        'There is nothing quite as enigmatic as the slow-dance of the Aurora Borealis (more commonly known as the Northern Lights), quietly undulating across the night sky. For many photographers, witnessing these ethereal colours in the atmosphere is quite literally a dream come true.',
      coverLocal: 'fourth.avif',
      alt: 'Soft dunes with cool blue tones',
      author: 'Editor',
      featured: false,
      content:
        '<p>Dress for Arctic comfort: insulated boots, windproof layers, hand warmers, and thin liner gloves for operating the camera. Keep batteries warm, use lens hoods to reduce flare, and stay flexible — aurora strength can change by the minute.</p>',
      publishedAt: now,
    },
  ] as const;

  await prisma.article.deleteMany({});

  for (const it of seed) {
    const coverUrl = await uploadCover(it.coverLocal);
    await prisma.article.create({
      data: {
        slug: it.slug,
        title: it.title,
        excerpt: it.excerpt,
        content: it.content,
        coverUrl,
        alt: it.alt,
        author: it.author,
        featured: it.featured,
        publishedAt: it.publishedAt,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    process.exit(EXIT_OK);
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(EXIT_ERR);
  });
