import CategorySection from "../../components/Categories/CategorySection";
import { prisma } from "../../db/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { products } from "@prisma/client";

export default function beverages({ feed, product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <CategorySection feed={feed} product={product} />;
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  const products = await prisma.products.findMany({ orderBy: { product_id: "asc" } });
  const prodCat = await prisma.product_categories.findMany({
    where: { category_id: 2 },
    orderBy: { product_id: "asc" },
  });
  const product: products[] = [];
  prodCat.forEach((item, i) => {
    products.forEach((item2, i2) => {
      if (item.product_id == item2.product_id) {
        product.push(item2);
      }
    });
  });
  return {
    props: { feed, product },
  };
};
