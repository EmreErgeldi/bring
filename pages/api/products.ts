// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const chromeData = JSON.parse(req.body);
  const { checked, ...data } = chromeData;

  if (req.method === "POST") {
    const postData = await prisma.products.create({ data });

    const { product_id } = await postData;

    for (let i = 0; i < chromeData.checked.length; i++) {
      await prisma.product_categories.create({ data: { product_id, category_id: chromeData.checked[i] } });
    }
  }

  if (req.method === "PUT") {
    console.log(data);
    await prisma.products.update({ where: { product_id: data.product_id }, data });
  }
  res.status(200).end(`Product ${data.name} created!`);
}
