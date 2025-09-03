import {prisma} from 'src/db/prisma';
import {Router} from 'express';

export const articleRoutes = Router();

const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;
const HTTP_INTERNAL = 500;

const MIN_LIMIT = 1;

articleRoutes.get('/', async (req, res) => {

  const limitRaw = req.query.limit;
  const limitNum = typeof limitRaw === 'string' ? Number(limitRaw) : 0;
  const take = Number.isFinite(limitNum) && limitNum >= MIN_LIMIT ? limitNum : undefined;

  const items = await prisma.article.findMany({
    orderBy: [{featured: 'desc'}, {publishedAt: 'desc'}],
    take,
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      coverUrl: true,
      alt: true,
      author: true,
      featured: true,
      publishedAt: true,
    },
  });

  res.status(HTTP_OK).json(items);

});

articleRoutes.get('/:slug', async (req, res) => {
  try {
    const slug = String(req.params.slug);
    const a = await prisma.article.findUnique({where: {slug}});
    if (!a) {
      return res.status(HTTP_NOT_FOUND).json({error: 'Not found'});
    }
    res.status(HTTP_OK).json(a);
  } catch {
    res.status(HTTP_INTERNAL).json({error: 'Failed to load article'});
  }
});
