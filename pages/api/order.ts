// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //push order to database
  const order = JSON.parse(req.body) as products[];
  let totalPrice = 0;
  order.map((item) => (totalPrice += item.price));
  const orderDB = await prisma.orders.create({
    data: { total_price: totalPrice, order_date: Date.now(), customer_id: 1 },
  });
  const { order_id } = orderDB;
  order.map((item) =>
    prisma.order_products.create({
      data: { order_id: Number(order_id), product_id: item.product_id },
    })
  );

  res.status(200).json({ message: "He kaydettim tm." });
}
