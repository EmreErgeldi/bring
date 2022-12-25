// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const chromeData = JSON.parse(req.body);
  const { checked, ...data } = chromeData;

  await prisma.products.create({ data });

  const product_id = await prisma.products.findFirst({ where: { name: data.name }, select: { product_id: true } });
  console.log(product_id);

  chromeData.checked.forEach(async (element: any) => {
    await prisma.product_categories.create({ data: { ...product_id!, category_id: element } });
  });
  res.status(200).end(`Product ${data.name} created!`);
}
