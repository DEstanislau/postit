import * as Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    req,
  });

  return prismic;
}
