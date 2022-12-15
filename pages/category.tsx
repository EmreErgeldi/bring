import CategoryNavbar from "../components/Categories/CategoryNavbar";
import Navbar from "../components/Navbar";
import Promotion from "../components/Promotions/Promotion";
import { prisma } from "../db/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

export default function category({ feed }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="bg-slate-50 h-[10000px] ">
      <Navbar />
      <header className="h-[75px] bg-brand-secondary w-screen sticky top-11">
        <div className="max-w-[1232px] h-full mx-auto flex item-center">
          <Image src="/images/bring-hover.svg" width={60} height={27} alt="bring logo" />
        </div>
      </header>
      <Promotion />

      <div className="max-w-[1232px] mx-auto sticky top-[128px]">
        <CategoryNavbar data={feed} />
      </div>
    </div>
  );
}

// category.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany();
  return {
    props: { feed },
  };
};
