import CategoryNavbar from "../components/Categories/CategoryNavbar";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../db/prisma";
import Header from "../components/ui/Header";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotions/Promotion";
import CategoryTable from "../components/Categories/CategoryTable";
import Basket from "../components/Categories/Basket";

export default function categories({ feed, beverages }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="main-layout">
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
            <CategoryTable data={beverages} />
          </div>
          <div className="max-w-[300px] sticky overflow-y-auto lg:top-32">
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

// category.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany();
  const beverages = await prisma.products.findMany({ take: 18 });
  const fruit = await prisma.products.findMany({ skip: 18, take: 8 });
  return {
    props: { feed, beverages, fruit },
  };
};
