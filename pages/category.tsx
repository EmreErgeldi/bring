import CategoryNavbar from "../components/Categories/CategoryNavbar";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotions/Promotion";
import { prisma } from "../db/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import CategoryTable from "../components/Categories/CategoryTable";

export default function category({ feed, products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-slate-50 h-[10000px] relative">
      <div className="sticky">
        <Navbar />
        <header className="h-[75px] bg-brand-secondary w-screen top-11">
          <div className="max-w-[1232px] h-full mx-auto flex item-center">
            <Image src="/images/bring-hover.svg" width={60} height={27} alt="bring logo" />
          </div>
        </header>
        <Promotion />
      </div>

      <div className="max-w-[1232px] mx-auto top-[128px] flex">
        <div className="sticky">
          <CategoryNavbar data={feed} />
        </div>

        <CategoryTable data={products} />
      </div>
    </div>
  );
}

// category.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany();
  const products = await prisma.products.findMany();
  return {
    props: { feed, products },
  };
};
