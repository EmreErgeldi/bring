// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const chromeData = JSON.parse(req.body);
  const { checked, ...data } = chromeData;

  const postData = await prisma.products.create({ data });

  const { product_id } = await postData;

  chromeData.checked.forEach(async (element: any) => {
    await prisma.product_categories.create({ data: { product_id, category_id: element } });
  });
  res.status(200).end(`Product ${data.name} created!`);
}
