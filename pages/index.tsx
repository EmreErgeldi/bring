import Navbar from "../components/Navbar";
import SliderCard from "../components/MainSlider/SliderCard";
import { prisma } from "../lib/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Category from "../components/Categories/Category";
import Promotion from "../components/Promotions/Promotion";
import MobileApp from "../components/MobileApp/MobileApp";
import Cards from "../components/Cards/Cards";

export default function Home({ feed, customers, admins }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const handleProduct = (product: object) => {
    console.log(product);
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });
  };
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar admins={admins} customers={customers} />
      <SliderCard />
      <Category data={feed} handleProduct={handleProduct} />
      <div className=" bg-gray-100">
        <Promotion />
        <div className="container mx-auto grid gap-y-6 pt-8 max-w-[1232px]">
          {/* <Favorites /> */}
          <MobileApp />
          <Cards />
        </div>
      </div>
    </div>
  );
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany({ orderBy: { category_id: "asc" } });
  const customers = await prisma.customers.findMany();
  const categories = await prisma.categories.findMany();
  const admins = await prisma.admins.findMany();
  let array: object[] = [];
  categories.forEach(async (item, i) => {
    const avg = (await prisma.$queryRaw`SELECT AVG(products.price)
  FROM products
  INNER JOIN product_categories ON products.product_id = product_categories.product_id
  WHERE product_categories.category_id = ${item.category_id}`) as object;
    array.push(avg);
    console.log(array);
  });
  return {
    props: { feed, customers, admins },
  };
};
