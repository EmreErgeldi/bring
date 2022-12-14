import CategorySection from "../../components/Categories/CategorySection";
import { prisma } from "../../lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { products } from "@prisma/client";

export default function beverages({
  feed,
  product,
  admins,
  customers,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <CategorySection feed={feed} product={product} admins={admins} customers={customers} categories={categories} />
  );
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (isNaN(Number(context.params?.categoryID)) || Number(context.params?.categoryID) > 17) return { notFound: true };

  const feed = await prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  const products = await prisma.products.findMany({ orderBy: { product_id: "asc" } });
  const prodCat = await prisma.product_categories.findMany({
    where: { category_id: Number(context.params?.categoryID) },
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
  const customers = await prisma.customers.findMany();
  const admins = await prisma.admins.findMany();
  const categories = await prisma.categories.findMany();

  return {
    props: { feed, product, admins, customers, categories },
  };
};
