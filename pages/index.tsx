import Navbar from "../components/Navbar";
import Container from "../components/MainSlider/Container";
import SliderCard from "../components/MainSlider/SliderCard";
// pages/index.tsx
import { prisma } from "../db/prisma";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import Category from "../components/Categories/Category";

export default function Home({
  feed,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <SliderCard />
      <Category data={feed} />
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
