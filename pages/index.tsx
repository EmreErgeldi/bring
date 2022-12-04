import Navbar from "../components/Navbar";
import SliderCard from "../components/MainSlider/SliderCard";
import { prisma } from "../db/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Category from "../components/Categories/Category";
import Promotion from "../components/Promotions/Promotion";
import { useWindowWidth } from "@react-hook/window-size";

export default function Home({ feed }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const windowWidth = useWindowWidth();

  return (
    <div className="w-screen h-screen">
      <Navbar />
      {windowWidth <= 768 && <Promotion />}
      <SliderCard />
      <Category data={feed} />
      {windowWidth > 768 && <Promotion />}
    </div>
  );
}

// index.tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.categories.findMany();
  return {
    props: { feed },
  };
};
