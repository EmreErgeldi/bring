import CategoryNavbar from "../../components/Categories/CategoryNavbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../lib/prisma";
import Header from "../../components/ui/Header";
import Navbar from "../../components/Navbar";
import Promotion from "../../components/Promotions/Promotion";
import CategoryTable from "../../components/Categories/CategoryTable";
import Basket from "../../components/Categories/Basket";
import { products } from "@prisma/client";

export default function categories({
  feed,
  product,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="main-layout bg-gray-50">
      <div className="lg:sticky lg:top-0 lg:z-20">
        <Navbar />
        <Header />
      </div>
      <div className="flex flex-col items-stretch max-w-[1232px] mx-auto">
        <section>
          <Promotion />
        </section>
        <div className="flex md:flex-row justify-between relative">
          <div className="lg:top-32 top-[128px] flex flex-col items-start max-w-[240px] sticky">
            <CategoryNavbar data={feed} />
          </div>
          <div className="md:sticky md:top-2 md:self-start flex flex-col items-start">
            <CategoryTable data={product} categories={categories} />
          </div>
          <div className="max-w-[300px] sticky overflow-y-auto lg:top-32">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  const products = await prisma.products.findMany({ orderBy: { product_id: "asc" } });
  const categories = await prisma.categories.findMany();
  const prodCat = await prisma.product_categories.findMany({
    where: { category_id: 1 },
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
    props: { feed, product, categories },
  };
};
