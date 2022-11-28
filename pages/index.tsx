import Navbar from "../components/Navbar";
import Container from "../components/MainSlider/Container";
import SliderCard from "../components/MainSlider/SliderCard";
// pages/index.tsx
import prisma from "../lib/prisma";
import { GetStaticProps } from "next";
import Category from "../components/Categories/Category";

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.categories.findMany();
  console.log(feed);
  return {
    props: { feed },
    revalidate: 10,
  };
};

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <SliderCard />
      <Category />
    </div>
  );
}
